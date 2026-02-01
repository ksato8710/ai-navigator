import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Navigator — Find The Best AI Tool For Your Needs",
  description:
    "日本語で使えるAIツールを独自スコアで評価・比較。画像生成、文章作成、コード支援、翻訳など、目的に合ったAIツールを見つけよう。",
  keywords: [
    "AIツール",
    "AI比較",
    "AIレビュー",
    "AIスコア",
    "ChatGPT",
    "画像生成AI",
    "AIツール一覧",
    "AIランキング",
  ],
  openGraph: {
    title: "AI Navigator — Find The Best AI Tool For Your Needs",
    description: "AIツールを独自スコアで評価・比較。日本語対応ツールを簡単検索。",
    siteName: "AI Navigator",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
