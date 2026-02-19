import Link from "next/link";

export const metadata = {
  title: "About | DailyOps.Tech",
  description: "Pourquoi DailyOps existe : du terrain, du concret, du reproductible.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-16 space-y-10">
      <header className="space-y-3">
        <p className="text-sm text-gray-400">À propos</p>
        <h1 className="text-4xl font-extrabold tracking-tight">DailyOps</h1>
        <p className="text-gray-400 max-w-2xl">
          Un espace minimaliste pour documenter les bonnes pratiques, les incidents et les méthodes
          de troubleshooting rencontrées en conditions réelles.
        </p>
      </header>

      <section className="bg-[#111C44] border border-[#1b2a60] rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold">Principes</h2>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Transverse : concepts avant marques</li>
          <li>Terrain : symptômes, logs, RCA, fix</li>
          <li>Reproductible : checklists et baselines</li>
        </ul>

        <div className="pt-2">
          <Link href="/" className="text-[#2BD9C5] hover:opacity-90 transition font-medium">
            ← Retour à l’accueil
          </Link>
        </div>
      </section>
    </div>
  );
}
