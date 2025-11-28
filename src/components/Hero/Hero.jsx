function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center section-padding pt-32 bg-light"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-10">
            <p className="text-red text-sm md:text-base font-normal tracking-wide uppercase my-8">
              Welcome to my digital home!
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-dark">
              Hi, <span className="text-red">I'm Kondwani.</span>
              <br />
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-dark leading-snug">
              A <span className="text-dark leading-relaxed">Front-End Developer</span> & UI
              Designer crafting engaging web experiences.
            </h2>

            <p className="text-gray text-lg md:text-xl leading-relaxed max-w-2xl">
              I'm passionate about building clean, thoughtful and smooth digital experiences. Beyond tech, I’m committed to the fight against human trafficking and create meaningful impact in Zambia and the world at large.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-red hover:bg-red-hover text-white font-medium rounded-full transition-all duration-300"
              >
                View My Work
              </a>
              
              <a
                href="#contact"
                className="px-8 py-3 bg-red hover:bg-red-hover text-white font-medium rounded-full transition-all duration-300"
              >
                Get In Touch
              </a>

              <a
                href="/kondwani-resume.pdf"
                download="Kondwani_Muwowo_Resume.pdf"
                className="px-8 py-3 bg-dark hover:bg-dark-secondary text-white font-medium rounded-full transition-all duration-300 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </a>
            </div>
            <div className="flex gap-6 pt-6">
              <a
                href="https://github.com/kondwanimuwowo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray hover:text-red transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/kondwanimuwowo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray hover:text-red transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://x.com/kondwanimuwow0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray hover:text-red transition-colors duration-300"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-evenly">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-dark to-red rounded-full blur-2xl opacity-0"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-red overflow-hidden bg-red flex items-center justify-center">
                <img
                  src="/kondwani.png"
                  alt="Kondwani Muwowo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden flex-col items-center justify-center text-center p-8">
                  <span className="text-6xl font-bold gradient-text">
                    Kondwani
                  </span>
                  <p className="text-gray mt-2 text-sm">Avatar.jpg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
