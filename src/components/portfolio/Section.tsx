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
      className={`relative mx-auto w-full max-w-6xl px-6 py-28 md:py-36 ${className}`}
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
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary/80">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-light leading-[1.05] tracking-tight">
              <span className="text-gradient">{title}</span>
            </h2>
          )}
        </motion.header>
      )}
      {children}
    </section>
  );
}
