import Link from "next/link";
import { getAllArticles } from "@/lib/content";
import { getHistoryForSlug } from "@/lib/history";
import { site } from "@/lib/site";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function HomePage() {
  const articles = getAllArticles();
  const categories = [
    ...site.categoryOrder,
    ...articles
      .map((a) => a.category)
      .filter((c) => !site.categoryOrder.includes(c)),
  ].filter((c, i, arr) => arr.indexOf(c) === i);

  return (
    <>
      <section className="hero">
        <p className="hero-kicker">{site.tagline}</p>
        <h1>AI consulting material, readable and presentable.</h1>
        <p className="hero-sub">
          From first steps with AI to a size-calibrated maturity audit and
          function-by-function playbooks. Read each page as a knowledge
          article — or press <strong>Present</strong> to turn it into a
          slideshow for the room.
        </p>
      </section>

      {categories.map((category) => {
        const items = articles.filter((a) => a.category === category);
        if (items.length === 0) return null;
        return (
          <section key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="card-grid">
              {items.map((a) => {
                const history = getHistoryForSlug(a.slug);
                const updated = history[0]?.date;
                return (
                  <Link
                    key={a.slug}
                    href={`/articles/${a.slug}`}
                    className="card"
                  >
                    <h3>{a.title}</h3>
                    <p>{a.description}</p>
                    <span className="card-meta">
                      {updated
                        ? `Updated ${formatDate(updated)} · ${history.length} revision${history.length === 1 ? "" : "s"}`
                        : "New"}
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </>
  );
}
