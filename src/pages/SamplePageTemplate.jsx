import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// ^ imports go here

// Remember to rename the page name, import it in App.jsx, and add it as a route, also in App.jsx
export default function PageName() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    > {/* This is needed to create smooth animations when switching pages */}
      <div style={{ height: "100px" }}></div>{" "}
      {/* ^ This is needed; without it, the navbar will overlap your first few components */}
      <p>your page will go here</p>
    </motion.div>
  );
}
