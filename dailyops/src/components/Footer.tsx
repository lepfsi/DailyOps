import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-[#111C44] bg-[#0A1128]">
      {/* top accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2BD9C5]/60 to-transparent" />

      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <p className="text-2xl font-extrabold tracking-tight text-white">
              DailyOps<span className="text-[#2BD9C5]">.Tech</span>
            </p>

            <p className="text-sm text-gray-300 leading-relaxed max-w-md">
              Notes terrain pour ingénieurs réseau & infrastructure : baselines, hardening, RCA, et troubleshooting reproductible.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#1b2a60] bg-[#0A1128]/40 px-4 py-2 text-xs text-gray-300">
              <span className="text-[#2BD9C5]">●</span>
              Minimaliste. Pratique. Sans marketing.
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-white">Sections</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link className="hover:text-[#2BD9C5] transition" href="/networking">Networking</Link></li>
                <li><Link className="hover:text-[#2BD9C5] transition" href="/cybersecurity">Cybersecurity</Link></li>
                <li><Link className="hover:text-[#2BD9C5] transition" href="/infrastructure">Infrastructure</Link></li>
                <li><Link className="hover:text-[#2BD9C5] transition" href="/troubleshooting">Troubleshooting</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-white">Ressources</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link className="hover:text-[#2BD9C5] transition" href="/search">Search</Link></li>
                <li><Link className="hover:text-[#2BD9C5] transition" href="/about">About</Link></li>
                <li><a className="hover:text-[#2BD9C5] transition" href="mailto:contact@dailyops.tech">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Contact / Social */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-sm font-semibold text-white">Contact</p>

            <a
              href="mailto:contact@dailyops.tech"
              className="group flex items-center justify-between rounded-2xl border border-[#1b2a60] bg-[#0A1128]/40 p-4 hover:border-[#2BD9C5]/60 transition"
            >
              <div>
                <p className="text-sm text-gray-300">Email</p>
                <p className="text-sm font-semibold text-white">contact@dailyops.tech</p>
              </div>
              <span className="text-[#2BD9C5] group-hover:translate-x-0.5 transition">→</span>
            </a>

            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-[#1b2a60] bg-[#0A1128]/40 text-gray-200 hover:border-[#2BD9C5]/60 hover:text-white transition"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                in
              </a>
              {/* X */}
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-[#1b2a60] bg-[#0A1128]/40 text-gray-200 hover:border-[#2BD9C5]/60 hover:text-white transition"
                aria-label="X"
                title="X"
              >
                x
              </a>
            </div>

            <p className="text-xs text-gray-500">
              Les liens sociaux seront branchés dès que les profils sont prêts.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#111C44] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {year} DailyOps.Tech — Tous droits réservés.
          </p>

          <div className="flex items-center gap-6 text-xs text-gray-500">
            <Link className="hover:text-[#2BD9C5] transition" href="/about">À propos</Link>
            <a className="hover:text-[#2BD9C5] transition" href="mailto:contact@dailyops.tech">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}