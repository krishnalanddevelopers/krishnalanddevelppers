"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "./dholera-3d.css";

// Cesium loads its workers and assets from here (copied into public/ by scripts/copy-cesium.mjs).
window.CESIUM_BASE_URL = "/cesium/";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const HAS_API_KEY = Boolean(API_KEY);
const KMZ_URL = "/dholera.kmz";
const HOME = { lon: 72.19, lat: 22.24 };

const VIEW_MODES = [
  { id: "2d", label: "2D Map" },
  { id: "3d-satellite", label: "3D Satellite" },
  { id: "3d-photo", label: "3D Photorealistic" },
];

const FOLDER_NAMES = [
  "TP Scheme Boundary",
  "TP Split Boundary",
  "Expressway Alignment",
  "REVISED_DSIR_DEVELOPMENT_PLAN",
  "DSIR Boundary",
];

const folderLabel = {
  "TP Scheme Boundary": "TP Schemes",
  "TP Split Boundary": "TP Splits",
  "Expressway Alignment": "Expressway",
  REVISED_DSIR_DEVELOPMENT_PLAN: "Development Plan",
  "DSIR Boundary": "DSIR Boundary",
};

function getRootParent(entity) {
  let current = entity;
  let last = entity;
  while (current?.parent) {
    last = current.parent;
    current = current.parent;
  }
  return last;
}

function propertyValue(value) {
  if (value == null) return "";
  try {
    if (typeof value?.getValue === "function") return value.getValue(Cesium.JulianDate.now());
  } catch {
    // Ignore dynamic-property read errors.
  }
  return value;
}

function getEntityText(entity) {
  const name = propertyValue(entity?.name) || "";
  const folder = propertyValue(getRootParent(entity)?.name) || "";
  return `${name} ${folder}`.toLowerCase();
}

// Ground position under a screen pixel, in any scene mode.
function pickCartographic(viewer, windowPosition) {
  const { scene } = viewer;
  if (scene.mode === Cesium.SceneMode.SCENE3D && scene.pickPositionSupported) {
    const position = scene.pickPosition(windowPosition);
    if (Cesium.defined(position)) return Cesium.Cartographic.fromCartesian(position);
  }
  const position = viewer.camera.pickEllipsoid(windowPosition, scene.ellipsoid);
  return position ? Cesium.Cartographic.fromCartesian(position) : undefined;
}

function getViewCenter(viewer) {
  const { canvas } = viewer.scene;
  return pickCartographic(viewer, new Cesium.Cartesian2(canvas.clientWidth / 2, canvas.clientHeight / 2));
}

async function createBaseLayers() {
  if (HAS_API_KEY) {
    try {
      const [road, satellite] = await Promise.all([
        Cesium.Google2DImageryProvider.fromUrl({ key: API_KEY, mapType: "roadmap" }),
        Cesium.Google2DImageryProvider.fromUrl({ key: API_KEY, mapType: "satellite" }),
      ]);
      return { road, satellite, source: "Google Maps" };
    } catch (error) {
      console.warn("Google 2D tiles unavailable, using free imagery instead.", error);
    }
  }

  return {
    road: new Cesium.OpenStreetMapImageryProvider({ url: "https://tile.openstreetmap.org/" }),
    satellite: new Cesium.UrlTemplateImageryProvider({
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      credit: "Imagery © Esri, Maxar, Earthstar Geographics",
      maximumLevel: 19,
    }),
    source: "OpenStreetMap / Esri",
  };
}

