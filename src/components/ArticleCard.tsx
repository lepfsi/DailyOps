interface ArticleCardProps {
  title: string;
  category: string;
}

export default function ArticleCard({ title, category }: ArticleCardProps) {
  return (
    <article className="border-b pb-4 last:border-b-0">
      <span className="text-xs font-semibold text-blue-600 uppercase">{category}</span>
      <h3 className="font-medium hover:text-blue-600 cursor-pointer">{title}</h3>
    </article>
  );
}