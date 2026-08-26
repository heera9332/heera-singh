import Link from "next/link";
import { ArrowRight, Sparkles, MessageSquare, Mail, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/profile";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Glow Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="h-64 w-96 rounded-full bg-primary/20 blur-[120px] opacity-70" />
      </div>

      <Container>
        <div className="relative rounded-3xl border border-primary/30 bg-gradient-to-b from-card to-card/80 p-8 sm:p-12 lg:p-16 text-center space-y-8 shadow-2xl shadow-primary/5">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Ready to Build Your Next Web Project</span>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Let's Turn Your Vision Into a High-Performance Reality
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Whether you need a custom Next.js web application, a fast WordPress solution, or an automated API backend, I'm ready to help you launch.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact/" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
              >
                <Sparkles className="h-4 w-4" />
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <a
              href={profileData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2 text-base font-semibold border-border/80 hover:border-primary/50"
              >
                <MessageSquare className="h-4 w-4 text-emerald-500" />
                Quick Chat on WhatsApp
              </Button>
            </a>
          </div>

          {/* Footer Highlights */}
          <div className="pt-6 border-t border-border/60 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
              Response within 12 hours
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
              Fixed milestone pricing
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
              Direct access to lead engineer
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
