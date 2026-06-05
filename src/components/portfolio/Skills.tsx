import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  {
    label: "Languages",
    items: ["Python", "C/C++", "TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
    neon: "cyan",
    pulse: "animate-neon-pulse-cyan",
    color: "oklch(0.87 0.22 195)",
    border: "oklch(0.87 0.22 195 / 0.22)",
    bg: "oklch(0.87 0.22 195 / 0.07)",
    hover: "hover:bg-[oklch(0.87_0.22_195/0.18)] hover:border-[oklch(0.87_0.22_195/0.55)]",
    text: "text-neon-cyan",
  },
  {
    label: "Frameworks",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "REST APIs"],
    neon: "pink",
    pulse: "animate-neon-pulse-pink",
    color: "oklch(0.72 0.28 330)",
    border: "oklch(0.72 0.28 330 / 0.22)",
    bg: "oklch(0.72 0.28 330 / 0.07)",
    hover: "hover:bg-[oklch(0.72_0.28_330/0.18)] hover:border-[oklch(0.72_0.28_330/0.55)]",
    text: "text-neon-pink",
  },
  {
    label: "Databases & Cloud",
    items: ["MySQL", "MongoDB", "Supabase", "Firebase", "Vercel", "Render"],
    neon: "violet",
    pulse: "animate-neon-pulse-violet",
    color: "oklch(0.62 0.26 290)",
    border: "oklch(0.62 0.26 290 / 0.22)",
    bg: "oklch(0.62 0.26 290 / 0.07)",
    hover: "hover:bg-[oklch(0.62_0.26_290/0.18)] hover:border-[oklch(0.62_0.26_290/0.55)]",
    text: "text-neon-violet",
  },
  {
    label: "Machine Learning",
    items: ["PyTorch", "Scikit-Learn", "Transformers", "LLMs", "NLP", "Computer Vision"],
    neon: "cyan",
    pulse: "animate-neon-pulse-cyan",
    color: "oklch(0.87 0.22 195)",
    border: "oklch(0.87 0.22 195 / 0.22)",
    bg: "oklch(0.87 0.22 195 / 0.07)",
    hover: "hover:bg-[oklch(0.87_0.22_195/0.18)] hover:border-[oklch(0.87_0.22_195/0.55)]",
    text: "text-neon-cyan",
  },
  {
    label: "Tools",
    items: ["Docker", "Git", "GitHub", "Linux"],
    neon: "pink",
    pulse: "animate-neon-pulse-pink",
    color: "oklch(0.72 0.28 330)",
    border: "oklch(0.72 0.28 330 / 0.22)",
    bg: "oklch(0.72 0.28 330 / 0.07)",
    hover: "hover:bg-[oklch(0.72_0.28_330/0.18)] hover:border-[oklch(0.72_0.28_330/0.55)]",
    text: "text-neon-pink",
  },
];

const marquee = [
  "Python",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Supabase",
  "Firebase",
  "Docker",
  "PyTorch",
  "LLMs",
];

const marqueeColors = [
  "text-neon-cyan",
  "text-neon-pink",
  "text-neon-violet",
  "text-neon-cyan",
  "text-neon-pink",
  "text-neon-violet",
  "text-neon-cyan",
  "text-neon-pink",
  "text-neon-violet",
  "text-neon-cyan",
  "text-neon-pink",
  "text-neon-violet",
  "text-neon-cyan",
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="◈ chapter_06 — tech stack" title="The tools I reach for.">
      <div className="grid gap-5 md:grid-cols-2">
        {groups.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`glass-neon rounded-2xl p-6 ${g.pulse} transition-all`}
            style={{ borderColor: g.border }}
          >
            <div className={`font-mono text-xs uppercase tracking-widest ${g.text}`}>
              {g.label}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className={`rounded-full border px-3 py-1.5 text-sm transition cursor-default ${g.hover}`}
                  style={{ borderColor: g.border, background: g.bg, color: g.color }}
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Neon marquee */}
      <div
        className="relative mt-16 overflow-hidden py-6"
        style={{
          borderTop: "1px solid oklch(0.87 0.22 195 / 0.1)",
          borderBottom: "1px solid oklch(0.72 0.28 330 / 0.1)",
        }}
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max gap-12 animate-marquee">
          {[...marquee, ...marquee].map((m, i) => (
            <span
              key={i}
              className={`font-display text-4xl md:text-5xl whitespace-nowrap transition-colors ${marqueeColors[i % marqueeColors.length]} opacity-40 hover:opacity-100`}
              style={{ textShadow: "0 0 30px currentColor" }}
            >
              {m} <span className="opacity-60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
