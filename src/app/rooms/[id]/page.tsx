"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { AmenitiesGrid } from "@/components/room/AmenitiesGrid";
import { BookingCard } from "@/components/room/BookingCard";
import { HostInfo } from "@/components/room/HostInfo";
import { RoomHeader } from "@/components/room/RoomHeader";
import { RoomImageGallery } from "@/components/room/RoomImageGallery";
import { RoomLoading } from "@/components/room/RoomLoading";
import { RoomNotFound } from "@/components/room/RoomNotFound";
import { getRoomDetailById } from "@/lib/roomData";
import type { RoomDetail } from "@/types/room";

const RoomPage = () => {
  const params = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [room, setRoom] = useState<RoomDetail | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRoom(getRoomDetailById(params.id));
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [params.id]);

  if (loading) {
    return <RoomLoading />;
  }

  if (!room) {
    return <RoomNotFound />;
  }

  return (
    <main className="mx-auto max-w-[1320px] space-y-6 px-6 py-6 md:space-y-8 md:py-8">
      <Link href="/catalog" className="inline-flex text-sm font-semibold text-[var(--color-surface-tint)]">
        Back to catalog
      </Link>
      <RoomHeader room={room} />
      <RoomImageGallery title={room.title} images={room.images} />

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-6">
          <p className="text-base leading-7 text-[var(--color-on-surface-variant)]">{room.description}</p>
          <HostInfo host={room.host} />
          <AmenitiesGrid amenities={room.amenities} />
        </div>
        <BookingCard
          pricePerNight={room.pricePerNight}
          cleaningFee={room.cleaningFee}
          serviceFee={room.serviceFee}
        />
      </section>
    </main>
  );
};

export default RoomPage;
