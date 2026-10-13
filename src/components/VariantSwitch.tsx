"use client";

import { useState } from "react";
import { flushSync } from "react-dom";

type Variant = "a" | "b";

const options: { id: Variant; name: string }[] = [
  { id: "a", name: "Control" },
  { id: "b", name: "Variant" },
];

function applyVariant(variant: Variant) {
  document.documentElement.dataset.variant = variant;
}

// The site's signature: an A/B switch you can see and operate. A is the
// control (the page with the design decisions removed), B is the variant.
// It sets data-variant on <html> and CSS does the rest. Nothing is stored.
export default function VariantSwitch() {
  const [variant, setVariant] = useState<Variant>("b");

  function choose(next: Variant) {
    if (next === variant) return;
    const update = () => {
      applyVariant(next);
      flushSync(() => setVariant(next));
    };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced && "startViewTransition" in document) {
      document.startViewTransition(update);
    } else {
      update();
    }
  }

  return (
    <div role="group" aria-label="Page version" className="flex items-center gap-2">
      <span className="label hidden lg:inline" aria-hidden="true">
        {variant === "a" ? "Control" : "Variant"}
      </span>
      <div className="flex rounded-full border border-ink p-0.5">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            aria-pressed={variant === option.id}
            aria-label={`${option.name} (version ${option.id.toUpperCase()})`}
            title={option.name}
            onClick={() => choose(option.id)}
            className={`h-7 w-8 cursor-pointer rounded-full font-mono text-xs uppercase transition-colors ${
              variant === option.id ? "bg-ink text-paper" : "text-ink-soft hover:text-oxblood"
            }`}
          >
            {option.id}
          </button>
        ))}
      </div>
    </div>
  );
}
