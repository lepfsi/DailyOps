import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#0A1128] border-b border-[#111C44]">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold tracking-tight">
            DailyOps<span className="text-[#2BD9C5]">.Tech</span>
          </span>
          <span className="text-xs text-gray-400">
            Real-world Ops & Troubleshooting
          </span>
        </Link>

        <Link href="/about" className="hover:text-[#2BD9C5] transition">
            About
        </Link>


        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/networking" className="hover:text-[#2BD9C5] transition">
            Networking
          </Link>
          <Link href="/cybersecurity" className="hover:text-[#2BD9C5] transition">
            Cybersecurity
          </Link>
          <Link href="/infrastructure" className="hover:text-[#2BD9C5] transition">
            Infrastructure
          </Link>
          <Link href="/troubleshooting" className="hover:text-[#2BD9C5] transition">
            Troubleshooting
          </Link>
        </nav>

      </div>
    </header>
  );
}
