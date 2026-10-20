import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  NavLink,
} from "react-router-dom";
import chasalogo from "../assets/logos/chasalogo.png";
import thankyou from "../assets/events/thankyou.JPG";
import Card from "../components/Card.jsx";
import EventCard from "../components/EventCard.jsx";
import HomeHero from "../components/HomeHero.jsx";
import "./Home.css";

const overviews = [
  {
    id: 0,
    title: "General Body Meetings (GBMs)",
    date: "Monthly",
    location: "Campus Classrooms/MSC",
    body: "These general events are open to everyone, for free! The events have a variety of different themes and activities.",
  },
  {
    id: 1,
    title: "Fam Clashes",
    date: "Monthly",
    location: "Campus Classrooms",
    body: "Fam clashes are member-only events where our fams compete to win points. These are typically composed of fun competitive team-based games.",
  },
  {
    id: 2,
    title: "Yearly Events",
    date: "Yearly, usually on a Chinese holiday",
    location: "Memorial Union Great Hall or Union South Varsity Hall",
    body: "These are THE CHASA events to go to. Midautumn Festival and Chinese New Year are our biggest events of the year, with larger scale activities, performances, food, and tablers!",
  },
  {
    id: 3,
    title: "Collabs",
    date: "Occasionally",
    location: "Anywhere!",
    body: "From time to time, we work with another club (usually another cultural social club) to run an event together. It's cool to meet people from another club and another culture!",
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
      <HomeHero/>

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
        <h1>CHASA Event Overviews</h1>
        <div className="card-grid">
          {overviews.length > 0 ? (
            overviews.map((a) => (
              <EventCard
                key={a.id}
                hoverable
                className="borderhover"
                title={a.title}
                date={a.date}
                location={a.location}
                body={a.body}
              />
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
          {/* <NavLink className="nav-link nav-link-large" to="/fams">
            Fams
          </NavLink> */}
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
