import type { InspirationItem, Property } from "@/types/home";
import { DesktopFooter } from "@/components/home/DesktopFooter";
import { DesktopGuestFavorites } from "@/components/home/DesktopGuestFavorites";
import { DesktopHero } from "@/components/home/DesktopHero";
import { DesktopInspirationGrid } from "@/components/home/DesktopInspirationGrid";
import { DesktopTopBar } from "@/components/home/DesktopTopBar";

interface HomeDesktopViewProps {
  query: string;
  loading: boolean;
  properties: Property[];
  inspirationItems: InspirationItem[];
  onQueryChange: (value: string) => void;
  onSearchSubmit: (value: string) => void;
}

export const HomeDesktopView = ({
  query,
  loading,
  properties,
  inspirationItems,
  onQueryChange,
  onSearchSubmit,
}: HomeDesktopViewProps) => {
  return (
    <section className="hidden bg-[var(--color-background)] md:block">
      <DesktopTopBar />
      <main className="mx-auto max-w-[1320px] bg-[var(--color-background)] px-6 py-6">
        <DesktopHero
          query={query}
          onQueryChange={onQueryChange}
          onSearchSubmit={onSearchSubmit}
        />
        <DesktopInspirationGrid items={inspirationItems} />
        <DesktopGuestFavorites loading={loading} properties={properties} />
      </main>
      <DesktopFooter />
    </section>
  );
};
