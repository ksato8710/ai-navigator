import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              🧭 AI Navigator
            </h3>
            <p className="text-sm text-gray-500">
              日本語で、あなたに最適なAIツールが30秒で見つかる。
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              カテゴリ
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/categories/chatbot"
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  💬 チャットボット
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/image-generation"
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  🎨 画像生成
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/code-assistant"
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  💻 コード支援
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/productivity"
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  ⚡ 生産性向上
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              関連サイト
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://essential-navigator.com"
                  className="text-sm text-gray-500 hover:text-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Essential Navigator
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
          © 2026 AI Navigator. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
