import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Stagger for tags and buttons
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="section-padding bg-light-secondary" ref={ref}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Let's Build Something
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-20 h-1 bg-gradient-to-r from-red to-red-hover mx-auto mb-6 origin-left"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-gray text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Got a project in mind, feel like collaborating, or working on
            something exciting? I’m always open to new opportunities and would
            love to hear from you!
          </motion.p>

          {/* Open To Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-light border-2 border-border-light rounded-xl p-4 md:p-8 mb-12 max-w-2xl mx-auto"
          >
            <p className="text-gray mb-8">Currently Open To:</p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-wrap gap-2 md:gap-3 justify-center"
            >
              <motion.span variants={itemVariants} className="text-sm bg-red/10 text-gray px-4 py-2 rounded-full">
                Freelance Projects
              </motion.span>
              <motion.span variants={itemVariants} className="text-sm bg-red/10 text-gray px-4 py-2 rounded-full">
                Freelance Projects
              </motion.span>
              <motion.span variants={itemVariants} className="text-sm bg-red/10 text-gray px-4 py-2 rounded-full">
                Remote Opportunities
              </motion.span>
              <motion.span variants={itemVariants} className="text-sm bg-red/10 text-gray px-4 py-2 rounded-full">
                Front-End Roles
              </motion.span>
              <motion.span variants={itemVariants} className="text-sm bg-dark/10 text-gray px-4 py-2 rounded-full">
                Purpose-Driven Companies
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Email CTA Buttons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              href="mailto:kondwanimuwowo@gmail.com"
              className="inline-flex items-center gap-3 px-6 md:px-8 py-3 bg-red hover:bg-red-hover text-white font-semibold rounded-full transition-all duration-300 text-sm shadow-sm md:text-lg shadow-red/20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </motion.a>

            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              href="/kondwani-resume.pdf"
              download="Kondwani_Muwowo_Resume.pdf"
              className="inline-flex items-center gap-3 px-8 py-3 bg-dark border-1 border-dark hover:bg-dark-secondary text-white font-semibold rounded-full transition-all duration-300 text-sm md:text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 pt-12 border-t border-border-light"
          >
            <p className="text-gray text-sm mb-6">Or find me on</p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex justify-center gap-6"
            >
              <motion.a variants={itemVariants} whileHover={{ scale: 1.05 }} href="https://github.com/kondwanimuwowo" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-light border border-border-light hover:border-red rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-gray group-hover:text-red transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs text-gray group-hover:text-red transition-colors">GitHub</span>
              </motion.a>

              <motion.a variants={itemVariants} whileHover={{ scale: 1.05 }} href="https://linkedin.com/in/kondwanimuwowo" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-light border border-border-light hover:border-red rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-gray group-hover:text-red transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="text-xs text-gray group-hover:text-red transition-colors">LinkedIn</span>
              </motion.a>

              <motion.a variants={itemVariants} whileHover={{ scale: 1.05 }} href="https://x.com/kondwanimuwow0" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-light border border-border-light hover:border-red rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-gray group-hover:text-red transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <span className="text-xs text-gray group-hover:text-red transition-colors">X / Twitter</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;