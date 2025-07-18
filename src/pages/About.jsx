import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutImage from "../assets/about.svg";
import LetterGlitch from "../components/LetterGlitch";
import { Link } from "react-router-dom";
import { Mail, Phone, Github, Instagram, Twitter, Linkedin } from "lucide-react";

import samarth from "../assets/team/samarth.jpeg";
import rutika from "../assets/team/rutika.jpeg";
import ajay from "../assets/team/ajay.jpeg";
import sadhana from "../assets/team/sadhana.jpeg";
import sohan from "../assets/team/sohan.jpeg";
import abhishek from "../assets/team/abhishek.jpeg";

const teamMembers = [
  { id: 1, name: "Samarth Kanthale", photo: samarth },
  { id: 2, name: "Rutika Ekshinge", photo: rutika },
  { id: 3, name: "Ajay Kandhare", photo: ajay },
  { id: 4, name: "Sadhana Jadhav", photo: sadhana },
  { id: 5, name: "Sohan Kendre", photo: sohan },
  { id: 6, name: "Abhishek Jaiswar", photo: abhishek },
];

const About = () => {
  const [shuffledMembers, setShuffledMembers] = useState([]);

  // shuffle function
  const shuffleMembers = () => {
    const shuffled = [...teamMembers].sort(() => Math.random() - 0.5);
    setShuffledMembers(shuffled);
  };

  // shuffle initially and every 5 seconds
  useEffect(() => {
    shuffleMembers();
    const interval = setInterval(() => {
      shuffleMembers();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="w-full min-h-screen md:justify-center flex flex-col lg:flex-row overflow-hidden bg-base-100">
      {/* Left Illustration */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="hidden lg:flex w-1/2 h-screen items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <LetterGlitch glitchSpeed={80} opacity={30} />
        </div>
        <motion.img
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          src={aboutImage}
          alt="About illustration"
          className="w-full h-full object-contain opacity-80 z-10"
        />
      </motion.div>

      {/* Right Text Content */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 py-32 space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-base-content">
          About{" "}
          <span className="text-primary inline-flex overflow-hidden">SyncroSoft</span>
        </h2>

        <p className="text-lg text-base-content/80">
          At <span className="text-secondary font-bold">SyncroSoft</span>, we develop
          <span className="text-secondary font-bold"> secure, scalable</span>, and
          <span className="text-secondary font-bold"> high-performance software solutions</span> tailored for future-ready businesses.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-wrap gap-3 mt-2">
          <a href="mailto:info.syncrosoft@gmail.com" className="btn btn-sm btn-outline btn-primary flex items-center gap-2">
            <Mail size={16} /> info.syncrosoft@gmail.com
          </a>
          <a href="tel:+918446857060" className="btn btn-sm btn-outline btn-primary flex items-center gap-2">
            <Phone size={16} /> +91 84468 57060
          </a>
          <a href="tel:+918446857060" className="btn btn-sm btn-outline btn-primary flex items-center gap-2">
            <Phone size={16} /> +91 7559394187
          </a>
          <a href="https://github.com/SyncroSoft-Solutions" target="_blank" rel="noreferrer" className="btn btn-sm btn-outline btn-primary flex items-center gap-2">
            <Github size={16} /> GitHub
          </a>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-wrap gap-3 mt-4">
          <a href="https://instagram.com/syncrosoft" target="_blank" rel="noreferrer" className="btn btn-sm btn-circle bg-[#E1306C] border-none hover:opacity-90 text-white" title="Instagram">
            <Instagram size={18} />
          </a>
          <a href="https://twitter.com/syncrosoft" target="_blank" rel="noreferrer" className="btn btn-sm btn-circle bg-[#1DA1F2] border-none hover:opacity-90 text-white" title="Twitter">
            <Twitter size={18} />
          </a>
          <a href="https://linkedin.com/company/syncrosoft" target="_blank" rel="noreferrer" className="btn btn-sm btn-circle bg-[#0A66C2] border-none hover:opacity-90 text-white" title="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>

        <Link to="/contact">
          <button className="btn btn-primary rounded-full text-base px-8 mt-6">Get In Touch</button>
        </Link>

        {/* Team Member Avatars */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-base-content mb-6">Created By</h3>
          <motion.div
            layout
            variants={{
              animate: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-6"
          >
            <AnimatePresence>
              {shuffledMembers.map((member, i) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
                  whileHover={{ scale: 1.08, rotate: [0, 2, -2, 0] }}
                  className="relative flex flex-col items-center gap-3 group"
                >
                  {/* Pulse glow ring */}
                  <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 animate-pulse-slow bg-gradient-to-r from-primary via-accent to-secondary blur-2xl z-0 transition duration-300"></div>

                  {/* Avatar */}
                  <div className="avatar relative z-10">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow transition duration-300 group-hover:scale-105">
                      <img src={member.photo} alt={member.name} className="object-cover" />
                      {/* CEO Badge */}
                      {member.id === 1 && (
                        <span className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-bold px-2 py-[2px] rounded-bl-lg shadow">
                          CEO
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Name */}
                  <p className="text-base-content text-xs font-semibold text-center">{member.name}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default About;
