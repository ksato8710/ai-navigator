"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, useMemo } from "react";
import SearchBar from "@/components/SearchBar";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/data/tools";
import { Category, CATEGORY_LABELS, PricingType, PRICING_LABELS } from "@/types/tool";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [sortBy, setSortBy] = useState<"score" | "name" | "recent">("score");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterPricing, setFilterPricing] = useState<string>("all");

  const results = useMemo(() => {
    let filtered = query
      ? tools.filter((tool) => {
          const searchText = [
            tool.name,
            tool.descriptionJa,
            tool.description,
            ...tool.features,
            ...tool.useCases,
            ...tool.tags,
          ]
            .join(" ")
            .toLowerCase();
          return query
            .toLowerCase()
            .split(/\s+/)
            .every((word) => searchText.includes(word));
        })
      : [...tools];

    if (filterCategory !== "all") {
      filtered = filtered.filter(
        (t) => t.category === filterCategory || t.subcategories.includes(filterCategory)
      );
    }
    if (filterPricing !== "all") {
      filtered = filtered.filter((t) => t.pricing === filterPricing);
    }

    if (sortBy === "score") {
      filtered.sort((a, b) => (b.score?.overall || 0) - (a.score?.overall || 0));
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      filtered.sort((a, b) => b.addedAt.localeCompare(a.addedAt));
    }

    return filtered;
  }, [query, sortBy, filterCategory, filterPricing]);

  const categories = Object.keys(CATEGORY_LABELS) as Category[];
  const pricingTypes = Object.keys(PRICING_LABELS) as PricingType[];

  return (
    <div>
      <section className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-4 text-center">
            Search AI Tools
          </h1>
          <SearchBar />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-2">
            <label className="text-xs font-bold text-gray-500 uppercase">Sort:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "score" | "name" | "recent")}
              className="text-sm border border-gray-200 rounded px-2 py-1.5 bg-white text-gray-700"
            >
              <option value="score">Score (High to Low)</option>
              <option value="name">Name (A-Z)</option>
              <option value="recent">Recently Added</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs font-bold text-gray-500 uppercase">Category:</label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="text-sm border border-gray-200 rounded px-2 py-1.5 bg-white text-gray-700"
            >
              <option value="all">All</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {CATEGORY_LABELS[cat]}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs font-bold text-gray-500 uppercase">Pricing:</label>
            <select
              value={filterPricing}
              onChange={(e) => setFilterPricing(e.target.value)}
              className="text-sm border border-gray-200 rounded px-2 py-1.5 bg-white text-gray-700"
            >
              <option value="all">All</option>
              {pricingTypes.map((p) => (
                <option key={p} value={p}>
                  {PRICING_LABELS[p]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-xs text-gray-500 mb-4 uppercase font-bold tracking-wide">
          {query ? `"${query}" の検索結果: ` : ""}
          {results.length} tools found
        </p>

        {results.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-sm mb-2">
              該当するツールが見つかりませんでした。
            </p>
            <p className="text-gray-400 text-xs">
              別のキーワードやフィルターで検索してみてください。
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {results.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-12 text-center text-gray-500 text-sm">
          Loading...
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
