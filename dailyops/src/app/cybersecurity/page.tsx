import Link from "next/link";

export const metadata = {
  title: "Cybersecurity | DailyOps.Tech",
  description: "Hardening, segmentation, firewall hygiene — sécurité opérationnelle.",
};

export default function CybersecurityPage() {
  return (
    <div className="container mx-auto px-6 py-16 space-y-10">
      <header className="space-y-3">
        <p className="text-sm text-gray-400">Section</p>
        <h1 className="text-4xl font-extrabold tracking-tight">Cybersecurity</h1>
        <p className="text-gray-400 max-w-2xl">
          Sécurité terrain : hardening, segmentation, politiques firewall, VPN secure.
        </p>
      </header>

      <section className="bg-[#111C44] border border-[#1b2a60] rounded-2xl p-6">
        <h2 className="text-xl font-bold">À venir</h2>
        <p className="mt-2 text-gray-400">
          Articles en préparation : rulebase hygiene, DMARC/SPF/DKIM, secure baselines.
        </p>
        <div className="mt-4">
          <Link href="/" className="text-[#2BD9C5] hover:opacity-90 transition font-medium">
            ← Retour à l’accueil
          </Link>
        </div>
      </section>
    </div>
  );
}
