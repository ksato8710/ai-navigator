import { notFound } from "next/navigation";
import Link from "next/link";
import { tools } from "@/data/tools";
import {
  CATEGORY_LABELS,
  PRICING_LABELS,
  getScoreColor,
  getScoreLabel,
} from "@/types/tool";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) return {};
  return {
    title: `${tool.name} レビュー＆スコア — AI Navigator`,
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
    free: "bg-green-100 text-green-800",
    freemium: "bg-blue-100 text-blue-800",
    paid: "bg-orange-100 text-orange-800",
    enterprise: "bg-purple-100 text-purple-800",
  }[tool.pricing];

  const score = tool.score;

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-xs text-gray-500 uppercase tracking-wide">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/categories/${tool.category}`} className="hover:text-primary">
              {CATEGORY_LABELS[tool.category]}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-bold">{tool.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-5">
                {/* Score */}
                {score && (
                  <div className="flex-shrink-0 text-center">
                    <div className={`score-badge w-16 h-16 text-xl rounded-lg ${getScoreColor(score.overall)}`}>
                      {score.overall.toFixed(1)}
                    </div>
                    <p className="text-[10px] text-gray-500 mt-1 font-bold uppercase">
                      {getScoreLabel(score.overall)}
                    </p>
                  </div>
                )}

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl sm:text-3xl font-black text-gray-900">{tool.name}</h1>
                    {tool.featured && (
                      <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded font-bold uppercase">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{tool.descriptionJa}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-xs px-2.5 py-1 rounded font-bold ${pricingColor}`}>
                      {PRICING_LABELS[tool.pricing]}
                    </span>
                    {tool.japaneseSupport && (
                      <span className="text-xs px-2.5 py-1 rounded bg-red-50 text-red-600 font-bold">
                        JP 日本語対応
                      </span>
                    )}
                    {tool.hasFreePlan && (
                      <span className="text-xs px-2.5 py-1 rounded bg-green-50 text-green-600 font-bold">
                        FREE 無料プランあり
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-gray-100">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold text-sm rounded hover:bg-primary-dark transition-colors uppercase"
                >
                  Visit Official Site &rarr;
                </a>
              </div>
            </div>

            {/* Score Breakdown */}
            {score && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h2 className="text-sm font-black text-gray-900 uppercase tracking-tight mb-4">
                  Score Breakdown
                </h2>
                <div className="space-y-3">
                  {[
                    { label: "機能性 (Functionality)", value: score.functionality },
                    { label: "使いやすさ (Usability)", value: score.usability },
                    { label: "コスパ (Cost Performance)", value: score.costPerformance },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <span className="text-sm text-gray-600 w-48 flex-shrink-0">{item.label}</span>
                      <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            item.value >= 8 ? "bg-score-good" : item.value >= 6 ? "bg-score-ok" : "bg-score-bad"
                          }`}
                          style={{ width: `${item.value * 10}%` }}
                        />
                      </div>
                      <span className={`text-sm font-bold w-10 text-right ${
                        item.value >= 8 ? "text-score-good" : item.value >= 6 ? "text-score-ok" : "text-score-bad"
                      }`}>
                        {item.value.toFixed(1)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pricing & Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h2 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-2">
                  Pricing
                </h2>
                <p className="text-sm text-gray-600">{tool.pricingDetail}</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h2 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-2">
                  Category
                </h2>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href={`/categories/${tool.category}`}
                    className="text-xs px-2.5 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium"
                  >
                    {CATEGORY_LABELS[tool.category]}
                  </Link>
                  {tool.subcategories.map((sub) => (
                    <Link
                      key={sub}
                      href={`/categories/${sub}`}
                      className="text-xs px-2.5 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium"
                    >
                      {CATEGORY_LABELS[sub as keyof typeof CATEGORY_LABELS] || sub}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h2 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-3">
                Features
              </h2>
              <div className="flex flex-wrap gap-2">
                {tool.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-3 py-1.5 rounded bg-blue-50 text-blue-700 border border-blue-100 font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h2 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-3">
                Use Cases
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {tool.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-score-good rounded-full flex-shrink-0" />
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h2 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-3">
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Alternatives */}
            {alternatives.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-4">
                  Similar Tools
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {alternatives.map((alt) =>
                    alt ? (
                      <Link
                        key={alt.id}
                        href={`/tools/${alt.slug}`}
                        className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-primary/30 hover:shadow-sm transition-all"
                      >
                        {alt.score && (
                          <div className={`score-badge w-9 h-9 text-xs rounded ${getScoreColor(alt.score.overall)}`}>
                            {alt.score.overall.toFixed(1)}
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-sm text-gray-900">{alt.name}</p>
                          <p className="text-xs text-gray-500">
                            {PRICING_LABELS[alt.pricing]}
                            {alt.japaneseSupport ? " · JP" : ""}
                          </p>
                        </div>
                      </Link>
                    ) : null
                  )}
                </div>
              </div>
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
                  <Link href={`/categories/${tool.category}`} className="text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    More {CATEGORY_LABELS[tool.category]}
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
