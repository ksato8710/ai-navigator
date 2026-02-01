"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 flex-shrink-0">
            <span className="text-white text-xl sm:text-2xl font-black tracking-tight uppercase">
              AI Navigator
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/categories"
              className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 text-sm font-semibold rounded transition-colors"
            >
              CATEGORIES
            </Link>
            <Link
              href="/ranking"
              className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 text-sm font-semibold rounded transition-colors"
            >
              RANKING
            </Link>
            <Link
              href="/news"
              className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 text-sm font-semibold rounded transition-colors flex items-center gap-1"
            >
              NEWS
              <span className="bg-white text-primary text-[10px] px-1.5 py-0.5 rounded font-black leading-none">
                NEW
              </span>
            </Link>
            <Link
              href="/free"
              className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 text-sm font-semibold rounded transition-colors"
            >
              FREE TOOLS
            </Link>
            <Link
              href="/japanese"
              className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 text-sm font-semibold rounded transition-colors"
            >
              日本語対応
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-white/80 hover:text-white p-2 rounded transition-colors"
              aria-label="検索"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white/80 hover:text-white p-2 rounded transition-colors"
              aria-label="メニュー"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar Dropdown */}
      {searchOpen && (
        <div className="bg-primary-dark border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="AIツールを検索..."
                className="flex-1 px-4 py-2 rounded bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                autoFocus
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-primary font-bold text-sm rounded hover:bg-gray-100 transition-colors"
              >
                SEARCH
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary-dark border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            <Link href="/categories" onClick={() => setMobileOpen(false)} className="block text-white/90 hover:text-white hover:bg-white/10 px-3 py-2.5 text-sm font-semibold rounded">
              CATEGORIES
            </Link>
            <Link href="/ranking" onClick={() => setMobileOpen(false)} className="block text-white/90 hover:text-white hover:bg-white/10 px-3 py-2.5 text-sm font-semibold rounded">
              RANKING
            </Link>
            <Link href="/news" onClick={() => setMobileOpen(false)} className="block text-white/90 hover:text-white hover:bg-white/10 px-3 py-2.5 text-sm font-semibold rounded">
              NEWS
            </Link>
            <Link href="/free" onClick={() => setMobileOpen(false)} className="block text-white/90 hover:text-white hover:bg-white/10 px-3 py-2.5 text-sm font-semibold rounded">
              FREE TOOLS
            </Link>
            <Link href="/japanese" onClick={() => setMobileOpen(false)} className="block text-white/90 hover:text-white hover:bg-white/10 px-3 py-2.5 text-sm font-semibold rounded">
              日本語対応
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
