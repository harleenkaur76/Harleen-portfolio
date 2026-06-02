"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { sendContactEmail } from "@/app/actions";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    fallback?: boolean;
    message: string;
  } | null>(null);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setResult(null);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const response = await sendContactEmail(formData);

    if (response.success) {
      setResult({ success: true, message: "Sent. I will get back to you." });
      (document.getElementById("contact-form") as HTMLFormElement)?.reset();
    } else if ((response as any).requiresFallback) {
      const body = encodeURIComponent(`Hey, I am ${name} (${email})\n\n${message}`);
      const subj = encodeURIComponent(subject || "Portfolio Contact");
      window.open(`mailto:harleenbindra07@gmail.com?subject=${subj}&body=${body}`, "_blank");
      setResult({ success: true, fallback: true, message: "Opened your email client — hit send when ready." });
    } else {
      setResult({ success: false, message: response.error || "Something went wrong. Try again." });
    }

    setIsSubmitting(false);
  }

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#141210]/30 via-transparent to-[#141210]/50 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="absolute -top-8 -left-4 sm:-left-8 pointer-events-none">
            <span className="text-[8rem] sm:text-[10rem] font-black text-white/[0.015] leading-none">07</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#e5bc5c]" />
            <p className="text-sm font-mono text-[#e5bc5c]">// contact</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f2eee6] mb-5">Let us talk</h2>
          <p className="text-[#b8ad9c] leading-relaxed max-w-lg">
            Always curious about frontend work around performance or experimentation. Or just argue about React vs Vue.
          </p>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          <a
            href="mailto:harleenbindra07@gmail.com"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm text-[#f2eee6] bg-[#e5bc5c]/10 border border-[#e5bc5c]/25 hover:bg-[#e5bc5c]/20 hover:border-[#e5bc5c]/40 transition-all duration-300 shadow-[0_0_20px_rgba(229,188,92,0.05)]"
          >
            harleenbindra07@gmail.com
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="https://github.com/harleenkaur76"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm text-[#b8ad9c] border border-white/[0.08] hover:bg-white/[0.03] hover:text-[#f2eee6] hover:border-white/[0.15] transition-all duration-300"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/harleenkaur07/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm text-[#b8ad9c] border border-white/[0.08] hover:bg-white/[0.03] hover:text-[#f2eee6] hover:border-white/[0.15] transition-all duration-300"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <form id="contact-form" action={handleSubmit} className="space-y-6 max-w-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-[11px] font-mono text-[#9a9386] uppercase tracking-widest mb-2">your name</label>
                <input
                  type="text" id="name" name="name" required
                  className="w-full px-4 py-3 rounded-lg bg-[#181614]/50 border border-white/[0.08] text-[#f2eee6] placeholder-[#9a9386]/40 focus:outline-none focus:border-[#e5bc5c]/50 focus:ring-1 focus:ring-[#e5bc5c]/10 focus:bg-[#181614]/80 transition-all duration-300"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[11px] font-mono text-[#9a9386] uppercase tracking-widest mb-2">your email</label>
                <input
                  type="email" id="email" name="email" required
                  className="w-full px-4 py-3 rounded-lg bg-[#181614]/50 border border-white/[0.08] text-[#f2eee6] placeholder-[#9a9386]/40 focus:outline-none focus:border-[#e5bc5c]/50 focus:ring-1 focus:ring-[#e5bc5c]/10 focus:bg-[#181614]/80 transition-all duration-300"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-[11px] font-mono text-[#9a9386] uppercase tracking-widest mb-2">what is it about</label>
              <input
                type="text" id="subject" name="subject"
                className="w-full px-4 py-3 rounded-lg bg-[#181614]/50 border border-white/[0.08] text-[#f2eee6] placeholder-[#9a9386]/40 focus:outline-none focus:border-[#e5bc5c]/50 focus:ring-1 focus:ring-[#e5bc5c]/10 focus:bg-[#181614]/80 transition-all duration-300"
                placeholder="Job opportunity / Collaboration"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[11px] font-mono text-[#9a9386] uppercase tracking-widest mb-2">the message</label>
              <textarea
                id="message" name="message" required rows={5}
                className="w-full px-4 py-3 rounded-lg bg-[#181614]/50 border border-white/[0.08] text-[#f2eee6] placeholder-[#9a9386]/40 focus:outline-none focus:border-[#e5bc5c]/50 focus:ring-1 focus:ring-[#e5bc5c]/10 focus:bg-[#181614]/80 transition-all duration-300 resize-none"
                placeholder="Tell me what you are working on..."
              />
            </div>

            <button
              type="submit" disabled={isSubmitting}
              className="px-7 py-3.5 rounded-lg bg-[#e5bc5c] text-[#0d0c0a] font-semibold text-sm hover:bg-[#f0d28a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-[0_0_30px_rgba(229,188,92,0.15)]"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#0d0c0a]/30 border-t-[#0d0c0a] rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send message
                </>
              )}
            </button>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg flex items-center gap-3 border text-sm ${
                  result.success
                    ? "bg-[#e5bc5c]/10 text-[#e5bc5c] border-[#e5bc5c]/25"
                    : "bg-red-500/10 text-red-400 border-red-500/20"
                }`}
              >
                <CheckCircle size={18} />
                <p>{result.message}</p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
