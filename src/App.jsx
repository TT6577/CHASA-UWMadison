import { useState, useEffect } from "react";
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

import { SquareMenu, SquareX } from "lucide-react";

// Motion
import { AnimatePresence, motion } from "framer-motion";

// Components
import ScrollToTop from "./components/ScrollToTop.jsx";

// Assets
import chasalogo from "./assets/logos/chasalogo.png";
import bgPattern from "./assets/backgrounds/clouds-background.jpg";

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

function NavbarWrapper() {
  const [showNav, setShowNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    setMenuOpen(false);
    if (!isHome) {
      setShowNav(true);
      return;
    }

    const contentDiv = document.getElementById("content");

    const handleScroll = () => {
      const hero = document.querySelector(".hero-image");
      const threshold = hero ? hero.offsetHeight * 0.6 : 400; // 80% of hero height
      setShowNav(contentDiv.scrollTop > threshold);
    };

    setShowNav(false);
    contentDiv.addEventListener("scroll", handleScroll); // listen on the div not window
    return () => contentDiv.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <div
      id="navbar"
      style={{
        position: "fixed",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        opacity: showNav ? 0.95 : 0,
        transform: showNav ? "translateY(0)" : "translateY(-100%)",
        pointerEvents: showNav ? "auto" : "none",
        width: "100%",
        boxSizing: "border-box",
        zIndex: 100,
      }}
    >
      {/* Top bar — always visible */}
      <div
        className="flex-side"
        style={{
          padding: "15px 20px 15px 40px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NavLink to="/">
          <motion.img
            src={chasalogo}
            style={{ height: "30px" }}
            whileHover={{
              rotate: [0, -10, 10, -5, 5, 0],
              transition: { duration: 0.5 },
            }}
            whileTap={{
              rotate: [0, -5, 5, -2, 2, 0],
              transition: { duration: 0.5 },
            }}
          />
        </NavLink>

        {/* Desktop links — hidden on mobile */}
        <div className="navbar-desktop flex-side" style={{ gap: "3px" }}>
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

        {/* Hamburger button — only on mobile */}
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "24px",
          }}
        >
          {menuOpen ? <SquareX /> : <SquareMenu />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="navbar-mobile flex-down"
          style={{ padding: "10px 100px 100px", gap: "8px" }}
        >
          <NavLink
            className="nav-link"
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link"
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            className="nav-link"
            to="/contacts"
            onClick={() => setMenuOpen(false)}
          >
            Contacts
          </NavLink>
          <NavLink
            className="nav-link"
            to="/events"
            onClick={() => setMenuOpen(false)}
          >
            Events
          </NavLink>
          <NavLink
            className="nav-link"
            to="/fams"
            onClick={() => setMenuOpen(false)}
          >
            Fams
          </NavLink>
          <NavLink
            className="nav-link"
            to="/history"
            onClick={() => setMenuOpen(false)}
          >
            History
          </NavLink>
          <NavLink
            className="nav-link"
            to="/interns"
            onClick={() => setMenuOpen(false)}
          >
            Interns
          </NavLink>
        </div>
      )}
    </div>
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
            <NavbarWrapper />

            {/* Displays designated pages */}
            <div style={{ backgroundColor: "#c9ada1", position: "relative" }}>
              {/* pattern layer with opacity */}
              <div
                style={{
                  position: "fixed",
                  inset: 0,
                  backgroundImage: `url(${bgPattern})`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "626px 626px",
                  backgroundBlendMode: "color-burn",
                  opacity: 0.05, // adjust to taste
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              {/* content layer */}
              <div
                style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}
              >
                <AnimatedRoutes />
              </div>
            </div>

            <div style={{ height: "150px" }}></div>
            <div id="footer">
              <div style={{ height: "30px" }}></div>
              <p
                className="footer-text"
                style={{ width: "60%", margin: "0 auto" }}
              >
                Built using React, JavaScript and CSS. Hosted on Vercel. Full
                website code{" "}
                <a
                  className="bright-link"
                  href="https://github.com/TT6577/CHASA-UWMadison"
                  target="_blank"
                >
                  here.
                </a>
              </p>
              <div style={{ height: "50px" }}></div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
