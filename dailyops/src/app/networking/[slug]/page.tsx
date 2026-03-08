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
      <header className="space-y-4 mb-10">
        <p className="text-sm text-[#2BD9C5] uppercase tracking-wide">
          {post.meta.category}
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          {post.meta.title}
        </h1>

        <p className="text-gray-400">
          {post.meta.date}
        </p>

        <p className="text-lg text-gray-300">
          {post.meta.excerpt}
        </p>
      </header>

      <div className="prose prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}