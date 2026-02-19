"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type Item = {
  title: string;
  href: string;
  section: "Networking" | "Cybersecurity" | "Infrastructure" | "Troubleshooting" | "About";
  tags?: string[];
};

const ITEMS: Item[] = [
  { title: "Networking", href: "/networking", section: "Networking", tags: ["routing", "vlan", "vpn"] },
  { title: "Cybersecurity", href: "/cybersecurity", section: "Cybersecurity", tags: ["hardening", "segmentation"] },
  { title: "Infrastructure", href: "/infrastructure", section: "Infrastructure", tags: ["virtualization", "ha", "storage"] },
  { title: "Troubleshooting", href: "/troubleshooting", section: "Troubleshooting", tags: ["rca", "incident"] },
  { title: "About", href: "/about", section: "About", tags: ["dailyops"] },
];

function escapeRegExp(input: string) {
  return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlight(text: string, query: string) {
  const q = query.trim();
  if (!q) return <>{text}</>;
  const re = new RegExp(`(${escapeRegExp(q)})`, "ig");
  const parts = text.split(re);

  return (
    <>
      {parts.map((p, i) =>
        re.test(p) ? (
          <mark
            key={i}
            className="bg-[#2BD9C5]/20 text-[#2BD9C5] px-1 rounded"
          >
            {p}
          </mark>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

export default function SearchCommand() {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement | null>(null);

  // Close on route change (always)
  useEffect(() => {
    if (!open) return;
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Disable background scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return ITEMS;

    return ITEMS.filter((it) => {
      const hay = [it.title, it.section, ...(it.tags ?? [])].join(" ").toLowerCase();
      return hay.includes(query);
    });
  }, [q]);

  // Reset active selection when query changes or when opening
  useEffect(() => {
    setActiveIndex(0);
  }, [q, open]);

  // Keyboard shortcuts
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toLowerCase().includes("mac");
      const mod = isMac ? e.metaKey : e.ctrlKey;

      // Open palette
      if (mod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
        setTimeout(() => inputRef.current?.focus(), 0);
        return;
      }

      if (!open) return;

      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, Math.max(results.length - 1, 0)));
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
        return;
      }

      if (e.key === "Enter") {
        e.preventDefault();
        const item = results[activeIndex];
        if (item) {
          setOpen(false);
          router.push(item.href);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, results, activeIndex, router]);

  // Simple open animation (no plugin)
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (open) {
      setMounted(true);
      setTimeout(() => inputRef.current?.focus(), 0);
    } else {
      const t = setTimeout(() => setMounted(false), 120);
      return () => clearTimeout(t);
    }
  }, [open]);

  return (
    <>
      {/* Desktop trigger */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-3 px-4 py-2 rounded-lg border border-[#1b2a60] bg-[#0A1128]/40 text-sm text-gray-200 hover:border-[#2BD9C5] transition"
        aria-label="Open search"
      >
        <span className="text-[#2BD9C5]">⌕</span>
        <span className="text-gray-300">Search…</span>
        <span className="ml-6 text-xs text-gray-500 border border-[#1b2a60] rounded px-2 py-0.5">
          Ctrl K
        </span>
      </button>

      {/* Mobile trigger */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#1b2a60] bg-[#0A1128]/40 text-gray-200 hover:border-[#2BD9C5] transition"
        aria-label="Open search"
      >
        <span className="text-[#2BD9C5] text-lg">⌕</span>
      </button>

      {/* Overlay */}
      {mounted && (
        <div
          className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 pt-24 transition-opacity duration-150 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`w-full max-w-2xl rounded-2xl border border-[#1b2a60] bg-[#0A1128] shadow-xl transition-transform duration-150 ${
              open ? "scale-100" : "scale-95"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-[#111C44]">
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search… (tags, sections, topics)"
                className="w-full px-4 py-3 rounded-xl bg-[#111C44] border border-[#1b2a60] focus:outline-none focus:border-[#2BD9C5] text-gray-100"
              />
              <p className="mt-2 text-xs text-gray-500">
                ↑ ↓ to navigate • Enter to open • Esc to close
              </p>
            </div>

            <div className="p-2 max-h-[60vh] overflow-auto">
              {results.length === 0 ? (
                <div className="p-6 text-sm text-gray-400">
                  Aucun résultat. (On branchera les articles ensuite.)
                </div>
              ) : (
                results.map((it, idx) => (
                  <Link
                    key={it.href}
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between gap-4 px-4 py-3 rounded-xl transition ${
                      idx === activeIndex ? "bg-[#111C44] border border-[#2BD9C5]/40" : "hover:bg-[#111C44]"
                    }`}
                  >
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-100 truncate">
                        {highlight(it.title, q)}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {highlight(it.section, q)}
                      </p>
                    </div>
                    <span className="text-xs text-[#2BD9C5] border border-[#1b2a60] rounded px-2 py-1">
                      Open
                    </span>
                  </Link>
                ))
              )}
            </div>

            <div className="p-3 border-t border-[#111C44] flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-lg border border-[#1b2a60] text-sm text-gray-200 hover:border-[#2BD9C5] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
