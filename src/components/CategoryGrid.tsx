import Link from "next/link";
import { Category, CATEGORY_ICONS, CATEGORY_LABELS } from "@/types/tool";
import { tools } from "@/data/tools";

const FEATURED_CATEGORIES: Category[] = [
  "chatbot",
  "image-generation",
  "code-assistant",
  "video-generation",
  "audio-generation",
  "productivity",
  "research",
  "translation",
  "meeting-assistant",
  "marketing",
  "design",
  "education",
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {FEATURED_CATEGORIES.map((cat) => {
        const count = tools.filter(
          (t) => t.category === cat || t.subcategories.includes(cat)
        ).length;
        return (
          <Link
            key={cat}
            href={`/categories/${cat}`}
            className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 text-center"
          >
            <span className="text-3xl">{CATEGORY_ICONS[cat]}</span>
            <span className="text-sm font-medium text-gray-700">
              {CATEGORY_LABELS[cat]}
            </span>
            <span className="text-xs text-gray-400">{count}ツール</span>
          </Link>
        );
      })}
    </div>
  );
}
