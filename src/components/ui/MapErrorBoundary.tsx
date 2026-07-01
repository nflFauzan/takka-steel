"use client";

import { Component, type ReactNode } from "react";
import Icon from "@/components/Icon";

function MapErrorFallback({ mapsLink, error }: { mapsLink: string, error?: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-2xl bg-steel-50 border border-steel-200 p-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-steel-200 text-steel-500">
        <Icon name="pin" className="h-6 w-6" />
      </div>
      <p className="text-sm font-medium text-steel-700">Peta tidak dapat dimuat</p>
      {error && <p className="text-xs text-red-500 mt-2 max-w-xs">{error}</p>}
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

export class MapErrorBoundary extends Component<Props, { hasError: boolean, errorMsg: string }> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorMsg: "" };
  }
  static getDerivedStateFromError(error: Error) {
    console.error("MapErrorBoundary caught:", error);
    return { hasError: true, errorMsg: error.message };
  }
  render() {
    if (this.state.hasError) {
      return <MapErrorFallback mapsLink={this.props.mapsLink} error={this.state.errorMsg} />;
    }
    return this.props.children;
  }
}
