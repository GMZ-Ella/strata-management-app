export default function Contact() {
    return (
      <main style={{ padding: "2rem", fontFamily: "Arial" }}>
        <h1>📮 Contact the Committee</h1>
        <form method="POST" action="/api/submit-form" style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
          <label>
            Name:
            <input type="text" name="name" required style={{ padding: "0.5rem", width: "100%" }} />
          </label>
  
          <label>
            Message:
            <textarea name="message" required rows="4" style={{ padding: "0.5rem", width: "100%" }} />
          </label>
  
          <button type="submit" style={{ padding: "0.5rem", backgroundColor: "#1976d2", color: "#fff", border: "none", borderRadius: "4px" }}>
            Submit
          </button>
        </form>
      </main>
    );
  }