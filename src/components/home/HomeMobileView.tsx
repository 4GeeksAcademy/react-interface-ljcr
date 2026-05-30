import Link from "next/link";
import type { InspirationItem, Property } from "@/types/home";
import PropertyCard from "@/components/PropertyCard";
import { InspirationSection } from "@/components/home/InspirationSection";
import { MobileBottomNav } from "@/components/home/MobileBottomNav";
import { MobileHero } from "@/components/home/MobileHero";
import { MobileSearchBar } from "@/components/home/MobileSearchBar";

interface HomeMobileViewProps {
  query: string;
  properties: Property[];
  inspirationItems: InspirationItem[];
  onQueryChange: (value: string) => void;
  onSearchSubmit: (value: string) => void;
}

export const HomeMobileView = ({
  query,
  properties,
  inspirationItems,
  onQueryChange,
  onSearchSubmit,
}: HomeMobileViewProps) => {
  return (
    <section className="pb-24 md:hidden">
      <div className="absolute inset-x-0 top-0 z-10">
        <MobileSearchBar
          query={query}
          onQueryChange={onQueryChange}
          onSearchSubmit={onSearchSubmit}
        />
      </div>
      <MobileHero query={query} />
      <InspirationSection items={inspirationItems} />
      <section className="px-6 py-8">
        <h2 className="text-[40px] font-bold leading-tight text-[var(--color-on-surface)]">Guest favorites</h2>
        <div className="mt-4 space-y-4">
          {properties.slice(0, 2).map((property) => (
            <PropertyCard key={property.id} property={property} variant="mobile" />
          ))}
        </div>
        <Link
          href="/catalog"
          className="mx-auto mt-6 flex w-max items-center gap-2 rounded-full bg-[var(--color-on-surface)] px-7 py-3 text-lg font-semibold text-white"
        >
          <span>🗺</span>
          <span>Map</span>
        </Link>
      </section>
      <MobileBottomNav />
    </section>
  );
};
