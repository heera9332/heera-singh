"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  Layers,
  FolderGit2,
  User,
  Mail,
  ChevronDown,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  MessageSquare,
  Github,
  Linkedin,
  CircleDot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { profileData } from "@/data/profile";
import { cn } from "@/lib/utils";

interface SubSectionItem {
  label: string;
  href: string;
  description?: string;
  isExternal?: boolean;
}

interface NavSection {
  id: string;
  label: string;
  href: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  subSections: SubSectionItem[];
}

const SIDEBAR_NAVIGATION: NavSection[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    tagline: "Welcome & high-level overview",
    icon: Home,
    subSections: [
      { label: "What I Build", href: "/#what-i-build", description: "Next.js, WordPress & Full Stack" },
      { label: "Services Preview", href: "/#services", description: "Packages & deliverables" },
      { label: "Selected Work", href: "/#work", description: "Featured case studies" },
      { label: "Why Work With Me", href: "/#why-me", description: "Engineering quality & warranty" },
      { label: "4-Step Process", href: "/#process", description: "Transparent project roadmap" },
      { label: "Tech Stack", href: "/#tech-stack", description: "Languages, tools & databases" },
      { label: "Client FAQs", href: "/#faq", description: "Frequently asked questions" },
    ],
  },
  {
    id: "services",
    label: "Services",
    href: "/services/",
    tagline: "Full stack, WordPress & mentorship",
    icon: Layers,
    subSections: [
      { label: "All Services Overview", href: "/services/", description: "Full packages & deliverables" },
      { label: "Full Stack Web Apps", href: "/services/#full-stack-web-apps", description: "Next.js, React & Node.js" },
      { label: "Custom WordPress & WooCommerce", href: "/services/#custom-wordpress-development", description: "Bespoke themes & plugins" },
      { label: "API Development & Backend", href: "/services/#api-development-integration", description: "REST & GraphQL architectures" },
      { label: "Speed & Core Web Vitals", href: "/services/#speed-core-web-vitals", description: "95+ Lighthouse performance" },
      { label: "1-on-1 Student Mentorship", href: "/services/#student-mentorship", description: "Placement prep & code reviews" },
    ],
  },
  {
    id: "work",
    label: "Work",
    href: "/work/",
    tagline: "Proven case studies & live apps",
    icon: FolderGit2,
    subSections: [
      { label: "All Projects Gallery", href: "/work/", description: "Filterable case study library" },
      { label: "Headless CMS Platform", href: "/work/headless-wordpress-nextjs/", description: "WordPress + Next.js App Router" },
      { label: "WordPress Business Portal", href: "/work/wordpress-business-website/", description: "Custom theme & speed optimization" },
      { label: "E-Commerce Platform", href: "/work/ecommerce-platform/", description: "High-converting online store" },
      { label: "React Admin Dashboard", href: "/work/react-admin-dashboard/", description: "SaaS analytics & management UI" },
    ],
  },
  {
    id: "about",
    label: "About",
    href: "/about/",
    tagline: "Background, career & skills",
    icon: User,
    subSections: [
      { label: "Profile & Story", href: "/about/#story", description: "Engineering background & philosophy" },
      { label: "Work Experience", href: "/about/#experience", description: "MadQuick, Stack Console & Freelance" },
      { label: "Academic Background", href: "/about/#education", description: "B.Tech in Computer Science" },
      { label: "Technical Competencies", href: "/about/#skills", description: "Full technical stack & tools" },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact/",
    tagline: "Start a project or book a call",
    icon: Mail,
    subSections: [
      { label: "Project Inquiry Form", href: "/contact/", description: "Submit freelance requirements" },
      { label: "Chat on WhatsApp", href: profileData.whatsappUrl, description: "Direct instant messaging", isExternal: true },
      { label: "Direct Email & Socials", href: "/contact/", description: "Email, LinkedIn & GitHub" },
    ],
  },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  // Helper to test if a route is active
  const checkIsActive = (href: string) => {
    const cleanPath = pathname.replace(/\/+$/, "") || "/";
    const cleanHref = href.split("#")[0].replace(/\/+$/, "") || "/";
    if (cleanHref === "/") {
      return cleanPath === "/";
    }
    return cleanPath === cleanHref || cleanPath.startsWith(`${cleanHref}/`);
  };

  // Determine initial expanded sections based on current route
  const getActiveSectionId = React.useCallback(() => {
    const cleanPath = pathname.replace(/\/+$/, "") || "/";
    if (cleanPath.startsWith("/services")) return "services";
    if (cleanPath.startsWith("/work")) return "work";
    if (cleanPath.startsWith("/about")) return "about";
    if (cleanPath.startsWith("/contact")) return "contact";
    return "home";
  }, [pathname]);

  const [expandedSections, setExpandedSections] = React.useState<Record<string, boolean>>({
    [getActiveSectionId()]: true,
  });

  // Auto-expand current section on route change
  React.useEffect(() => {
    const activeId = getActiveSectionId();
    setExpandedSections((prev) => ({
      ...prev,
      [activeId]: true,
    }));
    setIsOpen(false);
  }, [pathname, getActiveSectionId]);

  // Toggle single section open/close
  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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

  return (
    <div className="flex items-center gap-2 md:hidden">
      <ThemeToggle />

      {/* Sidebar Open/Close Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close navigation sidebar" : "Open navigation sidebar"}
        aria-expanded={isOpen}
        aria-controls="mobile-sidebar-drawer"
        className={cn(
          "relative flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          isOpen
            ? "border-primary bg-primary/10 text-primary"
            : "border-border/70 bg-card/80 text-foreground hover:border-primary/50 hover:text-primary"
        )}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Sidebar Overlay & Drawer Container */}
      {isOpen && (
        <div
          id="mobile-sidebar-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Sidebar"
          className="fixed inset-0 top-16 z-50 flex flex-col bg-background/98 backdrop-blur-2xl animate-fade-in border-t border-border/80"
        >
          {/* Scrollable Sidebar Content */}
          <div className="flex flex-col justify-between h-[calc(100dvh-4rem)] overflow-y-auto px-4 py-5 space-y-6">
            <div className="space-y-4">
              {/* Profile / Availability Header */}
              <div className="flex items-center justify-between p-3 rounded-2xl border border-border/70 bg-card/60">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-xl overflow-hidden border border-primary/40 p-0.5">
                    <Image
                      src={profileData.avatar}
                      alt={profileData.shortName}
                      width={40}
                      height={40}
                      className="h-full w-full rounded-[8px] object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground leading-tight">
                      {profileData.shortName}
                    </h4>
                    <span className="text-[11px] text-muted-foreground">
                      Full Stack Developer
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available</span>
                </div>
              </div>

              {/* Navigation Header Label */}
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Navigation &amp; Sub-Sections
                </span>
                <span className="text-[11px] text-muted-foreground">
                  Tap to expand
                </span>
              </div>

              {/* Navigation Accordion Sections */}
              <nav className="flex flex-col space-y-2" aria-label="Sidebar navigation links">
                {SIDEBAR_NAVIGATION.map((section) => {
                  const isSectionActive = checkIsActive(section.href);
                  const isExpanded = !!expandedSections[section.id];
                  const Icon = section.icon;

                  return (
                    <div
                      key={section.id}
                      className={cn(
                        "rounded-2xl border transition-all duration-200 overflow-hidden",
                        isSectionActive
                          ? "border-primary/40 bg-card/80 shadow-sm"
                          : "border-border/60 bg-card/40 hover:border-border"
                      )}
                    >
                      {/* Main Section Row */}
                      <div className="flex items-center justify-between p-2.5">
                        {/* Direct Page Link */}
                        <Link
                          href={section.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 flex-1 px-1 py-1 rounded-lg text-left transition-colors hover:text-primary group"
                        >
                          <div
                            className={cn(
                              "flex h-8 w-8 items-center justify-center rounded-lg transition-colors shrink-0",
                              isSectionActive
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                            )}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span
                              className={cn(
                                "text-sm font-semibold leading-tight",
                                isSectionActive ? "text-primary" : "text-foreground group-hover:text-primary"
                              )}
                            >
                              {section.label}
                            </span>
                            <span className="text-[11px] text-muted-foreground truncate">
                              {section.tagline}
                            </span>
                          </div>
                        </Link>

                        {/* Expand/Collapse Chevron Button */}
                        <button
                          type="button"
                          onClick={() => toggleSection(section.id)}
                          aria-label={`Toggle ${section.label} sub-sections`}
                          aria-expanded={isExpanded}
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors shrink-0 ml-1"
                        >
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              isExpanded && "rotate-180 text-primary"
                            )}
                          />
                        </button>
                      </div>

                      {/* Expandable Sub-Sections Container */}
                      {isExpanded && (
                        <div className="border-t border-border/40 bg-background/50 px-3 py-2 space-y-1">
                          {section.subSections.map((subItem) => {
                            const isSubActive =
                              pathname === subItem.href ||
                              (subItem.href !== "/" && pathname.startsWith(subItem.href));

                            if (subItem.isExternal) {
                              return (
                                <a
                                  key={subItem.label}
                                  href={subItem.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center justify-between p-2 rounded-xl text-xs font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all group"
                                >
                                  <div className="flex items-center gap-2 min-w-0">
                                    <CircleDot className="h-2.5 w-2.5 text-emerald-500 shrink-0" />
                                    <div className="flex flex-col min-w-0 text-left">
                                      <span className="font-semibold text-foreground group-hover:text-primary">
                                        {subItem.label}
                                      </span>
                                      {subItem.description && (
                                        <span className="text-[10px] text-muted-foreground truncate">
                                          {subItem.description}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary opacity-70 shrink-0" />
                                </a>
                              );
                            }

                            return (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                  "flex items-center justify-between p-2 rounded-xl text-xs font-medium transition-all group",
                                  isSubActive
                                    ? "bg-primary/10 text-primary font-semibold"
                                    : "text-foreground hover:bg-muted/60 hover:text-primary"
                                )}
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  <ChevronRight
                                    className={cn(
                                      "h-3 w-3 shrink-0 transition-transform group-hover:translate-x-0.5",
                                      isSubActive ? "text-primary" : "text-muted-foreground opacity-50"
                                    )}
                                  />
                                  <div className="flex flex-col min-w-0 text-left">
                                    <span
                                      className={cn(
                                        "leading-snug",
                                        isSubActive ? "text-primary font-semibold" : "text-foreground group-hover:text-primary"
                                      )}
                                    >
                                      {subItem.label}
                                    </span>
                                    {subItem.description && (
                                      <span className="text-[10px] text-muted-foreground truncate">
                                        {subItem.description}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions & Socials */}
            <div className="pt-4 border-t border-border/70 space-y-3 pb-2">
              {/* Primary Call to Action */}
              <Link href="/contact/" onClick={() => setIsOpen(false)} className="block w-full">
                <Button className="w-full h-11 text-xs sm:text-sm font-semibold shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
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
                  className="w-full h-10 text-xs font-semibold flex items-center justify-center gap-2 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/60"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  Instant Chat on WhatsApp
                </Button>
              </a>

              {/* Social links row */}
              <div className="flex items-center justify-center gap-4 pt-1 text-xs text-muted-foreground">
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
