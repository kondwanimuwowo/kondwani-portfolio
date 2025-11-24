import { skills, techStack } from "../../data/skills";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiWordpress,
  SiGit,
  SiFigma,
  SiAdobe,
} from "react-icons/si";

// Icon mapping
const iconMap = {
  html5: SiHtml5,
  css3: SiCss3,
  javascript: SiJavascript,
  react: SiReact,
  nodejs: SiNodedotjs,
  postgresql: SiPostgresql,
  tailwind: SiTailwindcss,
  wordpress: SiWordpress,
  git: SiGit,
  figma: SiFigma,
  adobe: SiAdobe,
};

function Skills() {
  return (
    <section id="skills" className="section-padding bg-light-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            Tools and technologies I use to build & design
          </p>
        </div>

        {/* Tech Stack Pills with Icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {techStack.map((tech, index) => {
            const IconComponent = iconMap[tech.icon];
            return (
              <div
                key={index}
                className="flex items-center gap-2 px-5 py-3 bg-light border border-red/20 hover:border-red hover:bg-red/5 rounded-full text-dark font-medium transition-all duration-300 hover:scale-105 cursor-default"
              >
                {IconComponent && (
                  <IconComponent className="w-5 h-5 text-red" />
                )}
                <span>{tech.name}</span>
              </div>
            );
          })}
        </div>

        {/* Detailed Skills Grid - Now 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Frontend Skills */}
          <div className="bg-light border border-border-light rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark">Frontend</h3>
            </div>
            <ul className="space-y-3">
              {skills.frontend.map((skill, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span className="text-gray text-sm">{skill.name}</span>
                  <span className="text-xs text-dark bg-dark/10 px-2 py-1 rounded">
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Backend Skills */}
          <div className="bg-light border border-border-light rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark">Backend</h3>
            </div>
            <ul className="space-y-3">
              {skills.backend.map((skill, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span className="text-gray text-sm">{skill.name}</span>
                  <span className="text-xs text-dark bg-dark/10 px-2 py-1 rounded">
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Design Skills - NEW */}
          <div className="bg-light border border-border-light rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark">Design</h3>
            </div>
            <ul className="space-y-3">
              {skills.design.map((skill, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span className="text-gray text-sm">{skill.name}</span>
                  <span className="text-xs text-dark bg-dark/10 px-2 py-1 rounded">
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-light border border-border-light rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark">Tools</h3>
            </div>
            <ul className="space-y-3">
              {skills.tools.map((skill, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span className="text-gray text-sm">{skill.name}</span>
                  <span className="text-xs text-dark bg-dark/10 px-2 py-1 rounded">
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
