"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Brush,
  Camera,
  Check,
  Code2,
  Cog,
  GitBranch,
  MessageCircle,
  Music2,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubProfileCard } from "@/components/github-profile";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Creative mechanics & custom plugins",
    description:
      "Lightweight to medium custom plugins tailored to imaginative ideas, custom RPG systems, and unique gameplay mechanics.",
    className: "project-card-lime",
  },
  {
    number: "02",
    icon: Brush,
    title: "Immersive visuals & pixel art",
    description:
      "Custom vanilla-style UI/GUI textures, icons, and pixel art assets that give your server a distinct visual identity.",
    className: "project-card-blue",
  },
  {
    number: "03",
    icon: Cog,
    title: "Server setup & configuration",
    description:
      "Core and custom plugin configuration, performance optimization, bug fixes, and clean configuration architecture.",
    className: "project-card-orange",
  },
];

const tools = ["Essentials", "SunLight", "LuckPerms", "MMOItems", "MythicMobs"];

const socials = [
  {
    name: "Discord",
    handle: "Join the community",
    href: "https://discord.gg/uAtg4UG6Xw",
    icon: MessageCircle,
  },
  {
    name: "TikTok",
    handle: "@noellenaine",
    href: "https://www.tiktok.com/@noellenaine",
    icon: Music2,
  },
  {
    name: "Instagram",
    handle: "@daleonelle",
    href: "https://www.instagram.com/daleonelle/",
    icon: Camera,
  },
  {
    name: "GitHub",
    handle: "noelleputra",
    href: "https://github.com/noelleputra",
    icon: GitBranch,
  },
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
    <>
      <header className="site-header">
        <nav className="site-nav section-shell" aria-label="Main navigation">
          <a className="brand-mark" href="#top" aria-label="Noellx_ home">
            Noellx<span>_</span>
          </a>
          <div className="nav-links">
            <a className="nav-link" href="#services">
              Services
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#github">
              GitHub
            </a>
          </div>
          <a className="nav-cta" href="#contact">
            Let&apos;s talk <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main>
      <section id="top" className="hero-shell section-shell">
        <div className="hero-grid">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={transition}
          >
            <p className="eyebrow">
              <span>✳</span> Noellx_ · Minecraft server specialist
            </p>
            <h1>
              Make your server
              <br className="hero-title-break" />
              feel <em>alive.</em>
            </h1>
            <p className="hero-description">
              I&apos;m <strong>Noellx_</strong>, a Server Configurator, Plugin
              Developer, and Pixel Artist passionate about highly creative,
              immersive, and unique gameplay mechanics.
            </p>
            <p className="hero-description hero-description-secondary">
              Got a bold server concept? I&apos;m expanding my professional
              portfolio and offering my services <strong>100% free</strong> for a
              limited time.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg">
                <a href="#services">
                  See what I bring <ArrowDown className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href="https://discord.gg/uAtg4UG6Xw"
                  target="_blank"
                  rel="noreferrer"
                >
                  DM me on Discord <ArrowUpRight className="size-4" />
                </a>
              </Button>
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
            <div className="world-cube world-cube-back" />
            <div className="world-cube world-cube-front" />
            <div className="world-panel">
              <div className="world-panel-heading">
                <span className="world-panel-indicator" />
                <span>CREATIVE MODE</span>
                <span className="world-panel-index">NOELLX_ / 01</span>
              </div>
              <div className="world-panel-row">
                <span>01</span>
                <span>Custom mechanics</span>
                <span className="world-panel-check">+</span>
              </div>
              <div className="world-panel-row">
                <span>02</span>
                <span>Immersive visuals</span>
                <span className="world-panel-check">+</span>
              </div>
              <div className="world-panel-row">
                <span>03</span>
                <span>Thoughtful setup</span>
                <span className="world-panel-check">+</span>
              </div>
            </div>
            <div className="hero-art-label">
              BUILT FOR YOUR NEXT WORLD
            </div>
            <Sparkles className="hero-sparkle" />
          </motion.div>
        </div>
        <a className="scroll-cue" href="#services">
          <span>Scroll to explore</span> <ArrowDown className="size-4" />
        </a>
      </section>

      <section id="services" className="section-shell work-section">
        <div className="section-heading">
          <p className="eyebrow">
            <span>✳</span> What I bring to the table
          </p>
          <p className="section-note">
            From the first wild idea to a polished, playable result.
          </p>
        </div>
        <div className="project-list">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                className="project-row"
                key={service.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ ...transition, delay: index * 0.08 }}
              >
                <div className={`project-visual ${service.className}`}>
                  <span>{service.number}</span>
                  <Icon className="service-visual-icon" />
                  <div className="project-visual-shape" />
                </div>
                <div className="project-info">
                  <div>
                    <p className="project-type">Service {service.number}</p>
                    <h2>{service.title}</h2>
                    <p className="project-description">{service.description}</p>
                  </div>
                  <Icon className="size-5 text-zinc-500" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="about" className="section-shell about-section">
        <div className="about-intro">
          <p className="eyebrow">
            <span>✳</span> Familiar with your stack
          </p>
          <h2>
            Your idea,
            <br />
            <em>fully working.</em>
          </h2>
        </div>
        <div className="about-body">
          <p>
            Whether you need a new mechanic built from scratch or a messy
            server setup cleaned up, I focus on thoughtful systems that feel
            great to play and are easy to maintain.
          </p>
          <div className="capability-list">
            {tools.map((tool, index) => (
              <div className="capability-item" key={tool}>
                <span>0{index + 1}</span>
                {tool}
              </div>
            ))}
          </div>
          <p className="tools-note">
            Plus custom mechanics, performance tuning, bug fixes, and more.
          </p>
        </div>
      </section>

      <section id="github" className="section-shell github-section">
        <div className="github-section-heading">
          <div>
            <p className="eyebrow">
              <span>✳</span> A little more about my work
            </p>
            <h2>
              Building in
              <br />
              <em>the open.</em>
            </h2>
          </div>
          <p className="github-section-note">
            My GitHub profile, pulled live so you can see what I&apos;m up to.
          </p>
        </div>
        <GitHubProfileCard />
      </section>

      <section className="section-shell terms-section">
        <div>
          <p className="eyebrow">
            <span>✳</span> The deal
          </p>
          <h2>
            Good work first.
            <br />
            <em>Always.</em>
          </h2>
        </div>
        <div className="terms-list">
          <div className="term-item">
            <Check className="size-5" />
            <div>
              <h3>100% free of charge</h3>
              <p>
                All I ask in return is an honest review/vouch and permission to
                showcase the finished work in my portfolio.
              </p>
            </div>
          </div>
          <div className="term-item">
            <Sparkles className="size-5" />
            <div>
              <h3>Tips are optional</h3>
              <p>
                Payments are never required. If you love the work and want to
                support my creative journey, tips are always appreciated.
              </p>
            </div>
          </div>
          <div className="term-item">
            <Wrench className="size-5" />
            <div>
              <h3>Limited slots</h3>
              <p>
                Spots are capped so every project gets the creative focus and
                quality it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell contact-section">
        <div className="contact-mark">
          <Sparkles className="size-7" />
        </div>
        <p className="eyebrow">
          <span>✳</span> Bring me your wildest idea
        </p>
        <h2>
          Let&apos;s build
          <br />
          <em>something incredible.</em>
        </h2>
        <p className="contact-description">
          Have a unique server vision or want to brainstorm fresh ideas?
          Drop me a DM and let&apos;s make it playable.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">
              Get in touch <ArrowUpRight className="size-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Let&apos;s build something incredible.</DialogTitle>
              <DialogDescription>
                Send me your server concept, the mechanics you&apos;re imagining,
                or just say hello.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-7 flex flex-col gap-3">
              <a
                className="dialog-contact-link"
                href="https://discord.gg/uAtg4UG6Xw"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="size-4" /> Discord: @putraell_
              </a>
              <a
                className="dialog-contact-link"
                href="https://github.com/noelleputra?utm_source=portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <GitBranch className="size-4" /> github.com/noelleputra
              </a>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      <footer className="site-footer section-shell">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand-mark" href="#top" aria-label="Noellx_ home">
              Noellx<span>_</span>
            </a>
            <p>
              Custom Minecraft experiences, built with intention and a little
              imagination.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <p className="footer-heading">Explore</p>
            <a href="#services">Services</a>
            <a href="#github">GitHub profile</a>
            <a href="#contact">Get in touch</a>
            <a href="#top">Back to top</a>
          </nav>

          <div className="footer-socials">
            <p className="footer-heading">Find me around</p>
            <div className="footer-social-list">
              {socials.map(({ name, handle, href, icon: Icon }) => (
                <a
                  className="footer-social-link"
                  href={href}
                  key={name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="footer-social-icon">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="footer-social-name">{name}</span>
                    <span className="footer-social-handle">{handle}</span>
                  </span>
                  <ArrowUpRight
                    className="footer-social-arrow size-4"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Noellx_. Built with intention.</p>
          <a href="#top">Made for curious minds <span>✳</span></a>
        </div>
      </footer>
    </main>
    </>
  );
}
