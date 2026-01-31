import { notFound } from "next/navigation";
import Link from "next/link";
import { tools } from "@/data/tools";
import {
  CATEGORY_ICONS,
  CATEGORY_LABELS,
  PRICING_LABELS,
} from "@/types/tool";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) return {};
  return {
    title: `${tool.name} — AI Navigator`,
    description: tool.descriptionJa,
  };
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) notFound();

  const alternatives = tool.alternatives
    .map((slug) => tools.find((t) => t.slug === slug))
    .filter(Boolean);

  const pricingColor = {
    free: "bg-green-100 text-green-800 border-green-200",
    freemium: "bg-blue-100 text-blue-800 border-blue-200",
    paid: "bg-orange-100 text-orange-800 border-orange-200",
    enterprise: "bg-purple-100 text-purple-800 border-purple-200",
  }[tool.pricing];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">
          ホーム
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/categories/${tool.category}`}
          className="hover:text-blue-600"
        >
          {CATEGORY_LABELS[tool.category]}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{tool.name}</span>
      </nav>

      {/* Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">
            {CATEGORY_ICONS[tool.category]}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-gray-900">{tool.name}</h1>
              {tool.featured && (
                <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full font-medium">
                  ⭐ 注目
                </span>
              )}
            </div>
            <p className="text-lg text-gray-600 mb-4">{tool.descriptionJa}</p>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`text-sm px-3 py-1 rounded-full font-medium border ${pricingColor}`}
              >
                {PRICING_LABELS[tool.pricing]}
              </span>
              {tool.japaneseSupport && (
                <span className="text-sm px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-100">
                  🇯🇵 日本語対応
                </span>
              )}
              {tool.hasFreePlan && (
                <span className="text-sm px-3 py-1 rounded-full bg-green-50 text-green-600 border border-green-100">
                  🆓 無料プランあり
                </span>
              )}
              {tool.rating && (
                <span className="text-sm text-gray-600">
                  ★ {tool.rating} ({tool.reviewCount?.toLocaleString()}件)
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-6">
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            公式サイトを開く →
          </a>
        </div>
      </div>

      {/* Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Pricing */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            💰 料金プラン
          </h2>
          <p className="text-gray-600">{tool.pricingDetail}</p>
        </div>

        {/* Category */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            📂 カテゴリ
          </h2>
          <div className="flex flex-wrap gap-2">
            <Link
              href={`/categories/${tool.category}`}
              className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              {CATEGORY_ICONS[tool.category]} {CATEGORY_LABELS[tool.category]}
            </Link>
            {tool.subcategories.map((sub) => (
              <Link
                key={sub}
                href={`/categories/${sub}`}
                className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                {CATEGORY_LABELS[sub as keyof typeof CATEGORY_LABELS] || sub}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          ✨ 主な機能
        </h2>
        <div className="flex flex-wrap gap-2">
          {tool.features.map((feature) => (
            <span
              key={feature}
              className="text-sm px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-100"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          💡 こんな用途におすすめ
        </h2>
        <ul className="space-y-2">
          {tool.useCases.map((useCase) => (
            <li key={useCase} className="flex items-center gap-2 text-gray-600">
              <span className="text-green-500">✓</span>
              {useCase}
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">🏷️ タグ</h2>
        <div className="flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Alternatives */}
      {alternatives.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            🔄 類似ツール
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {alternatives.map((alt) =>
              alt ? (
                <Link
                  key={alt.id}
                  href={`/tools/${alt.slug}`}
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-colors"
                >
                  <span className="text-2xl">
                    {CATEGORY_ICONS[alt.category]}
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">{alt.name}</p>
                    <p className="text-sm text-gray-500">
                      {PRICING_LABELS[alt.pricing]}
                      {alt.japaneseSupport ? " · 🇯🇵 日本語" : ""}
                    </p>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        </div>
      )}
    </div>
  );
}
