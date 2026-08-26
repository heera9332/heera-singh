import { Star, Quote } from "lucide-react";
import { Container } from "@/components/layout/container";
import { testimonialsData } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-20 border-b border-border/50">
      <Container>
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Trusted by Agencies & Founders
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Here is what clients and engineering leads have to say about working together on web and WordPress projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-border/80 bg-card/60 p-6 sm:p-8 space-y-6 transition-all hover:border-primary/40 hover:bg-card"
            >
              <div className="space-y-4">
                {/* Rating stars & Quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-primary/30" />
                </div>

                <p className="text-sm sm:text-base text-foreground leading-relaxed italic">
                  "{item.quote}"
                </p>

                <div className="inline-block rounded-lg border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                  Highlight: {item.highlight}
                </div>
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-foreground">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {item.role} · {item.company}
                  </p>
                </div>
                <span className="text-xs font-medium text-muted-foreground hidden sm:inline-block">
                  {item.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
