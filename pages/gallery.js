export default function Gallery() {
    const imageNames = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
  
    return (
      <main style={{ padding: "2rem", fontFamily: "Arial" }}>
        <h1 style={{ color: "#2c3e50" }}>🏞️ Community Gallery</h1>
        <p>Take a look at our beautiful building and community events!</p>
  
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          {imageNames.map((name, idx) => (
            <img
              key={idx}
              src={`/images/gallery/${name}`}
              alt={`Gallery ${idx + 1}`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            />
          ))}
        </div>
      </main>
    );
  }