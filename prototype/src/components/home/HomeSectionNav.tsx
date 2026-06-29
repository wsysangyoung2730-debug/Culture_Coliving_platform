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

    let animationFrame = 0;

    const updateActiveSection = () => {
      const referenceLine = window.innerHeight * 0.42;
      const currentSection =
        sectionElements
          .map((section) => ({
            id: section.id,
            top: section.getBoundingClientRect().top
          }))
          .filter((section) => section.top <= referenceLine)
          .sort((a, b) => b.top - a.top)[0] ?? sectionElements[0];

      setActiveSection(currentSection.id);
    };

    const requestActiveUpdate = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    const observer = new IntersectionObserver(
      () => requestActiveUpdate(),
      {
        rootMargin: "-18% 0px -58% 0px",
        threshold: [0, 0.2, 0.45]
      }
    );

    sectionElements.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", requestActiveUpdate, { passive: true });
    requestActiveUpdate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestActiveUpdate);
      observer.disconnect();
    };
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
