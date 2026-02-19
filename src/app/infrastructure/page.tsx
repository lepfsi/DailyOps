import Link from "next/link";

export const metadata = {
  title: "Infrastructure | DailyOps.Tech",
  description: "Virtualisation, HA, storage, backups — bonnes pratiques d’infrastructure.",
};

export default function InfrastructurePage() {
  return (
    <div className="container mx-auto px-6 py-16 space-y-10">
      <header className="space-y-3">
        <p className="text-sm text-gray-400">Section</p>
        <h1 className="text-4xl font-extrabold tracking-tight">Infrastructure</h1>
        <p className="text-gray-400 max-w-2xl">
          Virtualisation, HA, storage et backups — focus production et fiabilité.
        </p>
      </header>

      <section className="bg-[#111C44] border border-[#1b2a60] rounded-2xl p-6">
        <h2 className="text-xl font-bold">À venir</h2>
        <p className="mt-2 text-gray-400">
          Articles en préparation : Proxmox prod checklist, storage latency, snapshot hygiene.
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
