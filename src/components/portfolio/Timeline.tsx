import { motion } from "framer-motion";
import { Section } from "./Section";

const timeline = [
  {
    when: "Apr 2026 — Present",
    role: "Back End Developer",
    org: "Munshot · Internship",
    body: "Working on NestJS backend development for an AI-driven fintech platform — building scalable APIs and backend systems to support investor research and capital deployment across public stock markets.",
  },
  {
    when: "Jul 2025 — Sep 2025",
    role: "Developer Intern",
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
    <Section id="experience" eyebrow="◌ chapter four — journey" title="A working timeline.">
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        <ul className="space-y-12">
          {timeline.map((t, i) => {
            const left = i % 2 === 0;
            return (
              <motion.li
                key={t.role}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="relative md:grid md:grid-cols-2 md:gap-12"
              >
                <motion.span
                  whileInView={{ scale: [0, 1.4, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_var(--lavender)]"
                />
                <div
                  className={`pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}
                >
                  <div className="font-mono text-xs uppercase tracking-widest text-primary">
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
