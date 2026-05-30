interface MobileSearchBarProps {
  query: string;
  onQueryChange: (value: string) => void;
  onSearchSubmit: (value: string) => void;
}

export const MobileSearchBar = ({
  query,
  onQueryChange,
  onSearchSubmit,
}: MobileSearchBarProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchSubmit(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-6 mt-4 flex items-center gap-3 rounded-full border border-[var(--color-outline-variant)] bg-[var(--color-surface-white)] px-4 py-2 shadow-[0_12px_15px_rgba(0,0,0,0.04)]"
    >
      <label className="flex min-w-0 flex-1 items-center gap-3">
        <span className="text-lg text-[var(--color-primary)]">⌕</span>
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search by property name"
          aria-label="Search properties by name"
          className="w-full bg-transparent text-sm font-medium leading-5 text-[var(--color-on-surface)] outline-none placeholder:text-[var(--color-text-muted)]"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-[var(--color-primary)] px-3 py-2 text-xs font-semibold text-white"
      >
        Go
      </button>
    </form>
  );
};
