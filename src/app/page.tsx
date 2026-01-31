import SearchBar from "@/components/SearchBar";
import CategoryGrid from "@/components/CategoryGrid";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/data/tools";
import { news } from "@/data/news";
import Link from "next/link";

export default function Home() {
  const featuredTools = tools.filter((t) => t.featured);
  const recentTools = [...tools]
    .sort((a, b) => b.addedAt.localeCompare(a.addedAt))
    .slice(0, 8);
  const latestNews = [...news]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 text-sm">
            <span className="animate-pulse">🔴</span>
            <span>毎日更新中 — {tools.length}ツール掲載</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            最新AIツール情報を
            <br className="hidden sm:block" />
            <span className="text-yellow-300">いち早く</span>キャッチ
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            話題のAIツールからニッチな専門ツールまで、
            <br className="hidden sm:block" />
            日本語で検索・比較。毎日新しいツールを追加中。
          </p>
          <SearchBar />
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <Link href="/news" className="bg-white/15 hover:bg-white/25 px-3 py-1 rounded-full transition-colors">
              📰 最新ニュース
            </Link>
            <Link href="/categories/code-assistant" className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors">
              💻 AIコーディング
            </Link>
            <Link href="/categories/video-generation" className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors">
              🎬 動画生成
            </Link>
            <Link href="/free" className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors">
              🆓 無料ツール
            </Link>
          </div>
        </div>
      </section>

      {/* Recently Added Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            🆕 最近追加されたツール
          </h2>
          <Link href="/search" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            すべて見る →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            📰 AIニュース
          </h2>
          <Link href="/news" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            すべてのニュース →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {latestNews.map((item) => (
            <Link
              key={item.id}
              href="/news"
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>
              <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          📂 カテゴリから探す
        </h2>
        <CategoryGrid />
      </section>

      {/* Featured Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          ⭐ 注目のAIツール
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* All Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            🗂️ すべてのAIツール
          </h2>
          <span className="text-sm text-gray-500">{tools.length}件</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* SEO content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl p-8 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            AI Navigatorとは？
          </h2>
          <p className="text-gray-600 mb-4">
            AI Navigatorは、最新のAIツール情報を日本語で検索・比較できるディレクトリサイトです。
            ChatGPT、Claude、Sora、Devinなど、定番ツールから最新の注目ツールまで、
            カテゴリ・価格・日本語対応の有無で簡単に絞り込めます。
          </p>
          <p className="text-gray-600 mb-4">
            「AIで動画を作りたい」「コーディングを自動化したい」「議事録をAIに任せたい」——
            そんな具体的な課題から、最適なAIツールを見つけましょう。
          </p>
          <p className="text-gray-600 mb-4">
            毎日新しいツールとAIニュースを追加。常に最新のAI情報をお届けします。
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Link href="/news" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              📰 最新ニュースを読む →
            </Link>
            <Link href="/categories" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              📂 カテゴリ一覧を見る →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
