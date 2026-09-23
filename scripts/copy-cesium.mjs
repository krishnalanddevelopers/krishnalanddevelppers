// Copies CesiumJS runtime files (web workers, images, third-party wasm, widget CSS assets) into
// public/cesium so the 3D Dholera map can load them from CESIUM_BASE_URL = "/cesium/".
// Runs automatically before `npm run dev` and `npm run build`.
import fs from "node:fs";
import path from "node:path";

const source = path.resolve("node_modules/cesium/Build/Cesium");
const target = path.resolve("public/cesium");
const version = JSON.parse(fs.readFileSync(path.resolve("node_modules/cesium/package.json"), "utf8")).version;
const stamp = path.join(target, ".version");

if (fs.existsSync(stamp) && fs.readFileSync(stamp, "utf8") === version) {
  process.exit(0);
}

fs.rmSync(target, { recursive: true, force: true });
for (const dir of ["Workers", "Assets", "ThirdParty", "Widgets"]) {
  fs.cpSync(path.join(source, dir), path.join(target, dir), { recursive: true });
}
fs.writeFileSync(stamp, version);
console.log(`Copied Cesium ${version} static files to public/cesium`);
