"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { profileData } from "@/data/profile";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/work/", label: "Selected Work" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  // Close nav on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="flex items-center gap-2 md:hidden">
      <ThemeToggle />
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-[65px] z-50 flex flex-col bg-background/95 backdrop-blur-xl animate-fade-in border-t border-border">
          <div className="flex flex-col justify-between h-[calc(100vh-65px)] p-6 overflow-y-auto">
            <div className="flex flex-col space-y-2 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Navigation
              </span>
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-medium transition-all",
                      isActive
                        ? "bg-primary/10 text-primary font-semibold border border-primary/20"
                        : "text-foreground hover:bg-muted/50 hover:text-primary"
                    )}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-4 w-4 opacity-50" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-border space-y-4">
              <div className="flex items-center justify-between px-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  {profileData.availability.message}
                </span>
              </div>
              <Link href="/contact/" onClick={() => setIsOpen(false)} className="block w-full">
                <Button className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Start a Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
