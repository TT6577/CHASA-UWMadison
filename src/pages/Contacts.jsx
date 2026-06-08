import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileDown, ExternalLink } from "lucide-react";
import instaqr from "../assets/qrcodes/chasamadison_qr.jpg";
import groupmeqr from "../assets/qrcodes/groupmeqr.jpg";
import chasavenmo from "../assets/qrcodes/chasavenmo.jpg";
import Card from "../components/Card.jsx";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div style={{ height: "100px" }}></div>
      <h1>Trying to find us?</h1>
      <Card
        center
        style={{
          justifyContent: "space-between",
        }}
      >
        <div style={{ alignItems: "center" }}>
          <h2
            style={{
              fontSize: "40px",
              color: "#363636",
              justifyContent: "center",
            }}
          >
            Contacts
          </h2>
          <ul>
            <li>
              Email:{" "}
              <a href={"mailto:chasauwmadison@gmail.com"}>
                chasauwmadison@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </Card>
      <Card center style={{ backgroundColor: "#FFFFFF" }}>
        <h2 style={{ fontSize: "40px", color: "#363636" }}>Socials</h2>

        <div
          className="card-grid"
          style={{
            gap: "2rem",
          }}
        >
          {/* Instagram */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <h3 style={{ margin: 0 }}>Instagram</h3>
            <img
              src={instaqr}
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
              }}
            />
            <a href="https://www.instagram.com/chasamadison" target="_blank">
              @chasamadison
            </a>
          </div>

          {/* GroupMe */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <h3 style={{ margin: 0 }}>GroupMe</h3>
            <img
              src={groupmeqr}
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
              }}
            />
            <a
              href="https://groupme.com/join_group/106007294/OPtpknel"
              target="_blank"
            >
              Join GroupMe
            </a>
          </div>
        </div>
      </Card>

      <Card center style={{ justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: '20px',
          }}
        >
          <h2 style={{ fontSize: "40px", color: "#363636" }}>Venmo</h2>
          <img
            src={chasavenmo}
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
            }}
          />
          <p className="text-center" style={{ marginTop: "1rem" }}>
            This is the CHASA Venmo for dues. In order to run our club, we need
            funds, and membership dues are a huge part of why we can run fun
            events. Becoming a member is required to join a fam and eat at our
            food events for free. However, dues are not required to join our
            monthly GBMs or our big annual celebrations.
          </p>
          <div className="flex-side">
            <p className="text-center">
              Semester Dues: $10
            </p>
            <p className="text-center">
              Yearly Dues: $16
            </p>
          </div>

          <p className="text-center">
            Thank you for supporting us!
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
