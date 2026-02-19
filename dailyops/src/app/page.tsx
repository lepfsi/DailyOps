import CategoryCard from "@/components/CategoryCard";
import ArticleCard from "@/components/ArticleCard";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero / Introduction */}
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Real-world Ops & Troubleshooting Notes</h1>
        <p className="text-xl text-gray-600">– Learn, Apply, Repeat –</p>
        <a href="#" className="inline-block mt-4 text-blue-600 hover:underline">
          Explorer les sections →
        </a>
      </section>

      {/* Catégories principales (4 cards) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CategoryCard 
          title="NETWORKING"
          description="Baselines, routing, VLAN, VPN – tous les concepts clés"
          color="blue"
        />
        <CategoryCard 
          title="CYBERSECURITY"
          description="Hardening, segmentation, firewalls – sécurité terrain expliquée"
          color="green"
        />
        <CategoryCard 
          title="INFRASTRUCTURE"
          description="Virtualization, HA, storage-bonnes pratiques d'infra"
          color="purple"
        />
        <CategoryCard 
          title="TROUBLESHOOTING"
          description="Incidents réels et méthodologie DailyOps"
          color="orange"
        />
      </section>

      {/* Dernières Publications */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Dernières Publications</h2>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["BEST PRACTICE", "INCIDENT", "BASELINE", "TROUBLESHOOTING", "ROUTING"].map(tag => (
            <span key={tag} className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Articles */}
        <div className="space-y-4">
          <ArticleCard 
            title="Production-Ready Switch Baseline – What Always Should Be Configured"
            category="BEST PRACTICE"
          />
          <ArticleCard 
            title="Firewall Rulebase Hygiene – The Silent Production Killer"
            category="CYBERSECURITY"
          />
          <ArticleCard 
            title="Virtualization in Production – Common analysis"
            category="INFRASTRUCTURE"
          />
        </div>
      </section>

      {/* Publications populaires */}
      <section>
        <h2 className="text-xl font-bold mb-3">Publications populaires</h2>
        <ul className="list-disc pl-5 space-y-1 text-blue-600">
          <li><a href="#" className="hover:underline">Firewall Rulebase Hygiene – The Silent Production Killer</a></li>
          <li><a href="#" className="hover:underline">Virtualization in Production – Common Misconfigurations</a></li>
          <li><a href="#" className="hover:underline">Fixing IPSec VPN Phase 1 Failure – Key Insights</a></li>
        </ul>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-2">Recevoir les bonnes pratiques DailyOps</h3>
        <p className="mb-4">Rejoins notre newsletter et reste informé(e) des dernières tips experts.</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input 
            type="email" 
            placeholder="Votre email..." 
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            S'inscrire
          </button>
        </div>
      </section>
    </div>
  );
}