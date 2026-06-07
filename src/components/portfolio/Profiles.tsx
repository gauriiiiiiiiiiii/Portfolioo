import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, Linkedin, Instagram, Mail, Globe, FileText } from "lucide-react";

const socials = [
  {
    icon: FileText,
    label: "Resume",
    href: "https://drive.google.com/file/d/19qVf7kGTVGBODiCw8or7RseXU1cAoD7A/view",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gauriiiiiiiiiiii/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/gauriiiiiiiiiiii",
  },
  {
    icon: Globe,
    label: "Portfolio",
    href: "https://portfolioo-five-blond.vercel.app/",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/gau.ri.__/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:gauriagarwal25@gmail.com",
  },
];

export function Profiles() {
  return (
    <Section id="profiles" eyebrow="◌ find me online" title="The places I live.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {socials.map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group relative glass rounded-2xl p-6 overflow-hidden hover:border-primary/50 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center gap-4">
              <div className="rounded-xl bg-primary/15 p-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon size={22} strokeWidth={1.6} />
              </div>
              <div className="min-w-0">
                <div className="font-display text-lg">{s.label}</div>
              </div>
              <span className="ml-auto text-primary opacity-0 group-hover:opacity-100 transition">
                ↗
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
