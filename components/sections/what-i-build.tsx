import { Layout, Globe, Cpu, Database, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";

const BUILD_CATEGORIES = [
  {
    icon: Layout,
    title: "Next.js Web Applications",
    description: "Lightning-fast, search-engine friendly web apps and SaaS tools built with React 19, TypeScript, and the App Router.",
    points: ["Server-side rendering & static generation", "Responsive, accessible UI components", "Interactive dashboards & complex state"]
  },
  {
    icon: Globe,
    title: "Custom WordPress Solutions",
    description: "Bespoke themes and proprietary plugins built from the ground up without heavy page-builders or slow plugins.",
    points: ["Custom Gutenberg editorial workflows", "High-converting WooCommerce checkouts", "Sub-second PageSpeed load times"]
  },
  {
    icon: Database,
    title: "Full Stack Platforms",
    description: "End-to-end web applications combining robust backend APIs, secure relational databases, and clean frontend interfaces.",
    points: ["PostgreSQL, MySQL & MongoDB schemas", "JWT / OAuth role-based security", "Real-time state and webhook listeners"]
  },
  {
    icon: Cpu,
    title: "APIs & Hosting Automation",
    description: "Seamless third-party API integrations, payment gateways (Stripe/Razorpay), and WHM/WHMCS server provisioning.",
    points: ["Secure payment gateway routing", "Automated billing & cPanel provisioning", "SSL, DNS & Nginx caching architecture"]
  }
];

export function WhatIBuild() {
  return (
    <section className="py-20 bg-background/50 border-b border-border/50">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              What I Build For Clients
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              I specialize in end-to-end engineering, taking digital products from initial architecture to production launch and scale.
            </p>
          </div>
          <Link
            href="/services/"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline underline-offset-4"
          >
            <span>Explore all services</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUILD_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card/60 p-6 transition-all duration-200 hover:border-primary/50 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="space-y-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {cat.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
