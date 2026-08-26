import Link from "next/link";
import { Github, Linkedin, Mail, MessageSquare, ArrowUpRight, Code2, Heart } from "lucide-react";
import { Container } from "@/components/layout/container";
import { profileData } from "@/data/profile";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-card/40 text-card-foreground">
      <Container>
        <div className="py-14 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Bio & Status */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-foreground transition-colors group"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Code2 className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                {profileData.name}
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
              {profileData.tagline}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                {profileData.availability.message}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Heera Singh GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Heera Singh LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={profileData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
              <a
                href={profileData.socials.email}
                aria-label="Email Heera Singh"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services/" className="hover:text-primary transition-colors">
                  Services & Deliverables
                </Link>
              </li>
              <li>
                <Link href="/work/" className="hover:text-primary transition-colors">
                  Selected Work & Projects
                </Link>
              </li>
              <li>
                <Link href="/about/" className="hover:text-primary transition-colors">
                  About & Background
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-primary transition-colors">
                  Start a Project / Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {servicesData.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services/"
                    className="hover:text-primary transition-colors line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Selected Case Studies */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Case Studies
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {projectsData.slice(0, 4).map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/work/${project.slug}/`}
                    className="inline-flex items-center gap-1 hover:text-primary transition-colors line-clamp-1"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/60 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span>Built with Next.js 16 SSG, Tailwind CSS &</span>
            <span className="text-primary font-medium">Lexend</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
