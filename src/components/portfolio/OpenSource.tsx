import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";

const GH_USER = "gauriiiiiiiiiiii";

export function OpenSource() {
  return (
    <Section
      id="opensource"
      eyebrow="◌ chapter seven — open source"
      title="Small commits, big love."
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass rounded-2xl p-6 md:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <a
            href={`https://github.com/${GH_USER}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 group"
          >
            <Github className="text-primary" size={20} />
            <span className="font-mono text-sm group-hover:text-primary transition-colors">
              @{GH_USER}
            </span>
          </a>
          <a
            href={`https://github.com/${GH_USER}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
          >
            View profile <ExternalLink size={12} />
          </a>
        </div>

        <div className="mt-6 overflow-x-auto rounded-xl bg-background/40 border border-border p-4">
          <img
            src={`https://ghchart.rshah.org/8b7fd9/${GH_USER}`}
            alt={`${GH_USER} GitHub contribution chart`}
            className="w-full min-w-[640px] h-auto"
            loading="lazy"
          />
        </div>

        <p className="mt-4 text-xs font-mono text-muted-foreground text-center">
          {/* live contributions · pulled from github.com/{GH_USER} */}
        </p>
      </motion.div>
    </Section>
  );
}
