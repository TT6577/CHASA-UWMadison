import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  NavLink,
} from "react-router-dom";
import { ChevronsDown, CalendarDays, MapPin } from "lucide-react";
import heroImage from "../assets/heros/midautumn.jpg";
import chasalogo from "../assets/logos/chasalogo.png";
import thankyou from "../assets/events/thankyou.JPG";
import Card from "../components/Card.jsx";

// Edit announcements here - still looking into making it easier for PR/secretary chair to edit announcements
const announcements = [
  {
    id: 0,
    title: "CHASA Logo Design Competition",
    date: "August 28, 2026",
    location: "N/A - Online",
    body: "Our logo is in need of an update. We want YOU to help us create a new one! See our post for more info!",
  },
  {
    id: 1,
    title: "Welcome Back Fall 2026!",
    date: "September 1, 2026",
    location: "Mosse Humanities",
    body: "GBM #1 is happening this Friday at 7pm. Come meet the new exec board!",
  },
  {
    id: 2,
    title: "Mid-Autumn Festival",
    date: "September 15, 2026",
    location: "Memorial Union",
    body: "Join us for our annual Mid-Autumn Festival celebration. Food, games, and lanterns!",
  },
  {
    id: 3,
    title: "Lunar New Year",
    date: "2027 TBD",
    location: "Union South",
    body: "Our biggest event of the year! Celebrate the Year of the Goat, complete with free Chinese cuisine and cultural performances!",
  },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero image code */}
      <div
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

      <div style={{ height: "50px" }} />

      <h1 className={"content-text-big"}>
        Welcome to the Chinese American Student Association!
      </h1>
      <Card hoverable center style={{ paddingTop: "30px" }}>
        <img
          src={chasalogo}
          style={{ height: "auto", width: "30%", alignSelf: "center" }}
        />
        <p>
          Hello, welcome to the Chinese American Student Association (CHASA) @
          UW-Madison! We are a UW-Madison affiliated club that aims to improve
          awareness and understanding of Chinese American culture as well as
          provide a space for people to socialize and make friends on campus.
        </p>
        <br />
        <p>
          We host a variety of events, which are composed of general body
          meetings (GBMs, free events for everybody to join), Fam event (events
          only open to members who are part of our fam system. find out more
          here), as well as other events like collab events with other clubs,
          fundraisers, and volunteer opportunities.
        </p>
      </Card>
      <div
        className="green-background-div"
        style={{ backgroundColor: "#7f8671" }}
      >
        <h1>Announcements</h1>
        <div className="card-grid">
          {announcements.length > 0 ? (
            announcements.map((a) => (
              <Card
                key={a.id}
                hoverable
                className="borderhover"
                style={{
                  textAlign: "left",
                  margin: "1rem",
                  gap: "5px",
                  flex: "1",
                }}
              >
                <h2 style={{ color: "#743c2a" }}>{a.title}</h2>
                <div
                  className="flex-side"
                  style={{ gap: "5px", alignItems: "center" }}
                >
                  <CalendarDays size="20px" />
                  <p style={{ fontSize: "15px", color: "#7f8671" }}>{a.date}</p>
                  <MapPin size="20px" />
                  <p style={{ fontSize: "15px", color: "#7f8671" }}>
                    {a.location}
                  </p>
                </div>
                <p>{a.body}</p>
              </Card>
            ))
          ) : (
            <p>No announcements right now — check back soon!</p>
          )}
        </div>
      </div>

      <Card
        center
        style={{ gap: "20px", padding: '2.5rem' }}
      >
        <h1 style={{color: "#743c2a"}}>Check out our other pages!</h1>
        <div className="flex-side " style={{alignSelf: 'center', flexWrap: 'wrap'}}>
          <NavLink className="nav-link nav-link-large" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link nav-link-large" to="/contacts">
            Contacts
          </NavLink>
          <NavLink className="nav-link nav-link-large" to="/events">
            Events
          </NavLink>
          <NavLink className="nav-link nav-link-large" to="/fams">
            Fams
          </NavLink>
          <NavLink className="nav-link nav-link-large" to="/history">
            History
          </NavLink>
          <NavLink className="nav-link nav-link-large" to="/interns">
            Interns
          </NavLink>
        </div>
        <img src={thankyou} className='smaller-image' style={{alignSelf: 'center'}}/>
        <h1 style={{color: "#743c2a"}}>Thank you for visiting us!</h1>
      </Card>

      <div style={{ height: "50px" }} />
    </motion.div>
  );
}
