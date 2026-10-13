"use client";

import { useRef, useState } from "react";

const MIN = 6;
const MAX = 100;

// The hero as a live before/after. The control version of the hero sits on
// top of the designed one and is wiped away on load; the handle that did the
// wiping stays at the right edge and can be dragged back to compare.
export default function SplitReveal({
  control,
  children,
}: {
  control: React.ReactNode;
  children: React.ReactNode;
}) {
  const frame = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(MAX);
  const [touched, setTouched] = useState(false);

  function move(clientX: number) {
    const rect = frame.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(MAX, Math.max(MIN, next)));
  }

  return (
    <div
      ref={frame}
      className={`split ${touched ? "" : "split-intro"}`}
      style={{ "--pos": `${pos}%` } as React.CSSProperties}
    >
      {children}

      <div className="split-control skin-control" aria-hidden="true" inert>
        {control}
      </div>

      <div
        className="split-handle"
        role="slider"
        tabIndex={0}
        aria-label="Compare the control hero with the designed one"
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={Math.round(pos)}
        aria-valuetext={
          pos >= MAX ? "Showing the variant" : `Control covers ${Math.round(100 - pos)}%`
        }
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId);
          setTouched(true);
          move(event.clientX);
        }}
        onPointerMove={(event) => {
          if (event.currentTarget.hasPointerCapture(event.pointerId)) move(event.clientX);
        }}
        onKeyDown={(event) => {
          const step = event.key === "ArrowLeft" ? -6 : event.key === "ArrowRight" ? 6 : 0;
          if (!step) return;
          event.preventDefault();
          setTouched(true);
          setPos((value) => Math.min(MAX, Math.max(MIN, value + step)));
        }}
      >
        <span className="split-knob">
          <span aria-hidden="true">←</span>
          <span className="md:hidden">A / B</span>
          <span className="hidden md:inline">{pos >= MAX ? "Drag for the control" : "A / B"}</span>
        </span>
      </div>
    </div>
  );
}
