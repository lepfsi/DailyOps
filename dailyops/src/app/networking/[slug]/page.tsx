import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostsByCategory } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getPostsByCategory("networking");

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function NetworkingPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug("networking", slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-6 py-16 max-w-4xl">
      <div className="mb-8">
        <Link
          href="/networking"
          className="text-sm text-[#2BD9C5] hover:opacity-90 transition"
        >
          ← Retour à Networking
        </Link>
      </div>

      <header className="relative overflow-hidden rounded-2xl border border-[#1b2a60] bg-[#0A1128]/40 backdrop-blur p-8 md:p-10 mb-10">
        <div className="pointer-events-none absolute -inset-24 opacity-60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(43,217,197,0.16),transparent_55%)]" />
        </div>

        <div className="relative space-y-5">
          <p className="text-sm text-[#2BD9C5] uppercase tracking-[0.2em]">
            {post.meta.category}
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {post.meta.title}
          </h1>

          <p className="text-gray-400 text-sm">
            {post.meta.date}
          </p>

          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            {post.meta.excerpt}
          </p>

          {post.meta.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {post.meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-[#1b2a60] bg-[#0A1128]/30 text-sm text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="article-content">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}