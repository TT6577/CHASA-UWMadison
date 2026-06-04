export default function Card({ children, style, className, hoverable, center }) {
  const classes = [
    "card",
    hoverable ? "hoverable" : "",
    center ? "card-center" : "",
    className || "",
  ].join(" ").trim();

  return (
    <div
      className={classes}
      style={{ ...style }}
    >
      {children}
    </div>
  );
}