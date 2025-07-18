import React from "react";
import { motion } from "framer-motion";
import HERO_SVG from "../assets/innovation.svg";
import RotatingText from "../components/RotatingText";
import { Link } from "react-router-dom";

const Home = () => {
  
  return (
    <section id="home" className="w-full h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Left - Text */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="w-full lg:w-1/2 h-full flex flex-col justify-center px-5 lg:px-16 space-y-6 bg-base-100 relative"
      >
        {/* Mobile SVG background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="absolute inset-0 lg:hidden pointer-events-none"
        >
          <img
            src={HERO_SVG}
            alt="Background Illustration"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <div className="relative z-10 space-y-6">
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="text-primary text-lg font-semibold tracking-wide uppercase"
          >
            Crafting Digital Experiences
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content leading-tight"
          >
            Welcome to{" "}
            <span className="text-primary inline-flex overflow-hidden">
              <RotatingText
                texts={["syncrosoft", "syncrosoft"]}
                splitBy="characters"
                transition={{ duration: 0.5, ease: "easeOut" }}
                rotationInterval={2500}
                staggerDuration={0.03}
                elementLevelClassName="text-primary"
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: "100%", opacity: 0 }}
                exit={{ y: "-100%", opacity: 0 }}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="text-lg text-base-content/80 leading-relaxed"
          >
            We specialize in{" "}
            <span className="text-secondary font-semibold">secure software</span>,{" "}
            <span className="text-secondary font-semibold">high-performance web apps</span>,{" "}
            <span className="text-secondary font-semibold">mobile solutions</span>, and{" "}
            <span className="text-secondary font-semibold">AI-integrated platforms</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="text-lg text-base-content/80 leading-relaxed"
          >
            Empowering businesses with scalable{" "}
            <span className="text-secondary font-semibold">enterprise systems</span>,{" "}
            <span className="text-secondary font-semibold">cloud infrastructure</span>, and{" "}
            <span className="text-secondary font-semibold">digital transformation tools</span>.
          </motion.p>

          {/* New Secondary Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            className="text-base text-base-content/60 leading-relaxed"
          >
            Trusted by startups and enterprises alike for innovative, tailored technology solutions crafted to future-proof your business.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 1.2 }}
          >
            <Link to="/projects">
              <button className="btn btn-secondary text-base md:text-lg px-6 md:px-8 relative overflow-hidden group">
                <span className="relative z-10">View Our Work</span>
                {/* button glow */}
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-20 blur-2xl transition duration-500"></span>
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Right - SVG Full Half */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="hidden lg:flex w-1/2 h-screen items-center justify-center relative"
      >
        <div className="relative w-full h-full overflow-hidden">
          <motion.img
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            src={HERO_SVG}
            alt="Syncrosoft Illustration"
            className="w-full h-full object-contain py-20 opacity-90"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default Home;
