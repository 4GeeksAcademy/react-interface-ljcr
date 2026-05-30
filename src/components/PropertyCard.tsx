import Link from "next/link";
import type { Property } from "@/types/home";

interface PropertyCardProps {
  property: Property;
  variant?: "mobile" | "desktop" | "catalog";
}

const wrapperByVariant: Record<NonNullable<PropertyCardProps["variant"]>, string> = {
  mobile: "overflow-hidden rounded-2xl bg-white shadow-[0_12px_25px_rgba(0,0,0,0.06)]",
  desktop: "",
  catalog: "rounded-2xl bg-white p-3 shadow-[0_10px_20px_rgba(0,0,0,0.04)]",
};

const imageHeightByVariant: Record<NonNullable<PropertyCardProps["variant"]>, string> = {
  mobile: "h-56",
  desktop: "h-64 transition-transform duration-300 group-hover:scale-105",
  catalog: "h-56",
};

const PropertyCard = ({ property, variant = "desktop" }: PropertyCardProps) => {
  const isMobile = variant === "mobile";
  const isCatalog = variant === "catalog";

  return (
    <article className={wrapperByVariant[variant]}>
      <Link href={`/rooms/${property.id}`} className="group block">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={property.image}
            alt={property.title}
            className={`${imageHeightByVariant[variant]} w-full object-cover`}
          />
          {isMobile ? (
            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--color-on-surface)]">
              ★ {property.rating.toFixed(2)} {property.badge ?? "Guest favorite"}
            </span>
          ) : property.badge ? (
            <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold">
              {property.badge}
            </span>
          ) : null}
          <button
            type="button"
            className="absolute right-3 top-3 text-2xl text-white drop-shadow"
          >
            ♡
          </button>
        </div>

        <div
          className={
            isMobile
              ? "space-y-1 px-4 py-4 text-[var(--color-on-surface)]"
              : isCatalog
                ? "pt-3 text-[var(--color-on-surface)]"
                : "space-y-0.5 pt-3 text-[var(--color-on-surface)]"
          }
        >
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-[18px] font-semibold leading-6">{property.title}</h3>
            <span className={isCatalog ? "text-sm" : "text-xs"}>
              ★ {property.rating.toFixed(2)}
            </span>
          </div>
          <p className="text-sm text-[var(--color-text-muted)]">
            {property.location}
            {isMobile && property.distance ? ` • ${property.distance}` : ""}
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">{property.dateRange}</p>
          <p
            className={
              isMobile
                ? "text-[26px] font-semibold leading-none"
                : isCatalog
                  ? "mt-1 text-lg font-semibold"
                  : "mt-1 text-base font-semibold leading-none"
            }
          >
            ${property.pricePerNight}
            <span className={isMobile ? "ml-1 text-base font-normal" : "ml-1 font-normal"}>
              night
            </span>
          </p>
        </div>
      </Link>
    </article>
  );
};

export default PropertyCard;
