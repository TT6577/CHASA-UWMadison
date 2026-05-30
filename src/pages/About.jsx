import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FileDown, ExternalLink,
} from "lucide-react";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div style={{ height: "100px" }}></div>
      <p>about page will go here</p>
    </motion.div>
  );
}
