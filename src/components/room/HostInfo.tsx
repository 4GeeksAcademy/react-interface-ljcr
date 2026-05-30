import type { RoomHost } from "@/types/room";

interface HostInfoProps {
  host: RoomHost;
}

export const HostInfo = ({ host }: HostInfoProps) => {
  return (
    <section className="rounded-2xl border border-[var(--color-outline-variant)] bg-white p-5">
      <div className="flex items-center gap-4">
        <img src={host.avatar} alt={host.name} className="h-14 w-14 rounded-full object-cover" />
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-on-surface)]">
            Hosted by {host.name}
          </h3>
          <p className="text-sm text-[var(--color-on-surface-variant)]">{host.subtitle}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-[var(--color-on-surface-variant)]">{host.joined}</p>
      <p className="text-sm text-[var(--color-on-surface-variant)]">{host.responseRate}</p>
    </section>
  );
};
