"use client";

import * as React from "react";
import { ProjectItem } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { cn } from "@/lib/utils";

interface ProjectFilterProps {
  projects: ProjectItem[];
}

const CATEGORIES = ["All", "Full Stack", "WordPress", "API & Backend"] as const;

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  const filteredProjects = React.useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center gap-1.5 p-1.5 rounded-xl border border-border/80 bg-card/60 backdrop-blur-sm overflow-x-auto max-w-full">
          {CATEGORIES.map((category) => {
            const count =
              category === "All"
                ? projects.length
                : projects.filter((p) => p.category === category).length;
            const isSelected = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-2",
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                )}
              >
                <span>{category}</span>
                <span
                  className={cn(
                    "text-[10px] px-1.5 py-0.2 rounded-full",
                    isSelected
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-16 text-center text-muted-foreground">
          <p>No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}
