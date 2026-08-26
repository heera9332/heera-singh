import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/ui/animate-in";
import { servicesData } from "@/data/services";

export function ServicesPreview() {
  const featuredServices = servicesData.slice(0, 3);

  return (
    <section className="py-20 border-b border-border/50">
      <Container>
        <AnimateIn direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Freelance Services &amp; Mentorship
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Tailored Development Packages
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Transparent deliverables, fixed timelines, and high-quality engineering designed for startups, founders, and students.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredServices.map((service, index) => (
            <AnimateIn
              key={service.id}
              delay={index * 120}
              direction="up"
              className="h-full"
            >
              <div className="flex flex-col justify-between h-full rounded-2xl border border-border/80 bg-card/60 p-6 sm:p-8 transition-all hover:border-primary/50 hover:bg-card hover:shadow-xl hover:shadow-primary/5">
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="orange" className="font-semibold text-[11px]">
                      {service.badge}
                    </Badge>
                    <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3 text-primary" />
                      {service.estimatedTimeline}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Key Deliverables
                    </span>
                    <ul className="space-y-2 text-xs text-muted-foreground">
                      {service.deliverables.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border/70 bg-background/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-border/60">
                  <Link href="/contact/" className="block">
                    <Button variant="outline" className="w-full justify-between group hover:border-primary">
                      <span className="font-semibold text-xs sm:text-sm">Inquire for this Service</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-primary" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={200} direction="up" className="mt-12 text-center">
          <Link href="/services/">
            <Button variant="ghost" className="gap-2 text-sm font-semibold text-primary hover:text-primary/90">
              <Sparkles className="h-4 w-4" />
              View all services &amp; mentorship plans
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </AnimateIn>
      </Container>
    </section>
  );
}
