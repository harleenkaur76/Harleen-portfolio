"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

const codeSnippets = [
  {
    title: "Optimizely REST API",
    code: `const response = await fetch(
  'https://api.optimizely.com/v2/experiments',
  {
    method: 'POST',
    headers: {
      Authorization: \`Bearer \${token}\`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'hero_cta_variant_test',
      variations: [
        { name: 'control', weight: 5000 },
        { name: 'variant_a', weight: 5000 },
      ],
    }),
  }
);

const data = await response.json();
// if this fails at 3am, you know who to blame`,
  },
  {
    title: "Accessible React button",
    code: `function AccessibleButton({ variant = 'primary', loading, children, ...props }) {
  const base = 'inline-flex items-center justify-center px-4 py-2 rounded font-medium';

  const styles = {
    primary: 'bg-[#e5bc5c] text-[#0d0c0a] hover:bg-[#f0d28a]',
    ghost: 'border border-white/10 text-[#f2eee6] hover:bg-white/[0.03]',
  };

  return (
    <button
      disabled={loading}
      aria-busy={loading}
      className={\`\${base} \${styles[variant]}\`}
      {...props}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
}`,
  },
  {
    title: "Critical CSS extraction",
    code: `import { extractCritical } from 'critters';

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
// Shaved 1.2s off their LCP. The client still complained.`,
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
    }, 2);
    return () => clearInterval(timer);
  }, [active]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippets[active].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#141210]/20 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="absolute -top-8 -left-4 sm:-left-8 pointer-events-none">
            <span className="text-[8rem] sm:text-[10rem] font-black text-white/[0.015] leading-none">05</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#e5bc5c]" />
            <p className="text-sm font-mono text-[#e5bc5c]">// code</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f2eee6] mb-5">Snippets from real PRs</h2>
          <p className="text-[#b8ad9c] max-w-lg">
            Not theoretical examples. The comments tell the real story.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-xl overflow-hidden bg-[#12110e] border border-white/[0.06] shadow-[0_0_60px_rgba(229,188,92,0.03)]"
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 bg-[#1a1814] border-b border-white/[0.06]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#e5bc5c]/50" />
              <div className="w-3 h-3 rounded-full bg-[#9a9386]/30" />
              <div className="w-3 h-3 rounded-full bg-[#e5bc5c]/50" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs text-[#9a9386] font-mono">snippets.js</span>
            </div>
            <button onClick={copyToClipboard} className="p-2 rounded text-[#9a9386] hover:text-[#f2eee6] hover:bg-white/[0.05] transition-all">
              {copied ? <Check size={14} className="text-[#e5bc5c]" /> : <Copy size={14} />}
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-white/[0.06] overflow-x-auto">
            {codeSnippets.map((snippet, i) => (
              <button
                key={snippet.title}
                onClick={() => setActive(i)}
                className={`px-5 py-3 text-xs font-medium whitespace-nowrap transition-colors border-b-2 ${
                  active === i
                    ? "text-[#e5bc5c] border-[#e5bc5c] bg-[#e5bc5c]/[0.04]"
                    : "text-[#9a9386]/50 border-transparent hover:text-[#9a9386]"
                }`}
              >
                {snippet.title}
              </button>
            ))}
          </div>

          {/* Code */}
          <div className="p-5 sm:p-7 overflow-x-auto">
            <pre className="font-mono text-[13px] leading-relaxed">
              <code className="text-[#c8bfb0]">
                {typedCode}
                <span className="inline-block w-2 h-5 bg-[#e5bc5c] animate-pulse ml-1 align-middle shadow-[0_0_8px_rgba(229,188,92,0.5)]" />
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
