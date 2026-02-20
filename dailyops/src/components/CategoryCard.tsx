import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
};

export default function CategoryCard({ title, description, href, icon }: Props) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-[#1b2a60] bg-[#0A1128]/40 backdrop-blur
                 p-6 transition duration-200 hover:border-[#2BD9C5]/60 hover:-translate-y-0.5"
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(43,217,197,0.25),transparent_55%)]" />
      </div>

      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1b2a60] bg-[#111C44] text-[#2BD9C5]">
              {icon ?? <span className="text-lg">⌁</span>}
            </div>
            <h3 className="text-lg font-bold tracking-tight text-white">
              {title}
            </h3>
          </div>

          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        <span className="relative mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#1b2a60] text-gray-300 transition group-hover:border-[#2BD9C5]/60 group-hover:text-[#2BD9C5]">
          →
        </span>
      </div>

      {/* bottom accent */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#2BD9C5]/0 via-[#2BD9C5]/70 to-[#2BD9C5]/0 opacity-40 group-hover:opacity-70 transition" />
    </Link>
  );
}