import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Briefcase,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Calendar,
  Building2,
  ArrowRight
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimateIn } from "@/components/ui/animate-in";
import { profileData } from "@/data/profile";
import { experiencesData, educationData } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { generateSeoMetadata, getBreadcrumbJsonLd } from "@/lib/metadata";

export const metadata: Metadata = generateSeoMetadata({
  title: "About Me",
  description:
    "Learn more about Heera Singh Lodhi, Full Stack Software Developer with experience at MadQuick Pvt Ltd and Stack Console, specializing in Next.js, React, Node.js, and WordPress.",
  path: "/about/",
});

export default function AboutPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "About", url: "/about/" },
  ]);

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero / Intro Header */}
      <section id="story">
        <Container>
          <AnimateIn direction="up">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 max-w-4xl">
              <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-3xl p-1 ring-2 ring-primary/40 overflow-hidden shrink-0 shadow-xl shadow-primary/10">
                <Image
                  src={profileData.avatar}
                  alt={profileData.name}
                  width={128}
                  height={128}
                  className="h-full w-full rounded-2xl object-cover"
                  priority
                />
              </div>
              <div className="space-y-2">
                <Badge variant="orange" className="font-semibold text-xs">
                  Developer Profile
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                  About Heera Singh Lodhi
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Full Stack Software Developer, freelance specialist, and B.Tech graduate in Computer Science.
                </p>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* Main Biography Section */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Story & Philosophy */}
            <AnimateIn direction="left" delay={100} className="lg:col-span-8 space-y-6">
              <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                {profileData.fullBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-border/80 space-y-3">
                <h3 className="text-xl font-bold text-foreground">
                  Core Engineering Philosophy
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl border border-border/70 bg-card/60">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-foreground">
                      Clean, self-documenting code built for long-term scalability
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl border border-border/70 bg-card/60">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-foreground">
                      Bespoke WordPress without slow, bloated page builders
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl border border-border/70 bg-card/60">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-foreground">
                      Mobile-first interfaces with zero horizontal overflow
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl border border-border/70 bg-card/60">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-foreground">
                      Direct, transparent communication and milestone updates
                    </span>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Quick Info & Links Card */}
            <AnimateIn direction="right" delay={150} className="lg:col-span-4">
              <div className="rounded-2xl border border-border/80 bg-card/80 p-6 space-y-6">
                <h3 className="text-base font-bold text-foreground border-b border-border/60 pb-3">
                  Quick Details
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground block">Location:</span>
                      <span>{profileData.locationDetails}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground block">Direct Email:</span>
                      <a href={profileData.socials.email} className="hover:text-primary transition-colors">
                        {profileData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Building2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground block">Availability:</span>
                      <span className="text-emerald-500 font-medium">
                        Open for freelance &amp; contract work
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-border/60 flex items-center gap-2">
                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" className="w-full gap-1.5 text-xs">
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </Button>
                  </a>
                  <a
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" className="w-full gap-1.5 text-xs">
                      <Linkedin className="h-3.5 w-3.5" />
                      LinkedIn
                    </Button>
                  </a>
                </div>

                <Link href="/contact/" className="block">
                  <Button className="w-full gap-2 font-semibold shadow-md shadow-primary/20">
                    <Sparkles className="h-4 w-4" />
                    Start a Project
                  </Button>
                </Link>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-12 bg-background/50 border-y border-border/50">
        <Container>
          <div className="space-y-8 max-w-7xl mx-auto">
            <AnimateIn direction="up">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Career History
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Work Experience
                </h2>
              </div>
            </AnimateIn>

            <div className="space-y-6">
              {experiencesData.map((exp, index) => (
                <AnimateIn key={exp.id} delay={index * 120} direction="up">
                  <div className="rounded-2xl border border-border/80 bg-card/60 p-6 sm:p-8 space-y-4 transition-all hover:border-primary/40">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-foreground">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <Badge variant="success" className="text-[10px]">
                              Current Role
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-primary mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-foreground block">
                        Key Responsibilities &amp; Achievements:
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border/70 bg-background/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Education Section */}
      <section id="education">
        <Container>
          <div className="space-y-8 max-w-7xl mx-auto">
            <AnimateIn direction="up">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Academic Background
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Education
                </h2>
              </div>
            </AnimateIn>

            {educationData.map((edu, idx) => (
              <AnimateIn key={idx} delay={idx * 100 + 100} direction="up">
                <div className="rounded-2xl border border-border/80 bg-card/60 p-6 sm:p-8 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-primary mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {edu.location}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {edu.details}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-foreground block">
                      Highlights:
                    </span>
                    <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Technical Skills Categorized */}
      <section id="skills" className="py-12 bg-background/50 border-t border-border/50">
        <Container>
          <div className="space-y-8 max-w-7xl mx-auto">
            <AnimateIn direction="up">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Competencies
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Full Technical Stack
                </h2>
              </div>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((cat, index) => (
                <AnimateIn key={cat.title} delay={index * 100} direction="up" className="h-full">
                  <div className="rounded-2xl border border-border/80 bg-card/60 p-6 space-y-3 h-full">
                    <h3 className="text-base font-bold text-foreground">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {cat.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`rounded-md px-2.5 py-1 text-xs font-medium border ${
                            skill.highlight
                              ? "border-primary/30 bg-primary/10 text-primary font-semibold"
                              : "border-border/70 bg-background/60 text-muted-foreground"
                          }`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section>
        <Container>
          <AnimateIn direction="up">
            <div className="rounded-3xl border border-primary/30 bg-card/80 p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto shadow-xl shadow-primary/5">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Ready to work together on your project?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
                I am available for freelance projects, contract roles, and student mentorship.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact/">
                  <Button size="lg" className="gap-2 font-semibold shadow-md shadow-primary/20">
                    <Sparkles className="h-4 w-4" />
                    Start a Project
                  </Button>
                </Link>
                <Link href="/work/">
                  <Button variant="outline" size="lg" className="gap-2">
                    View Selected Work
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>
    </div>
  );
}
