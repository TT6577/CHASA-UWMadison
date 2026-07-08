import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileDown, ExternalLink } from "lucide-react";
import Card from "../components/Card.jsx";
import Carousel from "../components/Carousel.jsx";

// LNY photos
import boarddancestill from "../assets/events/lny/boarddancestill.webp";
import lions from "../assets/events/lny/lions.webp";
import lnyfood from "../assets/events/lny/lnyfood.webp";
import lnyfoodmaddy from "../assets/events/lny/lnyfoodmaddy.webp";
import lnygeneral from "../assets/events/lny/lnygeneral.webp";
import lnyseado from "../assets/events/lny/lnyseado.webp";
import lnyvsa from "../assets/events/lny/lnyvsa.webp";
import tvwinner from "../assets/events/lny/tvwinner.webp";
import weirdguy from "../assets/events/lny/weirdguy.webp";

// Mid-autumn photos
import midcake from "../assets/events/midautumn/midcake.webp";
import midchairs1 from "../assets/events/midautumn/midchairs1.webp";
import midchairs2 from "../assets/events/midautumn/midchairs2.webp";
import midculture from "../assets/events/midautumn/midculture.webp";
import midgeneral from "../assets/events/midautumn/midgeneral.webp";
import midhasa from "../assets/events/midautumn/midhasa.webp";
import midheart from "../assets/events/midautumn/midheart.webp";
import midpresidents from "../assets/events/midautumn/midpresidents.webp";

// GBM photos
import december from "../assets/events/gbms/december.webp";
import halloween from "../assets/events/gbms/halloween.webp";
import matcha1 from "../assets/events/gbms/matcha1.webp";
import matcha2 from "../assets/events/gbms/matcha2.webp";
import matcha3 from "../assets/events/gbms/matcha3.webp";
import movie1 from "../assets/events/gbms/movie1.webp";
import movie2 from "../assets/events/gbms/movie2.webp";
import movie3 from "../assets/events/gbms/movie3.webp";

// Fam photos
import airplanes from "../assets/events/fam events/airplanes.webp";
import candytoss from "../assets/events/fam events/candytoss.webp";
import famchallenges from "../assets/events/fam events/famchallenges.webp";
import havencollab from "../assets/events/fam events/havencollab.webp";
import oreos from "../assets/events/fam events/oreos.webp";
import sichuancollab from "../assets/events/fam events/sichuancollab.webp";
import wallsit1 from "../assets/events/fam events/wallsit1.webp";
import wallsit2 from "../assets/events/fam events/wallsit2.webp";

// Volunteer photos
import mcmvolunteer from "../assets/events/volunteer/mcmvolunteer.webp";
import slowfoods from "../assets/events/volunteer/slowfoods.webp";
import conhaul from "../assets/events/volunteer/conhaul.webp";
import conline from "../assets/events/volunteer/conline.webp";
import conmogging from "../assets/events/volunteer/conmogging.webp";
import conpizzaafter from "../assets/events/volunteer/conpizzaafter.webp";
import conpizzabefore from "../assets/events/volunteer/conpizzabefore.webp";

// Backgrounds
import lnybackground from "../assets/backgrounds/lnybackground.jpg";
import midbackground from "../assets/backgrounds/midbackground.jpg";
import gbmbackground from "../assets/backgrounds/gbmbackground.jpg";
import fambackground from "../assets/backgrounds/fambackground.jpg";
import volunteerbackground from "../assets/backgrounds/volunteerbackground.jpg";

const lnyphotos = [
  { src: boarddancestill, caption: "E-board Dance Performance 10/10" },
  { src: lions, caption: "Lion Dance & Drums" },
  { src: lnygeneral, caption: "General Vibe of LNY" },
  { src: weirdguy, caption: "Weird Lion Dance Guy" },
  { src: lnyfood, caption: "FREE LNY Dinner!!! (yum)" },
  { src: tvwinner, caption: "Grammy Wins a TV" },
  { src: lnyfoodmaddy, caption: "Maddy and Eric Serving Food With a Smile" },
  { src: lnyseado, caption: "SEADO, one of our many cultural performers" },
  { src: lnyvsa, caption: "VSA Tablers!!" },
];

