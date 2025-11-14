import "./Skills.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiJest,
  SiVitest,
  SiGit,
  SiNodedotjs,
  SiPostgresql,
  SiExpress,
  SiPrisma,
  SiWordpress,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Jest", icon: <SiJest /> },
    { name: "Vitest", icon: <SiVitest /> },
    { name: "Git", icon: <SiGit /> },
    { name: "WordPress", icon: <SiWordpress /> },
  ];

  const learning = [
    { name: "NodeJS", icon: <SiNodedotjs /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Prisma", icon: <SiPrisma /> },
  ];

  return (
    <section className="skills-section">
      <div>
        <h3>Technical Skills</h3>
        <div className="skills-container">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <span className="skill-icon">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>Learning</h3>
        <div className="skills-container">
          {learning.map((learn) => (
            <div key={learn.name} className="skill-item">
              <span className="skill-icon">{learn.icon}</span>
              {learn.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
