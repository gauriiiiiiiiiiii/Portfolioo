import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  {
    label: "Languages",
    items: ["Python", "C/C++", "TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "REST APIs"],
  },
  {
    label: "Databases & Cloud",
    items: ["MySQL", "MongoDB", "Supabase", "Firebase", "Vercel", "Render"],
  },
  {
    label: "Machine Learning",
    items: ["PyTorch", "Scikit-Learn", "Transformers", "LLMs", "NLP", "Computer Vision"],
  },
  {
    label: "Tools",
    items: ["Docker", "Git", "GitHub", "Linux"],
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

export function Skills() {
  return (
    <Section id="skills" eyebrow="◌ chapter six — tech stack" title="The tools I reach for.">
      <div className="grid gap-5 md:grid-cols-2">
        {groups.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <div className="font-mono text-xs uppercase tracking-widest text-primary/80">
              {g.label}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm hover:bg-primary/15 hover:border-primary/50 transition cursor-default"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative mt-16 overflow-hidden py-6 border-y border-border">
        <div className="flex w-max gap-12 animate-marquee">
          {[...marquee, ...marquee].map((m, i) => (
            <span
              key={i}
              className="font-display text-4xl md:text-5xl text-foreground/30 hover:text-primary transition-colors whitespace-nowrap"
            >
              {m} <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