const midphotos = [
  { src: midchairs1, caption: "Musical Chairs Mishap" },
  { src: midchairs2, caption: "Musical Chairs Elimination" },
  { src: midculture, caption: "Educational Cultural Segment" },
  { src: midgeneral, caption: "General Vibe of Mid-Autumn" },
  { src: midcake, caption: "Free Mooncakes" },
  { src: midheart, caption: "Find Your Group Activity" },
  { src: midhasa, caption: "HASA Tablers!!" },
  { src: midpresidents, caption: "2025 CHASA Presidents Amy and Julia!!" },
];

const gbmphotos = [
  { src: matcha1, caption: "September Matcha & Totes Kickoff" },
  { src: matcha2, caption: "E-board Serving Matcha" },
  { src: matcha3, caption: "September Kickoff Vibe" },
  { src: movie1, caption: "CHASAgiving Food/Movie Night" },
  { src: movie2, caption: "Digging In!!!" },
  { src: movie3, caption: "K-Pop Demon Hunters Singalong" },
  { src: halloween, caption: "Haunted Halloween Hangout" },
  { src: december, caption: "2026 President Grace Studying at Christmas GBM" },
];

const famphotos = [
  { src: oreos, caption: "Oreo Balance Challenge - Fam Clash" },
  { src: wallsit1, caption: "Wallsit Endurance Challenge" },
  { src: wallsit2, caption: "Wallsit Part 2 - so tuff" },
  { src: candytoss, caption: "Candy Toss Challenge" },
  { src: airplanes, caption: "Airplane Challenge" },
  { src: havencollab, caption: "Fam Reveal Collab" },
  { src: sichuancollab, caption: "Fam Collab #2" },
  { src: famchallenges, caption: "2025 September Fam Challenges" },
];

const volunteerphotos = [
  {
    src: mcmvolunteer,
    caption: "Halloween Volunteering at Madison Children's Museum",
  },
  { src: slowfoods, caption: "SlowFoods UW Volunteering" },
  { src: conline, caption: "First Concessions!!!" },
  { src: conpizzabefore, caption: "Before Pizza Concessions" },
  { src: conpizzaafter, caption: "After Pizza Concessions" },
  { src: conmogging, caption: "Getting Mogged at Concessions" },
  { src: conhaul, caption: "Crazy Food Haul" },
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
          ). Each Fam organizes their own hangouts independently (usually by the
          Fam leader), but there are also CHASA-led Fam events where all Fams
          come together for activities.
        </p>
        <p className="footer-text text-center">
          We also run volunteer events, such as the SlowFood and Madison's
          Children Museum charity collaborations. We only started doing
          concessions to raise funds in the 25-26 academic year, and only opened
          them to E-board only, but we are looking to let general members come
          join us as well.
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
          backgroundPosition: "center",
        }}
      >
        <h2 className="white-text-big">Lunar New Year (2/7/2026)</h2>
        <Carousel photos={lnyphotos} />
      </div>
      <div style={{ height: "30px" }} />
      <div
        className="carousel-center"
        style={{
          backgroundImage: `url(${midbackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="white-text-big">Mid-Autumn Festival (10/11/2025)</h2>
        <Carousel photos={midphotos} />
      </div>
      <div style={{ height: "30px" }} />
      <div
        className="carousel-center"
        style={{
          backgroundImage: `url(${gbmbackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="black-text-big">General Body Meetings (GBMs)</h2>
        <Carousel photos={gbmphotos} />
      </div>
      <div style={{ height: "30px" }} />
      <div
        className="carousel-center"
        style={{
          backgroundImage: `url(${fambackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="black-text-big">Fam Events</h2>
        <Carousel photos={famphotos} />
      </div>
      <div style={{ height: "30px" }} />
      <div
        className="carousel-center"
        style={{
          backgroundImage: `url(${volunteerbackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="black-text-big">Volunteer/Fundraising Events</h2>
        <Carousel photos={volunteerphotos} />
      </div>
    </motion.div>
  );
}
