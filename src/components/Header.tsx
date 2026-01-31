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
        </div>
      </div>
    </header>
  );
}
