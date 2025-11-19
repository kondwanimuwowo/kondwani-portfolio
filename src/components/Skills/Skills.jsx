import { skills, techStack } from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="section-padding bg-dark-lighter">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            Tools and technologies I use to build
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-dark border border-indigo/20 hover:border-indigo hover:bg-indigo/10 rounded-full text-lightgray font-medium transition-all duration-300 hover:scale-105 cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Detailed Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Frontend Skills */}
          <div className="bg-dark border border-dark rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-indigo"
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
              <h3 className="text-xl font-bold">Frontend</h3>
            </div>
            <ul className="space-y-3">
              {skills.frontend.map((skill, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span className="text-gray">{skill.name}</span>
                  <span className="text-xs text-indigo bg-indigo/10 px-2 py-1 rounded">
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Backend Skills */}
          <div className="bg-dark border border-dark rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-emerald"
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
              <h3 className="text-xl font-bold">Backend</h3>
            </div>
            <ul className="space-y-3">
              {skills.backend.map((skill, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span className="text-gray">{skill.name}</span>
                  <span className="text-xs text-emerald bg-emerald/10 px-2 py-1 rounded">
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-dark border border-dark rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-indigo"
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
              <h3 className="text-xl font-bold">Tools</h3>
            </div>
            <ul className="space-y-3">
              {skills.tools.map((skill, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span className="text-gray">{skill.name}</span>
                  <span className="text-xs text-indigo bg-indigo/10 px-2 py-1 rounded">
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
