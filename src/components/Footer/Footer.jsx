import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Add this import

function Footer() {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-dark border-t border-dark-secondary py-8" ref={ref}> {/* Increased py for white space */}
      <div className="container-custom px-6 md:px-12 lg:px-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "#hero")}
            className="text-2xl font-bold tracking-tight hover:text-red transition-colors duration-300"
          >
            <span className="text-red-dark hover:text-red-hover transition-colors">
              {"[<ondwani"}
            </span>
          </motion.a>

          {/* Mini Nav (Sitemap-lite) */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 text-sm text-gray-light">
            <a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")} className="hover:text-red transition-colors">About</a>
            <a href="#projects" onClick={(e) => handleSmoothScroll(e, "#projects")} className="hover:text-red transition-colors">Projects</a>
            <a href="#skills" onClick={(e) => handleSmoothScroll(e, "#skills")} className="hover:text-red transition-colors">Skills</a>
            <a href="#beyond" onClick={(e) => handleSmoothScroll(e, "#beyond")} className="hover:text-red transition-colors">Beyond Code</a>
          </motion.div>

          {/* Social Links with Icons */}
          <motion.div variants={itemVariants} className="flex items-center gap-6">
            <motion.a
              whileHover={{ y: -3, color: "#ff0000" }} // Red hover
              href="https://github.com/kondwanimuwowo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-light transition-colors"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, color: "#ff0000" }}
              href="https://linkedin.com/in/kondwanimuwowo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-light transition-colors"
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, color: "#ff0000" }}
              href="https://x.com/kondwanimuwow0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="text-gray-light transition-colors"
            >
              <FaTwitter size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Copyright & CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-6 border-t border-dark-secondary pt-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <p className="text-gray-light text-sm flex-1">
            © {currentYear} Kondwani Muwowo. Built with <span className="text-light">React</span> & <span className="text-light">Tailwind CSS</span>
          </p>
          <a
            href="mailto:kondwanimuwowo@gmail.com"
            className="px-6 py-2 bg-red hover:bg-red-hover text-white font-medium rounded-full transition-all duration-300 text-sm"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Back to Top */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-6"
        >
          <a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "#hero")}
            className="inline-flex items-center gap-2 text-gray-light hover:text-light transition-colors text-xs"
            aria-label="Back to top"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to top
          </a>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;