import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileDown, ExternalLink } from "lucide-react";
import Card from "../components/Card.jsx";
import Carousel from "../components/Carousel.jsx";

// LNY photos
import lnyphoto from "../assets/events/lny/boarddancestill.jpg";
import lionphoto from "../assets/events/lny/lions.PNG";
import generalphoto from "../assets/events/lny/generalvibelny.JPG";
import foodphoto from "../assets/events/lny/foodline.JPG";
import rafflephoto from "../assets/events/lny/TVwinner.JPG";

// Mid-autumn photos
import musicalchairsphoto from "../assets/events/midautumn/musicalchairs.JPG";
import culturalphoto from "../assets/events/midautumn/culturalsegment.JPG";
import generalvibephoto from "../assets/events/midautumn/generalvibemid.JPG";
import mooncakesphoto from "../assets/events/midautumn/mooncakes.JPG";
import heartpairsphoto from "../assets/events/midautumn/heartpairs.JPG";
import tablerphoto from "../assets/events/midautumn/tablerhasa.JPG";

const lnyphotos = [
  { src: lnyphoto, caption: "E-board Dance Performance 10/10" },
  { src: lionphoto, caption: "Lion Dance & Drums" },
  { src: generalphoto, caption: "General Vibe of LNY" },
  { src: foodphoto, caption: "Chinese Dinner" },
  { src: rafflephoto, caption: "Someone's Grandma Wins a TV" },
];

const midphotos = [
  { src: musicalchairsphoto, caption: "Musical Chairs Mishap" },
  { src: culturalphoto, caption: "Educational Cultural Segment" },
  { src: generalvibephoto, caption: "General Vibe of Mid-Autumn" },
  { src: mooncakesphoto, caption: "Free Mooncakes" },
  { src: heartpairsphoto, caption: "Find Your Group Activity" },
  { src: tablerphoto, caption: "Collab Tabler Trifold" },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div style={{ height: "100px" }}></div>
      <div
        className="green-background-div flex-down"
        style={{ backgroundColor: "#743c2a" }}
      >
        <h1>CHASA Events</h1>
        <h2>Events Breakdown:</h2>
        <p className="footer-text text-center">
          Throughout the school year, CHASA runs many events to foster community
          among students. Our biggest events, such as the Mid-Autumn Festival in
          fall semester and the Lunar New Year Celebration in spring semester,
          brings in hundreds of attendees every year.
        </p>
        <p className="footer-text text-center">
          Asides from our big yearly celebrations, we also run smaller, more
          regular programs. We host monthy General Body Meetings (GBM's) that
          are free for everyone to join. We also run the Family/Fams Program,
          where CHASA members are split into smaller groups, lead by a Fam
          leader (
          <Link to="/fams" style={{ color: "#c9ada1" }}>
            more info here
          </Link>
          ).
        </p>
      </div>
      <div style={{ height: "10px" }} />
      <Card>
        <h1 style={{ color: "#000" }}>Event Gallery</h1>
      </Card>
      <div style={{ height: "10px" }} />
      <div className="carousel-center" style={{ backgroundColor: "#FFF" }}>
        <h2 style={{color: '#000'}}>Lunar New Year</h2>
        <Carousel photos={lnyphotos} />
      </div>
      <div style={{ height: "20px" }} />
      <div className="carousel-center" style={{ backgroundColor: "#FFF" }}>
        <h2 style={{color: '#000'}}>Mid-Autumn Festival</h2>
        <Carousel photos={midphotos} />
      </div>
    </motion.div>
  );
}
