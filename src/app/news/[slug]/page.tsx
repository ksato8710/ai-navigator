import { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

interface NewsPost {
  title: string;
  slug: string;
  date: string;
  category: string;
  description: string;
  image?: string;
  readTime?: string;
  content: string;
}

async function getNewsPost(slug: string): Promise<NewsPost | null> {
  try {
    const filePath = path.join(process.cwd(), "content", "news", `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    
    const processedContent = await remark().use(html).process(content);
    const htmlContent = processedContent.toString();
    
    return {
      title: data.title,
      slug: data.slug,
      date: data.date,
      category: data.category,
      description: data.description,
      image: data.image,
      readTime: data.readTime,
      content: htmlContent,
    };
  } catch (error) {
    console.error("Error loading news post:", error);
    return null;
  }
}

export async function generateStaticParams() {
  const newsDir = path.join(process.cwd(), "content", "news");
  const filenames = fs.readdirSync(newsDir);
  
  return filenames
    .filter((name) => name.endsWith('.md'))
    .map((name) => ({
      slug: name.replace('.md', ''),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getNewsPost(slug);
  
  if (!post) {
    return {
      title: "記事が見つかりません — AI Navigator",
    };
  }
  
  return {
    title: `${post.title} — AI Navigator`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getNewsPost(slug);
  
  if (!post) {
    notFound();
  }
  
  function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <article>
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded uppercase">
              {post.category}
            </span>
            <time className="text-sm text-gray-500 ml-3">
              {formatDate(post.date)}
            </time>
            {post.readTime && (
              <span className="text-sm text-gray-500 ml-3">
                読了時間: {post.readTime}分
              </span>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>
          {post.image && (
            <div className="mb-6">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}
        </header>
        
        {/* Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-50 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
      
      {/* Back to News */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <a
          href="/news"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← ニュース一覧に戻る
        </a>
      </div>
    </div>
  );
}