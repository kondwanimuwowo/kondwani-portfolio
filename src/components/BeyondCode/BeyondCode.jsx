import { beyondCode } from "../../data/beyondCode";

function BeyondCode() {
  return (
    <section id="beyond" className="section-padding bg-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
            Beyond the Code
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red to-red-hover mx-auto mb-6"></div>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            My purpose-driven work outside development
          </p>
        </div>

        {/* Cards Grid - More Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {/* TAKUZA Card */}
          <div className="bg-light-secondary border border-border-light hover:border-red/30 rounded-xl p-6 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              {/* TAKUZA Logo */}
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-light flex items-center justify-center flex-shrink-0 border border-border-light">
                <img
                  src={beyondCode.takuza.logo}
                  alt="TAKUZA Logo"
                  className="w-14 h-14 object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark">
                  {beyondCode.takuza.title}
                </h3>
                <p className="text-red text-sm font-medium">
                  {beyondCode.takuza.subtitle}
                </p>
              </div>
            </div>

            <p className="text-gray text-sm mb-4 leading-relaxed">
              {beyondCode.takuza.description}
            </p>

            <p className="text-gray text-sm leading-relaxed mb-4">
              {beyondCode.takuza.details}
            </p>

            {/* Love Justice Partner */}
            <div className="flex items-center gap-3 pt-4 border-t border-border-light">
              <img
                src={beyondCode.takuza.partnerLogo}
                alt="Love Justice International"
                className="h-6 object-contain opacity-70"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <span className="text-xs text-gray">
                The {beyondCode.takuza.partnerName} Project
              </span>
            </div>
          </div>

          {/* Smile FX Card */}
          <div className="bg-light-secondary border border-border-light hover:border-red/30 rounded-xl p-6 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              {/* Smile FX Logo */}
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-light flex items-center justify-center flex-shrink-0 border border-border-light">
                <img
                  src={beyondCode.smileFx.logo}
                  alt="Smile FX Traders Logo"
                  className="w-14 h-14 object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark">
                  {beyondCode.smileFx.title}
                </h3>
                <p className="text-red text-sm font-medium">
                  {beyondCode.smileFx.subtitle}
                </p>
              </div>
            </div>

            <p className="text-gray text-sm mb-4 leading-relaxed">
              {beyondCode.smileFx.description}
            </p>

            <p className="text-gray text-sm leading-relaxed mb-4">
              {beyondCode.smileFx.details}
            </p>

            {/* Link & Status */}
            <div className="flex items-center justify-between pt-4 border-t border-border-light">
              {beyondCode.smileFx.status && (
                <span className="text-xs font-medium text-red bg-red/10 px-3 py-1 rounded-full">
                  {beyondCode.smileFx.status}
                </span>
              )}
              {beyondCode.smileFx.link && (
                <a
                  href={beyondCode.smileFx.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-red hover:text-red-hover transition-colors text-xs font-medium"
                >
                  Visit Website
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Lifestyle - Inline & Compact */}
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {beyondCode.lifestyle.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-light-secondary border border-border-light rounded-full px-5 py-2"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <span className="text-dark font-medium text-sm">
                  {item.label}
                </span>
                <span className="text-gray text-xs ml-2">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeyondCode;
