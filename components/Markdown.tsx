"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

export default function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ href, children: kids }) => {
          if (href && href.startsWith("/")) {
            return <Link href={href}>{kids}</Link>;
          }
          const external = href && /^https?:\/\//.test(href);
          return (
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
            >
              {kids}
            </a>
          );
        },
        table: ({ children: kids }) => (
          <div className="table-wrap">
            <table>{kids}</table>
          </div>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
