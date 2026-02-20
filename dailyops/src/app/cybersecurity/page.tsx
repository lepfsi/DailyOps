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
      <section className="relative overflow-hidden rounded-2xl border border-[#111C44] bg-gradient-to-b from-[#0A1128] to-[#111C44] p-10">
        <div className="pointer-events-none absolute inset-0 opacity-35">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(43,217,197,0.20),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(43,217,197,0.10),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative max-w-3xl space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#1b2a60] bg-[#0A1128]/40 px-4 py-2 text-sm text-gray-300">
            <span className="text-[#2BD9C5]">🛡</span>
            Cybersecurity — hardening & hygiène en production
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Cybersecurity
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Sécurité opérationnelle : segmentation, politiques firewall, IAM, logs, durcissement et runbooks.
            Objectif : réduire la surface d’attaque sans casser la prod.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="#latest"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#2BD9C5] text-black font-semibold hover:opacity-90 transition"
            >
              Voir les derniers articles
            </Link>

            <Link
              href="/troubleshooting"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[#1b2a60] text-gray-200 hover:border-[#2BD9C5]/70 hover:text-white transition"
            >
              Méthode RCA →
            </Link>
          </div>
        </div>
      </section>

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