import type { InspirationItem } from "@/types/home";

interface InspirationSectionProps {
  items: InspirationItem[];
}

export const InspirationSection = ({ items }: InspirationSectionProps) => {
  return (
    <section className="bg-[var(--color-surface-container-low)] py-8">
      <h2 className="px-6 text-[40px] font-bold leading-[1.15] text-[var(--color-on-surface)]">
        Inspiration for your next trip
      </h2>
      <div className="mt-4 flex snap-x gap-3 overflow-x-auto px-6 pb-2">
        {items.map((item) => (
          <article
            key={item.id}
            className="group relative h-[220px] min-w-[255px] snap-start overflow-hidden rounded-2xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-[30px] font-semibold leading-tight">{item.title}</h3>
              <p className="text-base text-white/85">{item.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
