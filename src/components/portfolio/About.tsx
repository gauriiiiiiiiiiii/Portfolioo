import { motion } from "framer-motion";
import { Section } from "./Section";

const stats = [
  { k: "20+", v: "ideas brought to life", neon: "cyan", pulse: "animate-neon-pulse-cyan", color: "text-neon-cyan", border: "oklch(0.87 0.22 195 / 0.25)" },
  { k: "3+ yrs", v: "learning, building, improving", neon: "pink", pulse: "animate-neon-pulse-pink", color: "text-neon-pink", border: "oklch(0.72 0.28 330 / 0.25)" },
  { k: "5+", v: "real-world products shipped", neon: "violet", pulse: "animate-neon-pulse-violet", color: "text-neon-violet", border: "oklch(0.62 0.26 290 / 0.25)" },
  { k: "∞", v: "curiosity levels", neon: "cyan", pulse: "animate-neon-pulse-cyan", color: "text-neon-cyan", border: "oklch(0.87 0.22 195 / 0.25)" },
];

export function About() {
  return (
    <Section id="about" eyebrow="◈ chapter_02 — about me" title="A quiet kind of curiosity.">
      <div className="grid gap-10 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-3 space-y-6 text-lg leading-relaxed text-foreground/85"
        >
          <p>
            I'm <span className="text-neon-cyan font-medium">Gauri</span>, a final-year Computer
            Science student at NIT Delhi and an aspiring software developer.
          </p>
          <p>
            I enjoy turning ideas into products that people can actually use. Over the years, I've
            worked across <span className="text-neon-pink">software development</span>,{" "}
            <span className="text-neon-violet">backend engineering</span>,{" "}
            <span className="text-neon-cyan">digital marketing</span>, and startup environments,
            gaining experience in building solutions from concept to deployment.
          </p>
          <p>
            What excites me most is the process of creating — whether it's developing scalable
            applications, solving challenging problems, or bringing a new idea to life through code.
            I'm constantly exploring new technologies, learning from every project, and looking for
            opportunities to build things that create real impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-2 grid grid-cols-2 gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.v}
              className={`glass-neon rounded-2xl p-5 transition-all ${s.pulse}`}
              style={{ borderColor: s.border }}
            >
              <div className={`font-display text-4xl text-gradient`}>{s.k}</div>
              <div className={`mt-1 font-mono text-xs ${s.color} opacity-70`}>{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
