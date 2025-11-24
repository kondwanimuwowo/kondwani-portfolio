function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-dark-secondary py-8">
      <div className="container-custom px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            <a
              href="#hero"
              className="text-2xl font-bold tracking-tight hover:text-red transition-colors duration-300"
            >
              <span className="text-red-dark hover:text-red-hover transition-colors">
                {"[<ondwani"}
              </span>
            </a>
          </p>
          {/* Copyright */}
          <p className="text-gray-light text-sm text-center">
            © {currentYear} Kondwani Muwowo. Built with{" "}
            <span className="text-red">React</span> &{" "}
            <span className="text-light">Tailwind CSS</span>
          </p>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/kondwanimuwowo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-light hover:text-red transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kondwanimuwowo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-light hover:text-red transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/kondwanimuwow0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-light hover:text-red transition-colors text-sm"
            >
              X / Twitter
            </a>
          </div>
        </div>

        {/* Optional: Back to top button */}
        <div className="text-center mt-6">
          <a
            href="#hero"
            className="inline-flex items-center gap-2 text-gray-light hover:text-light transition-colors text-xs"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
