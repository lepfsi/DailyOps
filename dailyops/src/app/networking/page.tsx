import Link from "next/link";

export const metadata = {
  title: "Networking | DailyOps.Tech",
  description: "Baselines, routing, VLAN, VPN — concepts transverses et pratiques terrain.",
};

export default function NetworkingPage() {
  return (
    <div className="container mx-auto px-6 py-16 space-y-10">
      <header className="space-y-3">
        <p className="text-sm text-gray-400">Section</p>
        <h1 className="text-4xl font-extrabold tracking-tight">Networking</h1>
        <p className="text-gray-400 max-w-2xl">
          Baselines, switching/routing, VPN, design réseau — orienté production.
        </p>
      </header>

      <section className="bg-[#111C44] border border-[#1b2a60] rounded-2xl p-6">
        <h2 className="text-xl font-bold">À venir</h2>
        <p className="mt-2 text-gray-400">
          Articles en préparation : baselines L2/L3, routing stability, design patterns.
        </p>
        <div className="mt-4">
          <Link
            href="/"
            className="text-[#2BD9C5] hover:opacity-90 transition font-medium"
          >
            ← Retour à l’accueil
          </Link>
        </div>
      </section>
    </div>
  );
}
