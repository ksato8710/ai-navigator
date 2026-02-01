import Link from "next/link";
import { tools } from "@/data/tools";
import { CATEGORY_LABELS, PRICING_LABELS, getScoreColor } from "@/types/tool";

export const metadata = {
  title: "AIツールランキング — AI Navigator",
  description:
    "AIツールを独自スコアでランキング。機能性・使いやすさ・コスパで総合評価。",
};

export default function RankingPage() {
  const rankedTools = [...tools]
    .filter((t) => t.score)
    .sort((a, b) => (b.score?.overall || 0) - (a.score?.overall || 0));

  return (
    <div>
      <section className="bg-gray-50 border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-black text-gray-900 uppercase tracking-tight mb-2">
            AI Tool <span className="text-primary">Rankings</span>
          </h1>
          <p className="text-sm text-gray-500">
            {rankedTools.length} tools ranked by overall score
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-2 text-xs font-black text-gray-500 uppercase tracking-wider border-b border-gray-200">
          <div className="col-span-1">#</div>
          <div className="col-span-3">Tool</div>
          <div className="col-span-2">Category</div>
          <div className="col-span-1 text-center">Overall</div>
          <div className="col-span-1 text-center">機能性</div>
          <div className="col-span-1 text-center">使いやすさ</div>
          <div className="col-span-1 text-center">コスパ</div>
          <div className="col-span-2 text-right">Pricing</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-100">
          {rankedTools.map((tool, index) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.slug}`}
              className="grid grid-cols-12 gap-4 px-4 py-3 items-center hover:bg-gray-50 transition-colors"
            >
              {/* Rank */}
              <div className="col-span-1">
                <span className={`text-sm font-black ${index < 3 ? "text-primary" : "text-gray-400"}`}>
                  {index + 1}
                </span>
              </div>

              {/* Name */}
              <div className="col-span-5 md:col-span-3">
                <p className="font-bold text-sm text-gray-900">{tool.name}</p>
                <p className="text-xs text-gray-500 truncate md:hidden">
                  {CATEGORY_LABELS[tool.category]}
                </p>
              </div>

              {/* Category */}
              <div className="hidden md:block col-span-2">
                <span className="text-xs text-gray-500">{CATEGORY_LABELS[tool.category]}</span>
              </div>

              {/* Scores */}
              {tool.score && (
                <>
                  <div className="col-span-2 md:col-span-1 flex justify-center">
                    <span className={`score-badge w-10 h-7 text-xs rounded ${getScoreColor(tool.score.overall)}`}>
                      {tool.score.overall.toFixed(1)}
                    </span>
                  </div>
                  <div className="hidden md:flex col-span-1 justify-center">
                    <span className={`score-badge w-10 h-7 text-xs rounded ${getScoreColor(tool.score.functionality)}`}>
                      {tool.score.functionality.toFixed(1)}
                    </span>
                  </div>
                  <div className="hidden md:flex col-span-1 justify-center">
                    <span className={`score-badge w-10 h-7 text-xs rounded ${getScoreColor(tool.score.usability)}`}>
                      {tool.score.usability.toFixed(1)}
                    </span>
                  </div>
                  <div className="hidden md:flex col-span-1 justify-center">
                    <span className={`score-badge w-10 h-7 text-xs rounded ${getScoreColor(tool.score.costPerformance)}`}>
                      {tool.score.costPerformance.toFixed(1)}
                    </span>
                  </div>
                </>
              )}

              {/* Pricing & JP */}
              <div className="col-span-4 md:col-span-2 flex items-center justify-end gap-2">
                {tool.japaneseSupport && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-50 text-red-600 font-bold">
                    JP
                  </span>
                )}
                <span className="text-xs text-gray-500 font-medium">
                  {PRICING_LABELS[tool.pricing]}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
