import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileDown, ExternalLink } from "lucide-react";
import instaqr from "../assets/qrcodes/chasamadison_qr.jpg";
import groupmeqr from "../assets/qrcodes/groupmeqr.jpg";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div style={{ height: "100px" }}></div>
      <h1>Trying to find us?</h1>
      <div
        className={"card hoverable card-center"}
        style={{
          backgroundColor: "#FFFFFF",
          justifyContent: "space-between",
        }}
      >
        <div style={{ alignItems: "center" }}>
          <h2
            style={{
              fontSize: "40px",
              color: "#363636",
              justifyContent: "center",
            }}
          >
            Contacts
          </h2>
          <ul>
            <li>
              Email:{" "}
              <a href={"mailto:chasauwmadison@gmail.com"}>
                chasauwmadison@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={"card hoverable card-center"}
        style={{
          backgroundColor: "#FFFFFF",
          justifyContent: "space-between",
        }}
      >
        <div style={{ alignItems: "center" }}>
          <h2
            style={{
              fontSize: "40px",
              color: "#363636",
            }}
          >
            Socials
          </h2>
          <ul>
            <li>
              Instagram:{" "}
              <a
                href={
                  "https://www.instagram.com/chasamadison?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                }
                target={"_blank"}
              >
                chasamadison
              </a>
              <img
                src={instaqr}
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </li>
            <li>
              GroupMe:{" "}
              <a href={"https://groupme.com/join_group/106007294/OPtpknel"}>
                https://groupme.com/join_group/106007294/OPtpknel
              </a>
              <img
                src={groupmeqr}
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
