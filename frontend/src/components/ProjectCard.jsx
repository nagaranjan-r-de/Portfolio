import { ExternalLink, Image as ImageIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-thumb">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement.dataset.fallback = "true";
            }}
          />
        ) : (
          <>
            <ImageIcon size={20} />
            <span>Project Image</span>
          </>
        )}
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>Landing soon</p>
      <div className="project-links">
        <a className="demo" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
          Live demo <ExternalLink size={11} />
        </a>
        <a className="repo" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub /> git repo
        </a>
      </div>
    </div>
  );
}
