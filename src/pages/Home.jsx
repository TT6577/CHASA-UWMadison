import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import heroImage from "../assets/heros/midautumn.jpg";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "900px",
          maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "100px 130px 0 80px", // top padding pushes content down from the top
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            margin: "0 -5px 10px 0",
            fontSize: "130px",
            lineHeight: 1,
            alignSelf: "flex-end",
            letterSpacing: "7px",
          }}
        >
          CHASA
        </h1>
        <h2 style={{ margin: "0", textAlign: "right" }}>
          Chinese American representation <br /> @ UW-Madison
        </h2>
        <h2
          style={{
            margin: "0",
            textAlign: "right",
            fontSize: "20px",
            marginTop: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "6px",
          }}
        >
          <span
            className="animate-bounce"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <ChevronsDown size={25} strokeWidth={"3px"} />
          </span>
          Scroll down for more
          <span
            className="animate-bounce"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <ChevronsDown size={25} strokeWidth={"3px"} />
          </span>
        </h2>
      </div>
      <div style={{ height: "50px" }} />
      <h1>Welcome to the Chinese American Student Association!</h1>
      <div
        className={"card hoverable"}
        style={{ margin: "3rem", backgroundColor: "#FFFFFF", padding: "2rem" }}
      >
        <p>
          Hello, welcome to the Chinese American Student Association (CHASA) @
          UW-Madison! We are a UW-Madison affiliated club that aims to improve
          awareness and understanding of Chinese American culture as well as
          provide a space for people to socialize and make friends on campus.
        </p>
        <br/>
        <p>
          We host a variety of events, which are composed of general body
          meetings (GBMs, free events for everybody to join), Fam event (events
          only open to members who are part of our fam system. find out more
          here), as well as other events like collab events with other clubs,
          fundraisers, and volunteer opportunities.
        </p>
      </div>
      <div style={{ height: "200px" }} />
    </motion.div>
  );
}
