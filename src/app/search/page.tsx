"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import SearchBar from "@/components/SearchBar";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/data/tools";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const results = query
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
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">🔍 検索結果</h1>
      <div className="mb-8">
        <SearchBar />
      </div>
      {query ? (
        <>
          <p className="text-gray-500 mb-6">
            「{query}」の検索結果: {results.length}件
          </p>
          {results.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-2">
                該当するツールが見つかりませんでした。
              </p>
              <p className="text-gray-400">
                別のキーワードで検索してみてください。
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          )}
        </>
      ) : (
        <p className="text-gray-500 text-center py-12">
          キーワードを入力して検索してください。
        </p>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-12 text-center text-gray-500">
          読み込み中...
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
