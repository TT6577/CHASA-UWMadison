import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiFillInstagram } from "react-icons/ai";
import { SiGroupme } from "react-icons/si";
import { IoMail } from "react-icons/io5";
// ^ imports go here

// Remember to rename the page name, import it in App.jsx, and add it as a route, also in App.jsx
export default function Footer() {
  return (
    <div id="footer">
      <div style={{ height: "30px" }}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          className="flex-side"
          style={{ marginLeft: "3rem", alignItems: "center" }}
        >
          <a
            className="footer-text"
            href="mailto:chasauwmadison@gmail.com"
            target="_blank"
          >
            <IoMail size="55px" />
          </a>
          <a
            className="footer-text"
            href="https://www.instagram.com/chasamadison"
            target="_blank"
          >
            <AiFillInstagram size="50px" />
          </a>
          <a
            className="footer-text"
            href="https://groupme.com/join_group/106007294/OPtpknel"
            target="_blank"
          >
            <SiGroupme size="40px" />
          </a>
        </div>

        <p className="footer-text" style={{ width: "60%" }}>
          Built using React, JavaScript and CSS. Hosted on Vercel. Full website
          code{" "}
          <a
            className="bright-link"
            href="https://github.com/TT6577/CHASA-UWMadison"
            target="_blank"
          >
            here.
          </a>
        </p>
      </div>

      <div style={{ height: "50px" }}></div>
    </div>
  );
}
