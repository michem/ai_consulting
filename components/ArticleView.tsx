"use client";

import { useEffect, useState } from "react";
import Markdown from "./Markdown";
import Presentation from "./Presentation";
import type { Article } from "@/lib/content";

export default function ArticleView({ article }: { article: Article }) {
  const [presenting, setPresenting] = useState(false);

  // Support deep-linking into presentation mode via #present or #present-<n>.
  useEffect(() => {
    const m = window.location.hash.match(/^#present(?:-(\d+))?$/);
    if (m) setPresenting(true);
  }, []);

  useEffect(() => {
    if (!presenting && window.location.hash.startsWith("#present")) {
      history.replaceState(null, "", window.location.pathname);
    } else if (presenting) {
      history.replaceState(null, "", "#present");
    }
  }, [presenting]);

  return (
    <>
      <div className="article-actions">
        <button className="present-button" onClick={() => setPresenting(true)}>
          <span aria-hidden="true">▶</span> Present as slideshow
        </button>
        <span className="article-actions-hint">
          {article.slides.length} slides · use ← → keys to navigate
        </span>
      </div>

      <article className="article-body">
        <Markdown>{article.body}</Markdown>
      </article>

      {presenting && (
        <Presentation
          title={article.title}
          slides={article.slides}
          onClose={() => setPresenting(false)}
        />
      )}
    </>
  );
}
