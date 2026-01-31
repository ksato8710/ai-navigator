import Link from "next/link";
import { AITool, CATEGORY_ICONS, CATEGORY_LABELS, PRICING_LABELS } from "@/types/tool";

interface ToolCardProps {
  tool: AITool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const pricingColor = {
    free: "bg-green-100 text-green-800",
    freemium: "bg-blue-100 text-blue-800",
    paid: "bg-orange-100 text-orange-800",
    enterprise: "bg-purple-100 text-purple-800",
  }[tool.pricing];

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="block bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 p-5"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
          {CATEGORY_ICONS[tool.category]}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {tool.name}
            </h3>
            {tool.featured && (
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full font-medium">
                ⭐ 注目
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {tool.descriptionJa}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${pricingColor}`}>
              {PRICING_LABELS[tool.pricing]}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
              {CATEGORY_LABELS[tool.category]}
            </span>
            {tool.japaneseSupport && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-red-50 text-red-600">
                🇯🇵 日本語対応
              </span>
            )}
            {tool.rating && (
              <span className="text-xs text-gray-500">
                ★ {tool.rating}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
