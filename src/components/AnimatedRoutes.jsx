import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contacts from "../pages/Contacts.jsx";
import Events from "../pages/Events.jsx";
import Fams from "../pages/Fams.jsx";
import History from "../pages/History.jsx";
import Interns from "../pages/Interns.jsx";

// Display pages
export default function AnimatedRoutes() {
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