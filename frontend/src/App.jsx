import { useEffect, useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificatesSection from "./components/CertificatesSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";

const STORAGE_KEY = "portfolio-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div className="wrap">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      <div className="layout">
        <HeroSection />

        <div className="col-divider" aria-hidden="true" />

        <div className="col-right">
          <ProjectsSection />

          <div className="mid-grid">
            <CertificatesSection />
            <SkillsSection />
          </div>

          <EducationSection />
        </div>
      </div>

      <Footer />
    </div>
  );
}
