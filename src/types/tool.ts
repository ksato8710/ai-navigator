export interface AITool {
  id: string;
  slug: string;
  name: string;
  description: string;
  descriptionJa: string;
  category: Category;
  subcategories: string[];
  url: string;
  pricing: PricingType;
  pricingDetail: string;
  hasFreePlan: boolean;
  japaneseSupport: boolean;
  logoUrl?: string;
  screenshotUrl?: string;
  features: string[];
  useCases: string[];
  alternatives: string[]; // slugs of alternative tools
  rating?: number; // 1-5
  reviewCount?: number;
  addedAt: string; // ISO date
  updatedAt: string; // ISO date
  featured: boolean;
  tags: string[];
}

export type Category =
  | "text-generation"
  | "image-generation"
  | "video-generation"
  | "audio-generation"
  | "code-assistant"
  | "chatbot"
  | "productivity"
  | "research"
  | "marketing"
  | "design"
  | "education"
  | "data-analysis"
  | "translation"
  | "writing-assistant"
  | "meeting-assistant"
  | "customer-support"
  | "other";

export type PricingType = "free" | "freemium" | "paid" | "enterprise";

export const CATEGORY_LABELS: Record<Category, string> = {
  "text-generation": "文章生成",
  "image-generation": "画像生成",
  "video-generation": "動画生成",
  "audio-generation": "音声生成",
  "code-assistant": "コード支援",
  chatbot: "チャットボット",
  productivity: "生産性向上",
  research: "リサーチ",
  marketing: "マーケティング",
  design: "デザイン",
  education: "教育",
  "data-analysis": "データ分析",
  translation: "翻訳",
  "writing-assistant": "文章作成支援",
  "meeting-assistant": "会議支援",
  "customer-support": "カスタマーサポート",
  other: "その他",
};

export const CATEGORY_ICONS: Record<Category, string> = {
  "text-generation": "✍️",
  "image-generation": "🎨",
  "video-generation": "🎬",
  "audio-generation": "🎵",
  "code-assistant": "💻",
  chatbot: "💬",
  productivity: "⚡",
  research: "🔍",
  marketing: "📢",
  design: "🎯",
  education: "📚",
  "data-analysis": "📊",
  translation: "🌐",
  "writing-assistant": "📝",
  "meeting-assistant": "🎙️",
  "customer-support": "🤝",
  other: "🔧",
};

export const PRICING_LABELS: Record<PricingType, string> = {
  free: "無料",
  freemium: "フリーミアム",
  paid: "有料",
  enterprise: "エンタープライズ",
};
