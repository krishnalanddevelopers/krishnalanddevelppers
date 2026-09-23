// Stand-in for @spz-loader/core, which Cesium bundles for Gaussian-splat (.spz) models.
// Its inline WASM template string is mangled by the production minifier (`\x00` + "0" becomes
// the illegal escape `\00`), breaking the whole Cesium chunk. The Dholera map never loads .spz.
function unsupported() {
  throw new Error("SPZ (Gaussian splat) models are not supported on this site.");
}

export const loadSpz = unsupported;
export const loadSpzFromUrl = unsupported;
