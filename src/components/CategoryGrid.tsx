import Link from "next/link";
import { Category, CATEGORY_LABELS } from "@/types/tool";
import { tools } from "@/data/tools";

interface CategoryGroup {
  title: string;
  categories: Category[];
}

const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    title: "GENERATION",
    categories: ["text-generation", "image-generation", "video-generation", "audio-generation"],
  },
  {
    title: "DEVELOPMENT",
    categories: ["code-assistant", "chatbot", "data-analysis"],
  },
  {
    title: "PRODUCTIVITY",
    categories: ["productivity", "meeting-assistant", "writing-assistant"],
  },
  {
    title: "BUSINESS",
    categories: ["marketing", "customer-support", "research"],
  },
  {
    title: "CREATIVE",
    categories: ["design", "education", "translation"],
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {CATEGORY_GROUPS.map((group) => (
        <div
          key={group.title}
          className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
        >
          <h3 className="text-xs font-black text-primary uppercase tracking-wider mb-3 pb-2 border-b border-gray-100">
            {group.title}
          </h3>
          <ul className="space-y-1.5">
            {group.categories.map((cat) => {
              const count = tools.filter(
                (t) => t.category === cat || t.subcategories.includes(cat)
              ).length;
              return (
                <li key={cat}>
                  <Link
                    href={`/categories/${cat}`}
                    className="flex items-center justify-between text-sm text-gray-700 hover:text-primary transition-colors py-0.5"
                  >
                    <span>{CATEGORY_LABELS[cat]}</span>
                    <span className="text-xs text-gray-400">{count}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
