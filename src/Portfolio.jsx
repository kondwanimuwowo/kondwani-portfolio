import "./Portfolio.css";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import profileImage from "./assets/images/kondwani.png";

function Portfolio() {
  const name = "kondwani muwowo";
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Jest",
    "Vitest",
    "Git",
  ];
  const learning = ["NodeJS", "PostgreSQL", "Express", "ORMs"];

  return (
    <>
      <Bio name={name} imgLink={profileImage} />
      <Skills skills={skills} learning={learning} />
      <p className="text-gray-400 text-sm text-center">
        Get back here soon to find new features as I add more to this portfolio.
      </p>
    </>
  );
}

export default Portfolio;
