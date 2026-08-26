import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers,
  Zap,
  Target,
  FileCode2
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { CaseStudyHeader } from "@/components/projects/case-study-header";
import { MetricBadge } from "@/components/projects/metric-badge";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  getAllProjects
} from "@/data/projects";
import { generateSeoMetadata, getProjectJsonLd } from "@/lib/metadata";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return generateSeoMetadata({
      title: "Case Study Not Found",
      description: "The requested project case study could not be found.",
    });
  }

  return generateSeoMetadata({
    title: `${project.title} - Case Study`,
    description: project.tagline,
    path: `/work/${project.slug}/`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];
  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];

  const projectJsonLd = getProjectJsonLd(project);

  return (
    <div className="py-8 sm:py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />

      <Container>
        <div className="max-w-4xl mx-auto space-y-14">
          {/* Header */}
          <CaseStudyHeader project={project} />

          {/* Key Metrics Section */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5" />
              Measurable Business & Engineering Impact
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.metrics.map((metric) => (
                <MetricBadge
                  key={metric.label}
                  label={metric.label}
                  value={metric.value}
                  description={metric.description}
                />
              ))}
            </div>
          </div>

          {/* Overview: The Challenge & The Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 sm:p-7 rounded-2xl border border-border/80 bg-card/60 space-y-3">
              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                <Target className="h-4 w-4" />
                The Business Challenge
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.overview.challenge}
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl border border-primary/20 bg-primary/5 space-y-3">
              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                <Zap className="h-4 w-4" />
                The Engineering Solution
              </div>
              <p className="text-sm leading-relaxed text-foreground">
                {project.overview.solution}
              </p>
            </div>
          </div>

          {/* Architecture & Stack Decisions */}
          <div className="p-6 sm:p-8 rounded-2xl border border-border/80 bg-card/60 space-y-4">
            <div className="flex items-center gap-2 text-foreground font-bold text-lg">
              <Layers className="h-5 w-5 text-primary" />
              System Architecture & Design Decisions
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              {project.overview.architecture}
            </p>

            <div className="pt-3 border-t border-border/60">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-2">
                Technologies & Tools Deployed:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border/70 bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Features Implemented */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <FileCode2 className="h-5 w-5 text-primary" />
              Key Features & Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-4 rounded-xl border border-border/70 bg-card/40"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-foreground leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* In-depth Narrative Sections */}
          {project.sections.map((section, idx) => (
            <div key={idx} className="space-y-4 border-t border-border/60 pt-8">
              <h3 className="text-xl font-bold text-foreground">
                {section.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {section.description}
              </p>

              {section.points && section.points.length > 0 && (
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-foreground">
                  {section.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Measurable Results */}
          <div className="p-6 sm:p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 space-y-3">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-base uppercase tracking-wider">
              <CheckCircle2 className="h-5 w-5" />
              Final Outcome & Business Value
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-foreground">
              {project.overview.results}
            </p>
          </div>

          {/* Next & Previous Project Navigation */}
          <div className="border-t border-border/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevProject && (
              <Link
                href={`/work/${prevProject.slug}/`}
                className="flex items-center gap-3 p-4 rounded-xl border border-border/70 bg-card/40 hover:border-primary/50 transition-all w-full sm:w-auto"
              >
                <ArrowLeft className="h-4 w-4 text-primary shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block">
                    Previous Project
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-foreground line-clamp-1">
                    {prevProject.title}
                  </span>
                </div>
              </Link>
            )}

            {nextProject && (
              <Link
                href={`/work/${nextProject.slug}/`}
                className="flex items-center justify-between sm:justify-end gap-3 p-4 rounded-xl border border-border/70 bg-card/40 hover:border-primary/50 transition-all w-full sm:w-auto text-right"
              >
                <div className="text-left sm:text-right">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block">
                    Next Project
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-foreground line-clamp-1">
                    {nextProject.title}
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 text-primary shrink-0" />
              </Link>
            )}
          </div>

          {/* Bottom Conversion CTA */}
          <div className="rounded-3xl border border-primary/30 bg-card/80 p-8 text-center space-y-6 shadow-xl shadow-primary/5">
            <h2 className="text-2xl font-bold text-foreground">
              Need a similar solution engineered for your business?
            </h2>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              I can build a custom Next.js application, WordPress theme/plugin, or API automation tailored to your exact stack.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact/">
                <Button size="lg" className="gap-2 font-semibold shadow-md shadow-primary/20">
                  <Sparkles className="h-4 w-4" />
                  Discuss Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
