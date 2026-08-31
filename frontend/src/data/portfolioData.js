const portfolioData = {
  name: "Nagaranjan R",
  role: "Data Engineer",
  description:
    "Analyze complex data using data engineering, big data analytics, statistical analysis, SQL, Python, and visualization to find insights and support data-driven decisions.",
  profileImage: "/Profile/Profile.jpeg",
  resumeUrl: "/Resume/Resume.pdf",
  socials: {
    linkedin: "https://linkedin.com/in/Nagaranjan-r",
    github: "https://github.com/nagaranjan-r-de",
    leetcode: "https://leetcode.com/nagaranjan-r-de",
  },
  projects: [
    {
      id: "p1",
      name: "wildlife movement analysis and conservation monitoring system.",
      description: "Using demo data, predicts behavior, detects anomalies, and provides conservation risk insights through an interactive dashboard.",
      image: "/projects/project1.jpeg",
      demoUrl: "https://wild-movement-analysis.netlify.app",
      repoUrl: "https://github.com/nagaranjan-r-de/wildlife-movement-analysis/tree/main",
    },
    {
      id: "p2",
      name: "personal-money-manager",
      description: "It helps my finances by setting daily and monthly spending limits and monitoring the expenses.",
      image: "/projects/project2.jpeg",
      demoUrl: "person use only",
      repoUrl: "https://github.com/nagaranjan-r-de/personal-money-management",
    },
  ],
  certificates: [
    { id: "c1", name: "AWS Cloud Certification", url: "/certificates/AWS Cloud Certification.pdf" },
    { id: "c2", name: "MERN Stack Certification", url: "/certificates/MERN Stack.pdf" },
  ],
  skills: ["Python", "SQL", "AWS"],
  education: {
    degree: "B.E computer science and engineering",
    institution: "RVS College of Engineering and Technology",
  },
  footerText: "© 2026 Nagaranjan R. All rights reserved.",
};

export default portfolioData;
