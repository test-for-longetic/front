import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ResetAppButton } from "@/ui/ResetAppButton";
import { Logo } from "@/ui/Logo";
import { RedirectButton } from "@/ui/RedirectButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blood Test Tracker",
  description: "Track blood test reports and biomarker trends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased font-sans">
        <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-8">
              <Logo />

              <nav className="flex items-center gap-6 text-sm font-medium text-zinc-300">
                <Link href="/" className="transition hover:text-white">
                  Dashboard
                </Link>
                <Link href="/reports" className="transition hover:text-white">
                  Reports
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <ResetAppButton />
              <RedirectButton text='Upload Report' url='upload' />
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
