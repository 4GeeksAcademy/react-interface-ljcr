interface MobileHeroProps {
  query: string;
}

export const MobileHero = ({ query }: MobileHeroProps) => {
  return (
    <section className="relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80"
        alt="Pool house"
        className="h-[520px] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/70" />
      <div className="absolute bottom-10 left-6 right-6 text-white">
        <span className="inline-flex rounded-full bg-[var(--color-surface-tint)]/80 px-3 py-1 text-xs font-bold uppercase tracking-wide">
          New Destination
        </span>
        <h1 className="mt-3 max-w-[290px] text-[40px] font-bold leading-[1.1] tracking-[-0.01em]">
          Not sure where to go? Perfect.
        </h1>
        <p className="mt-3 text-sm text-white/85">
          {query ? `Results for "${query}"` : "Find unique stays in seconds."}
        </p>
        <button
          type="button"
          className="mt-6 rounded-full bg-[var(--color-surface-white)] px-7 py-3 text-lg font-semibold text-[var(--color-on-surface)]"
        >
          I&apos;m flexible
        </button>
      </div>
    </section>
  );
};
