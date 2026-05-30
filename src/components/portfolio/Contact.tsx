import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" eyebrow="◌ end credits — contact" title="Let's make something cozy.">
      <div className="grid gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 space-y-6"
        >
          <p className="text-lg leading-relaxed text-foreground/85">
            Whether it's a wild idea, a tiny side project, or just a quiet "hello, world" — my inbox
            is always warm.
          </p>
          <div className="space-y-3 text-sm">
            <a
              href="mailto:gauriagarwal25@gmail.com"
              className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
            >
              <Mail size={16} className="text-primary" />
              gauriagarwal25@gmail.com
            </a>
            <a
              href="tel:+918439211097"
              className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
            >
              <Phone size={16} className="text-primary" />
              +91 84392 11097
            </a>
            <div className="flex items-center gap-3 text-foreground/80">
              <MapPin size={16} className="text-primary" />
              India · remote-friendly
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          action="https://formspree.io/f/mnjqbejq"
          method="POST"
          className="lg:col-span-3 glass rounded-3xl p-8 space-y-5"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Full name" placeholder="Full name" name="fullname" required />
            <Field label="Email address" placeholder="Email address" type="email" name="email" required />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Your Message
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="mt-2 w-full rounded-xl bg-background/40 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-[0_0_60px_-5px_var(--glow)] transition-all"
          >
            Send the message
            <Send size={14} className="transition-transform group-hover:translate-x-1" />
          </button>
          {/* <p className="text-xs leading-relaxed text-muted-foreground">
            After submitting, Formspree will receive everything and send it to the email
            connected to your Formspree account.
          </p> */}
        </motion.form>
      </div>

      <footer className="mt-24 pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
        <span>© {new Date().getFullYear()} Gauri. All rights reserved.</span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          the end · scroll back to chapter one ↑
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
      <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        {...rest}
        className="mt-2 w-full rounded-xl bg-background/40 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
      />
    </div>
  );
}
