import { useState } from "react";
import "./App.css";

// Vercel Analytics
import { Analytics } from "@vercel/analytics/react";

// Pages
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import Events from "./pages/Events.jsx";
import Fams from "./pages/Fams.jsx";
import History from "./pages/History.jsx";
import Interns from "./pages/Interns.jsx";

// Motion
import { AnimatePresence, motion } from "framer-motion";

// Components
import ScrollToTop from "./components/ScrollToTop.jsx";

// Assets
import chasalogo from "./assets/chasalogo.png";

// Color palette?
//  #FFFFFF
//  #dddce4
//  #c9ada1
//  #436043
//  #743c2a
//  #7f8671
//  #363636

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/events" element={<Events />} />
        <Route path="/fams" element={<Fams />} />
        <Route path="/history" element={<History />} />
        <Route path="/interns" element={<Interns />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <Analytics />
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <BrowserRouter>
          <ScrollToTop />
          <div
            id="content"
            style={{
              flex: 3,
              overflowY: "scroll",
              height: "100vh",
              position: "relative",
            }}
          >
            {/* Navbar */}
            <div
              className={"flex-side"}
              id={"navbar"}
              style={{
                padding: "15px",
                paddingLeft: "40px",
                paddingRight: "40px",
                justifyContent: "space-between",
                alignContent: "center",
                gap: "0px",
              }}
            >
              <NavLink to="/">
                <img src={chasalogo} height={"35px"} />
              </NavLink>
              <div className={"flex-side"} style={{ gap: "5px" }}>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
                <NavLink className="nav-link" to="/contacts">
                  Contacts
                </NavLink>
                <NavLink className="nav-link" to="/events">
                  Events
                </NavLink>
                <NavLink className="nav-link" to="/fams">
                  Fams
                </NavLink>
                <NavLink className="nav-link" to="/history">
                  History
                </NavLink>
                <NavLink className="nav-link" to="/interns">
                  Interns
                </NavLink>
              </div>
            </div>

            {/* Displays designated pages */}
            <div style={{ backgroundColor: "#c9ada1" }}>
              <AnimatedRoutes />
              <div style={{ height: "180px" }}></div>
              <p style={{ width: "40%", margin: "0 auto" }}>
                Built using React, JavaScript and CSS. Hosted on Vercel. Full
                website code can be found on GitHub here{" "}
                <a href="https://github.com/TT6577/CHASA-UWMadison" target="_blank">
                  here.
                </a>
              </p>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
