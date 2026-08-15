import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import portfolioData from "../data/portfolioData";

export default function ProjectsSection() {
  const trackRef = useRef(null);
  const [atEnd, setAtEnd] = useState(false);
  const { projects } = portfolioData;

  const updateArrowState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setAtEnd(el.scrollLeft >= maxScroll - 4);
  }, []);

  useEffect(() => {
    updateArrowState();
    window.addEventListener("resize", updateArrowState);
    return () => window.removeEventListener("resize", updateArrowState);
  }, [updateArrowState]);

  const handleNext = () => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".project-card");
    const cardWidth = card ? card.offsetWidth : 260;
    const gap = 18;
    const maxScroll = el.scrollWidth - el.clientWidth;

    if (el.scrollLeft >= maxScroll - 4) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: cardWidth * 2 + gap * 2, behavior: "smooth" });
    }
  };

  if (!projects || projects.length === 0) return null;

  return (
    <section className="projects-section" aria-label="Projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-row-wrap">
        <div
          className="projects-track"
          ref={trackRef}
          tabIndex={0}
          onScroll={updateArrowState}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {projects.length > 1 && (
          <button
            className="carousel-arrow"
            onClick={handleNext}
            disabled={atEnd && projects.length <= 2}
            aria-label="Next projects"
          >
            <ChevronRight size={16} />
          </button>
        )}
      </div>
    </section>
  );
}
