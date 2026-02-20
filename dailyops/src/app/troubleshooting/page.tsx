import SectionHero from "@/components/SectionHero";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";

export const metadata = {
  title: "Troubleshooting | DailyOps.Tech",
  description: "Incidents réels, RCA, fix — méthodologie DailyOps reproductible.",
};

const TAGS = [
  "Incident",
  "RCA",
  "Runbook",
  "Logs",
  "Packet Capture",
  "Performance",
  "Windows",
  "Network",
  "Postmortem",
] as const;

export default function TroubleshootingPage() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <SectionHero
        variant="troubleshooting"
        eyebrow="Troubleshooting — incidents réels & RCA"
        title="Troubleshooting"
        subtitle="Format DailyOps : Contexte → Symptôme → Analyse → Root Cause → Fix → Leçon. Ici, on documente ce qui casse vraiment en production."
        primaryCtaText="Voir les derniers incidents"
        primaryCtaHref="#latest"
        secondaryCtaText="Le format DailyOps"
        secondaryCtaHref="/about"
      />

      {/* START HERE */}
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Start here</h2>
            <p className="mt-2 text-gray-400">
              Trois incidents types, avec une méthode reproductible.
            </p>
          </div>

          <Link href="/search" className="hidden md:inline-flex text-sm text-[#2BD9C5] hover:opacity-90 transition">
            Rechercher →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ArticleCard
            variant="featured"
            title="Unplanned Outage — The Firewall Rule That Nobody Removed"
            category="Incident"
            href="#"
            excerpt="Symptômes utilisateurs, analyse, rule review, root cause, et prévention."
            readTime="8 min"
            date="Recent"
          />
          <ArticleCard
            title="Domain Trust Relationship Failed — After Snapshot Restore"
            category="Windows"
            href="#"
            excerpt="Pourquoi ça arrive, comment récupérer l’accès, et comment l’éviter."
            readTime="7 min"
            date="Recent"
          />
          <ArticleCard
            title="Disk I/O Errors on VM — SAN Latency and Snapshot Side Effects"
            category="Performance"
            href="#"
            excerpt="Logs, corrélation storage, et remédiation sans casser la prod."
            readTime="6 min"
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
          <h2 className="text-2xl font-bold text-white">Derniers incidents</h2>
          <p className="mt-2 text-gray-400">
            Notes récentes publiées dans la section Troubleshooting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ArticleCard
            title="IPSec Phase 1 Down — A Field Checklist"
            category="Network"
            href="#"
            excerpt="Logs, proposals, IDs, NAT-T, captures, et fix reproductible."
            readTime="5 min"
            date="Recent"
          />
          <ArticleCard
            title="Excel Filters Suddenly Slow — Terminal Server + File Share"
            category="Performance"
            href="#"
            excerpt="Hypothèses, tests, latence, I/O, et ce que les logs disent vraiment."
            readTime="6 min"
            date="Recent"
          />
          <ArticleCard
            title="Monitoring Is Green — Users Are Complaining"
            category="Runbook"
            href="#"
            excerpt="Pourquoi l’uptime n’est pas un signal, et quoi mesurer à la place."
            readTime="4 min"
            date="Recent"
          />
          <ArticleCard
            title="Rollback Missing — Update Deployed Fast"
            category="Postmortem"
            href="#"
            excerpt="Comment documenter une stratégie de rollback avant de déployer."
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