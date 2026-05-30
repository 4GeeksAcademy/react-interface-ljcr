// @ts-nocheck
"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { properties } from "@/lib/homeData";

// Fix default marker icon issue in Leaflet with Webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export const CatalogMapArea = () => {
  // Centrar el mapa en Europa/EEUU
  const center = [40.0, -20.0];
  return (
    <aside className="hidden self-start rounded-2xl border border-[var(--color-outline-variant)] bg-white p-2 lg:sticky lg:top-24 lg:block">
      <div className="h-[420px] rounded-xl bg-[var(--color-surface-container-low)] overflow-hidden">
        <MapContainer
          center={center}
          zoom={2}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%", borderRadius: "0.75rem" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {properties.map((property) => (
            <Marker key={property.id} position={[property.lat, property.lng]}>
              <Popup>
                <div className="font-semibold">{property.title}</div>
                <div className="text-xs text-gray-500">{property.location}</div>
                <div className="mt-1">${property.pricePerNight} / night</div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </aside>
  );
};
