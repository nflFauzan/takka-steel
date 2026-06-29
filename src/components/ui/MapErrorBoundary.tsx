"use client";

import { Component, type ReactNode } from "react";
import Icon from "@/components/Icon";

function MapErrorFallback({ mapsLink }: { mapsLink: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-2xl bg-steel-50 border border-steel-200 p-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-steel-200 text-steel-500">
        <Icon name="pin" className="h-6 w-6" />
      </div>
      <p className="text-sm font-medium text-steel-700">Peta tidak dapat dimuat</p>
      <a
        href={mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold text-xs"
      >
        Buka di Google Maps
      </a>
    </div>
  );
}

interface Props {
  mapsLink: string;
  children: ReactNode;
}

export class MapErrorBoundary extends Component<Props, { hasError: boolean }> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <MapErrorFallback mapsLink={this.props.mapsLink} />;
    }
    return this.props.children;
  }
}
