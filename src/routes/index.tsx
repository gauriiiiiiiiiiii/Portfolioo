import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Profiles } from "@/components/portfolio/Profiles";
import { Education } from "@/components/portfolio/Education";
import { Timeline } from "@/components/portfolio/Timeline";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { OpenSource } from "@/components/portfolio/OpenSource";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { GlowCursor } from "@/components/portfolio/GlowCursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gauri — Aspiring Software Developer · Cinematic Portfolio" },
      {
        name: "description",
        content:
          "A scroll-based cinematic portfolio by Gauri — aspiring software developer crafting cozy, animated, story-driven web experiences.",
      },
      { property: "og:title", content: "Gauri — Aspiring Software Developer" },
      {
        property: "og:description",
        content: "Cozy, cinematic, scroll-driven developer portfolio.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <GlowCursor />
      <Nav />
      <Hero />
      <About />
      <Profiles />
      <Education />
      <Timeline />
      <Projects />
      <Skills />
      <OpenSource />
      <Resume />
      <Contact />
    </main>
  );
}
