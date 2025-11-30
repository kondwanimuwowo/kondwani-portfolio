import { skills, techStack } from "../../data/skills";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiPostgresql, SiTailwindcss, SiWordpress, SiGit, SiFigma, SiAdobe } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const iconMap = { html5: SiHtml5, css3: SiCss3, javascript: SiJavascript, react: SiReact, nodejs: SiNodedotjs, postgresql: SiPostgresql, tailwind: SiTailwindcss, wordpress: SiWordpress, git: SiGit, figma: SiFigma, adobe: SiAdobe, vscode: VscCode };

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Map skill category keys to icons
  const categoryIconMap = {
    frontend: VscCode,
    backend: SiNodedotjs,
    design: SiFigma,
    tools: SiGit,
  };

  return (
    <section id="skills" className="section-padding bg-light-secondary" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">Tech Stack</h2>
          <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="w-20 h-1 bg-gradient-to-r from-red to-red-hover mx-auto mb-6 origin-left" />
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.6 }} className="text-gray text-lg max-w-2xl mx-auto">
            Tools and technologies I use to build & design
          </motion.p>
        </motion.div>

        {/* Tech Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {techStack.map((tech, i) => {
            const Icon = iconMap[tech.icon];
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -4 }}
                className="flex items-center gap-2 text-gray px-5 py-3 bg-light border border-border-light hover:border-red hover:bg-red/5 rounded-full font-medium transition-all duration-300 cursor-default"
              >
                {Icon && <Icon className="w-6 h-6" />}
                <span>{tech.name}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {Object.entries(skills).map(([category, list]) => (
            <motion.div
              key={category}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
              className="bg-light border border-border-light rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red/10 rounded-lg flex items-center justify-center">
                  {(() => {
                    const Icon = categoryIconMap[category];
                    return Icon ? <Icon className="w-6 h-6 text-red" aria-hidden="true" title={category} /> : <div className="w-6 h-6 bg-red/20 rounded" />;
                  })()}
                </div>
                <h3 className="text-lg font-bold text-dark capitalize">{category}</h3>
              </div>
              <ul className="space-y-3">
                {list.map((skill, i) => (
                  <li key={i} className="flex items-center justify-between text-sm">
                    <span className="text-gray">{skill.name}</span>
                    <span className="text-xs text-dark bg-dark/10 px-2 py-1 rounded">{skill.level}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;