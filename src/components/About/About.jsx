function About() {
  return (
    <section id="about" className="section-padding bg-dark-lighter">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From <span className="text-emerald">Chingola</span> to{" "}
              <span className="text-indigo">Code</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo to-emerald mx-auto"></div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6 text-gray text-lg leading-relaxed">
            <p>
              I'm{" "}
              <span className="text-lightgray font-semibold">
                Kondwani Muwowo
              </span>
              , born in Chingola on the Copperbelt. My path has never been a
              straight line, but every step has carried the same purpose—serve,
              build, and lift people up.
            </p>

            <p>
              For five years, I served as a{" "}
              <span className="text-emerald font-medium">
                Lead Pastor (Branch Pastor)
              </span>
              , under the{" "}
              <span className="text-indigo font-medium">
                The Living Epistles Cchurch
              </span>{" "}
              where my leadership and communication skills developed. Ministry
              shaped the way I see the world, and it’s still at the center of
              everything I do—it just looks a little different now.
            </p>

            <p>
              My tech journey began with WordPress sites. Then in{" "}
              <span className="text-indigo font-medium">mid-2024</span> I
              discovered programming. Since then, I’ve been learning the craft
              as a front-end developer and steadily growing toward full-stack
              development with Node.js and backend tools.
            </p>

            <p>
              Today, I serve as a{" "}
              <span className="text-emerald font-medium">
                Transit Monitor with TAKUZA
              </span>{" "}
              under Love Justice International. It’s ministry in
              motion—protecting the potential victims of trafficking before they
              are trafficked. Working at 2 stations in zambia has given me an
              opportunity to be part of over 500 human trafficking interceptions
              and helping children under child labour get back into school.
            </p>

            <p>
              I also volunteer with{" "}
              <span className="text-emerald font-medium">
                The Great Achievers Network
              </span>
              , where I built their website and support their digital presence
              as they empower young girls through education and practical
              skills.
            </p>

            <p>
              Beyond humanitarian work, I run{" "}
              <span className="text-indigo font-medium">Smile FX Traders</span>,
              training forex traders across Zambia. And when I’m not coding or
              mentoring, you’ll probably find me in the gym or thinking three
              moves ahead on a chessboard.
            </p>

            <p className="text-lightgray font-medium pt-4">
              My life is a blend of faith, technology, and service—and I’m
              building a future where all three work together to create real
              impact.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 mt-8 border-t border-dark">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo mb-2">5yrs</div>
                <div className="text-sm text-gray">Leadership Experience</div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-emerald mb-2">50+</div>
                <div className="text-sm text-gray">
                  Children Sponsored through LJI
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-indigo mb-2">2</div>
                <div className="text-sm text-gray">Monitoring Stations</div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-emerald mb-2">2024</div>
                <div className="text-sm text-gray">Started Coding</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
