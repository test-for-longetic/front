"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ResetAppButton } from "@/ui/ResetAppButton";
import { Logo } from "@/ui/Logo";
import { RedirectButton } from "@/ui/RedirectButton";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <Logo />

            <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-300 md:flex">
              <Link href="/" className="transition hover:text-white">
                Dashboard
              </Link>
              <Link href="/reports" className="transition hover:text-white">
                Reports
              </Link>
            </nav>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <ResetAppButton />
            <RedirectButton text="Upload Report" url="upload" />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-800 md:hidden"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
          >
            <span className="text-lg leading-none">☰</span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-[1px] transition-opacity duration-300 md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[85vw] max-w-sm flex-col border-l border-zinc-800 bg-zinc-950 shadow-2xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
          <div className="flex items-center gap-3">
            <Logo />
          </div>

          <button
            type="button"
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-800"
            aria-label="Close navigation menu"
          >
            <span className="text-lg leading-none">✕</span>
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-5 py-5">
          <Link
            href="/"
            onClick={closeMenu}
            className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
          >
            Dashboard
          </Link>

          <Link
            href="/reports"
            onClick={closeMenu}
            className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
          >
            Reports
          </Link>

          <div className="mt-3 flex flex-col gap-3">
            <div onClick={closeMenu}>
              <RedirectButton text="Upload Report" url="upload" />
            </div>

            <ResetAppButton />
          </div>
        </div>
      </aside>
    </>
  );
}