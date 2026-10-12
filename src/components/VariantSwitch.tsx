"use client";

import { useEffect, useState } from "react";

type Variant = "a" | "b";

const options: { id: Variant; name: string }[] = [
  { id: "a", name: "Control" },
  { id: "b", name: "Variant" },
];

// The site's one deliberate gimmick: an A/B switch you can see and operate.
// It sets data-variant on <html>; CSS does the rest. Nothing is stored or sent.
export default function VariantSwitch() {
  const [variant, setVariant] = useState<Variant>("b");

  useEffect(() => {
    document.documentElement.dataset.variant = variant;
  }, [variant]);

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
            onClick={() => setVariant(option.id)}
            className={`h-7 w-8 cursor-pointer rounded-full font-mono text-xs uppercase transition-colors ${
              variant === option.id
                ? "bg-ink text-paper"
                : "text-ink-soft hover:text-oxblood"
            }`}
          >
            {option.id}
          </button>
        ))}
      </div>
    </div>
  );
}
