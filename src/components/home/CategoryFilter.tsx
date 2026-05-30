import type { Category } from "@/types/home";

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange?: (value: string) => void;
}

export const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="bg-transparent">
      <div className="mx-auto flex items-center gap-3 overflow-x-auto py-1">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => onCategoryChange?.(category.id)}
            className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
              activeCategory === category.id
                ? "border-[var(--color-on-surface)] bg-[var(--color-on-surface)] text-white"
                : "border-[var(--color-outline-variant)] text-[var(--color-text-muted)] hover:text-[var(--color-on-surface)]"
            } ${onCategoryChange ? "cursor-pointer" : "cursor-default"}`}
          >
            {category.label}
          </button>
        ))}
        <button
          type="button"
          className="ml-auto rounded-full border border-[var(--color-outline-variant)] px-3 py-1.5 text-xs font-semibold"
        >
          Filters
        </button>
      </div>
    </div>
  );
};
