"use client";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateRangePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  onChange: (dates: [Date | null, Date | null]) => void;
}

const DateRangePicker = ({ startDate, endDate, onChange }: DateRangePickerProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold uppercase text-[var(--color-on-surface-variant)]">Check-in / Check-out</label>
      <DatePicker
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={onChange}
        minDate={new Date()}
        dateFormat="MMM d, yyyy"
        className="w-full rounded-lg border border-[var(--color-outline-variant)] px-3 py-2 text-sm"
        placeholderText="Select dates"
      />
    </div>
  );
};

export default DateRangePicker;
