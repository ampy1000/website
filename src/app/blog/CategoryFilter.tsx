"use client";

import { useState, useCallback } from "react";

export default function CategoryFilter({
  categories,
}: {
  categories: string[];
}) {
  const [active, setActive] = useState("All");

  const handleFilter = useCallback((category: string) => {
    setActive(category);

    const featured = document.querySelector<HTMLElement>(
      "[data-category]:first-of-type"
    );
    const cards = document.querySelectorAll<HTMLElement>(
      "section [data-category]"
    );

    if (featured) {
      const match =
        category === "All" || featured.dataset.category === category;
      featured.style.display = match ? "" : "none";
    }

    cards.forEach((card) => {
      const match =
        category === "All" || card.dataset.category === category;
      card.style.display = match ? "" : "none";
    });
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 pb-10">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
              active === cat
                ? "bg-foreground text-background"
                : "bg-surface border border-border text-muted hover:text-foreground hover:border-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
