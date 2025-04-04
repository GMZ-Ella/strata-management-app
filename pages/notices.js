import { useState } from "react";

export default function Notices() {
  const [openIndex, setOpenIndex] = useState(null);

  const notices = [
    {
      title: "Fire Drill – April 12th",
      content:
        "There will be a building-wide fire drill on Friday, April 12th at 11:00 AM. Please follow safety instructions posted in the lobby.",
    },
    {
      title: "Water Maintenance – April 18th",
      content:
        "Water supply will be temporarily shut down between 10:00 AM and 3:00 PM due to scheduled maintenance. We apologize for the inconvenience.",
    },
    {
      title: "Easter BBQ – April 20th",
      content:
        "Join us for a community BBQ in the garden area! Family and friends are welcome.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1 style={{ color: "#2c3e50" }}>📢 Community Notices</h1>

      {notices.map((notice, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            cursor: "pointer",
          }}
          onClick={() => toggle(index)}
        >
          <h2 style={{ margin: "0 0 0.5rem 0", color: "#2980b9" }}>
            {notice.title}
          </h2>
          {openIndex === index && <p>{notice.content}</p>}
        </div>
      ))}
    </main>
  );
}