import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Beyond Code", href: "#beyond" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-light/95 backdrop-blur-sm border-b border-border-light">
      <nav className="container-custom px-6 py-4 md:px-12 lg:px-24">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="text-2xl font-bold tracking-tight hover:text-red transition-colors duration-300"
          >
            <span className="text-red">{"[<ondwani"}</span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray hover:text-dark transition-colors duration-300 text-sm font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-dark p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-dark transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-dark transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-dark transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <ul className="md:hidden mt-4 pt-4 border-t border-border-light flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray hover:text-dark transition-colors duration-300 text-base font-medium block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
