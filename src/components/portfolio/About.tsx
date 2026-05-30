import { motion } from "framer-motion";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="◌ chapter two — about me" title="A quiet kind of curiosity.">
      <div className="grid gap-10 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-3 space-y-6 text-lg leading-relaxed text-foreground/85"
        >
          <p>
            I'm <span className="text-primary font-medium">Gauri</span>, a final-year Computer
            Science student at NIT Delhi and an aspiring software developer.
          </p>
          <p>
            I enjoy turning ideas into products that people can actually use. Over the years, I've
            worked across <span className="text-accent">software development</span>,{" "}
            <span className="text-accent">backend engineering</span>,{" "}
            <span className="text-accent">digital marketing</span>, and startup environments,
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
          {[
            { k: "20+", v: "ideas brought to life" },
            { k: "3+ yrs", v: "learning, building, improving" },
            { k: "5+", v: "real-world products shipped" },
            { k: "∞", v: "curiosity levels" },
          ].map((s) => (
            <div
              key={s.v}
              className="glass rounded-2xl p-5 hover:border-primary/40 transition-colors"
            >
              <div className="font-display text-4xl text-gradient">{s.k}</div>
              <div className="mt-1 font-mono text-xs text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
