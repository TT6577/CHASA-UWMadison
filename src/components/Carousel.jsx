import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Carousel({ photos }) {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(null);

  const prev = () => setCurrent((i) => (i === 0 ? photos.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === photos.length - 1 ? 0 : i + 1));

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.img
          onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const diff = touchStart.current - e.changedTouches[0].clientX;
            if (diff > 50) next();
            if (diff < -50) prev();
          }}
          key={current}
          src={photos[current].src}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="carousel-image"
          style={{
            width: "100%",
            objectFit: "cover",
            borderRadius: "12px",
            border: '10px solid white',
          }}
        />
      </AnimatePresence>
      <div style={{ minHeight: "30px", textAlign: "center", marginTop: "8px" }}>
        {photos[current].caption && (
          <p
            style={{
              textAlign: "center",
              marginTop: "8px",
              color: "#FFF",
              fontSize: "20px",
              fontStyle: "italic",
            }}
          >
            {photos[current].caption}
          </p>
        )}
      </div>

      {/* Left / right arrows */}
      <button
        onClick={prev}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.4)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        ‹
      </button>
      <button
        onClick={next}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.4)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        ›
      </button>

      {/* Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "12px",
        }}
      >
        {photos.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: i === current ? "#743c2a" : "#c9ada1",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
