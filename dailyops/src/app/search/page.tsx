export const metadata = {
  title: "Search | DailyOps.Tech",
  description: "Rechercher dans les articles et ressources DailyOps.",
};

export default function SearchPage() {
  return (
    <div className="container mx-auto px-6 py-16 space-y-8">
      <header className="space-y-3">
        <p className="text-sm text-gray-400">Tool</p>
        <h1 className="text-4xl font-extrabold tracking-tight">Search</h1>
        <p className="text-gray-400 max-w-2xl">
          Recherche globale (articles, tags, sections). Fonctionnalité en cours de mise en place.
        </p>
      </header>

      <div className="bg-[#111C44] border border-[#1b2a60] rounded-2xl p-6">
        <label className="block text-sm text-gray-300 mb-2">Recherche</label>
        <input
          placeholder="Ex: OSPF, IPSec, VLAN, HA…"
          className="w-full px-4 py-3 rounded-lg bg-[#0A1128] border border-gray-600 focus:outline-none focus:border-[#2BD9C5]"
        />
        <p className="mt-3 text-sm text-gray-500">
          Prochaine étape : indexer les posts + filtrage par tags.
        </p>
      </div>
    </div>
  );
}
