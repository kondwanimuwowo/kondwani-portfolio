import { useState } from "react";

function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="section-padding bg-light-secondary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              From <span className="text-red">Chingola</span> to{" "}
              <span className="gradient-text">Code</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red to-red-hover mx-auto"></div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6 text-gray text-lg leading-relaxed">
            <p>
              I'm{" "}
              <span className="text-dark font-semibold">Kondwani Muwowo</span>,
              born in Chingola on the Copperbelt. My path has never been a
              straight line, but every step has carried the same purpose—serve,
              build, and lift people up.
            </p>

            {/* Read More Toggle */}
            {!isExpanded && (
              <button
                onClick={() => setIsExpanded(true)}
                className="flex items-center gap-2 text-red hover:text-red-hover transition-colors font-medium group"
              >
                Read my full story
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

            {/* Expandable Content */}
            {isExpanded && (
              <>
                <p>
                  For five years, I served as a{" "}
                  <span className="text-red font-medium">
                    Lead Pastor (Branch Pastor)
                  </span>
                  , under{" "}
                  <span className="text-dark font-medium">
                    The Living Epistles Church
                  </span>{" "}
                  where my leadership and communication skills developed.
                  Ministry shaped the way I see the world, and it's still at the
                  center of everything I do—it just looks a little different
                  now.
                </p>

                <p>
                  My tech journey began with WordPress sites. Then in{" "}
                  <span className="text-red font-medium">mid-2024</span> I
                  discovered programming. Since then, I've been learning the
                  craft as a front-end developer and steadily growing toward
                  full-stack development with Node.js and backend tools.
                </p>

                <p>
                  Today, I serve as a{" "}
                  <span className="text-red font-medium">
                    Transit Monitor with TAKUZA
                  </span>{" "}
                  under Love Justice International. It's ministry in
                  motion—protecting the potential victims of trafficking before
                  they are trafficked. Working at 2 stations in Zambia has given
                  me an opportunity to be part of over 500 human trafficking
                  interceptions and helping children under child labour get back
                  into school.
                </p>

                <p>
                  I also volunteer with{" "}
                  <span className="text-red font-medium">
                    The Great Achievers Network
                  </span>
                  , where I built their website and support their digital
                  presence as they empower young girls through education and
                  practical skills.
                </p>

                <p>
                  Beyond humanitarian work, I run{" "}
                  <span className="text-dark font-medium">
                    Smile FX Traders
                  </span>
                  , training forex traders across Zambia. And when I'm not
                  coding or mentoring, you'll probably find me in the gym or
                  thinking three moves ahead on a chessboard.
                </p>

                <p className="text-dark font-medium pt-4">
                  My life is a blend of faith, technology, and service—and I'm
                  building a future where all three work together to create real
                  impact.
                </p>

                {/* Show Less Button */}
                <button
                  onClick={() => setIsExpanded(false)}
                  className="flex items-center gap-2 text-gray hover:text-dark transition-colors text-sm font-medium group"
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
              </>
            )}
          </div>

          {/* Quick Stats - Code Focused */}
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
