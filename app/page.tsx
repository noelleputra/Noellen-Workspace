"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    number: "01",
    title: "Lumio Finance",
    type: "Product design · Development",
    description: "A calmer way to understand your money, built for everyday decisions.",
    className: "project-card-lime",
  },
  {
    number: "02",
    title: "Mori Objects",
    type: "Brand identity · E-commerce",
    description: "An earthy digital home for objects made to last.",
    className: "project-card-blue",
  },
  {
    number: "03",
    title: "Cinder Studio",
    type: "Creative direction · Web",
    description: "A sharp, flexible system for a studio with a lot to say.",
    className: "project-card-orange",
  },
];

const capabilities = [
  "Creative direction",
  "Digital products",
  "Visual identities",
  "Motion systems",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.7, ease: "easeOut" as const };

  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand-mark" href="#top" aria-label="Noel home">
          N<span>↗</span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a className="nav-link" href="#work">Work</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
        <a className="availability" href="#contact">
          <span className="availability-dot" />
          Available for select projects
        </a>
      </nav>

      <section id="top" className="hero-shell section-shell">
        <div className="hero-grid">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={transition}
          >
            <p className="eyebrow"><span>✳</span> Independent creative developer</p>
            <h1>
              Digital work
              <br />
              with <em>feeling.</em>
            </h1>
            <p className="hero-description">
              I&apos;m Noel, a designer and developer creating distinctive digital
              experiences for people and brands with something meaningful to share.
            </p>
            <div className="hero-actions">
              <a href="#work">
                <Button size="lg">
                  Explore selected work <ArrowDown className="size-4" />
                </Button>
              </a>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline">
                    Start a conversation <ArrowUpRight className="size-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Let&apos;s make something memorable.</DialogTitle>
                    <DialogDescription>
                      Tell me a little about what you&apos;re working on and I&apos;ll get
                      back to you soon.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-7 flex flex-col gap-3">
                    <a className="dialog-contact-link" href="mailto:hello@noel.studio">
                      <Mail className="size-4" /> hello@noel.studio
                    </a>
                    <a className="dialog-contact-link" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                      <MessageCircle className="size-4" /> Connect on LinkedIn
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>

          <motion.div
            className="hero-art"
            initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ ...transition, delay: 0.15 }}
            aria-hidden="true"
          >
            <div className="orb orb-large" />
            <div className="orb orb-small" />
            <div className="hero-art-label">Curious by nature<br />precise by craft.</div>
            <Sparkles className="hero-sparkle" />
          </motion.div>
        </div>
        <a className="scroll-cue" href="#work">
          <span>Scroll to explore</span> <ArrowDown className="size-4" />
        </a>
      </section>

      <section id="work" className="section-shell work-section">
        <div className="section-heading">
          <p className="eyebrow"><span>✳</span> Selected work</p>
          <p className="section-note">A few things I&apos;ve helped bring to life.</p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <motion.a
              href="#contact"
              className="project-row"
              key={project.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ ...transition, delay: index * 0.08 }}
            >
              <div className={`project-visual ${project.className}`}>
                <span>{project.number}</span>
                <ArrowUpRight className="project-arrow" />
                <div className="project-visual-shape" />
              </div>
              <div className="project-info">
                <div>
                  <p className="project-type">{project.type}</p>
                  <h2>{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                </div>
                <ArrowUpRight className="size-5 text-zinc-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="about" className="section-shell about-section">
        <div className="about-intro">
          <p className="eyebrow"><span>✳</span> A little about me</p>
          <h2>
            I care about the
            <br />
            <em>details between</em>
            <br />
            the lines.
          </h2>
        </div>
        <div className="about-body">
          <p>
            Good work lives somewhere between a clear idea and a beautiful
            execution. I partner with ambitious teams to find that place,
            bringing design, technology, and a healthy dose of curiosity to every
            project.
          </p>
          <div className="capability-list">
            {capabilities.map((capability, index) => (
              <div className="capability-item" key={capability}>
                <span>0{index + 1}</span>
                {capability}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell contact-section">
        <div className="contact-mark"><Sparkles className="size-7" /></div>
        <p className="eyebrow"><span>✳</span> Have a good one?</p>
        <h2>Let&apos;s make<br /><em>something good.</em></h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">
              Get in touch <ArrowUpRight className="size-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Let&apos;s make something memorable.</DialogTitle>
              <DialogDescription>
                The best projects start with a simple hello.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-7 flex flex-col gap-3">
              <a className="dialog-contact-link" href="mailto:hello@noel.studio">
                <Mail className="size-4" /> hello@noel.studio
              </a>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      <footer className="site-footer section-shell">
        <p>© 2026 Noel. Made with intention.</p>
        <div className="flex items-center gap-2">
          <a className="social-link" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 className="size-4" /></a>
          <a className="social-link" href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><MessageCircle className="size-4" /></a>
          <a className="social-link" href="https://dribbble.com" target="_blank" rel="noreferrer" aria-label="Dribbble"><BriefcaseBusiness className="size-4" /></a>
        </div>
      </footer>
    </main>
  );
}
