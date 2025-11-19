import { beyondCode } from "../../data/beyondCode";

function BeyondCode() {
  return (
    <section id="beyond" className="section-padding bg-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Beyond the <span className="gradient-text">Code</span>
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            What drives me outside development
          </p>
        </div>

        {/* Main Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* TAKUZA Card - Featured */}
          <div className="bg-gradient-to-br from-emerald/10 to-dark-lighter border border-emerald/30 rounded-xl p-8 hover:border-emerald/50 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-7 h-7 text-emerald"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  {beyondCode.takuza.title}
                </h3>
                <p className="text-emerald text-sm font-medium">
                  {beyondCode.takuza.subtitle}
                </p>
              </div>
            </div>

            <p className="text-lightgray font-medium mb-6 text-lg">
              {beyondCode.takuza.description}
            </p>

            <p className="text-gray mb-6 leading-relaxed">
              {beyondCode.takuza.details}
            </p>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-emerald/20">
              {beyondCode.takuza.impact.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-emerald text-sm font-medium">{stat}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Smile FX Card */}
          <div className="bg-gradient-to-br from-indigo/10 to-dark-lighter border border-indigo/30 rounded-xl p-8 hover:border-indigo/50 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-indigo/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-7 h-7 text-indigo"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  {beyondCode.smileFx.title}
                </h3>
                <p className="text-indigo text-sm font-medium">
                  {beyondCode.smileFx.subtitle}
                </p>
              </div>
            </div>

            <p className="text-lightgray font-medium mb-6 text-lg">
              {beyondCode.smileFx.description}
            </p>

            <p className="text-gray mb-6 leading-relaxed">
              {beyondCode.smileFx.details}
            </p>

            {/* Link & Status */}
            <div className="flex items-center justify-between pt-6 border-t border-indigo/20">
              {beyondCode.smileFx.status && (
                <span className="text-xs font-medium text-emerald bg-emerald/10 px-3 py-1 rounded-full">
                  {beyondCode.smileFx.status}
                </span>
              )}
              {beyondCode.smileFx.link && (
                <a
                  href={beyondCode.smileFx.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo hover:text-indigo/80 transition-colors text-sm font-medium"
                >
                  Visit Website
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Lifestyle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {beyondCode.lifestyle.map((item, index) => (
            <div
              key={index}
              className="bg-dark-lighter border border-dark hover:border-gray/30 rounded-xl p-6 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h4 className="text-lg font-bold mb-1">{item.label}</h4>
                  <p className="text-gray text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeyondCode;
