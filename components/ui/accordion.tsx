"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextType {
  openItem: string | null;
  toggleItem: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextType>({
  openItem: null,
  toggleItem: () => {},
});

export function Accordion({
  children,
  className,
  defaultValue = null,
}: {
  children: React.ReactNode;
  className?: string;
  defaultValue?: string | null;
}) {
  const [openItem, setOpenItem] = React.useState<string | null>(defaultValue);

  const toggleItem = React.useCallback((value: string) => {
    setOpenItem((prev) => (prev === value ? null : value));
  }, []);

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
      <div className={cn("space-y-3", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border/70 bg-card/60 transition-all duration-200 hover:border-primary/40",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { itemValue: value } as Record<string, unknown>);
        }
        return child;
      })}
    </div>
  );
}

export function AccordionTrigger({
  itemValue,
  children,
  className,
}: {
  itemValue?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { openItem, toggleItem } = React.useContext(AccordionContext);
  const isOpen = itemValue ? openItem === itemValue : false;

  return (
    <button
      type="button"
      onClick={() => itemValue && toggleItem(itemValue)}
      className={cn(
        "flex w-full items-center justify-between p-5 text-left font-medium transition-all text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl",
        className
      )}
      aria-expanded={isOpen}
    >
      <span className="text-base font-semibold leading-relaxed pr-4">{children}</span>
      <ChevronDown
        className={cn(
          "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
          isOpen && "rotate-180 text-primary"
        )}
      />
    </button>
  );
}

export function AccordionContent({
  itemValue,
  children,
  className,
}: {
  itemValue?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { openItem } = React.useContext(AccordionContext);
  const isOpen = itemValue ? openItem === itemValue : false;

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "px-5 pb-5 pt-0 text-sm leading-relaxed text-muted-foreground animate-fade-in",
        className
      )}
    >
      {children}
    </div>
  );
}
