import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="glass-neon rounded-full px-3 py-2 flex items-center gap-1 shadow-soft">
        {/* Neon top-edge shimmer */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.87 0.22 195 / 0.6), oklch(0.72 0.28 330 / 0.6), oklch(0.62 0.26 290 / 0.6), transparent)",
          }}
        />
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-neon-cyan/8"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="btn-neon ml-1 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide"
        >
          Say hi
        </a>
      </div>
    </motion.nav>
  );
}
