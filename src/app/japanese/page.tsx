import ToolCard from "@/components/ToolCard";
import { tools } from "@/data/tools";

export const metadata = {
  title: "日本語対応AIツール一覧 — AI Navigator",
  description:
    "日本語で使えるAIツールを一覧で比較。日本語UIまたは日本語入出力に対応したAIツールを見つけよう。",
};

export default function JapanesePage() {
  const japaneseTools = tools.filter((t) => t.japaneseSupport);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        🇯🇵 日本語対応AIツール
      </h1>
      <p className="text-gray-500 mb-8">
        日本語UIまたは日本語入出力に対応したAIツール {japaneseTools.length}件
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {japaneseTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
