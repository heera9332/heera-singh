import { Container } from "@/components/layout/container";
import { AnimateIn } from "@/components/ui/animate-in";
import { skillCategories, coreTechBadges } from "@/data/skills";

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 border-b border-border/50">
      <Container>
        <AnimateIn direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Technologies &amp; Tools
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Modern, Battle-Tested Stack
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I work with modern frameworks, reliable database engines, and secure server environments to build resilient digital products.
            </p>
          </div>
        </AnimateIn>

        {/* Core Badges Row */}
        <AnimateIn delay={100} direction="up">
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto mb-14">
            {coreTechBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center rounded-xl border border-border/80 bg-card/80 px-4 py-2 text-xs sm:text-sm font-semibold text-foreground shadow-sm hover:border-primary/50 hover:text-primary transition-all duration-200"
              >
                {badge}
              </span>
            ))}
          </div>
        </AnimateIn>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.slice(0, 3).map((category, index) => (
            <AnimateIn
              key={category.title}
              delay={index * 120 + 150}
              direction="up"
              className="h-full"
            >
              <div className="rounded-2xl border border-border/80 bg-card/60 p-6 space-y-4 h-full">
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium border transition-colors ${
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
      </Container>
    </section>
  );
}
