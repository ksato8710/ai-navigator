import ToolCard from "@/components/ToolCard";
import { tools } from "@/data/tools";
import Link from "next/link";

export const metadata = {
  title: "無料で使えるAIツール一覧 — AI Navigator",
  description:
    "完全無料またはフリーミアムで使えるAIツールをスコア付きで比較。",
};

export default function FreePage() {
  const freeTools = [...tools]
    .filter((t) => t.hasFreePlan)
    .sort((a, b) => (b.score?.overall || 0) - (a.score?.overall || 0));

  return (
    <div>
      <section className="bg-gray-50 border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-black text-gray-900 uppercase tracking-tight mb-2">
            Free <span className="text-primary">AI Tools</span>
          </h1>
          <p className="text-sm text-gray-500">
            無料プランのあるAIツール {freeTools.length}件をスコア順で表示
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
            {freeTools.length} tools found
          </p>
          <Link href="/ranking" className="text-xs text-primary hover:text-primary-dark font-bold uppercase">
            View All Rankings &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {freeTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}
