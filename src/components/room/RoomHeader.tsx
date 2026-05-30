import type { RoomDetail } from "@/types/room";

interface RoomHeaderProps {
  room: RoomDetail;
}

export const RoomHeader = ({ room }: RoomHeaderProps) => {
  return (
    <header className="space-y-2">
      <h1 className="text-[28px] font-bold leading-tight text-[var(--color-on-surface)] md:text-[40px]">
        {room.title}
      </h1>
      <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-on-surface-variant)]">
        <span>★ {room.rating.toFixed(2)}</span>
        <span>{room.location}</span>
        <span>{room.guests} guests</span>
        <span>{room.bedrooms} bedrooms</span>
        <span>{room.baths} baths</span>
      </div>
    </header>
  );
};
