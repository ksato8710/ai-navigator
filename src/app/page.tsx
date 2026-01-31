import SearchBar from "@/components/SearchBar";
import CategoryGrid from "@/components/CategoryGrid";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/data/tools";

export default function Home() {
  const featuredTools = tools.filter((t) => t.featured);
  const recentTools = [...tools]
    .sort((a, b) => b.addedAt.localeCompare(a.addedAt))
    .slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            あなたに最適なAIツールが
            <br className="hidden sm:block" />
            <span className="text-yellow-300">30秒</span>で見つかる
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {tools.length}+のAIツールを日本語で検索・比較。
            <br />
            用途に合ったツールを見つけよう。
          </p>
          <SearchBar />
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <span className="bg-white/10 px-3 py-1 rounded-full">
              🔥 人気: ChatGPT
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full">
              🎨 画像生成
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full">
              💻 コード支援
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full">
              🆓 無料ツール
            </span>
          </div>
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
            AI
            Navigatorは、日本語で使えるAIツールを用途別に検索・比較できるディレクトリサイトです。
            ChatGPT、Claude、Midjourney、Stable
            Diffusionなど、主要なAIツールから最新のニッチなツールまで、
            カテゴリ・価格・日本語対応の有無で簡単に絞り込めます。
          </p>
          <p className="text-gray-600 mb-4">
            「画像を生成したい」「議事録を自動化したい」「コードを書く手助けが欲しい」——
            そんな具体的な課題から、最適なAIツールを見つけましょう。
          </p>
          <p className="text-gray-600">
            すべてのツール情報はAIエージェントにより毎日自動更新。常に最新の情報をお届けします。
          </p>
        </div>
      </section>
    </div>
  );
}
