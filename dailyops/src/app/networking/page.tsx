import SectionHero from "@/components/SectionHero";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";

export const metadata = {
  title: "Networking | DailyOps.Tech",
  description: "Baselines, routing, VLAN, VPN — pratiques terrain orientées production.",
};

const TAGS = [
  "Baseline",
  "Switching",
  "Routing",
  "VLAN",
  "VPN",
  "BGP",
  "OSPF",
  "QoS",
  "Monitoring",
] as const;

export default function NetworkingPage() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <SectionHero
        variant="networking"
        eyebrow="Networking — baselines & stabilité en production"
        title="Networking"
        subtitle="Des pratiques transverses (pas de pub produit) : switching, routing, VPN, supervision et hygiène de configuration. Objectif : moins d’incidents, plus de prédictibilité."
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
              Trois baselines incontournables pour stabiliser un réseau en prod.
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
            title="Production-Ready Switch Baseline — The Non-Negotiables"
            category="Baseline"
            href="#"
            excerpt="Management plane, STP hygiene, trunks, AAA, logging, NTP, SNMP, backups."
            readTime="8 min"
            date="Recent"
          />
          <ArticleCard
            title="Routing Stability Checklist — Prevent Flaps Before They Start"
            category="Routing"
            href="#"
            excerpt="Timers, adjacency, ECMP, route filtering, convergence expectations, monitoring signals."
            readTime="7 min"
            date="Recent"
          />
          <ArticleCard
            title="VPN Baseline — IPSec That Survives Real Life"
            category="VPN"
            href="#"
            excerpt="Proposals, IDs, NAT-T, MTU, DPD, logs, captures, and operational runbooks."
            readTime="6 min"
            date="Recent"
          />
        </div>
      </section>

      {/* TAG FILTERS (UI only for now) */}
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
            Notes récentes publiées dans la section Networking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ArticleCard
            title="VLAN Design Patterns — Where People Break Production"
            category="Switching"
            href="#"
            excerpt="Trunks, allowed VLANs, native VLAN, tagging strategy, and how to avoid surprises."
            readTime="6 min"
            date="Recent"
          />
          <ArticleCard
            title="OSPF Neighborship Failures — A Field Checklist"
            category="OSPF"
            href="#"
            excerpt="Area mismatch, MTU, timers, auth, passive interfaces, and verification steps."
            readTime="5 min"
            date="Recent"
          />
          <ArticleCard
            title="BGP Hygiene — Filters, Max-Prefix and Safe Defaults"
            category="BGP"
            href="#"
            excerpt="Prefix-lists, route-maps, max-prefix, communities, and guardrails that save you."
            readTime="7 min"
            date="Recent"
          />
          <ArticleCard
            title="Network Monitoring That Actually Detects User Pain"
            category="Monitoring"
            href="#"
            excerpt="Stop monitoring uptime only. Measure latency, loss, jitter, and real user symptoms."
            readTime="6 min"
            date="Recent"
          />
        </div>

        <div className="flex justify-end">
          <Link
            href="/search"
            className="text-sm text-[#2BD9C5] hover:opacity-90 transition"
          >
            Voir plus via Search →
          </Link>
        </div>
      </section>
    </div>
  );
}