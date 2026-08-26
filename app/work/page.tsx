import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimateIn } from "@/components/ui/animate-in";
import { ProjectFilter } from "@/components/projects/project-filter";
import { getAllProjects } from "@/data/projects";
import { generateSeoMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateSeoMetadata({
  title: "Selected Work & Case Studies",
  description:
    "Explore in-depth case studies and portfolio projects by Heera Singh Lodhi: Next.js SaaS Platforms, Custom WordPress Themes, WooCommerce Stores, and WHM/WHMCS Automation.",
  path: "/work/",
});

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <section>
        <Container>
          <AnimateIn direction="up">
            <div className="max-w-3xl space-y-4 text-center sm:text-left mx-auto sm:mx-0">
              <Badge variant="orange" className="font-semibold text-xs">
                Portfolio Catalog
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                Selected Work &amp; Case Studies
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore real-world projects, architectural decisions, performance metrics, and results delivered for clients.
              </p>
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* Filterable Projects Section */}
      <section>
        <Container>
          <AnimateIn delay={100} direction="up">
            <ProjectFilter projects={projects} />
          </AnimateIn>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section>
        <Container>
          <AnimateIn direction="up">
            <div className="rounded-3xl border border-primary/30 bg-card/80 p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto shadow-xl shadow-primary/5">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Have a similar project in mind?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
                Let's collaborate to build a scalable, high-speed solution tailored to your business needs.
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
          </AnimateIn>
        </Container>
      </section>
    </div>
  );
}
