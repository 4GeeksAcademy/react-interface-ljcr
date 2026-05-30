"use client";

import { useMemo, useState } from "react";
import DateRangePicker from "./DateRangePicker";

interface BookingCardProps {
  pricePerNight: number;
  cleaningFee: number;
  serviceFee: number;
}

export const BookingCard = ({
  pricePerNight,
  cleaningFee,
  serviceFee,
}: BookingCardProps) => {
  const [guests, setGuests] = useState(1);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;

  // Calcular noches
  const nights = useMemo(() => {
    if (startDate && endDate) {
      const diff = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      return diff > 0 ? diff : 1;
    }
    return 1;
  }, [startDate, endDate]);

  const total = useMemo(() => {
    return pricePerNight * nights + cleaningFee + serviceFee;
  }, [cleaningFee, pricePerNight, serviceFee, nights]);

  return (
    <aside className="rounded-2xl border border-[var(--color-outline-variant)] bg-white p-5 shadow-[0_12px_20px_rgba(0,0,0,0.05)] lg:sticky lg:top-24">
      <p className="text-2xl font-semibold text-[var(--color-on-surface)]">${pricePerNight} night</p>
      <div className="flex flex-col gap-4">
        <DateRangePicker startDate={startDate} endDate={endDate} onChange={(update) => setDateRange(update)} />
        <div className="rounded-xl border border-[var(--color-outline-variant)] p-3">
          <p className="text-xs font-semibold uppercase text-[var(--color-on-surface-variant)]">Guests</p>
          <div className="mt-2 flex items-center gap-2">
            <button type="button" onClick={() => setGuests(Math.max(1, guests - 1))} className="h-8 w-8 rounded-full border">
              -
            </button>
            <span className="text-sm font-semibold">{guests}</span>
            <button type="button" onClick={() => setGuests(guests + 1)} className="h-8 w-8 rounded-full border">
              +
            </button>
          </div>
        </div>
      </div>
      <button type="button" className="mt-4 w-full rounded-xl bg-[var(--color-primary)] px-4 py-3 text-sm font-semibold text-white">
        Reserve
      </button>
      <div className="mt-4 space-y-2 text-sm text-[var(--color-on-surface-variant)]">
        <p>${pricePerNight} x {nights} night{nights > 1 ? "s" : ""}</p>
        <p>Cleaning fee ${cleaningFee}</p>
        <p>Service fee ${serviceFee}</p>
      </div>
      <p className="mt-3 border-t border-[var(--color-outline-variant)] pt-3 text-sm font-semibold text-[var(--color-on-surface)]">
        Total before taxes: ${total}
      </p>
    </aside>
  );
};
