import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealVariant = "fade-up" | "slide-left" | "fade";

type RevealOnScrollProps = {
  ariaLabel?: string;
  as?: "div" | "section" | "article" | "p";
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
};

export function RevealOnScroll({
  ariaLabel,
  as: Component = "div",
  children,
  className,
  delay = 0,
  variant = "fade-up"
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.18
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const classes = [
    "reveal-on-scroll",
    `reveal-${variant}`,
    isVisible ? "is-visible" : "",
    className ?? ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      aria-label={ariaLabel}
      className={classes}
      ref={elementRef as never}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Component>
  );
}
