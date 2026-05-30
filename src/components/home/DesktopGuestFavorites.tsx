import type { Property } from "@/types/home";
import PropertyCard from "@/components/PropertyCard";
import { HomeLoading } from "@/components/home/HomeLoading";

interface DesktopGuestFavoritesProps {
  loading: boolean;
  properties: Property[];
}

export const DesktopGuestFavorites = ({
  loading,
  properties,
}: DesktopGuestFavoritesProps) => {
  return (
    <section className="mt-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[42px] font-bold leading-tight">Guest favorites</h2>
        <div className="flex gap-2">
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-outline-variant)]"
          >
            ‹
          </button>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-outline-variant)]"
          >
            ›
          </button>
        </div>
      </div>
      {loading ? (
        <HomeLoading />
      ) : (
        <div className="grid gap-4 lg:grid-cols-4">
          {properties.slice(0, 4).map((property) => (
            <PropertyCard key={property.id} property={property} variant="desktop" />
          ))}
        </div>
      )}
    </section>
  );
};
