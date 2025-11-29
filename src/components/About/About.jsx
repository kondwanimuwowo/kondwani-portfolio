import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect } from "react";

function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Stagger container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // Expandable content
  const expandedVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.45, ease: "easeInOut", when: "beforeChildren", staggerChildren: 0.08 },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  // Counter
  const CountUp = ({ end, suffix = "" }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!isInView) return;
      let start = 0;
      const increment = end / 120;
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else setCount(Math.floor(start));
      }, 16);
      return () => clearInterval(timer);
    }, [end, isInView]);
    return <span>{count}{suffix}</span>;
  };

  return (
    <section id="about" className="section-padding bg-light-secondary" ref={ref}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">

          {/* Header with animated underline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              About Me
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-20 h-1 bg-gradient-to-r from-red to-red-hover mx-auto origin-left"
            />
          </motion.div>

          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8 text-gray text-lg leading-relaxed"
          >
            <motion.p variants={itemVariants}>
              I'm <span className="text-red-dark font-semibold">Kondwani Muwowo</span>,
              a self-taught front-end developer with a love for building clean,
              intentional digital experiences. I started out creating websites
              with WordPress, discovered coding in 2024, and instantly fell in
              love. Since then I’ve been pushing myself—learning modern tools
              like React, Node.js, and Tailwind as I expand into back-end
              technology and consistently grow in both skill and creativity.
            </motion.p>

            {/* Read More */}
            {!isExpanded && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                onClick={() => setIsExpanded(true)}
                className="flex items-center gap-2 text-red hover:text-red-hover transition-colors font-medium group"
              >
                Read more
                <motion.svg
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  className="w-4 h-4 group-hover:translate-y-1 transition-transform"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
            )}

            {/* Expandable Content */}
            <AnimatePresence mode="wait">
              {isExpanded && (
                <motion.div
                  variants={expandedVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6 overflow-hidden"
                >
                  <div className="space-y-6 pt-4 text-dark">
                    <motion.p variants={itemVariants}>
                      I’ve always loved serving people, but my time in ministry leadership shaped how I think, communicate, and work with others. That season taught me depth, discipline, and compassion. I still carry that same heart today—both in my development journey and in my humanitarian work.
                    </motion.p>
                    <motion.p variants={itemVariants}>
                      I also fight human trafficking with Talitha Kum Zambia (TAKUZA) under the Love Justice International Project, where I help intercept potential victims of human trafficking before they are exploited and return them to safety. It’s work that reminds me every day why impact matters.
                    </motion.p>
                    <motion.p variants={itemVariants}>
                      Besides that, I volunteer with The Great Achievers Network (GAN),
                      where I maintain their website and handle their graphic work
                      to help strengthen their digital presence.<br />
                      GAN is a nonprofit supporting vulnerable girls with education and practical skills.
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-dark font-medium">
                      My journey blends faith, technology, and impact — and I'm just getting started.
                    </motion.p>

                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      onClick={() => setIsExpanded(false)}
                      className="flex items-center gap-2 text-gray hover:text-dark text-sm font-medium group pt-4"
                    >
                      Show less
                      <motion.svg animate={{ rotate: 180 }} className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </motion.svg>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 border-t border-border-light"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-red mb-2"><CountUp end={5} suffix="+" /></div>
              <div className="text-sm text-gray">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-dark mb-2"><CountUp end={10} suffix="+" /></div>
              <div className="text-sm text-gray">Technologies Used</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red mb-2"><CountUp end={12} suffix="+" /></div>
              <div className="text-sm text-gray">Months Coding</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-dark mb-2"><CountUp end={100} suffix="%" /></div>
              <div className="text-sm text-gray">Client Satisfaction</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;