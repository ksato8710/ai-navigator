import ToolCard from "@/components/ToolCard";
import { tools } from "@/data/tools";

export const metadata = {
  title: "無料で使えるAIツール一覧 — AI Navigator",
  description:
    "完全無料またはフリーミアムで使えるAIツールを一覧で比較。ChatGPT、Claude、Stable Diffusionなど、無料プランのあるAIツールを見つけよう。",
};

export default function FreePage() {
  const freeTools = tools.filter((t) => t.hasFreePlan);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        🆓 無料で使えるAIツール
      </h1>
      <p className="text-gray-500 mb-8">
        無料プランまたはフリーミアムで使えるAIツール {freeTools.length}件
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {freeTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
