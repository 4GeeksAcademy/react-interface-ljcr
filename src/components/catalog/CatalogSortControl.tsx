interface CatalogSortControlProps {
  sortValue: "none" | "asc" | "desc";
  onSortChange: (value: "none" | "asc" | "desc") => void;
}

export const CatalogSortControl = ({
  sortValue,
  onSortChange,
}: CatalogSortControlProps) => {
  return (
    <label className="inline-flex items-center gap-2 rounded-full border border-[var(--color-outline-variant)] bg-white px-3 py-2 text-sm">
      <span className="font-semibold text-[var(--color-on-surface)]">Sort:</span>
      <select
        value={sortValue}
        onChange={(event) => onSortChange(event.target.value as "none" | "asc" | "desc")}
        className="bg-transparent text-sm outline-none"
      >
        <option value="none">Recommended</option>
        <option value="asc">Price: low to high</option>
        <option value="desc">Price: high to low</option>
      </select>
    </label>
  );
};
