import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" eyebrow="◈ end_credits — contact" title="Let's build something together.">
      <div className="grid gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 space-y-6"
        >
          <p className="text-lg leading-relaxed text-foreground/85">
            Whether it's a wild idea, a side project, or just a "hello, world" — my inbox is always
            open.
          </p>
          <div className="space-y-3 text-sm">
            <a
              href="mailto:gauriagarwal25@gmail.com"
              className="flex items-center gap-3 text-foreground/80 hover:text-neon-cyan transition-colors group"
            >
              <Mail size={16} className="text-neon-cyan" />
              gauriagarwal25@gmail.com
            </a>
            <a
              href="tel:+918439211097"
              className="flex items-center gap-3 text-foreground/80 hover:text-neon-pink transition-colors group"
            >
              <Phone size={16} className="text-neon-pink" />
              +91 84392 11097
            </a>
            <div className="flex items-center gap-3 text-foreground/80">
              <MapPin size={16} className="text-neon-violet" />
              India · remote-friendly
            </div>
          </div>

          {/* Neon decorative lines */}
          <div className="space-y-1.5 pt-4">
            <div className="h-px w-full bg-gradient-to-r from-neon-cyan via-neon-pink to-transparent opacity-30" />
            <div className="h-px w-3/4 bg-gradient-to-r from-neon-pink via-neon-violet to-transparent opacity-20" />
            <div className="h-px w-1/2 bg-gradient-to-r from-neon-violet to-transparent opacity-15" />
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          action="https://formspree.io/f/mnjqbejq"
          method="POST"
          className="lg:col-span-3 glass-neon rounded-3xl p-8 space-y-5 animate-neon-pulse-cyan"
        >
          {/* Neon top shimmer on form */}
          <div
            className="absolute inset-x-8 top-0 h-px rounded-full opacity-50"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.87 0.22 195 / 0.7), oklch(0.72 0.28 330 / 0.7), oklch(0.62 0.26 290 / 0.7), transparent)",
            }}
          />
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Full name" placeholder="Full name" name="fullname" required />
            <Field label="Email address" placeholder="Email address" type="email" name="email" required />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-neon-violet">
              Your Message
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="mt-2 w-full rounded-xl bg-background/50 border px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none transition resize-none"
              style={{
                borderColor: "oklch(0.87 0.22 195 / 0.15)",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "oklch(0.87 0.22 195 / 0.5)";
                e.target.style.boxShadow = "0 0 20px -4px oklch(0.87 0.22 195 / 0.3)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "oklch(0.87 0.22 195 / 0.15)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>
          <button
            type="submit"
            className="btn-neon group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide"
          >
            Send the message
            <Send size={14} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.form>
      </div>

      <footer className="mt-24 pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground"
        style={{ borderTop: "1px solid oklch(0.87 0.22 195 / 0.12)" }}
      >
        <span>© {new Date().getFullYear()} Gauri. All rights reserved.</span>
        <span className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full animate-neon-pulse-cyan"
            style={{
              background: "oklch(0.87 0.22 195)",
              boxShadow: "0 0 8px oklch(0.87 0.22 195 / 0.8)",
            }}
          />
          end_credits · scroll back to chapter_01 ↑
        </span>
      </footer>
    </Section>
  );
}

function Field({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-widest text-neon-cyan">
        {label}
      </label>
      <input
        {...rest}
        className="mt-2 w-full rounded-xl bg-background/50 border px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none transition"
        style={{ borderColor: "oklch(0.87 0.22 195 / 0.15)" }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "oklch(0.87 0.22 195 / 0.5)";
          e.currentTarget.style.boxShadow = "0 0 20px -4px oklch(0.87 0.22 195 / 0.3)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "oklch(0.87 0.22 195 / 0.15)";
          e.currentTarget.style.boxShadow = "none";
        }}
      />
    </div>
  );
}
