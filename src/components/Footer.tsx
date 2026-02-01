import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-gray-400 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-3">
              <span className="text-xl font-black text-white uppercase tracking-tight">
                AI Navigator
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              AIツールの独立系レビュー＆比較プラットフォーム。
              全ツールを実際にテスト・評価し、客観的なスコアでランキング。
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              EXPLORE
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/categories" className="text-sm text-gray-500 hover:text-white transition-colors">
                  All Categories
                </Link>
              </li>
              <li>
                <Link href="/ranking" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Top Ranked Tools
                </Link>
              </li>
              <li>
                <Link href="/free" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Free Tools
                </Link>
              </li>
              <li>
                <Link href="/japanese" className="text-sm text-gray-500 hover:text-white transition-colors">
                  日本語対応ツール
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Latest News
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              POPULAR CATEGORIES
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/categories/chatbot" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Chatbots
                </Link>
              </li>
              <li>
                <Link href="/categories/image-generation" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Image Generation
                </Link>
              </li>
              <li>
                <Link href="/categories/code-assistant" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Code Assistants
                </Link>
              </li>
              <li>
                <Link href="/categories/video-generation" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Video Generation
                </Link>
              </li>
              <li>
                <Link href="/categories/productivity" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Productivity
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              ABOUT
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href="https://essential-navigator.com" className="text-sm text-gray-500 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  Essential Navigator
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-gray-600 leading-relaxed">
                ツール情報はAIエージェントにより定期更新。
                各社公式サイト、ProductHunt、Hacker Newsから最新情報を収集しています。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; 2026 AI Navigator. All rights reserved. 100% Independent Reviews.
          </p>
          <p className="text-xs text-gray-600">
            Powered by AI Navigator
          </p>
        </div>
      </div>
    </footer>
  );
}
