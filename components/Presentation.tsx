"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Markdown from "./Markdown";
import type { Slide } from "@/lib/content";

interface Props {
  title: string;
  slides: Slide[];
  onClose: () => void;
  initialSlide?: number;
}

export default function Presentation({ title, slides, onClose, initialSlide = 0 }: Props) {
  const [index, setIndex] = useState(
    Math.min(Math.max(initialSlide, 0), slides.length - 1)
  );
  const bodyRef = useRef<HTMLDivElement>(null);

  const next = useCallback(
    () => setIndex((i) => Math.min(i + 1, slides.length - 1)),
    [slides.length]
  );
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") setIndex(0);
      else if (e.key === "End") setIndex(slides.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, onClose, slides.length]);

  // Lock page scroll while presenting; reset slide scroll on navigation.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  useEffect(() => {
    bodyRef.current?.scrollTo({ top: 0 });
  }, [index]);

  const slide = slides[index];

  return (
    <div className="presentation" role="dialog" aria-modal="true" aria-label={`${title} — presentation`}>
      <div className="presentation-topbar">
        <span className="presentation-deck-title">{title}</span>
        <span className="presentation-counter">
          {index + 1} / {slides.length}
        </span>
        <button className="presentation-close" onClick={onClose} aria-label="Exit presentation (Esc)">
          ✕ Exit
        </button>
      </div>

      <div className="presentation-stage" onClick={next}>
        <div
          className="presentation-slide"
          onClick={(e) => e.stopPropagation()}
        >
          {slide.title && <h2 className="slide-heading">{slide.title}</h2>}
          <div className="slide-body" ref={bodyRef}>
            <Markdown>{slide.markdown}</Markdown>
          </div>
        </div>
      </div>

      <div className="presentation-controls">
        <button onClick={prev} disabled={index === 0} aria-label="Previous slide">
          ← Prev
        </button>
        <div className="presentation-progress" aria-hidden="true">
          <div
            className="presentation-progress-fill"
            style={{ width: `${((index + 1) / slides.length) * 100}%` }}
          />
        </div>
        <button
          onClick={next}
          disabled={index === slides.length - 1}
          aria-label="Next slide"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
