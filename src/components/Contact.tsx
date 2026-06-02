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
      const form = document.getElementById("contact-form") as HTMLFormElement;
      form?.reset();
    } else if (response.requiresFallback) {
      const mailtoBody = encodeURIComponent(
        `Hey, I am ${name} (${email})\n\n${message}`
      );
      const mailtoSubject = encodeURIComponent(subject || "Portfolio Contact");
      const mailtoUrl = `mailto:harleenbindra07@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      window.open(mailtoUrl, "_blank");
      setResult({
        success: true,
        fallback: true,
        message: "Opened your email client — hit send whenever you are ready.",
      });
    } else {
      setResult({
        success: false,
        message: response.error || "Something went wrong. Try again.",
      });
    }

    setIsSubmitting(false);
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#d4a853]" />
            <p className="text-sm font-mono text-[#d4a853]">// contact</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f2eee6] mb-5">
            Let us talk
          </h2>
          <p className="text-[#9a9386] leading-relaxed max-w-lg">
            I am always curious about interesting frontend work, especially around performance
            or experimentation. If you have a project where code quality actually matters,
            or if you just want to argue about React vs Vue, I am all ears.
          </p>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-14"
        >
          <a
            href="mailto:harleenbindra07@gmail.com"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded text-sm text-[#f2eee6] bg-[#d4a853]/10 border border-[#d4a853]/20 hover:bg-[#d4a853]/20 hover:border-[#d4a853]/40 transition-all"
          >
            harleenbindra07@gmail.com
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="https://github.com/harleenkaur76"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded text-sm text-[#9a9386] border border-white/[0.06] hover:bg-white/[0.02] hover:text-[#f2eee6] transition-all"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/harleenkaur07/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded text-sm text-[#9a9386] border border-white/[0.06] hover:bg-white/[0.02] hover:text-[#f2eee6] transition-all"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <form id="contact-form" action={handleSubmit} className="space-y-5 max-w-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-[11px] font-mono text-[#9a9386] uppercase tracking-widest mb-2">
                  your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded bg-transparent border border-white/[0.06] text-[#f2eee6] placeholder-[#9a9386]/30 focus:outline-none focus:border-[#d4a853]/40 transition-all"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[11px] font-mono text-[#9a9386] uppercase tracking-widest mb-2">
                  your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded bg-transparent border border-white/[0.06] text-[#f2eee6] placeholder-[#9a9386]/30 focus:outline-none focus:border-[#d4a853]/40 transition-all"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-[11px] font-mono text-[#9a9386] uppercase tracking-widest mb-2">
                what is it about
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 rounded bg-transparent border border-white/[0.06] text-[#f2eee6] placeholder-[#9a9386]/30 focus:outline-none focus:border-[#d4a853]/40 transition-all"
                placeholder="Job opportunity / Collaboration"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[11px] font-mono text-[#9a9386] uppercase tracking-widest mb-2">
                the message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded bg-transparent border border-white/[0.06] text-[#f2eee6] placeholder-[#9a9386]/30 focus:outline-none focus:border-[#d4a853]/40 transition-all resize-none"
                placeholder="Tell me what you are working on..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 rounded bg-[#d4a853] text-[#0d0c0a] font-semibold text-sm hover:bg-[#e8c97a] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
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
                className={`p-3 rounded flex items-center gap-3 border text-sm ${
                  result.success
                    ? "bg-[#d4a853]/10 text-[#d4a853] border-[#d4a853]/20"
                    : "bg-red-500/10 text-red-400 border-red-500/20"
                }`}
              >
                <CheckCircle size={16} />
                <p>{result.message}</p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
