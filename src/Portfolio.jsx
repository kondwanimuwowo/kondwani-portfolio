import "./Portfolio.css";
import Bio from "./components/Bio/Bio.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";

function Portfolio() {
  return (
    <>
      <Bio />
      <Skills />
      <Projects />
      <p className="coming-soon">
        Get back here soon to find new features as I add more to this portfolio
      </p>
    </>
  );
}

export default Portfolio;
