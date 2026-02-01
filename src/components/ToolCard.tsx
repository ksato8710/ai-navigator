import Link from "next/link";
import { AITool, CATEGORY_LABELS, PRICING_LABELS, getScoreColor } from "@/types/tool";

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

  const overallScore = tool.score?.overall;

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="block bg-white border border-gray-200 rounded-lg hover:border-primary/30 hover:shadow-md transition-all duration-200 p-4"
    >
      <div className="flex items-start gap-3">
        {/* Score Badge */}
        {overallScore !== undefined && (
          <div
            className={`score-badge w-11 h-11 text-sm rounded-md flex-shrink-0 ${getScoreColor(overallScore)}`}
          >
            {overallScore.toFixed(1)}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-gray-900 text-sm truncate">
              {tool.name}
            </h3>
            {tool.featured && (
              <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded font-bold uppercase leading-none flex-shrink-0">
                Featured
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 mb-2 line-clamp-2 leading-relaxed">
            {tool.descriptionJa}
          </p>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${pricingColor}`}>
              {PRICING_LABELS[tool.pricing]}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-medium">
              {CATEGORY_LABELS[tool.category]}
            </span>
            {tool.japaneseSupport && (
              <span className="text-[10px] px-2 py-0.5 rounded bg-red-50 text-red-600 font-medium">
                JP
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
