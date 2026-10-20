import Card from "./Card.jsx";

import { CalendarDays, MapPin } from "lucide-react";
import "../pages/Home.css";

export default function EventCard({ children, className, hoverable, center, title, date, location, body }) {

  return (
    <Card
      className={className}
      hoverable={hoverable}
      center={center}
      style={{
        textAlign: "left",
        margin: "1rem",
        gap: "5px",
        flex: "1",
      }}
    >
      <h2 style={{ color: "#743c2a" }}>{title}</h2>
      <div
        className="flex-side"
        style={{ gap: "5px", alignItems: "center" }}
      >
        <CalendarDays size="20px" />
        <p style={{ fontSize: "15px", lineHeight: "20px", color: "#7f8671" }}>{date}</p>
        <MapPin size="20px" />
        <p style={{ fontSize: "15px", lineHeight: "20px", color: "#7f8671" }}>
          {location}
        </p>
      </div>
      <p>{body}</p>
      {children}
    </Card>
  );
}