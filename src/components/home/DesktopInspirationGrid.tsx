import type { InspirationItem } from "@/types/home";

interface DesktopInspirationGridProps {
  items: InspirationItem[];
}

export const DesktopInspirationGrid = ({ items }: DesktopInspirationGridProps) => {
  const [first, second, third, fourth] = items;
  if (!first || !second || !third || !fourth) {
    return null;
  }

  const cardClass = "group relative overflow-hidden rounded-2xl";

  return (
    <section className="mt-10">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-[42px] font-bold leading-tight">Inspiration for your next trip</h2>
        <button type="button" className="text-sm font-semibold underline underline-offset-2">View all</button>
      </div>
      <div className="grid h-[420px] grid-cols-2 gap-4">
        <article className={`${cardClass} row-span-2`}>
          <img src={first.image} alt={first.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <span className="rounded-full bg-[var(--color-primary)] px-2 py-0.5 text-xs font-semibold">Featured</span>
            <h3 className="mt-2 text-xl font-semibold">{first.title}</h3>
            <p className="text-sm text-white/85">{first.subtitle}</p>
          </div>
        </article>
        <article className={cardClass}>
          <img src={second.image} alt={second.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          <p className="absolute bottom-3 left-3 text-sm font-semibold text-white">{second.title}</p>
        </article>
        <article className={cardClass}>
          <img src={third.image} alt={third.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          <p className="absolute bottom-3 left-3 text-sm font-semibold text-white">{third.title}</p>
        </article>
      </div>
      <article className={`${cardClass} mt-4 h-[150px]`}>
        <img src={fourth.image} alt={fourth.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <p className="absolute bottom-3 left-3 text-sm font-semibold text-white">{fourth.title}</p>
      </article>
    </section>
  );
};
