import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🧭</span>
            <span className="text-xl font-bold text-gray-900">
              AI Navigator
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/categories"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              カテゴリ
            </Link>
            <Link
              href="/ranking"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              ランキング
            </Link>
            <Link
              href="/news"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center gap-1"
            >
              📰 ニュース
              <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold leading-none">
                NEW
              </span>
            </Link>
            <Link
              href="/free"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              無料ツール
            </Link>
            <Link
              href="/japanese"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              日本語対応
            </Link>
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Link
              href="/search"
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
