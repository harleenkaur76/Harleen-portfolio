"use client";

import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">
              <span className="text-[#8B5CF6]">HK</span>
              <span className="text-[#f5f5f5]">.</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/harleenkaur76"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#6b7280] hover:text-[#f5f5f5] hover:bg-white/5 transition-all"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com/in/harleenkaur07/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#6b7280] hover:text-[#f5f5f5] hover:bg-white/5 transition-all"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:harleenbindra07@gmail.com"
              className="p-2 rounded-lg text-[#6b7280] hover:text-[#f5f5f5] hover:bg-white/5 transition-all"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-sm text-[#6b7280] flex items-center gap-1">
            Built with <Heart size={14} className="text-[#8B5CF6]" /> by Harleen Kaur
          </p>
        </div>
      </div>
    </footer>
  );
}
