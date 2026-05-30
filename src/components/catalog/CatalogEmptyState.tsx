interface CatalogEmptyStateProps {
  query: string;
}

export const CatalogEmptyState = ({ query }: CatalogEmptyStateProps) => {
  return (
    <div className="rounded-2xl border border-[var(--color-outline-variant)] bg-white p-8 text-center">
      <h2 className="text-2xl font-semibold text-[var(--color-on-surface)]">No stays found</h2>
      <p className="mt-2 text-sm text-[var(--color-on-surface-variant)]">
        {query
          ? `No results for "${query}". Try another property name.`
          : "Try another filter or search term."}
      </p>
    </div>
  );
};
