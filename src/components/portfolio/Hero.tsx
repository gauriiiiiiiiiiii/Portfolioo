import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-developer.jpg";
import { Starfield } from "./Starfield";
import { FloatingCode } from "./FloatingCode";
import { TypingText } from "./TypingText";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <header id="top" ref={ref} className="relative min-h-screen w-full overflow-hidden noise">
      <Starfield count={120} />
      <FloatingCode />

      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px]" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-32 pb-16 md:grid-cols-2 md:pt-24"
      >
        <motion.div style={{ y: textY }} className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.4em] text-primary/80"
          >
            ◌ chapter one — hello, world
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 font-display text-[clamp(4rem,14vw,9rem)] leading-[0.85] font-light tracking-tight"
          >
            <span className="text-gradient">GAURI</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 flex items-center gap-3 text-base md:text-lg text-muted-foreground"
          >
            <span className="h-px w-10 bg-primary/60" />
            <span>Aspiring Software Developer</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mt-8 max-w-md text-base md:text-lg leading-relaxed text-foreground/80"
          >
            I build things that matter —{" "}
            <TypingText
              className="font-mono text-primary"
              words={["thoughtful.", "scalable.", "real."]}
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-[0_0_60px_-5px_var(--glow)] transition-all"
            >
              Explore the story
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:border-primary/40 transition"
            >
              Let's collaborate
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="order-1 md:order-2 relative mx-auto w-full max-w-md md:max-w-lg"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-primary/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] glow-ring animate-float">
            <img
              src={heroImg}
              alt="Illustration of Gauri coding at her cozy desk"
              width={1024}
              height={1024}
              className="w-full h-auto"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-4 top-10 glass rounded-xl px-3 py-2 text-xs font-mono shadow-soft"
          >
            <span className="text-primary">●</span> now coding
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -right-4 bottom-16 glass rounded-xl px-3 py-2 text-xs font-mono shadow-soft"
          >
            ☕ build mode
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
      >
        <span>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="h-8 w-px bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </header>
  );
}
