import type { RoomAmenity } from "@/types/room";

interface AmenitiesGridProps {
  amenities: RoomAmenity[];
}

export const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-[var(--color-on-surface)]">What this place offers</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {amenities.map((amenity) => (
          <div
            key={amenity.id}
            className="rounded-xl border border-[var(--color-outline-variant)] bg-white px-4 py-3 text-sm font-medium text-[var(--color-on-surface)]"
          >
            {amenity.label}
          </div>
        ))}
      </div>
    </section>
  );
};
