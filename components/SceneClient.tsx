"use client";

import dynamic from "next/dynamic";
const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center">
      <div className="text-brown-red animate-pulse">Loading 3D Model...</div>
    </div>
  ),
});

export default function SceneClient() {
  return <Scene />;
}
