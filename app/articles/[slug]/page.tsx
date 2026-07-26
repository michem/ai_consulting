import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleView from "@/components/ArticleView";
import { getAllArticles, getArticle } from "@/lib/content";
import { getHistoryForSlug } from "@/lib/history";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return { title: article.title, description: article.description };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const history = getHistoryForSlug(slug);
  const all = getAllArticles();
  const idx = all.findIndex((a) => a.slug === slug);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null;

  return (
    <div className="article-page">
      <nav className="breadcrumb">
        <Link href="/">Knowledge base</Link>
        <span aria-hidden="true"> / </span>
        <span>{article.category}</span>
      </nav>

      <header className="article-header">
        <h1>{article.title}</h1>
        <p className="article-description">{article.description}</p>
        {history[0] && (
          <p className="article-updated">
            Last updated {formatDate(history[0].date)} ·{" "}
            <a href="#history">{history.length} revision{history.length === 1 ? "" : "s"}</a>
          </p>
        )}
      </header>

      <ArticleView article={article} />

      <section id="history" className="history-section">
        <h2>Version history</h2>
        {history.length === 0 ? (
          <p className="history-empty">
            No committed revisions yet — history appears after the first
            commit of this page.
          </p>
        ) : (
          <ul className="history-list">
            {history.map((c) => (
              <li key={c.hash}>
                <span className="history-date">{formatDate(c.date)}</span>
                <span className="history-subject">{c.subject}</span>
                <a
                  className="history-hash"
                  href={`${site.repoUrl}/commit/${c.hash}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {c.shortHash}
                </a>
              </li>
            ))}
          </ul>
        )}
        <p className="history-note">
          Full diff history for this page lives in{" "}
          <a
            href={`${site.repoUrl}/commits/main/content/${slug}.md`}
            target="_blank"
            rel="noreferrer"
          >
            the repository
          </a>
          .
        </p>
      </section>

      <nav className="article-pager">
        {prev ? (
          <Link href={`/articles/${prev.slug}`} className="pager-link">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/articles/${next.slug}`} className="pager-link pager-next">
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
