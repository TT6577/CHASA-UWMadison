import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import board25to26interns from "../assets/history/2025-2026interns.webp";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div style={{ height: "60px" }}></div>
      <div className="intern-div">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            paddingBottom: "20px",
          }}
        >
          <h1>Interning @ CHASA</h1>
          <p className="white-text-small" style={{ lineHeight: "30px" }}>
            Do you want to make CHASA better, be part of something bigger, get
            experience and connections, or just have fun? Come join CHASA as an
            intern!
          </p>
          <p className="white-text-small" style={{ lineHeight: "28px" }}>
            Take initiative by becoming part of our exec board, where you'll
            learn the basics of your position, be a meaningful impact by doing
            fulfilling work, and get to know even more people in the club!
          </p>
          <p
            className="white-text-small"
            style={{ lineHeight: "20px", fontSize: "15px" }}
          >
            *(Pictured here were our 2025-26 interns!)
          </p>
        </div>
        <img className="history-hero" src={board25to26interns} />
      </div>
    </motion.div>
  );
}
