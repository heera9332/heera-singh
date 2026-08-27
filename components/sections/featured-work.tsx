import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/ui/animate-in";
import { ProjectCard } from "@/components/projects/project-card";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedWork() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="work" className="py-20 bg-background/50 border-b border-border/50">
      <Container>
        <AnimateIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Proof of Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Featured Case Studies
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Real-world engineering solutions solving actual business challenges with measurable speed, conversion, and reliability metrics.
              </p>
            </div>
            <Link href="/work/">
              <Button variant="outline" className="gap-2 font-semibold">
                <span>View All Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <AnimateIn
              key={project.slug}
              delay={index * 150}
              direction="up"
              className="h-full"
            >
              <ProjectCard project={project} featuredLayout={true} />
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={200} direction="up" className="mt-12">
          <div className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 via-primary/10 to-transparent flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg font-bold text-foreground">
                Have a custom project or challenging technical requirement?
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                I can build a bespoke web application, WordPress solution, or custom API tailored to your stack.
              </p>
            </div>
            <Link href="/contact/" className="shrink-0">
              <Button className="gap-2 font-semibold shadow-md shadow-primary/20">
                <Sparkles className="h-4 w-4" />
                Discuss Your Project
              </Button>
            </Link>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
