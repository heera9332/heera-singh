"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  Layers,
  FolderGit2,
  User,
  Mail,
  ArrowRight,
  Sparkles,
  MessageSquare,
  Github,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { profileData } from "@/data/profile";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  {
    href: "/",
    label: "Home",
    description: "Welcome & overview",
    icon: Home,
  },
  {
    href: "/services/",
    label: "Services",
    description: "Full stack, Next.js & WordPress",
    icon: Layers,
  },
  {
    href: "/work/",
    label: "Selected Work",
    description: "Case studies & delivered apps",
    icon: FolderGit2,
  },
  {
    href: "/about/",
    label: "About Me",
    description: "Background, stack & experience",
    icon: User,
  },
  {
    href: "/contact/",
    label: "Contact & Mentorship",
    description: "Start a project or book a call",
    icon: Mail,
  },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  // Close nav on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close nav on window resize if crossing to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close nav on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const checkIsActive = (href: string) => {
    const cleanPath = pathname.replace(/\/+$/, "") || "/";
    const cleanHref = href.replace(/\/+$/, "") || "/";
    if (cleanHref === "/") {
      return cleanPath === "/";
    }
    return cleanPath === cleanHref || cleanPath.startsWith(`${cleanHref}/`);
  };

  return (
    <div className="flex items-center gap-2 md:hidden">
      <ThemeToggle />

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-drawer"
        className={cn(
          "relative flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          isOpen
            ? "border-primary bg-primary/10 text-primary"
            : "border-border/70 bg-card/80 text-foreground hover:border-primary/50 hover:text-primary"
        )}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-x-0 top-16 bottom-0 z-50 flex flex-col bg-background/98 backdrop-blur-2xl animate-fade-in border-t border-border/80"
        >
          {/* Scrollable Nav Content */}
          <div className="flex flex-col justify-between h-full overflow-y-auto px-5 py-6">
            <div className="space-y-4">
              {/* Header Label */}
              <div className="flex items-center justify-between pb-2 border-b border-border/40">
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Navigation
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Hire
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-1.5" aria-label="Mobile menu links">
                {NAV_ITEMS.map((item) => {
                  const active = checkIsActive(item.href);
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "group flex items-center justify-between p-3 rounded-xl transition-all duration-200",
                        active
                          ? "bg-primary/15 text-primary border border-primary/30 shadow-sm"
                          : "text-foreground hover:bg-muted/60 hover:text-primary border border-transparent"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
                            active
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted/80 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                          )}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span
                            className={cn(
                              "text-sm font-semibold leading-tight",
                              active ? "text-primary" : "text-foreground group-hover:text-primary"
                            )}
                          >
                            {item.label}
                          </span>
                          <span className="text-[11px] text-muted-foreground line-clamp-1">
                            {item.description}
                          </span>
                        </div>
                      </div>
                      <ArrowRight
                        className={cn(
                          "h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5",
                          active ? "text-primary opacity-100" : "text-muted-foreground opacity-40"
                        )}
                      />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions & Socials */}
            <div className="pt-6 mt-4 border-t border-border/60 space-y-3">
              {/* Primary Call to Action */}
              <Link href="/contact/" onClick={() => setIsOpen(false)} className="block w-full">
                <Button className="w-full h-12 text-sm font-semibold shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Start a Project / Mentorship
                </Button>
              </Link>

              {/* WhatsApp Quick Chat */}
              <a
                href={profileData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full"
              >
                <Button
                  variant="outline"
                  className="w-full h-11 text-xs font-semibold flex items-center justify-center gap-2 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/60"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  Instant Chat on WhatsApp
                </Button>
              </a>

              {/* Social links row */}
              <div className="flex items-center justify-center gap-4 pt-2 text-xs text-muted-foreground">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex items-center gap-1.5 hover:text-primary transition-colors py-1"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
                <span className="text-border">•</span>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex items-center gap-1.5 hover:text-primary transition-colors py-1"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-border">•</span>
                <a
                  href={profileData.socials.email}
                  aria-label="Email directly"
                  className="flex items-center gap-1.5 hover:text-primary transition-colors py-1"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
