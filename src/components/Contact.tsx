"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { sendContactEmail } from "@/app/actions";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setResult(null);

    const response = await sendContactEmail(formData);

    if (response.success) {
      setResult({ success: true, message: "Message sent successfully! I'll get back to you soon." });
      const form = document.getElementById("contact-form") as HTMLFormElement;
      form?.reset();
    } else {
      setResult({ success: false, message: response.error || "Something went wrong. Please try again." });
    }

    setIsSubmitting(false);
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-[#6b7280] max-w-xl">
            Open to frontend engineering roles, A/B testing opportunities, and collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-[#f5f5f5] mb-1">Email</h3>
                <a
                  href="mailto:harleenbindra07@gmail.com"
                  className="text-[#6b7280] hover:text-[#8B5CF6] transition-colors"
                >
                  harleenbindra07@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#00d4aa]/10 text-[#00d4aa] shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-[#f5f5f5] mb-1">Phone</h3>
                <a
                  href="tel:+919990213284"
                  className="text-[#6b7280] hover:text-[#00d4aa] transition-colors"
                >
                  (+91) 9990213284
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-[#f5f5f5] mb-1">Location</h3>
                <p className="text-[#6b7280]">India</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              id="contact-form"
              action={handleSubmit}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#a1a1aa] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#12121a] border border-white/10 text-[#f5f5f5] placeholder-[#6b7280] focus:outline-none focus:border-[#8B5CF6]/50 focus:ring-1 focus:ring-[#8B5CF6]/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#a1a1aa] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#12121a] border border-white/10 text-[#f5f5f5] placeholder-[#6b7280] focus:outline-none focus:border-[#8B5CF6]/50 focus:ring-1 focus:ring-[#8B5CF6]/20 transition-all"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#a1a1aa] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl bg-[#12121a] border border-white/10 text-[#f5f5f5] placeholder-[#6b7280] focus:outline-none focus:border-[#8B5CF6]/50 focus:ring-1 focus:ring-[#8B5CF6]/20 transition-all"
                  placeholder="Job opportunity / Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#a1a1aa] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-[#12121a] border border-white/10 text-[#f5f5f5] placeholder-[#6b7280] focus:outline-none focus:border-[#8B5CF6]/50 focus:ring-1 focus:ring-[#8B5CF6]/20 transition-all resize-none"
                  placeholder="Tell me about the opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#8B5CF6] text-white font-semibold hover:bg-[#8B5CF6]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl flex items-center gap-3 ${
                    result.success
                      ? "bg-[#00d4aa]/10 text-[#00d4aa] border border-[#00d4aa]/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}
                >
                  {result.success && <CheckCircle size={20} />}
                  <p className="text-sm">{result.message}</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
