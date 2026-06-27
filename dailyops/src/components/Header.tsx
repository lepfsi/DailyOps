// components/Header.tsx
import Link from "next/link";
import SearchCommand from "@/components/SearchCommand";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MobileActionsDropdown from "@/components/MobileActionsDropdown";

export default function Header() {
  return (
    <header
      className="
        sticky top-0 z-50 backdrop-blur border-b transition
        /* Mode clair */
        bg-white/90 border-gray-200
        /* Mode sombre */
        dark:bg-[#0A1128]/90 dark:border-[#111C44]
      "
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            DailyOps<span className="text-[#0ea5e9] dark:text-[#2BD9C5]">.Tech</span>
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Real-world Ops & Troubleshooting
          </span>
        </Link>

        {/* Navigation (desktop) */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700 dark:text-gray-200">
          <Link href="/networking" className="hover:text-[#0ea5e9] dark:hover:text-[#2BD9C5] transition">
            Networking
          </Link>
          <Link href="/cybersecurity" className="hover:text-[#0ea5e9] dark:hover:text-[#2BD9C5] transition">
            Cybersecurity
          </Link>
          <Link href="/infrastructure" className="hover:text-[#0ea5e9] dark:hover:text-[#2BD9C5] transition">
            Infrastructure
          </Link>
          <Link href="/troubleshooting" className="hover:text-[#0ea5e9] dark:hover:text-[#2BD9C5] transition">
            Troubleshooting
          </Link>
          <Link href="/about" className="hover:text-[#0ea5e9] dark:hover:text-[#2BD9C5] transition">
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <SearchCommand />

          {/* Desktop : icônes séparées */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile : menu regroupé */}
          <MobileActionsDropdown />
        </div>
      </div>
    </header>
  );
}