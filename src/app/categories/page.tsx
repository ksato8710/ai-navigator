import Link from "next/link";
import { Category, CATEGORY_LABELS } from "@/types/tool";
import { tools } from "@/data/tools";

export const metadata = {
  title: "All Categories — AI Navigator",
  description: "AIツールをカテゴリ別に探す。画像生成、文章作成、コード支援、翻訳など。",
};

const ALL_CATEGORIES = Object.keys(CATEGORY_LABELS) as Category[];

export default function CategoriesPage() {
  return (
    <div>
      <section className="bg-gray-50 border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-black text-gray-900 uppercase tracking-tight mb-2">
            Browse All <span className="text-primary">Categories</span>
          </h1>
          <p className="text-sm text-gray-500">
            {ALL_CATEGORIES.length} categories, {tools.length}+ tools
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {ALL_CATEGORIES.map((cat) => {
            const count = tools.filter(
              (t) => t.category === cat || t.subcategories.includes(cat)
            ).length;
            const topTool = tools
              .filter((t) => t.category === cat)
              .sort((a, b) => (b.score?.overall || 0) - (a.score?.overall || 0))[0];

            return (
              <Link
                key={cat}
                href={`/categories/${cat}`}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <h3 className="font-black text-gray-900 text-sm uppercase mb-1">
                  {CATEGORY_LABELS[cat]}
                </h3>
                <p className="text-xs text-gray-500 mb-3">{count} tools</p>
                {topTool && (
                  <p className="text-xs text-gray-400">
                    Top: <span className="text-gray-600 font-medium">{topTool.name}</span>
                    {topTool.score && (
                      <span className="ml-1 text-score-good font-bold">{topTool.score.overall.toFixed(1)}</span>
                    )}
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
