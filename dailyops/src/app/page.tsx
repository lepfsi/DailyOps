import CategoryCard from "@/components/CategoryCard";
import ArticleCard from "@/components/ArticleCard";

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* HERO */}
      <section className="text-center py-28 px-6 bg-linear-to-b from-[#0A1128] to-[#111C44]">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Real-World Ops & Troubleshooting
        </h1>
        <p className="mt-6 text-xl text-gray-400">
          Concepts, baselines et incidents réels pour ingénieurs réseau & infra
        </p>
        <button className="mt-8 bg-[#2BD9C5] text-black font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition">
          Explorer les sections
        </button>
      </section>

      {/* CONTENU */}
      <div className="container mx-auto px-6 py-20 space-y-20">

        {/* CATÉGORIES */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CategoryCard 
            title="Networking"
            description="Baselines, routing, VLAN, VPN" color={"blue"}          />
          <CategoryCard 
            title="Cybersecurity"
            description="Hardening, segmentation, firewall hygiene" color={"blue"}          />
          <CategoryCard 
            title="Infrastructure"
            description="Virtualisation, HA, storage" color={"blue"}          />
          <CategoryCard 
            title="Troubleshooting"
            description="Incidents réels et méthodologie DailyOps" color={"blue"}          />
        </section>

        {/* DERNIERS ARTICLES */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Derniers Articles</h2>
          <div className="space-y-6">
            <ArticleCard 
              title="Production-Ready Switch Baseline"
              category="Networking"
            />
            <ArticleCard 
              title="Firewall Rulebase Hygiene"
              category="Cybersecurity"
            />
            <ArticleCard 
              title="Virtualization in Production"
              category="Infrastructure"
            />
          </div>
        </section>

      </div>

      {/* NEWSLETTER */}
      <section className="bg-[#111C44] py-16 px-6 text-center">
        <h3 className="text-2xl font-bold">Recevoir les bonnes pratiques DailyOps</h3>
        <p className="mt-4 text-gray-400">
          Des analyses terrain directement dans votre boîte mail.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="Votre email..." 
            className="flex-1 px-4 py-3 rounded-lg bg-[#0A1128] border border-gray-600 focus:outline-none focus:border-[#2BD9C5]"
          />
          <button className="bg-[#2BD9C5] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90">
            S&apos;inscrire
          </button>
        </div>
      </section>

    </div>
  );
}
