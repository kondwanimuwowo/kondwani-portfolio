import "./Portfolio.css";
import Bio from "./components/Bio/Bio.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact.jsx";

function Portfolio() {
  return (
    <>
      <Bio />
      <Skills />
      <Projects />
      <br />
      <Contact />
    </>
  );
}

export default Portfolio;
