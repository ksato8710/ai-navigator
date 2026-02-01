import { Metadata } from "next";
import Link from "next/link";
import { news } from "@/data/news";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "AI News — AI Navigator",
  description:
    "AIツールの最新リリース情報、アップデート、業界ニュースを日本語でお届け。",
};

const CATEGORY_TAG_COLORS: Record<string, string> = {
  "コード支援": "bg-purple-100 text-purple-800",
  "動画生成": "bg-pink-100 text-pink-800",
  "画像生成": "bg-orange-100 text-orange-800",
  "音声生成": "bg-green-100 text-green-800",
  "チャットボット": "bg-blue-100 text-blue-800",
  "リサーチ": "bg-teal-100 text-teal-800",
  "生産性向上": "bg-yellow-100 text-yellow-800",
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getRelativeTime(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`;
  return `${Math.floor(diffDays / 365)}y ago`;
}

export default function NewsPage() {
  const sortedNews = [...news].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div>
      <section className="bg-gray-50 border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-black text-gray-900 uppercase tracking-tight mb-2">
            AI <span className="text-primary">News</span>
          </h1>
          <p className="text-sm text-gray-500">
            Latest releases, updates, and industry news
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4">
          {sortedNews.map((item) => {
            const tagColor =
              CATEGORY_TAG_COLORS[item.category] || "bg-gray-100 text-gray-800";
            const relatedTools = item.relatedToolSlugs
              .map((slug) => tools.find((t) => t.slug === slug))
              .filter(Boolean);

            return (
              <article
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${tagColor}`}>
                    {item.category}
                  </span>
                  <time className="text-xs text-gray-500">
                    {formatDate(item.date)}
                  </time>
                  <span className="text-xs text-gray-400">
                    {getRelativeTime(item.date)}
                  </span>
                </div>
                <h2 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {item.summary}
                </p>
                {relatedTools.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] text-gray-400 uppercase font-bold">Related:</span>
                    {relatedTools.map(
                      (tool) =>
                        tool && (
                          <Link
                            key={tool.slug}
                            href={`/tools/${tool.slug}`}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded hover:bg-primary/10 hover:text-primary transition-colors font-medium"
                          >
                            {tool.name}
                          </Link>
                        )
                    )}
                  </div>
                )}
                {item.source && (
                  <p className="mt-2 text-[10px] text-gray-400 uppercase">
                    Source: {item.source}
                  </p>
                )}
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-gray-50 rounded-lg border border-gray-200 p-6 text-center">
          <h2 className="text-sm font-black text-gray-900 uppercase mb-2">
            Explore More Tools
          </h2>
          <p className="text-xs text-gray-500 mb-4">
            ニュースで気になったツールを詳しくチェック
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/categories"
              className="bg-primary text-white px-5 py-2 rounded hover:bg-primary-dark transition-colors text-xs font-bold uppercase"
            >
              Browse Categories
            </Link>
            <Link
              href="/search"
              className="bg-white text-gray-700 px-5 py-2 rounded hover:bg-gray-100 transition-colors text-xs font-bold border border-gray-200 uppercase"
            >
              Search Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
