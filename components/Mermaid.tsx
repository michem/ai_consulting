"use client";

import { useEffect, useId, useState } from "react";

/**
 * Renders a fenced ```mermaid block as an SVG diagram. Mermaid is loaded
 * lazily on the client; on a syntax error the raw source is shown instead
 * so a broken diagram never hides its own content.
 */
export default function Mermaid({ code }: { code: string }) {
  const [svg, setSvg] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const reactId = useId().replace(/[^a-zA-Z0-9]/g, "");

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: "neutral",
          securityLevel: "strict",
          fontFamily: "inherit",
          flowchart: { curve: "basis" },
        });
        const { svg: rendered } = await mermaid.render(`mmd${reactId}`, code);
        if (alive) setSvg(rendered);
      } catch {
        if (alive) setFailed(true);
      }
    })();
    return () => {
      alive = false;
    };
  }, [code, reactId]);

  if (failed) {
    return (
      <pre className="mermaid-error">
        <code>{code}</code>
      </pre>
    );
  }
  if (!svg) {
    return <div className="mermaid-loading">Rendering diagram…</div>;
  }
  return (
    <div
      className="mermaid-diagram"
      role="img"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
