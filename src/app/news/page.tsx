import { Metadata } from "next";
import Link from "next/link";
import { news } from "@/data/news";
import { tools } from "@/data/tools";
import { CATEGORY_ICONS } from "@/types/tool";

export const metadata: Metadata = {
  title: "AIニュース — 最新のAIツール・サービス情報 | AI Navigator",
  description:
    "AIツールの最新リリース情報、アップデート、業界ニュースを日本語でお届け。ChatGPT、Claude、Sora、Devinなど注目ツールの動向をチェック。",
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
  if (diffDays === 0) return "今日";
  if (diffDays === 1) return "昨日";
  if (diffDays < 7) return `${diffDays}日前`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}週間前`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}ヶ月前`;
  return `${Math.floor(diffDays / 365)}年前`;
}

export default function NewsPage() {
  const sortedNews = [...news].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          📰 AIニュース
        </h1>
        <p className="text-lg text-gray-600">
          AIツールの最新リリース、アップデート、業界の動向をお届けします。
        </p>
      </div>

      {/* News List */}
      <div className="space-y-6">
        {sortedNews.map((item) => {
          const tagColor =
            CATEGORY_TAG_COLORS[item.category] ||
            "bg-gray-100 text-gray-800";
          const relatedTools = item.relatedToolSlugs
            .map((slug) => tools.find((t) => t.slug === slug))
            .filter(Boolean);

          return (
            <article
              key={item.id}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColor}`}
                >
                  {item.category}
                </span>
                <time className="text-sm text-gray-500">
                  {formatDate(item.date)}
                </time>
                <span className="text-xs text-gray-400">
                  {getRelativeTime(item.date)}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {item.summary}
              </p>
              {relatedTools.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-gray-400">関連ツール:</span>
                  {relatedTools.map(
                    (tool) =>
                      tool && (
                        <Link
                          key={tool.slug}
                          href={`/tools/${tool.slug}`}
                          className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full hover:bg-blue-100 transition-colors"
                        >
                          {CATEGORY_ICONS[tool.category]} {tool.name}
                        </Link>
                      )
                  )}
                </div>
              )}
              {item.source && (
                <p className="mt-3 text-xs text-gray-400">
                  出典: {item.source}
                </p>
              )}
            </article>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center border border-blue-100">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          🧭 最新ツールを探す
        </h2>
        <p className="text-gray-600 mb-4">
          ニュースで気になったツールを詳しくチェック
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/categories"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            カテゴリから探す
          </Link>
          <Link
            href="/search"
            className="bg-white text-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium border border-gray-300"
          >
            キーワード検索
          </Link>
        </div>
      </div>
    </div>
  );
}
