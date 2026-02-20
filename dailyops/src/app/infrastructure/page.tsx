import SectionHero from "@/components/SectionHero";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";

export const metadata = {
  title: "Infrastructure | DailyOps.Tech",
  description: "Virtualisation, HA, storage, backups — fiabilité et performance en production.",
};

const TAGS = [
  "Virtualization",
  "HA",
  "Storage",
  "Backups",
  "Snapshots",
  "Monitoring",
  "Capacity",
  "Patching",
  "Resilience",
] as const;

export default function InfrastructurePage() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <SectionHero
        variant="infrastructure"
        eyebrow="Infrastructure — fiabilité, HA, storage & backups"
        title="Infrastructure"
        subtitle="Virtualisation, haute dispo, stockage, sauvegardes, patching et capacité. Objectif : limiter les surprises et rendre les incidents prévisibles."
        primaryCtaText="Voir les derniers articles"
        primaryCtaHref="#latest"
        secondaryCtaText="Méthode RCA"
        secondaryCtaHref="/troubleshooting"
      />
      {/* START HERE */}
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Start here</h2>
            <p className="mt-2 text-gray-400">
              Trois baselines qui évitent le classique “ça marche… jusqu’au jour où”.
            </p>
          </div>

          <Link href="/search" className="hidden md:inline-flex text-sm text-[#2BD9C5] hover:opacity-90 transition">
            Rechercher →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ArticleCard
            variant="featured"
            title="Backup Reality Check — Backups Exist. Restores Were Never Tested."
            category="Backups"
            href="#"
            excerpt="Politique, fréquence, tests de restauration, et checklists post-incident."
            readTime="8 min"
            date="Recent"
          />
          <ArticleCard
            title="Snapshot Hygiene — The Silent Storage Killer"
            category="Snapshots"
            href="#"
            excerpt="Pourquoi ça s’accumule, ce que ça casse, et comment mettre des garde-fous."
            readTime="6 min"
            date="Recent"
          />
          <ArticleCard
            title="Storage Latency — How to Read the First Signals"
            category="Storage"
            href="#"
            excerpt="IOPS, latency, queue depth, et la différence entre symptôme et cause."
            readTime="7 min"
            date="Recent"
          />
        </div>
      </section>

      {/* TAGS */}
      <section className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white">Tags</h3>
          <p className="mt-1 text-gray-400">Filtrage côté UI (on branchera l’index articles ensuite).</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              className="px-4 py-2 rounded-full border border-[#1b2a60] bg-[#0A1128]/30 text-sm text-gray-200 hover:border-[#2BD9C5]/60 hover:text-white transition"
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* LATEST */}
      <section id="latest" className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Derniers articles</h2>
          <p className="mt-2 text-gray-400">
            Notes récentes publiées dans la section Infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ArticleCard
            title="Patching Without Pain — Rollback, Windows Updates, Reality"
            category="Patching"
            href="#"
            excerpt="Valider, déployer, observer, rollback. Et surtout : tester les restores."
            readTime="6 min"
            date="Recent"
          />
          <ArticleCard
            title="HA Assumptions — What You Think Is Redundant (But Isn’t)"
            category="HA"
            href="#"
            excerpt="SPOF humains, SPOF storage, et comment auditer réellement la redondance."
            readTime="7 min"
            date="Recent"
          />
          <ArticleCard
            title="Capacity Planning — Avoid the 2AM Surprise"
            category="Capacity"
            href="#"
            excerpt="Seuils utiles, tendances, et métriques qui prédisent le crash."
            readTime="6 min"
            date="Recent"
          />
          <ArticleCard
            title="Monitoring That Matters — From Uptime to Experience"
            category="Monitoring"
            href="#"
            excerpt="Mesurer la douleur utilisateur : latence, erreurs applicatives, saturation."
            readTime="5 min"
            date="Recent"
          />
        </div>

        <div className="flex justify-end">
          <Link href="/search" className="text-sm text-[#2BD9C5] hover:opacity-90 transition">
            Voir plus via Search →
          </Link>
        </div>
      </section>
    </div>
  );
}