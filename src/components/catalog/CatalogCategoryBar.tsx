import type { Category } from "@/types/home";

interface CatalogCategoryBarProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const CatalogCategoryBar = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CatalogCategoryBarProps) => {
  return (
    <div className="border-b border-[var(--color-outline-variant)] bg-[var(--color-background)]">
      <div className="mx-auto flex max-w-[1320px] items-center gap-2 overflow-x-auto px-6 py-3">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => onCategoryChange(category.id)}
            className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold ${
              activeCategory === category.id
                ? "border-[var(--color-on-surface)] bg-[var(--color-on-surface)] text-white"
                : "border-[var(--color-outline-variant)] text-[var(--color-on-surface-variant)]"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};
