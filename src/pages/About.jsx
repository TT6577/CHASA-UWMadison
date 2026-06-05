import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileDown, ExternalLink } from "lucide-react";
import Card from "../components/Card.jsx";
import constitution from "../assets/documents/CHASA Constitution Bylaws.pdf";
import eboard from "../assets/documents/CHASA E-board Descriptions.pdf";

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
        <p className="footer-text text-center">
          Chinese American Student Association is designed for those on campus
          who are interested in Chinese American culture. Our goal is to provide
          a space where students can build community amongst their peers and be
          able to learn more about their own individual identities.
        </p>
        <p className="footer-text text-center">
          We recognize the importance of acknowledging the two different
          cultures and how having two backgrounds can impact one’s college
          experience. Through social events and community outreach, CHASA
          strives to establish a better understanding of Chinese American
          culture at UW-Madison.
        </p>
      </div>
      <Card center>
        <h1 style={{ color: "#000" }}>Constitution Bylaws</h1>
        <p className="text-center">
          This is our constitution and bylaws. It outlines our club's basic
          information, core mission and infrastructure. If you're curious about
          the internal functionality of CHASA, this is a cool document to peruse
          through.
        </p>
        <div
          className="card-grid"
          style={{
            textAlign: "center",
            justifyContent: "center",
            gap: "2rem",
            margin: "0 2rem 0 2rem",
          }}
        >
          <a
            className="dl-button flex-side"
            href={constitution}
            download
            style={{ justifyContent: "center" }}
          >
            Download PDF
            <FileDown />
          </a>
          <a
            className="dl-button flex-side"
            href={constitution}
            target="_blank"
            style={{ justifyContent: "center" }}
          >
            Open in new tab
            <ExternalLink />
          </a>
        </div>
      </Card>

      <Card center>
        <h1 style={{ color: "#000" }}>E-Board Descriptions</h1>
        <p className="text-center">
          This document contains the job descriptions for all of the E-board
          positions. It is a general description of all of the responsibilities
          and work/time commitment each position is obligated to fulfill.
        </p>
        <p className="text-center">
          Whether you want to know what each e-board member contributes to
          CHASA, look into what you might want to run for next year, or are just
          curious about what your favorite e-board member does, here is the
          right place to look! This is the same document all potential
          candidates are given prior to elections each year.
        </p>
        <div
          className="card-grid"
          style={{
            textAlign: "center",
            justifyContent: "center",
            gap: "2rem",
            margin: "0 2rem 0 2rem",
          }}
        >
          <a
            className="dl-button flex-side"
            href={eboard}
            download
            style={{ justifyContent: "center" }}
          >
            Download PDF
            <FileDown />
          </a>
          <a
            className="dl-button flex-side"
            href={eboard}
            target="_blank"
            style={{ justifyContent: "center" }}
          >
            Open in new tab
            <ExternalLink />
          </a>
        </div>
      </Card>
    </motion.div>
  );
}
