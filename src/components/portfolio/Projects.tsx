import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FactorLens",
    tag: "Python · Scikit-learn · XGBoost · Streamlit",
    href: "https://github.com/gauriiiiiiiiiiii/FactorLens",
    bullets: [
      "Constructed an end-to-end financial pipeline analyzing 90+ years of multi-source market time-series datasets",
      "Trained supervised ML models (LASSO, Random Forest, XGBoost) identifying systematic signals driving equity returns",
      "Computed interpretable financial metrics (alpha, beta, R², residual variance) across 100+ securities",
    ],
    neon: "cyan",
    orb: "oklch(0.87 0.22 195 / 0.18)",
    ring: "glow-ring-cyan",
    border: "hover:border-neon-cyan",
    label: "text-neon-cyan",
    dot: "bg-[oklch(0.87_0.22_195)]",
    pulse: "animate-neon-pulse-cyan",
    cmd: "factorLens.analyze()",
  },
  {
    title: "OuttaCouch",
    tag: "Next.js · Prisma · PostgreSQL · Supabase",
    href: "https://github.com/gauriiiiiiiiiiii/OuttaCouch",
    bullets: [
      "Built an event-first social platform enabling location-aware discovery & networking through shared events",
      "Engineered a scalable PostgreSQL schema via Prisma managing users, events, messaging & social connections",
      "Implemented OTP authentication with NextAuth while integrating Supabase storage for media uploads",
    ],
    neon: "pink",
    orb: "oklch(0.72 0.28 330 / 0.18)",
    ring: "glow-ring-pink",
    border: "hover:border-neon-pink",
    label: "text-neon-pink",
    dot: "bg-[oklch(0.72_0.28_330)]",
    pulse: "animate-neon-pulse-pink",
    cmd: "outtaCouch.discover()",
  },
  {
    title: "Customer Churn Analytics",
    tag: "Python · FastAPI · Streamlit · Scikit-learn",
    href: "https://github.com/gauriiiiiiiiiiii/CustomerChurnAnalytics",
    bullets: [
      "Engineered a production ML system delivering real-time churn predictions via API-based inference",
      "Modeled customer behavior using RFM features across 15+ attributes for improved interpretability",
      "Formulated a decision layer generating retention strategies across multiple churn-risk segments",
    ],
    neon: "violet",
    orb: "oklch(0.62 0.26 290 / 0.18)",
    ring: "glow-ring-violet",
    border: "hover:border-neon-violet",
    label: "text-neon-violet",
    dot: "bg-[oklch(0.62_0.26_290)]",
    pulse: "animate-neon-pulse-violet",
    cmd: "churn.predict(customer)",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="◈ chapter_05 — projects" title="Ideas brought to life.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            whileHover={{ y: -6 }}
            className={`group relative overflow-hidden rounded-3xl glass-neon p-8 ${p.border} transition-all block ${i === 2 ? "md:col-span-2" : ""}`}
            aria-label={`Open ${p.title} repository`}
          >
            {/* Neon orb glow */}
            <div
              className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-50 group-hover:opacity-90 transition-opacity duration-500"
              style={{ background: `radial-gradient(circle, ${p.orb}, transparent)` }}
            />
            {/* Neon top border shimmer on hover */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  p.neon === "cyan"
                    ? "linear-gradient(90deg, transparent, oklch(0.87 0.22 195 / 0.8), transparent)"
                    : p.neon === "pink"
                      ? "linear-gradient(90deg, transparent, oklch(0.72 0.28 330 / 0.8), transparent)"
                      : "linear-gradient(90deg, transparent, oklch(0.62 0.26 290 / 0.8), transparent)",
              }}
            />

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className={`font-mono text-xs uppercase tracking-widest ${p.label}`}>
                    {p.tag}
                  </p>
                  <h3 className="mt-3 font-display text-2xl md:text-3xl text-gradient">
                    {p.title}
                  </h3>
                </div>
                <ArrowUpRight
                  className={`${p.label} opacity-50 group-hover:opacity-100 group-hover:rotate-12 transition-all`}
                  size={28}
                />
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/80">
                {p.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className={`mt-1 ${p.label}`}>▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Neon terminal mock */}
              <div
                className={`mt-8 rounded-xl border bg-background/60 p-4 font-mono text-[11px] text-muted-foreground ${p.pulse}`}
                style={{
                  borderColor:
                    p.neon === "cyan"
                      ? "oklch(0.87 0.22 195 / 0.2)"
                      : p.neon === "pink"
                        ? "oklch(0.72 0.28 330 / 0.2)"
                        : "oklch(0.62 0.26 290 / 0.2)",
                }}
              >
                <div className="flex gap-1.5 mb-3">
                  <span className={`h-2 w-2 rounded-full ${p.dot} opacity-80`} />
                  <span className="h-2 w-2 rounded-full bg-neon-pink opacity-60" />
                  <span className="h-2 w-2 rounded-full bg-foreground/20" />
                </div>
                <span className={p.label}>$</span> {p.cmd}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
