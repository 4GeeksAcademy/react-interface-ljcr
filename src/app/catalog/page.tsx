"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PropertyCard from "@/components/PropertyCard";
import { CatalogCategoryBar } from "@/components/catalog/CatalogCategoryBar";
import { CatalogDesktopHeader } from "@/components/catalog/CatalogDesktopHeader";
import { CatalogEmptyState } from "@/components/catalog/CatalogEmptyState";
import { CatalogMapArea } from "@/components/catalog/CatalogMapArea";
import { CatalogMobileHeader } from "@/components/catalog/CatalogMobileHeader";
import { CatalogSortControl } from "@/components/catalog/CatalogSortControl";
import { DesktopFooter } from "@/components/home/DesktopFooter";
import { MobileBottomNav } from "@/components/home/MobileBottomNav";
import { categories, properties } from "@/lib/homeData";

const categoryOptions = [{ id: "all", label: "All" }, ...categories];

const CatalogPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const qParam = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(qParam);
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState<"none" | "asc" | "desc">("none");

  useEffect(() => {
    setQuery(qParam);
  }, [qParam]);

  const handleSearchSubmit = () => {
    const clean = query.trim();
    const path = clean ? `/catalog?q=${encodeURIComponent(clean)}` : "/catalog";
    router.push(path);
  };

  const filteredProperties = useMemo(() => {
    const term = qParam.trim().toLowerCase();
    return properties.filter((property) => {
      const matchesQuery = !term || property.title.toLowerCase().includes(term);
      const matchesCategory =
        activeCategory === "all" || property.categoryId === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [activeCategory, qParam]);

  const sortedProperties = useMemo(() => {
    if (sortBy === "none") {
      return filteredProperties;
    }
    const list = [...filteredProperties];
    list.sort((a, b) => {
      return sortBy === "asc"
        ? a.pricePerNight - b.pricePerNight
        : b.pricePerNight - a.pricePerNight;
    });
    return list;
  }, [filteredProperties, sortBy]);

  return (
    <div className="bg-[var(--color-background)]">
      <CatalogMobileHeader
        query={query}
        onQueryChange={setQuery}
        onSearchSubmit={handleSearchSubmit}
      />
      <div className="hidden md:block">
        <CatalogDesktopHeader
          query={query}
          onQueryChange={setQuery}
          onSearchSubmit={handleSearchSubmit}
        />
      </div>

      <CatalogCategoryBar
        categories={categoryOptions}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main className="mx-auto max-w-[1320px] px-6 pb-24 pt-6 md:pb-10">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-[var(--color-on-surface-variant)]">
            {qParam ? `Results for "${qParam}"` : "All stays"}
          </p>
          <CatalogSortControl sortValue={sortBy} onSortChange={setSortBy} />
        </div>

        {sortedProperties.length === 0 ? (
          <CatalogEmptyState query={qParam} />
        ) : (
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {sortedProperties.map((property) => (
                <PropertyCard key={property.id} property={property} variant="catalog" />
              ))}
            </section>
            <CatalogMapArea />
          </div>
        )}
      </main>

      <div className="hidden md:block">
        <DesktopFooter />
      </div>
      <MobileBottomNav />
    </div>
  );
};

export default CatalogPage;
