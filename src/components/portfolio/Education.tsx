import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

const edu = [
  {
    year: "Aug 2023 — Aug 2027",
    title: "B.Tech, Computer Science Engineering",
    place: "National Institute of Technology, Delhi",
    note: "Building strong foundations in software engineering, systems, and applied computing.",
  },
  {
    year: "Nov 2022 — June 2023",
    title: "B.Sc. Physics (Hons) — Certificate Course",
    place: "DSC, Delhi University",
    note: "A brief detour through physics",
  },
  {
    year: "Until 2022",
    title: "Secondary & Higher Secondary",
    place: "Vision Valley School, India",
    note: "Class 10th: 92% · Class 12th: 83%",
  },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="◌ chapter three — education"
      title="The classrooms behind the code."
    >
      <div className="space-y-5">
        {edu.map((e, i) => (
          <motion.article
            key={e.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center gap-4 md:flex-col md:items-start md:w-48 shrink-0">
              <div className="rounded-xl bg-primary/15 p-3 text-primary">
                <GraduationCap size={22} />
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {e.year}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl text-gradient">{e.title}</h3>
              <p className="mt-1 text-sm text-primary/80">{e.place}</p>
              <p className="mt-3 text-foreground/80 leading-relaxed">{e.note}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
