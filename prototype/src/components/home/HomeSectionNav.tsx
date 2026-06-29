import { useEffect, useState } from "react";

const homeSections = [
  { id: "hero", label: "CULTURE KEEPER" },
  { id: "problem", label: "문제 정의" },
  { id: "solution", label: "해결 구조" },
  { id: "circulation", label: "순환 모델" },
  { id: "pilot", label: "시범 운영" }
];

export function HomeSectionNav() {
  const [activeSection, setActiveSection] = useState(homeSections[0].id);

  useEffect(() => {
    const sectionElements = homeSections
      .map((section) => document.getElementById(section.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sectionElements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-32% 0px -52% 0px",
        threshold: [0.15, 0.35, 0.6]
      }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleSectionClick = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    setActiveSection(sectionId);
    targetSection?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start"
    });
  };

  return (
    <nav className="home-section-nav" aria-label="홈 섹션 내비게이션">
      {homeSections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <button
            aria-current={isActive ? "true" : undefined}
            className={isActive ? "home-section-nav-item is-active" : "home-section-nav-item"}
            key={section.id}
            onClick={() => handleSectionClick(section.id)}
            type="button"
          >
            {section.label}
          </button>
        );
      })}
    </nav>
  );
}
