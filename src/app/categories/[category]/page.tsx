import { notFound } from "next/navigation";
import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/data/tools";
import {
  Category,
  CATEGORY_ICONS,
  CATEGORY_LABELS,
} from "@/types/tool";

const validCategories = Object.keys(CATEGORY_LABELS);

export function generateStaticParams() {
  return validCategories.map((cat) => ({ category: cat }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  const label = CATEGORY_LABELS[params.category as Category];
  if (!label) return {};
  return {
    title: `${label}のAIツール一覧 — AI Navigator`,
    description: `${label}に使えるAIツールを比較・検索。料金プラン、日本語対応、機能で絞り込み。`,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category as Category;
  if (!validCategories.includes(category)) notFound();

  const categoryTools = tools.filter(
    (t) => t.category === category || t.subcategories.includes(category)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">
          ホーム
        </Link>
        <span className="mx-2">/</span>
        <Link href="/categories" className="hover:text-blue-600">
          カテゴリ
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{CATEGORY_LABELS[category]}</span>
      </nav>

      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">{CATEGORY_ICONS[category]}</span>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {CATEGORY_LABELS[category]}のAIツール
          </h1>
          <p className="text-gray-500">{categoryTools.length}件のツール</p>
        </div>
      </div>

      {categoryTools.length === 0 ? (
        <p className="text-gray-500 text-center py-12">
          このカテゴリにはまだツールが登録されていません。
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categoryTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}
