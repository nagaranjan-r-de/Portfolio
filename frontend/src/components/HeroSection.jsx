import { Eye } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import portfolioData from "../data/portfolioData";

export default function HeroSection() {
  const { name, role, description, profileImage, resumeUrl, socials } = portfolioData;
  const handleResumeClick = (e) => {
  e.preventDefault();
  const googleDocsUrl = "https://docs.google.com/document/d/1stgbEIFOXyouzpNoxLgXI49ot60VwMa9rQo5kHlUNhA/edit?usp=drivesdk";

  // Check if primary URL works, fallback if it fails
  fetch(resumeUrl, { method: 'HEAD', mode: 'no-cors' })
    .then(() => window.open(resumeUrl, '_blank'))
    .catch(() => window.open(googleDocsUrl, '_blank'));
};
  
  return (
    <div className="col-left">
      <div className="hero-top">
        <div className="avatar">
          <img
            src={profileImage}
            alt={name}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        <div className="hero-text">
          <p className="hi">Hi,</p>
          <h1>I'M {name.toUpperCase()}</h1>
          <p className="role">{role.toUpperCase()}</p>
        </div>
      </div>

      <div className="description-card">{description}</div>

      <div className="actions">
        <a
  className="resume-btn"
  href={rsumeUrl}
  onClick={handleResumeClick}
  aria-label="View resume"
>
  <Eye size={16} /> View resume
</a>
        <div className="social-icons">
          <a
            className="icon-circle linkedin"
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="icon-circle"
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>
          <a
            className="icon-circle"
            href={socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode profile"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>
      
      <hr className="mobile-hr" />
    </div>
  );
}
