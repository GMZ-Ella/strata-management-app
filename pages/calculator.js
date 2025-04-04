import { useState } from "react";

export default function Calculator() {
  const [fee, setFee] = useState("");
  const [units, setUnits] = useState("");
  const [total, setTotal] = useState(null);

  const calculate = () => {
    const totalAmount = parseFloat(fee) * parseInt(units);
    if (!isNaN(totalAmount)) {
      setTotal(totalAmount.toFixed(2));
    } else {
      setTotal(null);
    }
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ color: "#2c3e50" }}>💰 Strata Fee Calculator</h1>
      <p>Calculate the total maintenance fee for the building.</p>

      <div style={{ marginBottom: "1rem" }}>
        <label>Fee per unit ($): </label>
        <input
          type="number"
          value={fee}
          onChange={(e) => setFee(e.target.value)}
          style={{ marginLeft: "1rem", padding: "0.5rem", width: "100px" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Number of units: </label>
        <input
          type="number"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
          style={{ marginLeft: "1rem", padding: "0.5rem", width: "100px" }}
        />
      </div>

      <button
        onClick={calculate}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Calculate
      </button>

      {total !== null && (
        <div style={{ marginTop: "1.5rem", fontSize: "1.2rem", color: "#388e3c" }}>
          🧾 Total Fee: ${total}
        </div>
      )}
    </main>
  );
}