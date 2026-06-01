"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Copy, Check } from "lucide-react";

const codeSnippets = [
  {
    title: "Optimizely CLI — Experiment Automation",
    lang: "typescript",
    code: `// Automated A/B experiment creation via Optimizely REST API
export async function createExperiment(config: ExperimentConfig) {
  const response = await fetch(
    \`https://api.optimizely.com/v2/experiments\`,
    {
      method: "POST",
      headers: {
        Authorization: \`Bearer \${process.env.OPTIMIZELY_TOKEN}\`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: config.name,
        audience_conditions: buildAudienceTargeting(config.audience),
        metrics: config.goals.map(g => ({
          event_id: g.eventId,
          aggregator: "sum",
          winning_direction: "increasing",
        })),
        variations: config.variations.map((v, i) => ({
          name: v.name,
          weight: v.trafficAllocation,
          actions: generateVariationActions(v.selector, v.css),
        })),
      }),
    }
  );

  // Validate and auto-deploy to staging
  const experiment = await response.json();
  await validateExperimentIntegrity(experiment.id);
  return experiment;
}`,
  },
  {
    title: "Performance — Critical CSS Extraction",
    lang: "javascript",
    code: `// Critical path CSS extraction for <2s LCP on 3G
import { extractCritical } from 'critters';

export async function optimizeCriticalRendering(html, css) {
  const criticalCss = await extractCritical(html, {
    css,
    preloadFonts: true,
    inlineFonts: false,
    pruneSource: true,
  });

  // Inline critical styles, async load remainder
  return html.replace(
    '</head>',
    \`<style>\${criticalCss}</style>
     <link rel="preload" href="/styles/main.css" as="style"
           onload="this.rel='stylesheet'">
     <noscript><link rel="stylesheet" href="/styles/main.css"></noscript>
     </head>\`
  );
}`,
  },
  {
    title: "React — Reusable Component Library",
    lang: "tsx",
    code: `// Design system component with full accessibility
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={loading || props.disabled}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium',
          'transition-all duration-200 focus:outline-none focus:ring-2',
          'focus:ring-offset-2 focus:ring-[#8B5CF6]',
          variant === 'primary' && 'bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90',
          size === 'md' && 'px-5 py-2.5 text-sm',
          loading && 'opacity-70 cursor-not-allowed'
        )}
        {...props}
      >
        {loading ? <Spinner className="mr-2" /> : null}
        {children}
      </button>
    );
  }
);`,
  },
];

export default function TerminalShowcase() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const [typedCode, setTypedCode] = useState("");

  useEffect(() => {
    const code = codeSnippets[active].code;
    setTypedCode("");
    let i = 0;
    const timer = setInterval(() => {
      setTypedCode(code.slice(0, i));
      i++;
      if (i > code.length) clearInterval(timer);
    }, 4);
    return () => clearInterval(timer);
  }, [active]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippets[active].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-[#8B5CF6] text-sm font-medium uppercase tracking-widest">
            Code Quality
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            How I Write Code
          </h2>
          <p className="text-[#6b7280] max-w-xl">
            Production-grade code with type safety, accessibility, and performance
            as first-class concerns.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden bg-[#0d1117] border border-white/10"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs text-[#6b7280] font-mono">
                {codeSnippets[active].title}
              </span>
            </div>
            <button
              onClick={copyToClipboard}
              className="p-1.5 rounded-md text-[#6b7280] hover:text-[#f5f5f5] hover:bg-white/5 transition-all"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-white/5 overflow-x-auto">
            {codeSnippets.map((snippet, i) => (
              <button
                key={snippet.title}
                onClick={() => setActive(i)}
                className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                  active === i
                    ? "text-[#8B5CF6] border-[#8B5CF6] bg-white/5"
                    : "text-[#6b7280] border-transparent hover:text-[#a1a1aa] hover:bg-white/[0.02]"
                }`}
              >
                {snippet.title.split(" — ")[0]}
              </button>
            ))}
          </div>

          {/* Code */}
          <div className="p-4 sm:p-6 overflow-x-auto">
            <pre className="font-mono text-sm leading-relaxed">
              <code className="text-[#a5d6ff]">
                {typedCode}
                <span className="inline-block w-2 h-4 bg-[#8B5CF6] animate-pulse ml-0.5 align-middle" />
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
