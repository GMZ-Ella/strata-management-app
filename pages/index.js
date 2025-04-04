import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>HarborView Strata Management</title>
        <meta name="description" content="Strata portal for HarborView residents" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          padding: "2rem",
          fontFamily: "Segoe UI, Arial",
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: "1.6",
          backgroundColor: "#f9f9f9",
          borderRadius: "12px",
          boxShadow: "0 0 12px rgba(0,0,0,0.1)"
        }}
      >
        <h1 style={{ color: "#2c3e50" }}>🏡 HarborView Strata Management</h1>
        <p>Welcome to the community portal for residents of HarborView Apartments.</p>

        <h2 style={{ color: "#2980b9", marginTop: "2rem" }}>📢 Latest Announcement</h2>
        <p><strong>📅 April 15, 6:00 PM</strong> – Strata committee meeting in the lobby. All residents welcome.</p>

        <h2 style={{ color: "#2980b9", marginTop: "2rem" }}>📄 Documents</h2>
        <ul>
          <li><a href="/documents/strata-rules.pdf" target="_blank">📘 Strata Rules PDF</a></li>
          <li><a href="/documents/meeting-minutes.pdf" target="_blank">📝 Meeting Minutes</a></li>
        </ul>

        <h2 style={{ color: "#2980b9", marginTop: "2rem" }}>📬 Contact</h2>
        <p>Questions? Email us at <a href="mailto:strata.manager@harborview.com">strata.manager@harborview.com</a></p>
      </main>
    </>
  );
}