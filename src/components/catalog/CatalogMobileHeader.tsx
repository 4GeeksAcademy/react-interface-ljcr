interface CatalogMobileHeaderProps {
  query: string;
  onQueryChange: (value: string) => void;
  onSearchSubmit: () => void;
}

export const CatalogMobileHeader = ({
  query,
  onQueryChange,
  onSearchSubmit,
}: CatalogMobileHeaderProps) => {
  return (
    <header className="sticky top-0 z-20 bg-[var(--color-background)] px-6 pb-4 pt-5 md:hidden">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSearchSubmit();
        }}
        className="flex items-center gap-3 rounded-full border border-[var(--color-outline-variant)] bg-white px-4 py-3 shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
      >
        <span className="text-lg text-[var(--color-primary)]">⌕</span>
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search by property name"
          className="w-full bg-transparent text-base font-medium outline-none"
        />
        <button type="submit" className="rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-semibold text-white">
          Go
        </button>
      </form>
    </header>
  );
};
