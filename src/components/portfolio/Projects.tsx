import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "EtcdLockMaster",
    tag: "Python · etcd · Raft Consensus · gRPC · Docker",
    href: "https://github.com/gauriiiiiiiiiiii/EtcdLockMaster",
    bullets: [
      "Developed a distributed locking library on etcd using atomic CAS transactions and lease-based TTL expiry — mutual exclusion over a 3-node Raft cluster with automatic crash recovery",
      "Resolved 3 race conditions in watch ordering, timeout handling, and thread state leakage; validated via 12-test suite covering re-entrancy, auto-renewal, and cross-node exclusivity",
    ],
    neon: "cyan",
    orb: "oklch(0.87 0.22 195 / 0.18)",
    ring: "glow-ring-cyan",
    border: "hover:border-neon-cyan",
    label: "text-neon-cyan",
    dot: "bg-[oklch(0.87_0.22_195)]",
    pulse: "animate-neon-pulse-cyan",
    shimmer: "linear-gradient(90deg, transparent, oklch(0.87 0.22 195 / 0.8), transparent)",
    terminalBorder: "oklch(0.87 0.22 195 / 0.2)",
    cmd: "etcdLock.acquire()",
  },
  {
    title: "OuttaCouch",
    tag: "Next.js · PostgreSQL · Prisma · Socket.io · Supabase",
    href: "https://github.com/gauriiiiiiiiiiii/OuttaCouch",
    bullets: [
      "Architected a full-stack social platform on Next.js 15 — 20+ REST APIs, 15+ relational entities, live messaging (Socket.io), QR ticketing, referral onboarding, location-aware scoring, and host analytics",
      "Secured with JWT, OTP via Twilio & Resend, CSRF protection, rate limiting, and role-based auth; patched 9 bugs including 3 security vulnerabilities via self-conducted audit",
    ],
    neon: "pink",
    orb: "oklch(0.72 0.28 330 / 0.18)",
    ring: "glow-ring-pink",
    border: "hover:border-neon-pink",
    label: "text-neon-pink",
    dot: "bg-[oklch(0.72_0.28_330)]",
    pulse: "animate-neon-pulse-pink",
    shimmer: "linear-gradient(90deg, transparent, oklch(0.72 0.28 330 / 0.8), transparent)",
    terminalBorder: "oklch(0.72 0.28 330 / 0.2)",
    cmd: "outtaCouch.discover()",
  },
  {
    title: "FactorLens",
    tag: "Python · Scikit-learn · XGBoost · Streamlit · Plotly",
    href: "https://github.com/gauriiiiiiiiiiii/FactorLens",
    bullets: [
      "Constructed a quantitative equity factor pipeline over 266K rows, 264 tickers — 15 cross-sectional factors, z-score normalization, and as-of merge on fundamentals to eliminate look-ahead bias",
      "Trained LASSO, RF, XGBoost on chronological 80/20 split to extract alpha signals; evaluated via Spearman IC, Sharpe ratio, and max drawdown across long-short portfolios",
    ],
    neon: "violet",
    orb: "oklch(0.62 0.26 290 / 0.18)",
    ring: "glow-ring-violet",
    border: "hover:border-neon-violet",
    label: "text-neon-violet",
    dot: "bg-[oklch(0.62_0.26_290)]",
    pulse: "animate-neon-pulse-violet",
    shimmer: "linear-gradient(90deg, transparent, oklch(0.62 0.26 290 / 0.8), transparent)",
    terminalBorder: "oklch(0.62 0.26 290 / 0.2)",
    cmd: "factorLens.analyze()",
  },
  {
    title: "SemanticShelf",
    tag: "Python · Sentence-Transformers · ChromaDB · Streamlit",
    href: "https://github.com/gauriiiiiiiiiiii/SemanticShelf",
    bullets: [
      "Designed a semantic retrieval system over 6,810 books — Sentence-Transformers embeddings in a persistent ChromaDB vector store, ranked via cosine similarity on combined title, authors, and description fields",
      "Engineered a thread-safe recommender with LRU-cached model loading, batched indexing, deterministic ISBN IDs, and auto-rebuild on schema drift",
    ],
    neon: "lime",
    orb: "oklch(0.85 0.25 145 / 0.18)",
    ring: "glow-ring-lime",
    border: "hover:border-neon-lime",
    label: "text-neon-lime",
    dot: "bg-[oklch(0.85_0.25_145)]",
    pulse: "animate-neon-pulse-lime",
    shimmer: "linear-gradient(90deg, transparent, oklch(0.85 0.25 145 / 0.8), transparent)",
    terminalBorder: "oklch(0.85 0.25 145 / 0.2)",
    cmd: "semanticShelf.search(query)",
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
            className={`group relative overflow-hidden rounded-3xl glass-neon p-8 ${p.border} transition-all block`}
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
              style={{ background: p.shimmer }}
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
                style={{ borderColor: p.terminalBorder }}
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
