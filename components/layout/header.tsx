"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/profile";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/work/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const checkIsActive = (href: string) => {
    const cleanPath = pathname.replace(/\/+$/, "") || "/";
    const cleanHref = href.replace(/\/+$/, "") || "/";
    if (cleanHref === "/") {
      return cleanPath === "/";
    }
    return cleanPath === cleanHref || cleanPath.startsWith(`${cleanHref}/`);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-background/90 backdrop-blur-xl shadow-sm shadow-black/5"
          : "border-b border-border/40 bg-background/70 backdrop-blur-md"
      )}
    >
      <Container className="mb-0">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand with Avatar */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          >
            <div className="relative h-9 w-9 rounded-lg overflow-hidden border border-primary/40 p-0.5 group-hover:border-primary transition-colors duration-200">
              <Image
                src={profileData.avatar}
                alt={profileData.shortName}
                width={36}
                height={36}
                className="h-full w-full rounded-[6px] object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                {profileData.shortName}
              </span>
              <span className="text-[11px] font-medium text-muted-foreground hidden sm:inline-block">
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-1.5 rounded-full border border-border/70 bg-card/60 px-3 py-1.5 shadow-sm backdrop-blur-md"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = checkIsActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions (Availability, Theme, CTA) */}
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-1.5 text-xs text-muted-foreground pr-2 border-r border-border/70">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Hire</span>
            </div>

            <ThemeToggle />

            <Link href="/contact/">
              <Button
                variant="default"
                size="sm"
                className="gap-2 font-semibold shadow-md shadow-primary/20"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Start a Project
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
