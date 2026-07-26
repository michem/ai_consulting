import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container site-header-inner">
            <Link href="/" className="site-brand">
              <span className="site-brand-mark" aria-hidden="true" />
              {site.name}
            </Link>
            <nav className="site-nav">
              <Link href="/">Knowledge base</Link>
              <a href={site.repoUrl} target="_blank" rel="noreferrer">
                Source
              </a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <div className="container">
            {site.name} — {site.tagline}. Content is version-controlled; every
            page shows its edit history.
          </div>
        </footer>
      </body>
    </html>
  );
}
