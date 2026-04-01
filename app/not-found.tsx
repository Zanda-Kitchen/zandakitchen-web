import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found — Zanda Kitchen",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/zk-logo.png"
              alt="Zanda Kitchen logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-display text-xl text-foreground">
              Zanda Kitchen
            </span>
          </Link>
        </div>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
          404
        </p>
        <h1 className="font-display text-3xl sm:text-4xl mb-4">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8 max-w-sm">
          This page doesn&apos;t exist. Head back to the main site.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-border text-foreground text-sm font-semibold hover:bg-secondary transition-colors"
        >
          Back to Zanda Kitchen
        </Link>
      </div>
    </div>
  );
}
