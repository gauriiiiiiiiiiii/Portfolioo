import { motion } from "framer-motion";
import { Section } from "./Section";

const neonCycle = [
  { color: "oklch(0.87 0.22 195)", shadow: "0 0 20px oklch(0.87 0.22 195 / 0.8)", text: "text-neon-cyan", pulse: "animate-neon-pulse-cyan" },
  { color: "oklch(0.72 0.28 330)", shadow: "0 0 20px oklch(0.72 0.28 330 / 0.8)", text: "text-neon-pink", pulse: "animate-neon-pulse-pink" },
  { color: "oklch(0.62 0.26 290)", shadow: "0 0 20px oklch(0.62 0.26 290 / 0.8)", text: "text-neon-violet", pulse: "animate-neon-pulse-violet" },
  { color: "oklch(0.87 0.22 195)", shadow: "0 0 20px oklch(0.87 0.22 195 / 0.8)", text: "text-neon-cyan", pulse: "animate-neon-pulse-cyan" },
  { color: "oklch(0.72 0.28 330)", shadow: "0 0 20px oklch(0.72 0.28 330 / 0.8)", text: "text-neon-pink", pulse: "animate-neon-pulse-pink" },
];

const timeline = [
  {
    when: "Apr 2026 — Present",
    role: "Back End Developer",
    org: "Munshot · Internship",
    body: "Working on NestJS backend development for an AI-driven fintech platform — building scalable APIs and backend systems to support investor research and capital deployment across public stock markets.",
  },
  {
    when: "Jul 2025 — Sep 2025",
    role: "App Developer Intern",
    org: "MFolks.com · Internship",
    body: "Developed a Flutter-based B2B platform enabling seamless supplier-client interactions with real-time transaction management, workflow integration, and synchronized cross-platform data flow through REST APIs.",
  },
  {
    when: "Dec 2024 — Aug 2025",
    role: "Digital Marketing Intern",
    org: "Fantacian Labs Media",
    body: "Executed targeted Facebook and LinkedIn campaigns with strategic outreach — boosting international engagement and converting foreign clients through Loom demos.",
  },
  {
    when: "Apr 2024 — Jun 2024",
    role: "Social Media Intern",
    org: "Fashion Herald",
    body: "Contributed to social media strategies, content creation, post scheduling, and engagement analysis.",
  },
  {
    when: "Jan 2023 — Jun 2023",
    role: "Management Intern",
    org: "Aarambh Organization",
    body: "Supervised NGO activities, demonstrating management skills to support the organization's operations.",
  },
];

export function Timeline() {
  return (
    <Section id="experience" eyebrow="◈ chapter_04 — journey" title="A working timeline.">
      <div className="relative">
        <ul className="space-y-12">
          {timeline.map((t, i) => {
            const left = i % 2 === 0;
            const n = neonCycle[i % neonCycle.length];
            return (
              <motion.li
                key={t.role}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="relative md:grid md:grid-cols-2 md:gap-12"
              >
                {/* Neon dot on timeline */}
                <motion.span
                  whileInView={{ scale: [0, 1.5, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`absolute left-4 md:left-1/2 top-3 -translate-x-1/2 h-3.5 w-3.5 rounded-full ${n.pulse}`}
                  style={{ background: n.color, boxShadow: n.shadow }}
                />
                <div
                  className={`pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}
                >
                  <div className={`font-mono text-xs uppercase tracking-widest ${n.text}`}>
                    {t.when}
                  </div>
                  <h3 className="mt-2 font-display text-2xl text-gradient">{t.role}</h3>
                  <p className="text-sm text-muted-foreground">{t.org}</p>
                  <p className="mt-3 text-foreground/80 leading-relaxed">{t.body}</p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
