import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  order: number;
}

export interface Article extends ArticleMeta {
  /** Markdown body without frontmatter and without the leading H1 (title is rendered from frontmatter). */
  body: string;
  /** Body split into presentation slides. */
  slides: Slide[];
}

export interface Slide {
  title: string | null;
  markdown: string;
}

function stripLeadingH1(body: string): string {
  const lines = body.split("\n");
  let i = 0;
  while (i < lines.length && lines[i].trim() === "") i++;
  if (i < lines.length && /^#\s+/.test(lines[i])) {
    lines.splice(i, 1);
  }
  return lines.join("\n").trim();
}

/**
 * Split a markdown body into slides at top-level `## ` headings, ignoring
 * headings inside fenced code blocks. Content before the first heading
 * becomes the intro slide.
 */
export function splitIntoSlides(body: string, articleTitle: string): Slide[] {
  const lines = body.split("\n");
  const slides: Slide[] = [];
  let current: string[] = [];
  let currentTitle: string | null = null;
  let inFence = false;
  let started = false;

  const push = () => {
    const md = current.join("\n").trim();
    if (md !== "" || currentTitle) {
      slides.push({ title: currentTitle, markdown: md });
    }
  };

  for (const line of lines) {
    if (/^(```|~~~)/.test(line.trim())) inFence = !inFence;
    if (!inFence && /^##\s+/.test(line)) {
      if (started || current.join("").trim() !== "") push();
      currentTitle = line.replace(/^##\s+/, "").trim();
      current = [];
      started = true;
      continue;
    }
    current.push(line);
  }
  push();

  // Intro slide gets the article title.
  if (slides.length > 0 && slides[0].title === null) {
    slides[0].title = articleTitle;
  }
  return slides;
}

export function getAllArticles(): ArticleMeta[] {
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"));
  const articles = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      category: data.category ?? "Other",
      order: typeof data.order === "number" ? data.order : 999,
    };
  });
  return articles.sort((a, b) => a.order - b.order);
}

export function getArticle(slug: string): Article | null {
  const file = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const title = data.title ?? slug;
  const body = stripLeadingH1(content);
  return {
    slug,
    title,
    description: data.description ?? "",
    category: data.category ?? "Other",
    order: typeof data.order === "number" ? data.order : 999,
    body,
    slides: splitIntoSlides(body, title),
  };
}
