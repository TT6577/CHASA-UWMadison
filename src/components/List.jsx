export default function List({ list, children }) {
  return (
    <>
      <h2 style={{ color: "#000" }}>{list.title}</h2>
      <div style={{ display: "flex", justifyContent: 'space-between', gap: '1rem' }}>
        <ul className="history-list-text">
          {list.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {children}
      </div>
    </>
  );
}
