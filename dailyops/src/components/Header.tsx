import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0A1128]/90 backdrop-blur border-b border-[#111C44]">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold tracking-tight">
            DailyOps<span className="text-[#2BD9C5]">.Tech</span>
          </span>
          <span className="text-xs text-gray-400">
            Real-world Ops & Troubleshooting
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-200">
          <Link href="/networking" className="hover:text-[#2BD9C5] transition">Networking</Link>
          <Link href="/cybersecurity" className="hover:text-[#2BD9C5] transition">Cybersecurity</Link>
          <Link href="/infrastructure" className="hover:text-[#2BD9C5] transition">Infrastructure</Link>
          <Link href="/troubleshooting" className="hover:text-[#2BD9C5] transition">Troubleshooting</Link>
          <Link href="/about" className="hover:text-[#2BD9C5] transition">About</Link>
        </nav>

        {/* Search */}
        <div className="flex items-center gap-3">
          <Link
            href="/search"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1b2a60] text-sm text-gray-200 hover:border-[#2BD9C5] hover:text-white transition"
            aria-label="Search"
          >
            <span className="text-[#2BD9C5]">⌕</span>
            Search
          </Link>
        </div>

      </div>
    </header>
  );
}
