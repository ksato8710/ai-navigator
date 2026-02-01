import { notFound } from "next/navigation";
import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/data/tools";
import {
  Category,
  CATEGORY_LABELS,
} from "@/types/tool";

const validCategories = Object.keys(CATEGORY_LABELS);

export function generateStaticParams() {
  return validCategories.map((cat) => ({ category: cat }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  const label = CATEGORY_LABELS[params.category as Category];
  if (!label) return {};
  return {
    title: `${label}のAIツール一覧 — AI Navigator`,
    description: `${label}に使えるAIツールをスコア付きで比較・検索。機能性・使いやすさ・コスパで評価。`,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category as Category;
  if (!validCategories.includes(category)) notFound();

  const categoryTools = tools.filter(
    (t) => t.category === category || t.subcategories.includes(category)
  );

  const topPicks = [...categoryTools]
    .sort((a, b) => (b.score?.overall || 0) - (a.score?.overall || 0))
    .slice(0, 4);

  const otherTools = categoryTools.filter(
    (t) => !topPicks.find((tp) => tp.id === t.id)
  );

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gray-50 border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-xs text-gray-500 mb-4 uppercase tracking-wide">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/categories" className="hover:text-primary">Categories</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-bold">{CATEGORY_LABELS[category]}</span>
          </nav>
          <h1 className="text-2xl sm:text-4xl font-black text-gray-900 uppercase tracking-tight mb-2">
            Find The Best <span className="text-primary">{CATEGORY_LABELS[category]}</span> AI Tools
          </h1>
          <p className="text-gray-500 text-sm">
            {categoryTools.length}件のツールをスコア付きで比較
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Top Picks */}
            {topPicks.length > 0 && (
              <div className="mb-10">
                <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-4">
                  Top Picks
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {topPicks.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </div>
            )}

            {/* All Tools */}
            {otherTools.length > 0 && (
              <div>
                <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-4">
                  All {CATEGORY_LABELS[category]} Tools
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {otherTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </div>
            )}

            {categoryTools.length === 0 && (
              <p className="text-gray-500 text-center py-12">
                このカテゴリにはまだツールが登録されていません。
              </p>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 sticky top-20">
              <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-4">
                Useful Tools
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/ranking" className="text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Top Ranked Tools
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    All Categories
                  </Link>
                </li>
                <li>
                  <Link href="/free" className="text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Free Tools
                  </Link>
                </li>
                <li>
                  <Link href="/japanese" className="text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    日本語対応ツール
                  </Link>
                </li>
              </ul>

              {/* Related Categories */}
              <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider mt-6 mb-3">
                Other Categories
              </h3>
              <ul className="space-y-2">
                {validCategories
                  .filter((c) => c !== category)
                  .slice(0, 6)
                  .map((c) => (
                    <li key={c}>
                      <Link
                        href={`/categories/${c}`}
                        className="text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        {CATEGORY_LABELS[c as Category]}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
