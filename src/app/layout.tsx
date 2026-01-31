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
  title: "AI Navigator — あなたに最適なAIツールが30秒で見つかる",
  description:
    "日本語で使えるAIツールを用途別に検索・比較。画像生成、文章作成、コード支援、翻訳など、目的に合ったAIツールを見つけよう。",
  keywords: [
    "AIツール",
    "AI比較",
    "AIおすすめ",
    "ChatGPT",
    "画像生成AI",
    "AIツール一覧",
  ],
  openGraph: {
    title: "AI Navigator — あなたに最適なAIツールが30秒で見つかる",
    description: "日本語で使えるAIツールを用途別に検索・比較。",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gray-50`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
