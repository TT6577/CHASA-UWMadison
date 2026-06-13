import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileDown, ExternalLink } from "lucide-react";
import Card from "../components/Card.jsx";
import Carousel from "../components/Carousel.jsx";

// LNY photos
import lnyphoto from "../assets/events/lny/boarddancestill.jpg";
import lionphoto from "../assets/events/lny/lions.jpg";
import generalphoto from "../assets/events/lny/generalvibelny.jpg";
import weirdguyphoto from "../assets/events/lny/weirdguy.jpg";
import foodphoto from "../assets/events/lny/foodline.jpg";
import rafflephoto from "../assets/events/lny/TVwinner.jpg";

// Mid-autumn photos
import musicalchairsphoto from "../assets/events/midautumn/musicalchairs.jpg";
import culturalphoto from "../assets/events/midautumn/culturalsegment.jpg";
import generalvibephoto from "../assets/events/midautumn/generalvibemid.jpg";
import mooncakesphoto from "../assets/events/midautumn/mooncakes.jpg";
import heartpairsphoto from "../assets/events/midautumn/heartpairs.jpg";
import tablerphoto from "../assets/events/midautumn/tablerhasa.jpg";

// GBM photos
import matcha1 from "../assets/events/gbms/matcha1.jpg";
import matcha2 from "../assets/events/gbms/matcha2.jpg";
import matcha3 from "../assets/events/gbms/matcha3.jpg";
import movie1 from "../assets/events/gbms/movie1.jpg";
import movie2 from "../assets/events/gbms/movie2.jpg";
import movie3 from "../assets/events/gbms/movie3.jpg";
import halloween from "../assets/events/gbms/halloween.jpg";
import december from "../assets/events/gbms/december.jpg";

// Fam photos
import oreos from "../assets/events/fam events/oreos.jpg";
import wallsit from "../assets/events/fam events/wallsit.jpg";
import candytoss from "../assets/events/fam events/candytoss.jpg";
import airplane from "../assets/events/fam events/airplane.jpg";
import havencollab from "../assets/events/fam events/havencollab.jpg";
import hugefamcollab from "../assets/events/fam events/hugefamcollab.jpg";
import famchallenges from "../assets/events/fam events/famchallenges.jpg";


// Backgrounds
import lnybackground from "../assets/backgrounds/lnybackground.jpg";
import midbackground from "../assets/backgrounds/midbackground.jpg";
import gbmbackground from "../assets/backgrounds/gbmbackground.jpg";
import fambackground from "../assets/backgrounds/fambackground.jpg";

const lnyphotos = [
  { src: lnyphoto, caption: "E-board Dance Performance 10/10" },
  { src: lionphoto, caption: "Lion Dance & Drums" },
  { src: generalphoto, caption: "General Vibe of LNY" },
  { src: weirdguyphoto, caption: "The Lions' Weird Friend" },
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

const gbmphotos = [
  { src: matcha1, caption: "September Matcha & Totes Kickoff" },
  { src: matcha2, caption: "September Kickoff Vibe" },
  { src: matcha3, caption: "E-board Serving Matcha" },
  { src: movie1, caption: "K-pop Demon Hunters Movie Night" },
  { src: movie2, caption: "Homemade Food at Movie Night" },
  { src: movie3, caption: "Digging In " },
  { src: halloween, caption: "Halloween Costumes" },
  { src: december, caption: "President Studying at Christmas GBM" },
];

const famphotos = [
  { src: oreos, caption: "Oreo Balance Challenge - Fam Clash" },
  { src: wallsit, caption: "Wallsit Endurance Challenge" },
  { src: candytoss, caption: "Candy Toss Challenge" },
  { src: airplane, caption: "Airplane Challenge" },
  { src: havencollab, caption: "Fam Reveal Collab" },
  { src: hugefamcollab, caption: "Fam Reveal Collab #2" },
  { src: famchallenges, caption: "September Fam Challenges" },
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
      <div
        className="carousel-center"
        style={{
          backgroundImage: `url(${lnybackground})`,
          backgroundSize: "cover",
          backgroundPosition: 'center',
        }}
      >
        <h2 className='white-text-big'>Lunar New Year</h2>
        <Carousel photos={lnyphotos} />
      </div>
      <div style={{ height: "30px" }} />
      <div
        className="carousel-center"
        style={{
          backgroundImage: `url(${midbackground})`,
          backgroundSize: "cover",
          backgroundPosition: 'center',
        }}
      >
        <h2 className='white-text-big'>Mid-Autumn Festival</h2>
        <Carousel photos={midphotos} />
      </div>
      <div style={{ height: "30px" }} />
      <div
        className="carousel-center"
        style={{
          backgroundImage: `url(${gbmbackground})`,
          backgroundSize: "cover",
          backgroundPosition: 'center',
        }}
      >
        <h2 className='black-text-big'>General Body Meetings (GBMs)</h2>
        <Carousel photos={gbmphotos} />
      </div>
      <div style={{ height: "30px" }} />
      <div
        className="carousel-center"
        style={{
          backgroundImage: `url(${fambackground})`,
          backgroundSize: "cover",
          backgroundPosition: 'center',
        }}
      >
        <h2 className='black-text-big'>Fam Events</h2>
        <Carousel photos={famphotos} />
      </div>
    </motion.div>
  );
}
