import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileDown, ExternalLink } from "lucide-react";


import logo2017 from "../assets/logos/2017chasalogo.jpg";

import board20to21 from "../assets/history/2020-2021.webp";
import board21to22 from "../assets/history/2021-2022.webp";
import board23to24 from "../assets/history/2023-2024.webp";
import board24to25 from "../assets/history/2024-2025.webp";
import board25to26 from "../assets/history/2025-2026.webp";
import board25to26interns from "../assets/history/2025-2026interns.webp";

import Card from "../components/Card.jsx";
import List from "../components/List.jsx";

const lists = [
  {
    title: "2018-2019",
    items: [
      "External President - Adam Lee",
      "Internal President - Deborah Liu",
      "Secretary - Mary Zeitler",
      "Historian / Social Media - Winnie Moy",
      "Event Coordinators / PR - Andrew Eng & Karen Hayes",
      "Financial Coordinators - Jacky Lin & Drew Huang",
      "Cultural - Katty Li & Yinting Chiu",
      "Graphic Design - Eury Kim",
    ],
    photos: [logo2017],
  },
  {
    title: "2019-2020",
    items: [
      "Co-Presidents - Karen Hayes & Jacky Lin",
      "Senior Advisor - Mary Zeitler",
      "Secretary - Deborah Liu",
      "Historian - Josh Huang",
      "Outreach Chair - Elaine Zheng",
      "Event Coordinator - Andrew Eng",
      "Finance Coordinator - David Fei",
      "Cultural Chair - Michelle Teng",
      "Design Chair - Vera Wei",
    ],
  },
  {
    title: "2020-2021",
    items: [
      "President - Elaine Zheng",
      "Senior Advisor - Karen Hayes",
      "Secretary - Daniel Li",
      "Historian - Lucy Kuo",
      "Outreach - Jacky L",
      "Social Media - Chee Meng X",
      "Event Coordinators - Susanna Z & Holly Q",
      "Financial - Emily P & Ace L",
      "Cultural - Cathay C",
      "Design - Vera W",
    ],
    photos: [board20to21],
  },
  {
    title: "2021-2022",
    items: [
      "Co-Presidents - Susanna Zheng (external) & Daniel Li (internal)",
      "Senior Advisor - Elaine Zheng",
      "Secretary / Co-Historian - Qiuwen Quan",
      "Co-Historian - Lucy Kuo",
      "PR - Jeffrey Du",
      "Event Coordinators - Holly Qian & Emily Ren",
      "Co-Finance - Allen Chen",
      "Financial / Co-Design - Emily Peng",
      "Co-Design - Natalie Cheng",
      "Cultural Chair - Cathy Cao",
      "INTERNS: Andrew Liang, Steven Lai, Elvan Zheng, Cindy Liu, Julia Zhang, Daniel Li, Jason Bai",
    ],
    photos: [board21to22],
  },
  {
    title: "2022-2023",
    items: [
      "Co-Presidents - Emily Ren & Allen Chen",
      "Senior Advisor - Daniel Li",
      "Secretary / Historian - Cindy Liu",
      "PR / Outreach - Andrew Liang",
      "Event Coordinators - Julia Zhang & Rohit Bakayat",
      "Finance - Daniel Jing & Elvan Zheng",
      "Cultural - Steven Lai",
      "Design - Aaron Zhu & Alex He",
      "Family - Lydia Zheng",
      "INTERNS: Alan Liang, Sophia Gerhartz, Vivian Hark, Kaci Moy, Grace Drayton, Emma Quie, Helena Wei",
    ],
  },
  {
    title: "2023-2024",
    items: [
      "Co-Presidents - Andrew Liang & Steven Lai",
      "Secretary - Beckey Jiang",
      "PR / Outreach - Andrew Liang / Grace Drayton (second sem)",
      "Event Coordinators - Alan Liang & Rohit Bakayat",
      "Finance - Simon Wu",
      "Cultural - Emma Quie",
      "Design - Sophia Gerhartz & Alex He",
      "Family - Lydia Zheng",
      "INTERNS: Kevin Zhao, Sophie Zheng, David Huang, Anna Sun, Amy Liang, Rachel Tze, Julia Tse",
    ],
    photos: [board23to24],
  },
  {
    title: "2024-2025",
    items: [
      "Co-Presidents - Sophia Gerhartz & Alan Liang",
      "Secretary - Eric Liang",
      "PR - Sophie Zheng",
      "Event Coordinators - Kevin Zhao & David Huang",
      "Finance - Rachel Tze",
      "Culture - Amy Liang",
      "Design - Julia Tse & Mika Cassidy",
      "Family - Derek Chu",
      "Senior Advisor - Lydia Zheng",
      "INTERNS: Grace Wu, Maddy Andresen, Devin Zeng, Austin Zheng, Kevin Sun, Sabrina Yang, Josh Xue, Bethany Vance",
    ],
    photos: [board24to25],
  },
  {
    title: "2025-2026",
    items: [
      "Co-Presidents - Amy Liang and Julia Tse",
      "Secretary - Devin Zeng",
      "PR - Sabrina Yang",
      "Event Coordinators - Josh Xue (1st Semester), Bethany Vance (2nd Semester), & Austin Zheng",
      "Finance - Grace Wu & Tyler Tang",
      "Culture - Maddy Andressen",
      "Design - Micaela Cassidy & Lucy Chen",
      "Family - Nathan Wang (1st Semester)",
      "Senior Advisor - Alan Liang & Eric Liang",
      "INTERNS: Vivienne Fensin, Rebecca Tze, Emily Lin, Angela Chan, Oscar Zheng, Christina Zhao, Terry Gan",
    ],
    photos: [board25to26, board25to26interns],
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
      <div style={{ height: "60px" }}></div>
      <div className="history-div">
        <img className="history-hero" src={board25to26} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            paddingBottom: "20px",
          }}
        >
          <h1>E-board History</h1>
          <p className="white-text-small" style={{ lineHeight: "28px" }}>
            CHASA is a relatively young club, forming in 2017. Since then, we
            have amassed a lot more members, and our E-board has expanded and
            become more intricate with time.
          </p>
          <p className="white-text-small" style={{ lineHeight: "30px" }}>
            We go through a constant cycle of attracting new talent, learning
            the ropes, and mentoring future leaders. Take a look through our
            history of board members!
          </p>
          <p
            className="white-text-small"
            style={{ lineHeight: "20px", fontSize: "15px" }}
          >
            (If you're interested in making history at CHASA, check out the{" "}
            <Link to="/interns" style={{ color: "#c9ada1" }}>
              Interns
            </Link>{" "}
            page!)
          </p>
        </div>
      </div>

      {lists.map((l) => (
        <Card key={l.title}>
          <List list={l}>
            {l.photos && l.photos.length > 0 && (
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", paddingRight: '2rem' }}>
                {l.photos.map((photo, i) => (
                  <img
                    key={i}
                    src={photo}
                    style={{
                      borderRadius: "8px",
                      maxHeight: "400px",
                      objectFit: "cover",
                    }}
                  />
                ))}
              </div>
            )}
          </List>
        </Card>
      ))}
    </motion.div>
  );
}
