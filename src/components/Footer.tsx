import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🧭</span>
              <span className="text-lg font-bold text-white">
                AI Navigator
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              最新のAIツールを日本語で検索・比較。
              あなたに最適なAIツールが見つかるディレクトリサイト。
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">探す</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/categories"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  📂 カテゴリ一覧
                </Link>
              </li>
              <li>
                <Link
                  href="/ranking"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  🏆 ランキング
                </Link>
              </li>
              <li>
                <Link
                  href="/free"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  🆓 無料ツール
                </Link>
              </li>
              <li>
                <Link
                  href="/japanese"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  🇯🇵 日本語対応
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  📰 AIニュース
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              人気カテゴリ
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/categories/chatbot"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  💬 チャットボット
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/image-generation"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  🎨 画像生成
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/code-assistant"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  💻 コード支援
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/video-generation"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  🎬 動画生成
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/productivity"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  ⚡ 生産性向上
                </Link>
              </li>
            </ul>
          </div>

          {/* Related */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              関連サイト
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://essential-navigator.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Essential Navigator ↗
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-white mb-3">
                情報源
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                ツール情報はAIエージェントにより毎日自動更新。
                ProductHunt、Hacker News、各社公式サイトから最新情報を収集しています。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 AI Navigator. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Powered by 🧭 AI Navigator — テクノロジーの海を照らす
          </p>
        </div>
      </div>
    </footer>
  );
}
