import portfolioData from "../data/portfolioData";

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <div>
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <span className="skill-chip" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
