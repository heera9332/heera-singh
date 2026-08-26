import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/ui/animate-in";
import { profileData } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28 border-b border-border/50">
      {/* Background Gradient Mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-80"
      >
        <div
          className="aspect-[1155/678] w-[68rem] bg-gradient-to-tr from-primary/30 to-amber-500/20 opacity-30 dark:opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <Container>
        <div className="flex flex-col items-center text-center space-y-7 max-w-4xl mx-auto">
          {/* Profile Avatar with Status Pulse */}
          <AnimateIn delay={50} direction="down">
            <div className="relative inline-block">
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full p-1 ring-2 ring-primary/40 bg-gradient-to-tr from-primary/30 to-amber-500/20 shadow-xl shadow-primary/10">
                <Image
                  src={profileData.avatar}
                  alt={profileData.name}
                  width={112}
                  height={112}
                  className="h-full w-full rounded-full object-cover"
                  priority
                />
                <span className="absolute bottom-1 right-1 flex h-4 w-4" title="Available for hire">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-background" />
                </span>
              </div>
            </div>
          </AnimateIn>

          {/* Availability Badge */}
          <AnimateIn delay={100} direction="up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for new freelance & contract projects</span>
            </div>
          </AnimateIn>

          {/* Main Headline */}
          <AnimateIn delay={150} direction="up" className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Full Stack Web Developer &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-amber-500">
                Custom Solution Specialist
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-normal">
              I partner with founders, agencies, and business owners to design, build, and deploy fast Next.js web applications, custom WordPress themes/plugins, and robust API workflows.
            </p>
          </AnimateIn>

          {/* Primary & Secondary CTAs */}
          <AnimateIn delay={200} direction="up">
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <Link href="/contact/" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto gap-2.5 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                >
                  <Sparkles className="h-4 w-4" />
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/work/" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base font-semibold border-border/80 hover:border-primary/50"
                >
                  Explore Case Studies
                </Button>
              </Link>
            </div>
          </AnimateIn>

          {/* Trust Guarantees */}
          <AnimateIn delay={250} direction="up">
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-muted-foreground pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                100% Bespoke Code (No Bloat)
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                Direct Developer Access
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                30-Day Post-Launch Warranty
              </span>
            </div>
          </AnimateIn>

          {/* Stats Bar */}
          <AnimateIn delay={300} direction="up" className="w-full pt-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-md">
              {profileData.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-0.5">
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-primary">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-foreground">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-muted-foreground hidden sm:inline-block leading-tight">
                    {stat.description}
                  </span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
