import { getScoreColor } from "@/types/tool";

interface ScoreBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg";
}

export default function ScoreBadge({ score, size = "md" }: ScoreBadgeProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-lg",
  }[size];

  return (
    <div
      className={`score-badge ${sizeClasses} ${getScoreColor(score)} rounded-md flex-shrink-0`}
    >
      {score.toFixed(1)}
    </div>
  );
}
