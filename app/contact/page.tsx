import { Metadata } from "next";
import {
  Mail,
  MessageSquare,
  Linkedin,
  Github,
  Clock,
  MapPin,
  Sparkles
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { AnimateIn } from "@/components/ui/animate-in";
import { ContactForm } from "@/components/sections/contact-form";
import { FAQSection } from "@/components/sections/faq-section";
import { profileData } from "@/data/profile";
import { generateSeoMetadata, getBreadcrumbJsonLd } from "@/lib/metadata";

export const metadata: Metadata = generateSeoMetadata({
  title: "Contact & Project Inquiries",
  description:
    "Get in touch with Heera Singh Lodhi to discuss your next web development project, Next.js web application, or custom WordPress solution.",
  path: "/contact/",
});

export default function ContactPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact/" },
  ]);

  return (
    <div className="py-12 sm:py-16 space-y-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Header */}
      <section>
        <Container>
          <AnimateIn direction="up">
            <div className="max-w-3xl space-y-4 text-center sm:text-left mx-auto sm:mx-0">
              <Badge variant="orange" className="font-semibold text-xs">
                Start a Project or Mentorship
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                Let's Discuss Your Requirements
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have a new web application to build, a custom WordPress requirement, or looking for 1-on-1 placement mentorship? Let's connect.
              </p>
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* Main Contact Area: Form on Left, Contact Cards on Right */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Form Column */}
            <AnimateIn direction="left" className="lg:col-span-7">
              <ContactForm />
            </AnimateIn>

            {/* Direct Channels Column */}
            <AnimateIn direction="right" delay={150} className="lg:col-span-5 space-y-6">
              {/* Availability Status Card */}
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 space-y-3">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span>Currently Available</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                  {profileData.availability.message}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-1">
                  <Clock className="h-3.5 w-3.5 text-primary" />
                  <span>Typical response time: {profileData.availability.responseTime}</span>
                </div>
              </div>

              {/* Direct Quick Links */}
              <div className="rounded-2xl border border-border/80 bg-card/80 p-6 space-y-5">
                <h3 className="text-base font-bold text-foreground border-b border-border/60 pb-3">
                  Direct Channels
                </h3>

                <div className="space-y-4">
                  {/* WhatsApp */}
                  <a
                    href={profileData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3 rounded-xl border border-border/70 bg-background/50 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                        Instant Messaging
                      </span>
                      <span className="text-sm font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                        Chat on WhatsApp
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={profileData.socials.email}
                    className="flex items-center gap-3.5 p-3 rounded-xl border border-border/70 bg-background/50 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                        Direct Email
                      </span>
                      <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        {profileData.email}
                      </span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3 rounded-xl border border-border/70 bg-background/50 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                        Professional Network
                      </span>
                      <span className="text-sm font-bold text-foreground group-hover:text-blue-500 transition-colors">
                        LinkedIn Profile
                      </span>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3 rounded-xl border border-border/70 bg-background/50 hover:border-foreground/30 hover:bg-muted/30 transition-all group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                        Open Source Code
                      </span>
                      <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        github.com/heera9332
                      </span>
                    </div>
                  </a>
                </div>

                <div className="pt-2 border-t border-border/60">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    <span>Based in MP, India · Available Worldwide (Remote)</span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
