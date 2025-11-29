import { projects } from "../../data/projects";
import { generateProjectStructuredData } from "../../utils/seo";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Projects() {
  const structuredData = generateProjectStructuredData(projects);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Stagger container for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Individual card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="section-padding bg-light" ref={ref}>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
            Selected Work
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-20 h-1 bg-gradient-to-r from-red to-red-hover mx-auto mb-6 origin-left"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-gray text-lg max-w-2xl mx-auto"
          >
            Projects that solve real problems
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-light-secondary border border-border-light hover:border-red/50 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-red/10"
            >
              {/* Project Image */}
              {project.image ? (
                <div className="relative overflow-hidden bg-light">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover object-top"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    onError={(e) => {
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-64 flex items-center justify-center bg-gradient-to-br from-red/10 to-dark/5">
                          <span class="text-6xl font-bold text-red/20">${project.title.charAt(
                            0
                          )}</span>
                        </div>
                      `;
                    }}
                  />
                  {/* Subtle overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent"
                  />
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center bg-gradient-to-br from-red/5 to-dark/5">
                  <div className="text-center">
                    <span className="text-6xl font-bold text-red/20">
                      {project.title.charAt(0)}
                    </span>
                    {project.status && (
                      <p className="text-xs text-gray mt-4">{project.status}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Project Card Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-red bg-red/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  {project.status && (
                    <span className="text-xs font-medium text-dark bg-dark/10 px-3 py-1 rounded-full animate-pulse">
                      {project.status}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2 text-dark group-hover:text-red transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray text-sm mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="text-xs text-gray bg-light px-2 py-1 rounded border border-border-light"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-6 pt-4 border-t border-border-light">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-red hover:text-red-hover transition-colors text-sm font-medium"
                      whileHover={{ x: 4 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray hover:text-dark transition-colors text-sm font-medium"
                      whileHover={{ x: 4 }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.
2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;