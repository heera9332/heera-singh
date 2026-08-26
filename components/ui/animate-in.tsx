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
  duration = 500,
  threshold = 0.01,
  className,
  as: Component = "div",
  ...props
}: AnimateInProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    // If prefers-reduced-motion is active, make immediately visible
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true);
      return;
    }

    const currentElem = domRef.current;
    if (!currentElem) return;

    // Check if element is already in or near viewport on mount
    const rect = currentElem.getBoundingClientRect();
    if (rect.top < window.innerHeight + 150) {
      setIsVisible(true);
      return;
    }

    if (typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              setIsVisible(true);
              if (domRef.current) {
                observer.unobserve(domRef.current);
              }
            }
          });
        },
        {
          threshold: 0,
          rootMargin: "150px 0px 100px 0px", // triggers slightly ahead of scroll
        }
      );

      observer.observe(currentElem);

      // Fallback timer ensures elements are never stuck hidden
      const fallbackTimer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);

      return () => {
        observer.disconnect();
        clearTimeout(fallbackTimer);
      };
    } else {
      // If IntersectionObserver is not supported, show immediately
      setIsVisible(true);
    }
  }, []);

  const getTransformStyle = () => {
    if (isVisible) return "translate3d(0, 0, 0)";
    switch (direction) {
      case "up":
        return "translate3d(0, 18px, 0)";
      case "down":
        return "translate3d(0, -18px, 0)";
      case "left":
        return "translate3d(18px, 0, 0)";
      case "right":
        return "translate3d(-18px, 0, 0)";
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
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
        willChange: "opacity, transform",
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  );
}
