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
      <section className="relative overflow-hidden rounded-2xl border border-[#111C44] bg-gradient-to-b from-[#0A1128] to-[#111C44] p-10">
        {/* background accents */}
        <div className="pointer-events-none absolute inset-0 opacity-35">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(43,217,197,0.20),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(43,217,197,0.10),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative max-w-3xl space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#1b2a60] bg-[#0A1128]/40 px-4 py-2 text-sm text-gray-300">
            <span className="text-[#2BD9C5]">⛓</span>
            Networking — baselines & stabilité en production
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Networking
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Des pratiques transverses (pas de pub produit) : switching, routing, VPN,
            supervision et hygiène de configuration. Objectif : moins d’incidents, plus de prédictibilité.
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