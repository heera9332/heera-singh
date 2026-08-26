import { Compass, Layers, Code, Rocket, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { AnimateIn } from "@/components/ui/animate-in";
import { clientProcess } from "@/data/process";

const ICONS: Record<string, React.ElementType> = {
  Compass,
  Layers,
  Code,
  Rocket
};

export function ProcessSection() {
  return (
    <section className="py-20 bg-background/50 border-b border-border/50">
      <Container>
        <AnimateIn direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              A Transparent 4-Step Process
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              From first conversation to production deployment, here is the structured roadmap of how your project comes to life.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientProcess.map((step, index) => {
            const Icon = ICONS[step.iconName] || Code;
            return (
              <AnimateIn
                key={step.step}
                delay={index * 120}
                direction="up"
                className="h-full"
              >
                <div className="relative flex flex-col justify-between h-full rounded-2xl border border-border/80 bg-card/60 p-6 transition-all hover:border-primary/50 hover:bg-card">
                  <div className="space-y-4">
                    {/* Step badge & icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-2xl font-extrabold text-muted-foreground/30">
                        {step.step}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-foreground">
                        {step.title}
                      </h3>
                      <span className="text-xs font-medium text-primary">
                        {step.duration}
                      </span>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-border/60 space-y-1.5">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground block">
                        Deliverables:
                      </span>
                      <ul className="space-y-1 text-xs text-muted-foreground">
                        {step.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-1.5">
                            <CheckCircle2 className="h-3 w-3 text-primary shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
