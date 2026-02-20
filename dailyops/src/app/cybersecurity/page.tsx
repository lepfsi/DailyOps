import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";

export const metadata = {
  title: "Cybersecurity | DailyOps.Tech",
  description: "Hardening, segmentation, firewall hygiene — sécurité opérationnelle orientée production.",
};

const TAGS = [
  "Hardening",
  "Segmentation",
  "Firewall",
  "IAM",
  "VPN",
  "EDR",
  "Email",
  "Logging",
  "Zero Trust",
] as const;

export default function CybersecurityPage() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <SectionHero
        variant="cybersecurity"
        eyebrow="Cybersecurity — hardening & hygiène en production"
        title="Cybersecurity"
        subtitle="Sécurité opérationnelle : segmentation, politiques firewall, IAM, logs et durcissement."
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
              Trois fondamentaux qui évitent des incidents coûteux.
            </p>
          </div>

          <Link
            href="/search"
            className="hidden md:inline-flex text-sm text-[#2BD9C5] hover:opacity-90 transition"
          >
            Rechercher →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ArticleCard
            variant="featured"
            title="Firewall Rulebase Hygiene — The Silent Production Killer"
            category="Firewall"
            href="#"
            excerpt="Shadow rules, objets orphelins, naming, review, lifecycle, et rollback plan."
            readTime="8 min"
            date="Recent"
          />
          <ArticleCard
            title="Segmentation That Works — Practical Zones & Flows"
            category="Segmentation"
            href="#"
            excerpt="Zones, flux minimaux, exceptions documentées, et comment éviter le “flat network”."
            readTime="7 min"
            date="Recent"
          />
          <ArticleCard
            title="Logging Baseline — What You Must Collect (and Why)"
            category="Logging"
            href="#"
            excerpt="Logs utiles, corrélation, horodatage, retention, et alerting exploitable."
            readTime="6 min"
            date="Recent"
          />
        </div>
      </section>

      {/* TAGS */}
      <section className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white">Tags</h3>
          <p className="mt-1 text-gray-400">
            Filtrage côté UI (on branchera l’index articles ensuite).
          </p>
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
            Notes récentes publiées dans la section Cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ArticleCard
            title="Email Security Basics — SPF/DKIM/DMARC Without Confusion"
            category="Email"
            href="#"
            excerpt="Alignement, politiques, rapports, et erreurs classiques qui font mal."
            readTime="7 min"
            date="Recent"
          />
          <ArticleCard
            title="VPN Hardening Checklist — Real-World Defaults"
            category="VPN"
            href="#"
            excerpt="Chiffrement, proposals, MFA, split tunnel, logs, et monitoring."
            readTime="6 min"
            date="Recent"
          />
          <ArticleCard
            title="IAM Guardrails — Stop Over-Privilege"
            category="IAM"
            href="#"
            excerpt="Least privilege, groupes, comptes break-glass, et rotation."
            readTime="6 min"
            date="Recent"
          />
          <ArticleCard
            title="EDR Reality Check — What It Detects vs What It Misses"
            category="EDR"
            href="#"
            excerpt="Couverture réelle, logs à surveiller, et pièges opérationnels."
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