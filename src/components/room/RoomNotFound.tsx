import Link from "next/link";

export const RoomNotFound = () => {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-16 text-center">
      <h1 className="text-3xl font-bold text-[var(--color-on-surface)]">Room not found</h1>
      <p className="mt-2 text-sm text-[var(--color-on-surface-variant)]">
        This listing is not available anymore.
      </p>
      <Link
        href="/catalog"
        className="mx-auto mt-6 block w-fit rounded-full bg-[var(--color-on-surface)] px-5 py-2.5 text-sm font-semibold text-white"
      >
        Back to catalog
      </Link>
    </div>
  );
};
