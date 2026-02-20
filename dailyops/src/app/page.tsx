import CategoryCard from "@/components/CategoryCard";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative overflow-hidden text-center py-28 px-6 bg-gradient-to-b from-[#0A1128] to-[#111C44]">
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(43,217,197,0.20),transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_35%,rgba(43,217,197,0.10),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#1b2a60] bg-[#0A1128]/40 px-4 py-2 text-sm text-gray-300">
            <span className="text-[#2BD9C5]">●</span>
            Field Notes — Networking • Cybersecurity • Infrastructure
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Real-World Ops & Troubleshooting
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            Concepts transverses, baselines et incidents réels — orienté production, sans blabla marketing.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#sections"
              className="bg-[#2BD9C5] text-black font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition"
            >
              Explorer les sections
            </Link>

            <Link
              href="/troubleshooting"
              className="px-8 py-3 rounded-lg border border-[#1b2a60] text-gray-200 hover:border-[#2BD9C5]/70 hover:text-white transition"
            >
              Voir la méthode RCA →
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="container mx-auto px-6 py-20 space-y-20">
        {/* SECTIONS */}
        <section id="sections" className="space-y-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-white">4 domaines</h2>
              <p className="mt-2 text-gray-400 max-w-2xl">
                Choisis un domaine. Tu trouveras des bonnes pratiques, des checklists, et des cas réels.
              </p>
            </div>

            <Link
              href="/about"
              className="hidden md:inline-flex text-sm text-[#2BD9C5] hover:opacity-90 transition"
            >
              Pourquoi DailyOps ? →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CategoryCard
              title="Networking"
              description="Baselines, routing, VLAN, VPN — design orienté production."
              href="/networking"
              icon={<span className="text-lg">⛓</span>}
            />
            <CategoryCard
              title="Cybersecurity"
              description="Hardening, segmentation, firewall hygiene — sécurité terrain."
              href="/cybersecurity"
              icon={<span className="text-lg">🛡</span>}
            />
            <CategoryCard
              title="Infrastructure"
              description="Virtualisation, HA, storage — fiabilité et performance."
              href="/infrastructure"
              icon={<span className="text-lg">🧩</span>}
            />
            <CategoryCard
              title="Troubleshooting"
              description="Incidents réels, RCA, fix — méthode DailyOps."
              href="/troubleshooting"
              icon={<span className="text-lg">🧠</span>}
            />
          </div>
        </section>

        {/* LATEST ARTICLES */}
        <section className="space-y-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-white">Derniers articles</h2>
              <p className="mt-2 text-gray-400">
                Du terrain, du concret, du reproductible.
              </p>
            </div>

            <Link
              href="/search"
              className="hidden md:inline-flex text-sm text-[#2BD9C5] hover:opacity-90 transition"
            >
              Rechercher →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured */}
            <div className="lg:col-span-7">
              <ArticleCard
                variant="featured"
                title="Production-Ready Switch Baseline — What Always Should Be Configured"
                category="Networking"
                href="#"
                excerpt="Une checklist orientée production : management plane, L2 hygiene, STP, trunks, AAA, logs, SNMP, sauvegardes."
                readTime="8 min"
                date="Today"
              />
            </div>

            {/* Others */}
            <div className="lg:col-span-5 space-y-4">
              <ArticleCard
                title="Firewall Rulebase Hygiene — The Silent Production Killer"
                category="Cybersecurity"
                href="#"
                excerpt="Méthode de nettoyage : objets, shadow rules, naming, review, lifecycle."
                readTime="6 min"
                date="Today"
              />
              <ArticleCard
                title="Virtualization in Production — Common Misconfigurations"
                category="Infrastructure"
                href="#"
                excerpt="Snapshots, storage latency, HA assumptions, backup illusions."
                readTime="7 min"
                date="Recent"
              />
              <ArticleCard
                title="Fixing IPSec Phase 1 Failure — A Practical Checklist"
                category="Troubleshooting"
                href="#"
                excerpt="IKE params, proposals, ID mismatch, NAT-T, logs, captures."
                readTime="5 min"
                date="Recent"
              />
            </div>
          </div>
        </section>
      </div>

      {/* NEWSLETTER */}
      <section className="relative overflow-hidden bg-[#111C44] py-16 px-6 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(43,217,197,0.18),transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <h3 className="text-2xl font-bold text-white">
            Recevoir les bonnes pratiques DailyOps
          </h3>
          <p className="mt-4 text-gray-300">
            Une dose courte, utile, orientée terrain. Pas de spam.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Votre email..."
              className="flex-1 px-4 py-3 rounded-lg bg-[#0A1128] border border-[#1b2a60] focus:outline-none focus:border-[#2BD9C5] text-gray-100"
            />
            <button className="bg-[#2BD9C5] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              S&apos;inscrire
            </button>
          </div>

          <p className="mt-3 text-xs text-gray-400">
            Prochainement : archive + tags + recherche globale.
          </p>
        </div>
      </section>
    </div>
  );
}