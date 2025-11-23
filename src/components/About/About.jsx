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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              From <span className="text-red">Chingola</span> to{" "}
              <span className="gradient-text">Code</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red to-red-hover mx-auto"></div>
          </div>

          <div className="space-y-6 text-gray text-lg leading-relaxed">
            <p>
              I'm{" "}
              <span className="text-dark font-semibold">Kondwani Muwowo</span>,
              a front-end developer from Chingola who loves building clean,
              thoughtful digital experiences. I started in WordPress, fell in
              love with code in 2024, and I've been leveling up ever since.
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
                  Before tech, I spent five years in ministry leadership. That
                  season sharpened the way I think, work, and communicate. Today
                  I carry that same heart into tech and humanitarian work.
                </p>

                <p>
                  I currently serve as a{" "}
                  <span className="text-red font-medium">Transit Monitor</span>{" "}
                  with Love Justice International, helping protect people from
                  human trafficking. Along the way, I build websites, train
                  young people, and stay committed to personal growth.
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
              <div className="text-3xl font-bold text-dark mb-2">5+</div>
              <div className="text-sm text-gray">Websites Built</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
