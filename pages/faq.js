import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "When is rubbish collection?",
      answer: "Rubbish is collected every Monday and Thursday morning.",
    },
    {
      question: "How can I contact the strata manager?",
      answer: "You can email: strata.manager@harborview.com",
    },
    {
      question: "Are pets allowed in the building?",
      answer: "Yes, small pets are allowed with prior approval from the committee.",
    },
    {
      question: "Where can I find the meeting minutes?",
      answer: "You can find them under the Documents section of this website.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1 style={{ color: "#2c3e50" }}>❓ Frequently Asked Questions</h1>

      {faqs.map((faq, index) => (
        <div
          key={index}
          onClick={() => toggle(index)}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
            marginBottom: "1rem",
            cursor: "pointer",
            backgroundColor: openIndex === index ? "#e3f2fd" : "#f9f9f9",
          }}
        >
          <h2 style={{ margin: 0, color: "#1976d2" }}>{faq.question}</h2>
          {openIndex === index && <p style={{ marginTop: "0.5rem" }}>{faq.answer}</p>}
        </div>
      ))}
    </main>
  );
}