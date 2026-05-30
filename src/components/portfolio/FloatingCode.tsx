import { motion } from "framer-motion";

const snippets = [
  `const dream = async () => {\n  await build("ideas");\n  return joy;\n};`,
  `function hello() {\n  console.log("✨ gauri");\n}`,
  `<Coffee mood="cozy" />`,
  `git commit -m "ship it 🚀"`,
  `useEffect(() => {\n  code(); dream();\n}, []);`,
];

export function FloatingCode() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {snippets.map((s, i) => (
        <motion.pre
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: [0, 0.5, 0.3, 0.5, 0],
            y: [-20, -80],
          }}
          transition={{
            duration: 14 + i * 2,
            repeat: Infinity,
            delay: i * 2.5,
            ease: "linear",
          }}
          className="absolute font-mono text-[10px] md:text-xs whitespace-pre leading-relaxed text-primary/60 glass rounded-md px-3 py-2"
          style={{
            left: `${10 + i * 18}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
        >
          {s}
        </motion.pre>
      ))}
    </div>
  );
}
