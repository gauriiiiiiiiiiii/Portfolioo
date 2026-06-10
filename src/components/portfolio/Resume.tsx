import { motion } from "framer-motion";
import { Section } from "./Section";
import { Download, FileText } from "lucide-react";

const highlights = [
  "Software Development, Backend Engineering & Product Building",
  "Open to internships, freelances & exciting projects",
  "Based in India · open to remote",
];

export function Resume() {
  return (
    <Section id="resume" eyebrow="◌ chapter eight — resume" title="The chapters in brief.">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden glass rounded-3xl p-10 md:p-14"
      >
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />

        <div className="relative flex flex-col md:flex-row md:items-center gap-10">
          <div className="flex-1">
            <FileText className="text-primary" size={28} />
            <h3 className="mt-4 font-display text-3xl md:text-4xl text-gradient">
              A one-page snapshot of my journey.
            </h3>
            <ul className="mt-6 space-y-2 text-foreground/80">
              {highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="text-primary">✦</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://drive.google.com/file/d/1VQCHBaiz1XiNgzl5uzEP39b9ZMxbQyJd/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-[0_0_60px_-5px_var(--glow)] transition-all"
            >
              <Download size={16} /> Download résumé
            </a>
            <a
              href="https://gauriiiiiiiiiiii.github.io/Portfolio/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:border-primary/40 transition"
            >
              View as web page
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
