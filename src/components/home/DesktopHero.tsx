interface DesktopHeroProps {
  query: string;
  onQueryChange: (value: string) => void;
  onSearchSubmit: (value: string) => void;
}

export const DesktopHero = ({
  query,
  onQueryChange,
  onSearchSubmit,
}: DesktopHeroProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchSubmit(query);
  };

  return (
    <section className="relative overflow-hidden rounded-[24px]">
      <img
        src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1800&q=80"
        alt="Luxury villa"
        className="h-[360px] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
      <div className="absolute bottom-8 left-7 right-7 text-white">
        <h1 className="text-5xl font-bold tracking-[-0.01em]">Find your next sanctuary</h1>
        <p className="mt-2 max-w-xl text-base text-white/90">
          Discover hand-picked homes across the globe, from architectural gems to coastal retreats.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-5 flex w-full max-w-[560px] items-center gap-3 rounded-full bg-white p-2 text-[var(--color-on-surface)] shadow-[0_12px_18px_rgba(0,0,0,0.09)]"
        >
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search by property name"
            aria-label="Search properties by name"
            className="w-full rounded-full px-3 py-2 text-sm outline-none placeholder:text-[var(--color-text-muted)]"
          />
          <button
            type="submit"
            className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};
