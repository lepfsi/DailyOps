import Link from "next/link";

export const metadata = {
  title: "Troubleshooting | DailyOps.Tech",
  description: "Incidents réels, root cause analysis et méthodologie DailyOps.",
};

export default function TroubleshootingPage() {
  return (
    <div className="container mx-auto px-6 py-16 space-y-10">
      <header className="space-y-3">
        <p className="text-sm text-gray-400">Section</p>
        <h1 className="text-4xl font-extrabold tracking-tight">Troubleshooting</h1>
        <p className="text-gray-400 max-w-2xl">
          Incidents réels structurés : symptôme → analyse → root cause → fix → leçon.
        </p>
      </header>

      <section className="bg-[#111C44] border border-[#1b2a60] rounded-2xl p-6">
        <h2 className="text-xl font-bold">À venir</h2>
        <p className="mt-2 text-gray-400">
          Les premiers cas seront publiés avec un format standard “DailyOps RCA”.
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
