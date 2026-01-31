# CLAUDE.md - AI Navigator Project

## プロジェクト概要
日本語のAIツールディレクトリサイト。Next.js (App Router) + TypeScript + Tailwind CSS。
Vercelにデプロイ。データはtools.tsのJSONで管理（DB不使用）。

## 技術スタック
- Next.js 14+ (App Router, SSG)
- TypeScript
- Tailwind CSS
- Vercel (デプロイ先)

## データ構造
- `src/data/tools.ts` — 全ツールデータ（AITool[]型）
- `src/types/tool.ts` — 型定義（Category, PricingType等）

## 重要なルール
- tools.tsに新ツールを追加する際は既存のフォーマットに厳密に従う
- Category型に含まれないカテゴリは使わない
- 日本語の説明(descriptionJa)は必須
- git commit時はフェーズごとにまとめる
- `npm run build` が通ることを確認してからcommit

## 既存ページ
- `/` — トップページ
- `/tools/[slug]` — ツール詳細
- `/categories/[category]` — カテゴリ別一覧
- `/search` — 検索
- `/ranking` — ランキング
- `/free` — 無料ツール
- `/japanese` — 日本語対応ツール
