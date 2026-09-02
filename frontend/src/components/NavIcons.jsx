import { useState } from "react";
import { Code2, FolderKanban, Award, GraduationCap } from "lucide-react";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import CertificatesSection from "./CertificatesSection";
import EducationSection from "./EducationSection";

const tabs = [
  {
    id: "skills",
    label: "Skills",
    icon: Code2,
    component: <SkillsSection />,
  },
  {
    id: "projects",
    label: "Projects",
    icon: FolderKanban,
    component: <ProjectsSection />,
  },
  {
    id: "certificates",
    label: "Certificates",
    icon: Award,
    component: <CertificatesSection />,
  },
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
    component: <EducationSection />,
  },
];

export default function NavIcons() {
  const [activeTab, setActiveTab] = useState("skills");
  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

  return (
    <div className="navicons-wrap">
      <div className="navicons-tablist" role="tablist" aria-label="Portfolio sections">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`navicons-tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`navicons-panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              className={`navicons-tab-btn${isActive ? " is-active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={17} className="navicons-tab-icon" aria-hidden="true" />
              <span className="navicons-tab-label">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="navicons-panel-container">
        {tabs.map((tab, index) => {
          if (tab.id !== activeTab) return null;

          return (
            <div
              key={tab.id}
              role="tabpanel"
              id={`navicons-panel-${tab.id}`}
              aria-labelledby={`navicons-tab-${tab.id}`}
              className="navicons-panel-content"
              data-direction={index >= activeIndex ? "forward" : "back"}
            >
              {tab.component}
            </div>
          );
        })}
      </div>
    </div>
  );
}