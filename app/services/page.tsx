import { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  LayoutGrid,
  Cpu,
  Smartphone,
  GraduationCap
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { servicesData } from "@/data/services";
import { ProcessSection } from "@/components/sections/process-section";
import { generateSeoMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateSeoMetadata({
  title: "Services & Mentorship",
  description:
    "Explore freelance web development services and 1-on-1 student mentorship by Heera Singh Lodhi: Next.js Web Apps, Custom WordPress, REST APIs, and Placement Preparation.",
  path: "/services/",
});

const ICON_MAP: Record<string, React.ElementType> = {
  LayoutGrid,
  Globe,
  Cpu,
  Zap,
  Smartphone,
  GraduationCap
};

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-16 space-y-20">
      {/* Header */}
      <section>
        <Container>
          <div className="max-w-3xl space-y-4">
            <Badge variant="orange" className="font-semibold text-xs">
              Freelance Offerings
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Services & Deliverables
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transparent packages, fixed milestone timelines, and production-grade engineering tailored to startups, agencies, and e-commerce brands.
            </p>
          </div>
        </Container>
      </section>

      {/* Services List */}
      <section>
        <Container>
          <div className="space-y-12 max-w-5xl mx-auto">
            {servicesData.map((service, index) => {
              const Icon = ICON_MAP[service.iconName] || LayoutGrid;

              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="rounded-3xl border border-border/80 bg-card/70 p-6 sm:p-10 space-y-8 shadow-sm transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  {/* Top Bar: Icon, Title, Badge & Timeline */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h2 className="text-2xl font-bold tracking-tight text-foreground">
                            {service.title}
                          </h2>
                          <Badge variant="orange" className="text-[11px] font-semibold">
                            {service.badge}
                          </Badge>
                        </div>
                        <span className="text-xs text-muted-foreground mt-0.5 block">
                          Ideal For: {service.idealFor}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-4 py-1.5 text-xs font-semibold text-foreground shrink-0 w-fit">
                      <Clock className="h-3.5 w-3.5 text-primary" />
                      <span>Est. Turnaround: {service.estimatedTimeline}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Deliverables vs Benefits Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Deliverables */}
                    <div className="space-y-3 p-5 rounded-2xl border border-border/60 bg-background/40">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary block">
                        Included Deliverables
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-foreground">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits & Impact */}
                    <div className="space-y-3 p-5 rounded-2xl border border-border/60 bg-background/40">
                      <span className="text-xs font-bold uppercase tracking-wider text-foreground block">
                        Business Value & ROI
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                        {service.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2.5">
                            <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack & Action CTA */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border/60">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-semibold text-muted-foreground mr-1">
                        Technologies:
                      </span>
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border/70 bg-background/80 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link href="/contact/">
                      <Button className="gap-2 font-semibold shadow-md shadow-primary/20 shrink-0">
                        <Sparkles className="h-4 w-4" />
                        Inquire About This Service
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4-Step Process */}
      <ProcessSection />

      {/* Bottom CTA */}
      <section>
        <Container>
          <div className="rounded-3xl border border-primary/30 bg-card/80 p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto shadow-xl shadow-primary/5">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Ready to scope out your project?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              Get in touch for a detailed proposal, technical recommendation, and milestone plan.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact/">
                <Button size="lg" className="gap-2 font-semibold shadow-md shadow-primary/20">
                  <Sparkles className="h-4 w-4" />
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
