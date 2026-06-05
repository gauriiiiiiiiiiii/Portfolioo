import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl px-6 py-16 md:py-24 ${className}`}
    >
      {(eyebrow || title) && (
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 md:mb-20"
        >
          {eyebrow && (
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-light leading-[1.05] tracking-tight">
              <span className="text-gradient">{title}</span>
            </h2>
          )}
          {title && (
            <div
              className="mt-4 h-px w-24"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.87 0.22 195), oklch(0.72 0.28 330), oklch(0.62 0.26 290), transparent)",
              }}
            />
          )}
        </motion.header>
      )}
      {children}
    </section>
  );
}
