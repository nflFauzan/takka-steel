"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
// leaflet.css is imported globally in globals.css — do NOT import here again
// to avoid FOUC and Tailwind CSS-purge conflicts.

// ── Branded teardrop pin: blue body, gold ring, blue core ─────────────────
const brandIcon = new L.DivIcon({
  className: "",
  html: `<svg width="34" height="46" viewBox="0 0 34 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <filter id="ts-pin-shadow" x="-30%" y="-10%" width="160%" height="160%">
      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#104FA6" flood-opacity="0.35"/>
    </filter>
    <path d="M17 1C8.163 1 1 8.163 1 17c0 12.5 16 28 16 28S33 29.5 33 17C33 8.163 25.837 1 17 1z"
          fill="#104FA6" stroke="#ffffff" stroke-width="2" filter="url(#ts-pin-shadow)"/>
    <circle cx="17" cy="17" r="7" fill="#F5CE02"/>
    <circle cx="17" cy="17" r="3.5" fill="#104FA6"/>
  </svg>`,
  iconSize: [34, 46],
  iconAnchor: [17, 46],
  popupAnchor: [0, -50],
});

// ── Bug 4 fix: invalidateSize after mount ─────────────────────────────────
// react-leaflet renders the map synchronously, but Next.js hydration and CSS
// transitions can cause the container size to be 0×0 at mount time.
// Calling invalidateSize() after a tick forces Leaflet to recalculate and
// load all visible tiles correctly.
function MapResizer() {
  const map = useMap();
  useEffect(() => {
    // Small delay ensures the CSS transition / parent layout has settled.
    const id = setTimeout(() => {
      map.invalidateSize();
    }, 100);
    return () => clearTimeout(id);
  }, [map]);
  return null;
}

// ── Bug 2 fix: disable drag on touch devices ──────────────────────────────
// On mobile, Leaflet's touch-drag intercepts the page scroll gesture, making
// it impossible to scroll past the map. We keep scrollWheelZoom off (already
// set) and also disable dragging on narrow viewports.
function MobileDragDisabler() {
  const map = useMap();
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) {
        map.dragging.disable();
      } else {
        map.dragging.enable();
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [map]);
  return null;
}

interface Props {
  lat: number;
  lng: number;
  zoom?: number;
  name: string;
  address: string;
  mapsLink: string;
}

export default function InteractiveMap({
  lat,
  lng,
  zoom = 17,
  name,
  address,
  mapsLink,
}: Props) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={zoom}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={false}
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[lat, lng]} icon={brandIcon}>
        <Popup>
          <div style={{ fontFamily: "system-ui,sans-serif", minWidth: "195px", padding: "4px 0" }}>
            <p style={{ margin: 0, fontWeight: 700, color: "#104FA6", fontSize: "13px" }}>
              {name}
            </p>
            <p style={{ margin: "6px 0 10px", fontSize: "11.5px", color: "#444", lineHeight: 1.6 }}>
              {address}
            </p>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#F5CE02",
                color: "#131313",
                padding: "5px 13px",
                borderRadius: "4px",
                fontSize: "11px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Buka di Google Maps →
            </a>
          </div>
        </Popup>
      </Marker>

      {/* Inner map utility components — must be children of MapContainer */}
      <MapResizer />
      <MobileDragDisabler />
    </MapContainer>
  );
}
