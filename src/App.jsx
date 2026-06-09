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

// Icons
import { SquareMenu } from "lucide-react";

// Motion
import { AnimatePresence, motion } from "framer-motion";

// Components
import ScrollToTop from "./components/ScrollToTop.jsx";
import Footer from "./components/Footer.jsx";
import AnimatedRoutes from "./components/AnimatedRoutes.jsx";
import Navbar from "./components/Navbar.jsx";

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


function App() {
  return (
    <>
      <Analytics /> {/* For vercel analytics to see usage rates  */}
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <BrowserRouter>
          <ScrollToTop /> {/* Scroll to top when changing pages */}
          <div
            id="content"
            style={{
              flex: 3,
              overflowY: "scroll",
              height: "100vh",
              position: "relative",
            }}
          >
            {/* Navbar/Header */}
            <Navbar />

            {/* Displays designated pages */}
            <div style={{ backgroundColor: "#c9ada1", position: "relative" }}>
              {/* Pattern layer with opacity */}
              <div
                style={{
                  position: "fixed",
                  inset: 0,
                  backgroundImage: `url(${bgPattern})` /* Change this to change the background  */,
                  backgroundRepeat: "repeat",
                  backgroundSize: "626px 626px",
                  backgroundBlendMode: "color-burn",
                  opacity: 0.05,
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              {/* Content layer */}
              <div
                style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}
              >
                <AnimatedRoutes />
              </div>
            </div>

            <div style={{ height: "50px" }}></div>

            {/* Footer  */}
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
