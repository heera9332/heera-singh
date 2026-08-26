import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectItem } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectItem;
  featuredLayout?: boolean;
}

export function ProjectCard({ project, featuredLayout = false }: ProjectCardProps) {
  const primaryMetric = project.metrics[0];

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card/60 p-6 sm:p-7 transition-all duration-300 hover:border-primary/50 hover:bg-card/90 hover:shadow-xl hover:shadow-primary/5",
        featuredLayout && "lg:p-8"
      )}
    >
      <div className="space-y-4">
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <Badge variant="orange" className="text-[11px] font-semibold">
              {project.category}
            </Badge>
            {project.featured && (
              <Badge variant="secondary" className="text-[11px] flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-primary" />
                Featured Case Study
              </Badge>
            )}
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            {project.client} • {project.year}
          </span>
        </div>

        {/* Title & Tagline */}
        <div>
          <Link
            href={`/work/${project.slug}/`}
            className="group/title inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
          >
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground transition-colors group-hover/title:text-primary">
              {project.title}
            </h3>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 group-hover/title:text-primary" />
          </Link>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {project.summary}
          </p>
        </div>

        {/* Highlight Metric Strip */}
        {primaryMetric && (
          <div className="flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-2.5">
            <div className="text-lg font-bold text-primary">
              {primaryMetric.value}
            </div>
            <div className="text-xs text-muted-foreground leading-tight">
              <span className="font-medium text-foreground">{primaryMetric.label}:</span>{" "}
              {primaryMetric.description}
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md border border-border/70 bg-background/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="inline-flex items-center rounded-md border border-border/70 bg-background/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between">
        <Link
          href={`/work/${project.slug}/`}
          className="text-xs font-semibold text-primary hover:underline underline-offset-4 flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
        >
          Read Full Case Study
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} GitHub repository`}
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} live demo`}
              className="p-1.5 text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-muted/50"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
