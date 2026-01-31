import Link from "next/link";
import { tools } from "@/data/tools";
import { CATEGORY_ICONS, CATEGORY_LABELS, PRICING_LABELS } from "@/types/tool";

export const metadata = {
  title: "AIツールランキング — AI Navigator",
  description:
    "人気・評価の高いAIツールをランキング形式で紹介。ユーザー評価順にAIツールを比較。",
};

export default function RankingPage() {
  const rankedTools = [...tools]
    .filter((t) => t.rating)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        🏆 AIツールランキング
      </h1>
      <p className="text-gray-500 mb-8">評価の高い順にAIツールを表示</p>
      <div className="space-y-3">
        {rankedTools.map((tool, index) => (
          <Link
            key={tool.id}
            href={`/tools/${tool.slug}`}
            className="flex items-center gap-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all p-4"
          >
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-600 flex-shrink-0">
              {index + 1}
            </div>
            <div className="w-10 h-10 flex items-center justify-center text-2xl flex-shrink-0">
              {CATEGORY_ICONS[tool.category]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                {tool.japaneseSupport && (
                  <span className="text-xs text-red-500">🇯🇵</span>
                )}
              </div>
              <p className="text-sm text-gray-500 truncate">
                {tool.descriptionJa}
              </p>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <span className="text-sm text-gray-500">
                {CATEGORY_LABELS[tool.category]}
              </span>
              <span className="text-sm font-medium text-gray-500">
                {PRICING_LABELS[tool.pricing]}
              </span>
              <div className="text-right">
                <span className="text-lg font-bold text-yellow-500">
                  ★ {tool.rating}
                </span>
                {tool.reviewCount && (
                  <p className="text-xs text-gray-400">
                    {tool.reviewCount.toLocaleString()}件
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
