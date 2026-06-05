import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileDown, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div style={{ height: "100px" }}></div>
      <div className="green-background-div flex-down">
        <h1>About CHASA</h1>
        <h2>Mission Statement:</h2>
        <p className="footer-text" style={{margin: '0 5rem 0 5rem'}}>
          Chinese American Student Association is designed for those on campus
          who are interested in Chinese American culture. Our goal is to provide
          a space where students can build community amongst their peers and be
          able to learn more about their own individual identities.
        </p>
        <p className="footer-text" style={{margin: '0 5rem 0 5rem'}}>
          We recognize the importance of acknowledging the two different
          cultures and how having two backgrounds can impact one’s college
          experience. Through social events and community outreach, CHASA
          strives to establish a better understanding of Chinese American
          culture at UW-Madison.
        </p>
      </div>
    </motion.div>
  );
}
