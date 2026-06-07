import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-developerr.png";
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
    <header id="top" ref={ref} className="relative min-h-screen w-full overflow-hidden noise scanlines">
      <Starfield count={160} />
      <FloatingCode />

      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[oklch(0.87_0.22_195/0.12)] blur-[130px]" />
      <div className="pointer-events-none absolute -top-20 -right-40 h-[500px] w-[500px] rounded-full bg-[oklch(0.72_0.28_330/0.10)] blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[oklch(0.62_0.26_290/0.10)] blur-[120px]" />


      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-32 pb-4 md:grid-cols-2 md:pt-24"
      >
        <motion.div style={{ y: textY }} className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.4em] text-neon-cyan"
          >
            ◈ initializing · chapter_01.tsx
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 font-display text-[clamp(4rem,14vw,9rem)] leading-[0.85] font-light tracking-tight animate-glitch text-gradient"
          >
            GAURI
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 flex items-center gap-3 text-base md:text-lg text-muted-foreground"
          >
            <span className="h-px w-10 bg-gradient-to-r from-neon-cyan to-neon-pink" />
            <span>Aspiring Software Developer</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mt-8 max-w-md text-base md:text-lg leading-relaxed text-foreground/80"
          >
            I build things that matter —{" "}
            <TypingText className="font-mono text-neon-cyan" words={["thoughtful.", "scalable.", "real."]} />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="btn-neon group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide"
            >
              Explore the story
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="glass-neon inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium hover:border-neon-cyan transition-all"
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
          <div className="absolute -inset-6 rounded-[2rem] opacity-60">
            <div className="absolute inset-0 rounded-[2rem] bg-[oklch(0.87_0.22_195/0.2)] blur-3xl" />
            <div className="absolute inset-0 rounded-[2rem] translate-x-4 bg-[oklch(0.72_0.28_330/0.15)] blur-3xl" />
            <div className="absolute inset-0 rounded-[2rem] -translate-x-4 bg-[oklch(0.62_0.26_290/0.15)] blur-3xl" />
          </div>
          <div className="relative overflow-hidden rounded-[2rem] glow-ring animate-float">
            <img
              src={heroImg}
              alt="Gauri — software developer"
              width={1024}
              height={1024}
              className="w-full h-auto"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-4 top-10 glass-neon animate-neon-pulse-cyan rounded-xl px-3 py-2 text-xs font-mono shadow-soft"
          >
            <span className="text-neon-cyan">●</span> now coding
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -right-4 bottom-16 glass-neon animate-neon-pulse-pink rounded-xl px-3 py-2 text-xs font-mono shadow-soft"
          >
            <span className="text-neon-pink">♥</span> build mode
          </motion.div>
        </motion.div>
      </motion.div>
    </header>
  );
}
