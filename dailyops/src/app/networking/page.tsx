import SectionHero from "@/components/SectionHero";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { getPostsByCategory } from "@/lib/content";

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
  const posts = getPostsByCategory("networking");

  const featuredPost = posts[0];
  const latestPosts = posts.slice(1);

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
              Les premiers contenus incontournables pour stabiliser un réseau en production.
            </p>
          </div>

          <Link
            href="/search"
            className="hidden md:inline-flex text-sm text-[#2BD9C5] hover:opacity-90 transition"
          >
            Rechercher →
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-[#1b2a60] bg-[#0A1128]/30 p-6 text-gray-400">
            Aucun article Networking publié pour le moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredPost && (
              <ArticleCard
                variant="featured"
                title={featuredPost.title}
                category={featuredPost.category}
                href={`/networking/${featuredPost.slug}`}
                excerpt={featuredPost.excerpt}
                date={featuredPost.date}
                readTime="8 min"
              />
            )}

            {latestPosts.slice(0, 2).map((post) => (
              <ArticleCard
                key={post.slug}
                title={post.title}
                category={post.category}
                href={`/networking/${post.slug}`}
                excerpt={post.excerpt}
                date={post.date}
                readTime="6 min"
              />
            ))}
          </div>
        )}
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

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-[#1b2a60] bg-[#0A1128]/30 p-6 text-gray-400">
            Aucun article Networking à afficher pour le moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {posts.map((post) => (
              <ArticleCard
                key={post.slug}
                title={post.title}
                category={post.category}
                href={`/networking/${post.slug}`}
                excerpt={post.excerpt}
                date={post.date}
                readTime="6 min"
              />
            ))}
          </div>
        )}

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