import { beyondCode } from "../../data/beyondCode";
import { FaDumbbell, FaChess } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const iconMap = { FaDumbbell, FaChess };

function BeyondCode() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="beyond" className="section-padding bg-light" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
            Beyond the Code
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-20 h-1 bg-gradient-to-r from-red to-red-hover mx-auto mb-6 origin-left"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-gray text-lg max-w-2xl mx-auto"
          >
            My purpose-driven work outside development
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
        >
          {/* TAKUZA */}
          <motion.div variants={cardVariants} whileHover={{ y: -6 }} className="bg-light-secondary border border-border-light hover:border-red/30 rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-light flex items-center justify-center flex-shrink-0 border border-border-light">
                <img src={beyondCode.takuza.logo} alt="TAKUZA Logo" className="w-14 h-14 object-contain" onError={e => e.target.style.display = "none"} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark">{beyondCode.takuza.title}</h3>
                <p className="text-gray/80 italic text-sm font-medium">{beyondCode.takuza.subtitle}</p>
              </div>
            </div>
            <p className="text-gray text-sm mb-4 leading-relaxed">{beyondCode.takuza.description}</p>
            <p className="text-gray text-sm leading-relaxed mb-4">{beyondCode.takuza.details}</p>
            <div className="flex items-center gap-3 pt-4 border-t border-border-light">
              <img src={beyondCode.takuza.partnerLogo} alt="Love Justice" className="h-6 object-contain opacity-70" onError={e => e.target.style.display = "none"} />
              <span className="text-xs text-gray">Partner: {beyondCode.takuza.partnerName}</span>
            </div>
          </motion.div>

          {/* GAN */}
          <motion.div variants={cardVariants} whileHover={{ y: -6 }} className="bg-light-secondary border border-border-light hover:border-red/30 rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-light flex items-center justify-center flex-shrink-0 border border-border-light">
                <img src={beyondCode.gan.logo} alt="GAN Logo" className="w-14 h-14 object-contain" onError={e => e.target.style.display = "none"} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark">{beyondCode.gan.title}</h3>
                <p className="text-gray/80 italic text-sm font-medium">{beyondCode.gan.subtitle}</p>
              </div>
            </div>
            <p className="text-gray text-sm mb-4 leading-relaxed">{beyondCode.gan.description}</p>
            <p className="text-gray text-sm leading-relaxed mb-4">{beyondCode.gan.details}</p>
            <div className="flex items-center justify-between pt-4 border-t border-border-light">
              {beyondCode.gan.status && (
                <span className="text-xs font-medium text-red bg-red/10 px-3 py-1 rounded-full">{beyondCode.gan.status}</span>
              )}
              {beyondCode.gan.link && (
                <a href={beyondCode.gan.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-red hover:text-red-hover text-xs font-medium">
                  Visit Website
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>

          {/* Smile FX */}
          <motion.div variants={cardVariants} whileHover={{ y: -6 }} className="bg-light-secondary border border-border-light hover:border-red/30 rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-light flex items-center justify-center flex-shrink-0 border border-border-light">
                <img src={beyondCode.smileFx.logo} alt="Smile FX Logo" className="w-14 h-14 object-contain" onError={e => e.target.style.display = "none"} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark">{beyondCode.smileFx.title}</h3>
                <p className="text-gray/80 italic text-sm font-medium">{beyondCode.smileFx.subtitle}</p>
              </div>
            </div>
            <p className="text-gray text-sm mb-4 leading-relaxed">{beyondCode.smileFx.description}</p>
            <p className="text-gray text-sm leading-relaxed mb-4">{beyondCode.smileFx.details}</p>
            <div className="flex items-center justify-between pt-4 border-t border-border-light">
              {beyondCode.smileFx.status && (
                <span className="text-xs font-medium text-red bg-red/10 px-3 py-1 rounded-full">{beyondCode.smileFx.status}</span>
              )}
              {beyondCode.smileFx.link && (
                <a href={beyondCode.smileFx.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-red hover:text-red-hover text-xs font-medium">
                  Visit Website
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Lifestyle Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto"
        >
          {beyondCode.lifestyle.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-light-secondary border border-border-light rounded-full px-5 py-2"
              >
                <span className="text-2xl">{Icon ? <Icon /> : item.icon}</span>
                <div>
                  <span className="text-dark font-medium text-sm">{item.label}</span>
                  <span className="text-gray text-xs ml-2">{item.description}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default BeyondCode;