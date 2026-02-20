import Link from "next/link";

type Variant = "networking" | "cybersecurity" | "infrastructure" | "troubleshooting";

type Props = {
  variant: Variant;
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
};

const accentByVariant: Record<Variant, { a: string; b: string }> = {
  networking: { a: "rgba(43,217,197,0.22)", b: "rgba(0,119,255,0.10)" },
  cybersecurity: { a: "rgba(43,217,197,0.20)", b: "rgba(180,90,255,0.10)" },
  infrastructure: { a: "rgba(43,217,197,0.18)", b: "rgba(255,170,0,0.10)" },
  troubleshooting: { a: "rgba(43,217,197,0.20)", b: "rgba(255,80,120,0.10)" },
};

function Illustration({ variant }: { variant: Variant }) {
  // SVG volontairement minimaliste : “tech” + léger + unique par section
  if (variant === "networking") {
    return (
      <svg viewBox="0 0 520 260" className="w-full h-full">
        <g fill="none" stroke="rgba(43,217,197,0.55)" strokeWidth="2">
          <circle cx="110" cy="80" r="18" />
          <circle cx="240" cy="60" r="18" />
          <circle cx="360" cy="90" r="18" />
          <circle cx="200" cy="160" r="18" />
          <circle cx="330" cy="170" r="18" />
          <path d="M128 80 L222 60 L342 90" />
          <path d="M240 78 L218 142" />
          <path d="M360 108 L348 152" />
          <path d="M218 160 L312 170" />
        </g>
        <g fill="rgba(255,255,255,0.06)">
          <rect x="40" y="210" width="440" height="10" rx="5" />
          <rect x="80" y="230" width="240" height="8" rx="4" />
        </g>
      </svg>
    );
  }

  if (variant === "cybersecurity") {
    return (
      <svg viewBox="0 0 520 260" className="w-full h-full">
        <g fill="none" stroke="rgba(43,217,197,0.55)" strokeWidth="2">
          <path d="M260 35 C210 55 170 60 150 65 V130 C150 185 200 215 260 232 C320 215 370 185 370 130 V65 C350 60 310 55 260 35 Z" />
          <path d="M235 135 L255 155 L290 115" />
        </g>
        <g fill="rgba(255,255,255,0.06)">
          <circle cx="110" cy="70" r="6" />
          <circle cx="410" cy="80" r="6" />
          <circle cx="90" cy="190" r="6" />
        </g>
      </svg>
    );
  }

  if (variant === "infrastructure") {
    return (
      <svg viewBox="0 0 520 260" className="w-full h-full">
        <g fill="none" stroke="rgba(43,217,197,0.55)" strokeWidth="2">
          <rect x="120" y="60" width="280" height="60" rx="12" />
          <rect x="120" y="130" width="280" height="60" rx="12" />
          <path d="M160 90 H360" />
          <path d="M160 160 H360" />
          <circle cx="150" cy="90" r="6" />
          <circle cx="150" cy="160" r="6" />
          <path d="M260 35 V60" />
          <path d="M260 190 V225" />
        </g>
        <g fill="rgba(255,255,255,0.06)">
          <rect x="70" y="40" width="80" height="10" rx="5" />
          <rect x="370" y="210" width="120" height="10" rx="5" />
        </g>
      </svg>
    );
  }

  // troubleshooting
  return (
    <svg viewBox="0 0 520 260" className="w-full h-full">
      <g fill="none" stroke="rgba(43,217,197,0.55)" strokeWidth="2">
        <circle cx="235" cy="125" r="55" />
        <path d="M275 165 L345 225" />
        <path d="M210 125 H260" />
        <path d="M235 100 V150" />
      </g>
      <g fill="rgba(255,255,255,0.06)">
        <rect x="60" y="60" width="120" height="10" rx="5" />
        <rect x="350" y="80" width="110" height="10" rx="5" />
        <rect x="70" y="200" width="170" height="10" rx="5" />
      </g>
    </svg>
  );
}

export default function SectionHero({
  variant,
  eyebrow,
  title,
  subtitle,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: Props) {
  const accent = accentByVariant[variant];

  return (
    <section className="relative overflow-hidden rounded-2xl border border-[#111C44] bg-gradient-to-b from-[#0A1128] to-[#111C44] p-10">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 20% 20%, ${accent.a}, transparent 52%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 85% 35%, ${accent.b}, transparent 60%)`,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#1b2a60] bg-[#0A1128]/40 px-4 py-2 text-sm text-gray-300">
            <span className="text-[#2BD9C5]">●</span>
            {eyebrow}
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {title}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href={primaryCtaHref}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#2BD9C5] text-black font-semibold hover:opacity-90 transition"
            >
              {primaryCtaText}
            </Link>

            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[#1b2a60] text-gray-200 hover:border-[#2BD9C5]/70 hover:text-white transition"
              >
                {secondaryCtaText} →
              </Link>
            )}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl border border-[#1b2a60] bg-[#0A1128]/30 backdrop-blur p-6">
            <div className="absolute -inset-24 opacity-60 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(43,217,197,0.18),transparent_60%)]" />
            </div>
            <div className="relative aspect-[2/1]">
              <Illustration variant={variant} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}