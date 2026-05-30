interface CatalogDesktopHeaderProps {
  query: string;
  onQueryChange: (value: string) => void;
  onSearchSubmit: () => void;
}

export const CatalogDesktopHeader = ({
  query,
  onQueryChange,
  onSearchSubmit,
}: CatalogDesktopHeaderProps) => {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-outline-variant)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-6 py-3">
        <h1 className="text-[34px] font-bold text-[var(--color-surface-tint)]">Explore</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onSearchSubmit();
          }}
          className="flex w-full max-w-[460px] items-center gap-3 rounded-full border border-[var(--color-outline-variant)] bg-white px-4 py-2 shadow-sm"
        >
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search by property name"
            className="w-full bg-transparent text-sm outline-none"
          />
          <button type="submit" className="rounded-full bg-[var(--color-primary)] px-3 py-1.5 text-xs font-semibold text-white">
            Search
          </button>
        </form>
        <button type="button" className="rounded-full border border-[var(--color-outline-variant)] px-3 py-2 text-sm">
          ☰ ◍
        </button>
      </div>
    </header>
  );
};
