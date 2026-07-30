"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import Mermaid from "./Mermaid";

export default function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code: ({ className, children: kids, ...rest }) => {
          if (/language-mermaid/.test(className ?? "")) {
            return <Mermaid code={String(kids).trim()} />;
          }
          return (
            <code className={className} {...rest}>
              {kids}
            </code>
          );
        },
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
