import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  title: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
  slug: string;
};

const contentRoot = path.join(process.cwd(), "content");

export function getPostsByCategory(category: string): PostMeta[] {
  const categoryPath = path.join(contentRoot, category);

  if (!fs.existsSync(categoryPath)) {
    return [];
  }

  const files = fs
    .readdirSync(categoryPath)
    .filter((file) => file.endsWith(".mdx"));

  const posts = files.map((file) => {
    const filePath = path.join(categoryPath, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);

    return {
      title: data.title ?? "Untitled",
      date: data.date ?? "",
      category: data.category ?? category,
      tags: data.tags ?? [],
      excerpt: data.excerpt ?? "",
      slug: file.replace(/\.mdx$/, ""),
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(category: string, slug: string) {
  const filePath = path.join(contentRoot, category, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      title: data.title ?? "Untitled",
      date: data.date ?? "",
      category: data.category ?? category,
      tags: data.tags ?? [],
      excerpt: data.excerpt ?? "",
      slug,
    },
    content,
  };
}