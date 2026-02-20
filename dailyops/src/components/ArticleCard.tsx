import Link from "next/link";

interface ArticleCardProps {
  title: string;
  category: string;
  href?: string;
  excerpt?: string;
  readTime?: string;
  date?: string;
  variant?: "default" | "featured";
}

export default function ArticleCard({
  title,
  category,
  href = "#",
  excerpt,
  readTime = "6 min",
  date = "Recent",
  variant = "default",
}: ArticleCardProps) {
  const featured = variant === "featured";

  return (
    <Link
      href={href}
      className={[
        "group block relative overflow-hidden rounded-2xl border border-[#1b2a60] backdrop-blur transition hover:border-[#2BD9C5]/60",
        featured ? "bg-[#0A1128]/40 p-8" : "bg-[#0A1128]/30 p-6",
      ].join(" ")}
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-100 transition duration-300">
        <div
          className={[
            "absolute inset-0",
            featured
              ? "bg-[radial-gradient(circle_at_30%_20%,rgba(43,217,197,0.22),transparent_55%)]"
              : "bg-[radial-gradient(circle_at_20%_10%,rgba(43,217,197,0.16),transparent_60%)]",
          ].join(" ")}
        />
      </div>

      <div className="relative space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold tracking-wide text-[#2BD9C5] uppercase">
            {featured ? `FEATURED • ${category}` : category}
          </p>
          <p className="text-xs text-gray-500">
            {readTime} • {date}
          </p>
        </div>

        <h3
          className={[
            "font-extrabold tracking-tight text-white leading-snug",
            featured ? "text-2xl md:text-3xl" : "text-lg",
          ].join(" ")}
        >
          {title}
        </h3>

        <p className={featured ? "text-gray-300 leading-relaxed" : "text-sm text-gray-300 leading-relaxed"}>
          {excerpt ?? "Article en préparation — description courte à ajouter."}
        </p>

        <div className="flex items-center justify-between pt-1">
          <p className="text-sm text-gray-500">{featured ? "Publié récemment" : ""}</p>
          <span className="text-sm text-[#2BD9C5] font-medium">
            Lire →
          </span>
        </div>
      </div>

      {/* bottom accent */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#2BD9C5]/0 via-[#2BD9C5]/70 to-[#2BD9C5]/0 opacity-30 group-hover:opacity-60 transition" />
    </Link>
  );
}