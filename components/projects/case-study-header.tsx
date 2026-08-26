import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectItem } from "@/data/projects";

interface CaseStudyHeaderProps {
  project: ProjectItem;
}

export function CaseStudyHeader({ project }: CaseStudyHeaderProps) {
  return (
    <div className="space-y-6 pt-4 pb-8 border-b border-border/80">
      {/* Back Link & Badges */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Link
          href="/work/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Selected Work
        </Link>
        <div className="flex items-center gap-2">
          <Badge variant="orange" className="font-semibold">
            {project.category}
          </Badge>
          <Badge variant="secondary">
            {project.year}
          </Badge>
        </div>
      </div>

      {/* Title & Tagline */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
          {project.title}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          {project.tagline}
        </p>
      </div>

      {/* Meta Specs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl border border-border/70 bg-card/60">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Client
          </span>
          <p className="text-sm font-bold text-foreground mt-0.5">
            {project.client}
          </p>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Industry
          </span>
          <p className="text-sm font-bold text-foreground mt-0.5">
            {project.clientIndustry}
          </p>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            My Role
          </span>
          <p className="text-sm font-bold text-foreground mt-0.5">
            {project.role}
          </p>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Duration
          </span>
          <p className="text-sm font-bold text-foreground mt-0.5">
            {project.duration}
          </p>
        </div>
      </div>

      {/* CTAs & Links */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Link href="/contact/">
          <Button className="gap-2 font-semibold shadow-md shadow-primary/20">
            <Sparkles className="h-4 w-4" />
            Build Something Similar
          </Button>
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Visit Live Site
            </Button>
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
              <Github className="h-4 w-4" />
              View Source
            </Button>
          </a>
        )}
      </div>
    </div>
  );
}
