import { CheckCircle2, Zap, Shield, Code, Rocket, Headphones } from "lucide-react";
import { Container } from "@/components/layout/container";

const VALUE_PROPS = [
  {
    icon: Code,
    title: "Clean, Bespoke Engineering",
    description: "I write maintainable, strictly typed code without bloated templates or redundant plugins, ensuring longevity and fast iteration."
  },
  {
    icon: Zap,
    title: "Obsessed with Performance",
    description: "Every website and web app is optimized for 95+ Core Web Vitals scores, instant first contentful paint, and zero layout shifts."
  },
  {
    icon: Headphones,
    title: "Direct Engineer Communication",
    description: "You work directly with me — no account managers, no miscommunication. Fast feedback loops and proactive milestone updates."
  },
  {
    icon: Shield,
    title: "Security & Reliable Hosting",
    description: "Extensive experience in server administration (WHM, cPanel, Nginx) ensures your application is locked down, backed up, and 99.9% available."
  },
  {
    icon: Rocket,
    title: "Business & Conversion Focus",
    description: "I don't just build features; I build conversion-focused user journeys with frictionless checkouts, clean forms, and clear CTAs."
  },
  {
    icon: CheckCircle2,
    title: "30-Day Post-Launch Warranty",
    description: "Every project comes with 30 days of dedicated bug-fixing and warranty support, ensuring total peace of mind after launch."
  }
];

export function WhyMe() {
  return (
    <section className="py-20 border-b border-border/50">
      <Container>
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Why Work With Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            A Reliable Partner for Your Tech Stack
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Combining agency-tested development rigor with agile freelance flexibility to deliver dependable software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUE_PROPS.map((prop) => {
            const Icon = prop.icon;
            return (
              <div
                key={prop.title}
                className="flex items-start gap-4 p-6 rounded-2xl border border-border/80 bg-card/60 transition-all hover:border-primary/40 hover:bg-card"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-foreground">
                    {prop.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
