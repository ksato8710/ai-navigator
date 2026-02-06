import SearchBar from "@/components/SearchBar";
import CategoryGrid from "@/components/CategoryGrid";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/data/tools";
import { news } from "@/data/news";
import { Category, CATEGORY_LABELS } from "@/types/tool";
import Link from "next/link";

export default function Home() {
  const featuredTools = tools.filter((t) => t.featured);
  const recentTools = [...tools]
    .sort((a, b) => b.addedAt.localeCompare(a.addedAt))
    .slice(0, 8);
  const latestNews = [...news]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 6);

  // Category counts
  const categoryCount = new Set(tools.map((t) => t.category)).size;

  // Top picks per category (top 3 categories)
  const topCategories: Category[] = ["chatbot", "image-generation", "code-assistant", "video-generation"];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-50 py-16 sm:py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 uppercase tracking-tight leading-tight">
            Find The Best<br />
            <span className="text-primary">AI Tool</span> For Your Needs
          </h1>
          <p className="text-base sm:text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            独自スコアで評価・比較。あなたに最適なAIツールが見つかる。
          </p>
          <SearchBar />
          <div className="mt-5 flex flex-wrap justify-center gap-2 text-sm">
            <Link href="/categories/chatbot" className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1.5 rounded-full transition-colors font-medium">
              ChatBot
            </Link>
            <Link href="/categories/image-generation" className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1.5 rounded-full transition-colors font-medium">
              画像生成
            </Link>
            <Link href="/categories/code-assistant" className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1.5 rounded-full transition-colors font-medium">
              コード支援
            </Link>
            <Link href="/categories/video-generation" className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1.5 rounded-full transition-colors font-medium">
              動画生成
            </Link>
            <Link href="/free" className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1.5 rounded-full transition-colors font-medium">
              無料ツール
            </Link>
            <Link href="/japanese" className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1.5 rounded-full transition-colors font-medium">
              日本語対応
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-center">
            <div>
              <span className="text-xl sm:text-2xl font-black text-gray-900">{tools.length}+</span>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Tools Indexed</p>
            </div>
            <div className="hidden sm:block w-px bg-gray-200" />
            <div>
              <span className="text-xl sm:text-2xl font-black text-gray-900">{categoryCount}</span>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Categories</p>
            </div>
            <div className="hidden sm:block w-px bg-gray-200" />
            <div>
              <span className="text-xl sm:text-2xl font-black text-gray-900">0-10</span>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Score System</p>
            </div>
            <div className="hidden sm:block w-px bg-gray-200" />
            <div>
              <span className="text-xl sm:text-2xl font-black text-gray-900">100%</span>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Independent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight">
            Browse Categories
          </h2>
          <Link href="/categories" className="text-sm text-primary hover:text-primary-dark font-bold uppercase">
            View All &rarr;
          </Link>
        </div>
        <CategoryGrid />
      </section>

      {/* Two Column: What's New + Latest News */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* What's New */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight">
                What&apos;s New
              </h2>
              <Link href="/search" className="text-sm text-primary hover:text-primary-dark font-bold uppercase">
                See All &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {recentTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>

          {/* Latest News Sidebar */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight">
                AI News
              </h2>
              <Link href="/news" className="text-sm text-primary hover:text-primary-dark font-bold uppercase">
                More &rarr;
              </Link>
            </div>
            <div className="space-y-3">
              {latestNews.map((item) => (
                <Link
                  key={item.id}
                  href="/news"
                  className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  {item.image && (
                    <div className="aspect-[2/1] overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded uppercase">
                        {item.category}
                      </span>
                      <span className="text-[11px] text-gray-400">{item.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            {/* Useful Tools Sidebar */}
            <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider mb-3">
                Useful Tools
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/ranking" className="text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Top Ranked Tools
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Category Index
                  </Link>
                </li>
                <li>
                  <Link href="/free" className="text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Free Tools List
                  </Link>
                </li>
                <li>
                  <Link href="/japanese" className="text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    日本語対応 Tools
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category Sections - Top Picks per Category */}
      {topCategories.map((cat) => {
        const catTools = tools
          .filter((t) => t.category === cat || t.subcategories.includes(cat))
          .sort((a, b) => (b.rating || 0) - (a.rating || 0))
          .slice(0, 4);

        if (catTools.length === 0) return null;

        return (
          <section key={cat} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-100">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight">
                {CATEGORY_LABELS[cat]} — Top Picks
              </h2>
              <Link
                href={`/categories/${cat}`}
                className="text-sm text-primary hover:text-primary-dark font-bold uppercase"
              >
                View All &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {catTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>
        );
      })}

      {/* Featured Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-100">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight">
            Featured Tools
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {featuredTools.slice(0, 6).map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* SEO content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-8">
          <h2 className="text-lg font-black text-gray-900 uppercase mb-4">
            About AI Navigator
          </h2>
          <div className="text-sm text-gray-600 space-y-3 leading-relaxed">
            <p>
              AI Navigatorは、最新のAIツール情報を独自スコアで評価・比較できるプラットフォームです。
              ChatGPT、Claude、Sora、Devinなど、定番ツールから最新の注目ツールまで、
              機能性・使いやすさ・コスパの3軸で客観的に評価しています。
            </p>
            <p>
              「AIで動画を作りたい」「コーディングを自動化したい」「議事録をAIに任せたい」——
              そんな具体的な課題から、最適なAIツールを見つけましょう。
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-5">
            <Link href="/ranking" className="text-sm text-primary hover:text-primary-dark font-bold uppercase">
              View Rankings &rarr;
            </Link>
            <Link href="/categories" className="text-sm text-primary hover:text-primary-dark font-bold uppercase">
              Browse Categories &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
