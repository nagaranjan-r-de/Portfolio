import portfolioData from "../data/portfolioData";

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section aria-label="Education">
      <h2 className="section-title">Education</h2>
      <div className="education-card">
        <h3>{education.degree}</h3>
        <p>@ {education.institution}</p>
      </div>
    </section>
  );
}
