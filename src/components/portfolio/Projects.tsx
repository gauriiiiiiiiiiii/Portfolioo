import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FactorLens",
    tag: "Python, Scikit-learn, XGBoost, Streamlit, Plotly",
    href: "https://github.com/gauriiiiiiiiiiii/FactorLens",
    bullets: [
      "Constructed an end-to-end financial pipeline analyzing 90+ years of multi-source market time-series datasets",
      "Trained supervised ML models (LASSO, Random Forest, XGBoost) identifying systematic signals driving equity returns",
      "Computed interpretable financial metrics (alpha, beta, R2, residual variance) across 100+ securities",
    ],
    accent: "from-accent/40 to-primary/30",
  },
  {
    title: "OuttaCouch",
    tag: "Next.js, Prisma, PostgreSQL, Supabase",
    href: "https://github.com/gauriiiiiiiiiiii/OuttaCouch",
    bullets: [
      "Built an event-first social platform enabling location-aware discovery & networking through shared events",
      "Engineered a scalable PostgreSQL schema via Prisma managing users, events, messaging & social connections",
      "Implemented OTP authentication with NextAuth while integrating Supabase storage for media uploads",
    ],
    accent: "from-primary/30 to-accent/40",
  },
  {
    title: "Customer Churn Analytics",
    tag: "Python, FastAPI, Streamlit, Scikit-learn",
    href: "https://github.com/gauriiiiiiiiiiii/CustomerChurnAnalytics",
    bullets: [
      "Engineered a production ML system delivering real-time churn predictions via API-based inference",
      "Modeled customer behavior using RFM features across 15+ attributes for improved interpretability",
      "Formulated a decision layer generating retention strategies across multiple churn-risk segments",
    ],
    accent: "from-primary/40 to-accent/30",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="◌ chapter five — projects" title="Ideas brought to life">
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
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl glass p-8 hover:border-primary/50 transition-colors block"
            aria-label={`Open ${p.title} repository`}
          >
            <div
              className={`absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity`}
            />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary/80">
                    {p.tag}
                  </p>
                  <h3 className="mt-3 font-display text-2xl md:text-3xl text-gradient">
                    {p.title}
                  </h3>
                </div>
                <ArrowUpRight className="text-primary opacity-60 group-hover:opacity-100 group-hover:rotate-12 transition-all" size={28} />
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/80">
                {p.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-1 text-primary">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl border border-border bg-background/40 p-4 font-mono text-[11px] text-muted-foreground">
                <div className="flex gap-1.5 mb-3">
                  <span className="h-2 w-2 rounded-full bg-accent/70" />
                  <span className="h-2 w-2 rounded-full bg-primary/70" />
                  <span className="h-2 w-2 rounded-full bg-foreground/30" />
                </div>
                <span className="text-primary">$</span> open {p.title.toLowerCase().split(" ")[0]}
                .app
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