export default function Dholera3DViewer({ initialView = "2d" }) {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const folderEntitiesRef = useRef(new Map());
  const baseRef = useRef({ road: null, satellite: null, tileset: null });
  const viewModeRef = useRef("2d");

  const [status, setStatus] = useState("Loading map…");
  const [viewMode, setViewMode] = useState("2d");
  const [photoStatus, setPhotoStatus] = useState(HAS_API_KEY ? "loading" : "no-key");
  const [search, setSearch] = useState("");
  const [entities, setEntities] = useState([]);
  const [selected, setSelected] = useState(null);
  const [layers, setLayers] = useState(() =>
    Object.fromEntries(FOLDER_NAMES.map((name) => [name, true])),
  );

  function applyBaseLayers(viewer, mode) {
    const { road, satellite, tileset } = baseRef.current;
    if (road) road.show = mode === "2d";
    if (satellite) satellite.show = mode === "3d-satellite";
    if (tileset) tileset.show = mode === "3d-photo";
    viewer.scene.globe.show = mode !== "3d-photo";
    viewer.scene.requestRender();
  }

  // Switch between the 2D map and the two 3D views. `focus` is the ground point to look at;
  // when omitted, the current view centre is kept.
  function changeView(nextMode, focus, { range } = {}) {
    const viewer = viewerRef.current;
    if (!viewer || viewer.isDestroyed()) return;
    if (nextMode === "3d-photo" && !baseRef.current.tileset) return;

    const { scene, camera } = viewer;
    const previousMode = viewModeRef.current;
    const target = focus ?? getViewCenter(viewer) ?? Cesium.Cartographic.fromDegrees(HOME.lon, HOME.lat);
    const currentHeight = camera.positionCartographic.height;

    viewModeRef.current = nextMode;
    setViewMode(nextMode);

    const finish = () => {
      applyBaseLayers(viewer, nextMode);

      if (nextMode === "2d") {
        camera.flyTo({
          destination: Cesium.Cartesian3.fromRadians(
            target.longitude,
            target.latitude,
            Cesium.Math.clamp(currentHeight * 2.5, 3000, 60000),
          ),
          duration: 0.8,
        });
        return;
      }

      // Moving between the two 3D views keeps the camera where it is.
      if (previousMode !== "2d" && !focus) return;

      camera.flyToBoundingSphere(new Cesium.BoundingSphere(Cesium.Cartographic.toCartesian(target), 0), {
        offset: new Cesium.HeadingPitchRange(
          0,
          Cesium.Math.toRadians(-35),
          range ?? Cesium.Math.clamp(currentHeight * 0.6, 800, 40000),
        ),
        duration: 1.8,
      });
    };

    const sceneMode = nextMode === "2d" ? Cesium.SceneMode.SCENE2D : Cesium.SceneMode.SCENE3D;
    if (scene.mode === sceneMode) {
      finish();
      return;
    }
    const removeListener = scene.morphComplete.addEventListener(() => {
      removeListener();
      finish();
    });
    if (sceneMode === Cesium.SceneMode.SCENE2D) scene.morphTo2D(0);
    else scene.morphTo3D(0);
  }

  const changeViewRef = useRef(changeView);
  useEffect(() => {
    changeViewRef.current = changeView;
  });

  useEffect(() => {
    let destroyed = false;
    let viewer;
    let removeSelectionListener;
    let clickHandler;

    async function initialize() {
      if (!containerRef.current) return;

      try {
        viewer = new Cesium.Viewer(containerRef.current, {
          animation: false,
          timeline: false,
          baseLayerPicker: false,
          geocoder: false,
          homeButton: false,
          navigationHelpButton: false,
          sceneModePicker: false,
          fullscreenButton: true,
          infoBox: false,
          selectionIndicator: true,
          requestRenderMode: true,
          baseLayer: false,
          sceneMode: Cesium.SceneMode.SCENE2D,
          mapMode2D: Cesium.MapMode2D.ROTATE,
        });

        viewerRef.current = viewer;
        viewer.scene.backgroundColor = Cesium.Color.BLACK;
        viewer.camera.setView({
          destination: Cesium.Cartesian3.fromDegrees(HOME.lon, HOME.lat, 45000),
        });

        const base = await createBaseLayers();
        if (destroyed) return;
        baseRef.current.road = viewer.imageryLayers.addImageryProvider(base.road);
        baseRef.current.satellite = viewer.imageryLayers.addImageryProvider(base.satellite);
        applyBaseLayers(viewer, viewModeRef.current);

        const dataSource = await Cesium.KmlDataSource.load(KMZ_URL, {
          camera: viewer.camera,
          canvas: viewer.scene.canvas,
          clampToGround: true,
        });

        if (destroyed) return;
        viewer.dataSources.add(dataSource);

        const allEntities = dataSource.entities.values.filter((entity) => entity.name);
        setEntities(allEntities);

        const folderMap = new Map();
        for (const entity of allEntities) {
          const root = getRootParent(entity);
          const rootName = propertyValue(root?.name);
          if (FOLDER_NAMES.includes(rootName)) folderMap.set(rootName, root);
        }
        folderEntitiesRef.current = folderMap;

        removeSelectionListener = viewer.selectedEntityChanged.addEventListener((entity) => {
          if (!entity) {
            setSelected(null);
            return;
          }

          const root = getRootParent(entity);
          setSelected({
            id: entity.id,
            name: propertyValue(entity.name) || "Selected feature",
            folder: propertyValue(root?.name) || "Dholera project",
            description: propertyValue(entity.description) || "",
          });
        });

        // Clicking anywhere on the 2D map opens the 3D view at that spot.
        clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
        clickHandler.setInputAction((click) => {
          if (viewModeRef.current !== "2d") return;
          const target = pickCartographic(viewer, click.position);
          if (!target) return;
          const mode3d = baseRef.current.tileset ? "3d-photo" : "3d-satellite";
          changeViewRef.current(mode3d, target, { range: 1500 });
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

        setStatus(`${allEntities.length} KMZ features loaded · ${base.source}`);

        if (initialView !== "2d") {
          changeViewRef.current("3d-satellite", Cesium.Cartographic.fromDegrees(HOME.lon, HOME.lat), {
            range: 30000,
          });
        }

        if (!HAS_API_KEY) return;
        try {
          const tileset = await Cesium.Cesium3DTileset.fromUrl(
            `https://tile.googleapis.com/v1/3dtiles/root.json?key=${encodeURIComponent(API_KEY)}`,
            {
              showCreditsOnScreen: true,
              skipLevelOfDetail: true,
              dynamicScreenSpaceError: true,
            },
          );
          if (destroyed) return;
          baseRef.current.tileset = viewer.scene.primitives.add(tileset);
          applyBaseLayers(viewer, viewModeRef.current);
          setPhotoStatus("ready");
          // Opened straight into 3D: upgrade to photorealistic once Google's tiles are ready.
          if (initialView !== "2d" && viewModeRef.current === "3d-satellite") {
            changeViewRef.current("3d-photo");
          }
        } catch (error) {
          console.error(error);
          setPhotoStatus("error");
        }
      } catch (error) {
        console.error(error);
        setStatus(`Map failed to load: ${error?.message || error}`);
      }
    }

    initialize();

    return () => {
      destroyed = true;
      if (removeSelectionListener) removeSelectionListener();
      if (clickHandler) clickHandler.destroy();
      if (viewer && !viewer.isDestroyed()) viewer.destroy();
      viewerRef.current = null;
      folderEntitiesRef.current = new Map();
      baseRef.current = { road: null, satellite: null, tileset: null };
    };
    // Initialize only once. Layer state is applied by a separate effect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    for (const [folderName, folderEntity] of folderEntitiesRef.current.entries()) {
      folderEntity.show = layers[folderName] !== false;
    }
    viewerRef.current?.scene.requestRender();
  }, [layers, entities]);

  const results = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return [];
    return entities.filter((entity) => getEntityText(entity).includes(q)).slice(0, 40);
  }, [entities, search]);

  function flyToEntity(entity) {
    const viewer = viewerRef.current;
    if (!viewer || !entity) return;

    viewer.selectedEntity = entity;
    viewer.flyTo(entity, {
      duration: 1.2,
      offset: new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-55), 1500),
    });
  }

  function goHome() {
    const camera = viewerRef.current?.camera;
    if (!camera) return;

    if (viewModeRef.current === "2d") {
      camera.flyTo({ destination: Cesium.Cartesian3.fromDegrees(HOME.lon, HOME.lat, 45000), duration: 1.3 });
      return;
    }
    camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(HOME.lon, HOME.lat - 0.16, 22000),
      orientation: { heading: 0, pitch: Cesium.Math.toRadians(-45), roll: 0 },
      duration: 1.3,
    });
  }

  function toggleLayer(folderName) {
    setLayers((current) => ({ ...current, [folderName]: !current[folderName] }));
  }

  const photoHint = {
    "no-key": "Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to .env.local to enable",
    loading: "Loading Google 3D tiles…",
    error: "Google 3D tiles failed to load (check API key / Map Tiles API)",
  }[photoStatus];

  return (
    <div className="d3d">
      <aside className="d3d-sidebar">
        <div className="d3d-brand">
          <div className="d3d-brand-icon">D</div>
          <div>
            <div className="d3d-brand-title">Dholera 3D</div>
            <div className="d3d-brand-subtitle">
              Development Plan Explorer · <Link href="/dholera" className="underline">Back</Link>
            </div>
          </div>
        </div>

        <div className="d3d-search">
          <span>⌕</span>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search TP Scheme, TP 5A, 2B-1…"
          />
          {search && (
            <button type="button" className="d3d-clear" onClick={() => setSearch("")} aria-label="Clear search">
              ×
            </button>
          )}
        </div>

        {search && (
          <div className="d3d-results">
            {results.length === 0 ? (
              <div className="d3d-empty">No matching features.</div>
            ) : (
              results.map((entity) => (
                <button type="button" className="d3d-result" key={entity.id} onClick={() => flyToEntity(entity)}>
                  <strong>{propertyValue(entity.name)}</strong>
                  <span>{propertyValue(getRootParent(entity)?.name) || "Dholera"}</span>
                </button>
              ))
            )}
          </div>
        )}

        <section className="d3d-section">
          <div className="d3d-section-title">MAP LAYERS</div>
          {FOLDER_NAMES.map((folderName) => (
            <label className="d3d-layer" key={folderName}>
              <input
                type="checkbox"
                checked={layers[folderName] !== false}
                onChange={() => toggleLayer(folderName)}
              />
              <span className="d3d-layer-dot" />
              <span>{folderLabel[folderName]}</span>
            </label>
          ))}
        </section>

        <section className="d3d-section">
          <div className="d3d-section-title">PROJECT</div>
          <p>
            Interactive 3D visualization of the Dholera SIR development plan, including TP schemes,
            TP splits, expressway alignment and development-plan boundaries.
          </p>
        </section>

        <div className="d3d-footer">
          <span className="d3d-status-dot" />
          <span>{status}</span>
        </div>
      </aside>

      <div className="d3d-map">
        <div ref={containerRef} className="d3d-canvas" />

        <div className="d3d-panel d3d-views" role="tablist" aria-label="Map view">
          {VIEW_MODES.map((mode) => {
            const disabled = mode.id === "3d-photo" && photoStatus !== "ready";
            return (
              <button
                type="button"
                key={mode.id}
                role="tab"
                aria-selected={viewMode === mode.id}
                className={viewMode === mode.id ? "active" : ""}
                disabled={disabled}
                title={disabled ? photoHint : undefined}
                onClick={() => changeView(mode.id)}
              >
                {mode.label}
              </button>
            );
          })}
        </div>

        <div className="d3d-panel d3d-tools">
          <button type="button" onClick={goHome}>⌂ Home</button>
          <button type="button" onClick={() => viewerRef.current?.camera.zoomIn(1000)} aria-label="Zoom in">
            +
          </button>
          <button type="button" onClick={() => viewerRef.current?.camera.zoomOut(1000)} aria-label="Zoom out">
            −
          </button>
        </div>

        {selected && (
          <div className="d3d-card">
            <button
              type="button"
              className="d3d-card-close"
              onClick={() => {
                viewerRef.current.selectedEntity = undefined;
              }}
              aria-label="Close"
            >
              ×
            </button>
            <div className="d3d-card-kicker">{selected.folder}</div>
            <h2>{selected.name}</h2>
            {selected.description ? (
              <div className="d3d-card-description" dangerouslySetInnerHTML={{ __html: selected.description }} />
            ) : (
              <p>Click another feature to inspect its details.</p>
            )}
          </div>
        )}

        <div className="d3d-hint">
          {viewMode === "2d"
            ? "Click anywhere on the map to open it in 3D · Scroll to zoom"
            : "Drag to pan · Scroll to zoom · Ctrl + drag to rotate"}
        </div>
      </div>
    </div>
  );
}
