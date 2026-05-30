"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { HomeDesktopView } from "@/components/home/HomeDesktopView";
import { HomeMobileView } from "@/components/home/HomeMobileView";
import {
  desktopInspirationItems,
  inspirationItems,
  properties,
} from "@/lib/homeData";

const Home = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(timer);
  }, []);

  const handleSearchSubmit = (term: string) => {
    const cleanTerm = term.trim();
    const target = cleanTerm
      ? `/catalog?q=${encodeURIComponent(cleanTerm)}`
      : "/catalog";
    router.push(target);
  };

  return (
    <div className="bg-[var(--color-background)]">
      <HomeMobileView
        query={query}
        properties={properties}
        inspirationItems={inspirationItems}
        onQueryChange={setQuery}
        onSearchSubmit={handleSearchSubmit}
      />
      <HomeDesktopView
        query={query}
        loading={loading}
        properties={properties}
        inspirationItems={desktopInspirationItems}
        onQueryChange={setQuery}
        onSearchSubmit={handleSearchSubmit}
      />
    </div>
  );
};

export default Home;
