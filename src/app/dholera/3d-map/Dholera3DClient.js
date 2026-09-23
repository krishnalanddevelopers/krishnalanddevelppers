"use client";

import dynamic from "next/dynamic";

// CesiumJS needs the browser (WebGL, window), so the viewer is never server-rendered.
const Dholera3DViewer = dynamic(() => import("@/components/sections/dholera3d/Dholera3DViewer"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full flex items-center justify-center bg-[#f4f7fb] text-[#525252] text-sm"
      style={{ height: "calc(100dvh - var(--header-h))" }}
    >
      Loading 3D map…
    </div>
  ),
});

export default function Dholera3DClient({ initialView }) {
  return <Dholera3DViewer initialView={initialView} />;
}
