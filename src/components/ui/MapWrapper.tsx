"use client";

import dynamic from "next/dynamic";
import { type ComponentProps } from "react";
import InteractiveMap from "./InteractiveMap";

function MapSkeleton() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl bg-steel-100 animate-pulse">
      <div className="h-8 w-8 rounded-full bg-steel-300" />
      <div className="h-3 w-24 rounded bg-steel-300" />
    </div>
  );
}

const InteractiveMapDynamic = dynamic(
  () => import("./InteractiveMap"),
  {
    ssr: false,
    loading: () => <MapSkeleton />,
  }
);

export default function MapWrapper(props: ComponentProps<typeof InteractiveMap>) {
  return <InteractiveMapDynamic {...props} />;
}
