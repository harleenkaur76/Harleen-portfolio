"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

const codeSnippets = [
  {
    title: "Optimizely REST API call",
    code: `// Creating an experiment via the Optimizely v2 API
const response = await fetch(
  'https://api.optimizely.com/v2/experiments',
  {
    method: 'POST',
    headers: {
      Authorization: \`Bearer \${token}\`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'hero_cta_variant_test',
      project_id: projectId,
      variations: [
        { name: 'control', weight: 5000 },
        { name: 'variant_a', weight: 5000 },
      ],
      metrics: [{
        event_id: 'cta_click',
        aggregator: 'sum',
      }],
    }),
  }
);

const data = await response.json();
// if this fails at 3am, you know who to blame`,
  },
  {
    title: "Accessible React button",
    code: `function AccessibleButton({
  variant = 'primary',
  loading = false,
  children,
  ...props
}) {
  const base = 'inline-flex items-center justify-center px-4 py-2 rounded font-medium transition-colors';

  const styles = {
    primary: 'bg-[#d4a853] text-[#0d0c0a] hover:bg-[#e8c97a]',
    ghost: 'border border-white/10 text-[#f2eee6] hover:bg-white/[0.03]',
  };

  return (
    <button
      disabled={loading || props.disabled}
      aria-busy={loading}
      className={\`\${base} \${styles[variant]} \
        disabled:opacity-50 disabled:cursor-not-allowed\`}
      {...props}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
}`,
  },
  {
    title: "Critical CSS extraction",
    code: `// For a client who absolutely refused to let me touch their
// ancient build pipeline. This was the compromise.

import { extractCritical } from 'critters';

async function optimize(html, css) {
  const critical = await extractCritical(html, {
    css,
    preloadFonts: true,
    pruneSource: true,
  });

  return html.replace(
    '</head>',
    \`<style>\${critical}</style></head>\`
  );
}
// This shaved 1.2s off their LCP. The client still complained.`,
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
    }, 3);
    return () => clearInterval(timer);
  }, [active]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippets[active].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#d4a853]" />
            <p className="text-sm font-mono text-[#d4a853]">// code_samples</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f2eee6] mb-5">
            Snippets from real PRs
          </h2>
          <p className="text-[#9a9386] max-w-lg">
            These are not theoretical examples. The comments tell the real story.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="rounded-lg overflow-hidden bg-[#100f0d] border border-white/[0.06]"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-[#161411] border-b border-white/[0.05]">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#d4a853]/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#9a9386]/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#d4a853]/40" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-[10px] text-[#9a9386] font-mono uppercase tracking-widest">
                snippets
              </span>
            </div>
            <button
              onClick={copyToClipboard}
              className="p-1.5 rounded text-[#9a9386] hover:text-[#f2eee6] transition-all"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-white/[0.05] overflow-x-auto">
            {codeSnippets.map((snippet, i) => (
              <button
                key={snippet.title}
                onClick={() => setActive(i)}
                className={`px-4 py-2.5 text-xs font-medium whitespace-nowrap transition-colors border-b-2 ${
                  active === i
                    ? "text-[#d4a853] border-[#d4a853] bg-white/[0.02]"
                    : "text-[#9a9386]/50 border-transparent hover:text-[#9a9386]"
                }`}
              >
                {snippet.title}
              </button>
            ))}
          </div>

          {/* Code */}
          <div className="p-4 sm:p-6 overflow-x-auto">
            <pre className="font-mono text-[13px] leading-relaxed">
              <code className="text-[#b5a89a]">
                {typedCode}
                <span className="inline-block w-2 h-4 bg-[#d4a853] animate-pulse ml-0.5 align-middle" />
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
