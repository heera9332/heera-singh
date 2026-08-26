import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Briefcase, GraduationCap } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/profile";

export function AboutPreview() {
  return (
    <section className="py-20 bg-background/50 border-b border-border/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                About the Developer
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Hi, I'm {profileData.name}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {profileData.shortBio}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {profileData.highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link href="/about/">
                <Button variant="outline" className="gap-2 font-semibold">
                  <span>Read Full Background & Education</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact/">
                <Button className="font-semibold shadow-md shadow-primary/20">
                  Book a Discovery Call
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Quick Credentials Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border/80 bg-card/80 p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-lg font-bold text-foreground border-b border-border/60 pb-3">
                Experience Snapshot
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary">May 2024 - Present</span>
                    <h4 className="text-sm font-bold text-foreground">Web Developer</h4>
                    <p className="text-xs text-muted-foreground">MadQuick Pvt Ltd · Sagar, MP</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary">Active Projects</span>
                    <h4 className="text-sm font-bold text-foreground">Full Stack Developer</h4>
                    <p className="text-xs text-muted-foreground">Stack Console · Remote</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary">B.Tech Computer Science</span>
                    <h4 className="text-sm font-bold text-foreground">Infinity Engineering College</h4>
                    <p className="text-xs text-muted-foreground">Sagar, Madhya Pradesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
