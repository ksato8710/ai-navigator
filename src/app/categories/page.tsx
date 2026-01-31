import Link from "next/link";
import { Category, CATEGORY_ICONS, CATEGORY_LABELS } from "@/types/tool";
import { tools } from "@/data/tools";

export const metadata = {
  title: "カテゴリ一覧 — AI Navigator",
  description: "AIツールをカテゴリ別に探す。画像生成、文章作成、コード支援、翻訳など。",
};

const ALL_CATEGORIES = Object.keys(CATEGORY_LABELS) as Category[];

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">📂 カテゴリ一覧</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ALL_CATEGORIES.map((cat) => {
          const count = tools.filter(
            (t) => t.category === cat || t.subcategories.includes(cat)
          ).length;
          return (
            <Link
              key={cat}
              href={`/categories/${cat}`}
              className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <span className="text-3xl">{CATEGORY_ICONS[cat]}</span>
              <div>
                <p className="font-semibold text-gray-900">
                  {CATEGORY_LABELS[cat]}
                </p>
                <p className="text-sm text-gray-500">{count}ツール</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
