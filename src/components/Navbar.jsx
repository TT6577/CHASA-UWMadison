import { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { SquareMenu, SquareX } from "lucide-react";
import chasalogo from "../assets/logos/chasalogo.png";

// Creates navbar and functionality for hiding navbar on home
export default function Navbar() {
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
      const threshold = hero ? hero.offsetHeight * 0.6 : 400;
      setShowNav(contentDiv.scrollTop > threshold);
    };

    setShowNav(false);
    contentDiv.addEventListener("scroll", handleScroll);
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
      <div className="flex-side" style={{ padding: "15px 20px 15px 40px", justifyContent: "space-between", alignItems: "center" }}>
        <NavLink to="/">
          <motion.img
            src={chasalogo}
            style={{ height: "30px" }}
            whileHover={{ rotate: [0, -10, 10, -5, 5, 0], transition: { duration: 0.5 } }}
            whileTap={{ rotate: [0, -5, 5, -2, 2, 0], transition: { duration: 0.5 } }}
          />
        </NavLink>

        <div className="navbar-desktop flex-side" style={{ gap: "3px" }}>
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/about">About</NavLink>
          <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
          <NavLink className="nav-link" to="/events">Events</NavLink>
          <NavLink className="nav-link" to="/fams">Fams</NavLink>
          <NavLink className="nav-link" to="/history">History</NavLink>
          <NavLink className="nav-link" to="/interns">Interns</NavLink>
        </div>

        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", fontSize: "24px" }}
        >
          {menuOpen ? <SquareX /> : <SquareMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="navbar-mobile flex-down" style={{ padding: "10px 100px 100px", gap: "8px" }}>
          <NavLink className="nav-link" to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink className="nav-link" to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink className="nav-link" to="/contacts" onClick={() => setMenuOpen(false)}>Contacts</NavLink>
          <NavLink className="nav-link" to="/events" onClick={() => setMenuOpen(false)}>Events</NavLink>
          <NavLink className="nav-link" to="/fams" onClick={() => setMenuOpen(false)}>Fams</NavLink>
          <NavLink className="nav-link" to="/history" onClick={() => setMenuOpen(false)}>History</NavLink>
          <NavLink className="nav-link" to="/interns" onClick={() => setMenuOpen(false)}>Interns</NavLink>
        </div>
      )}
    </div>
  );
}