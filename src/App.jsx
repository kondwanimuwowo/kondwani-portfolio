import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import BeyondCode from "./components/BeyondCode/BeyondCode";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-light text-dark">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
