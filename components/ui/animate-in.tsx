"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AnimateInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number; // Delay in milliseconds
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number; // Duration in milliseconds
  threshold?: number;
  className?: string;
  as?: React.ElementType;
}

export function AnimateIn({
  children,
  delay = 0,
  direction = "up",
  duration = 600,
  threshold = 0.1,
  className,
  as: Component = "div",
  ...props
}: AnimateInProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    // If prefers-reduced-motion is active, make immediately visible
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentElem = domRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold]);

  const getTransformStyle = () => {
    if (isVisible) return "translate3d(0, 0, 0)";
    switch (direction) {
      case "up":
        return "translate3d(0, 28px, 0)";
      case "down":
        return "translate3d(0, -28px, 0)";
      case "left":
        return "translate3d(28px, 0, 0)";
      case "right":
        return "translate3d(-28px, 0, 0)";
      case "none":
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  return (
    <Component
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransformStyle(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  );
}
