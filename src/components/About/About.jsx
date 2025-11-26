import { useState, useRef, useEffect } from "react";

function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isExpanded]);

  return (
    <section id="about" className="section-padding bg-light-secondary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red to-red-hover mx-auto"></div>
          </div>

          <div className="space-y-6 text-gray text-lg leading-relaxed">
            <p>
              I'm{" "}
              <span className="text-dark font-semibold">Kondwani Muwowo</span>,
              A self-taught front-end developer with a love for building clean,
              intentional digital experiences. I started out creating websites
              with WordPress, discovered coding in 2024, and instantly fell in
              love. Since then I’ve been pushing myself—learning modern tools
              like React, Node.js, and Tailwind as I expand into back-end
              technology and consistently grow in both skill and creativity.
            </p>

            {!isExpanded && (
              <button
                onClick={() => setIsExpanded(true)}
                className="flex items-center gap-2 text-red hover:text-red-hover transition-colors font-medium group"
              >
                Read more
                <svg
                  className="w-4 h-4 group-hover:translate-y-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            )}

            <div
              style={{
                height,
                overflow: "hidden",
                transition: "height 0.4s ease",
              }}
            >
              <div ref={contentRef} className="space-y-6 pt-2">
                <p>
                  I’ve always loved serving people, but my four years in
                  ministry leadership shaped the way I think, communicate, and
                  work with people. That season taught me depth, discipline, and
                  compassion. I carry that same heart today in both my
                  development journey and my humanitarian work.
                </p>

                <p>
                  I also fight human trafficking with Talitha Kum Zambia{" "}
                  {"(TAKUZA)"} under the Love Justice International Project in
                  Zambia, where I help intercept potential victims before they
                  are exploited. It’s work that reminds me every day why impact
                  matters. GAN is a nonprofit supporting vulnerable girls with
                  education and practical skills.
                </p>

                <p>
                  Besides that, I volunteer with The Great Achievers Network,
                  where I maintain their website and handle their graphic design
                  work to help strengthen their digital presence.
                </p>

                <p className="text-dark font-medium">
                  My journey blends faith, technology, and impact — and I'm just
                  getting started.
                </p>

                <button
                  onClick={() => setIsExpanded(false)}
                  className="flex items-center gap-2 text-gray hover:text-dark transition-colors text-sm font-medium group pt-2"
                >
                  Show less
                  <svg
                    className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 mt-8 border-t border-border-light">
            <div className="text-center">
              <div className="text-3xl font-bold text-red mb-2">5+</div>
              <div className="text-sm text-gray">Clients Served</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-dark mb-2">10+</div>
              <div className="text-sm text-gray">Technologies Used</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-red mb-2">12+</div>
              <div className="text-sm text-gray">Months Coding</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-dark mb-2">100%</div>
              <div className="text-sm text-gray">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
