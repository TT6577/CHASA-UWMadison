
import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import heroImage from "../assets/heros/midautumn.jpg";
import chasalogo from "../assets/logos/chasalogo.png";
import "../pages/Home.css";


export default function HomeHero() {

    return <div
        className={"hero-image hero-content"}
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          boxSizing: "border-box",
        }}
      >
        <motion.h1
          className={"hero-text-big select-none"}
          style={{
            margin: "0 -5px 10px 0",
            lineHeight: 1,
            alignSelf: "flex-end",
          }}
          whileHover={{
            rotate: [0, -3, 3, -1, 1, 0],
            transition: { duration: 0.5 },
          }}
          whileTap={{
            rotate: [0, -5, 5, -2, 2, 0],
            transition: { duration: 0.5 },
          }}
        >
          CHASA
        </motion.h1>
        <h2
          className={"hero-text"}
          style={{
            margin: "0",
            textAlign: "right",
            transformOrigin: "right center",
          }}
        >
          Chinese American representation <br /> @ UW-Madison
        </h2>
        <h2
          className={"hero-text"}
          style={{
            margin: "0",
            textAlign: "right",
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

}