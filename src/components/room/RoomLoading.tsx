export const RoomLoading = () => {
  return (
    <div className="mx-auto max-w-[1320px] space-y-4 px-6 py-6">
      <div className="h-8 w-64 animate-pulse rounded-lg bg-[var(--color-surface-container)]" />
      <div className="h-[320px] animate-pulse rounded-2xl bg-[var(--color-surface-container)] md:h-[460px]" />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-28 animate-pulse rounded-2xl bg-[var(--color-surface-container)]" />
        <div className="h-28 animate-pulse rounded-2xl bg-[var(--color-surface-container)]" />
      </div>
    </div>
  );
};
