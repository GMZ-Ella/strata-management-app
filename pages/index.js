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

      <main style={{ padding: "2rem", fontFamily: "Arial" }}>
        <h1>🏡 Welcome to HarborView Strata Management</h1>
        <p>This website is for all residents of HarborView Apartments.</p>

        <h2>📢 Latest Announcement</h2>
        <p>The next strata committee meeting will be held on <strong>April 15th at 6:00 PM</strong> in the lobby.</p>

        <h2>📄 Documents</h2>
        <ul>
          <li><a href="/documents/strata-rules.pdf" target="_blank">Strata Rules PDF</a></li>
          <li><a href="/documents/meeting-minutes.pdf" target="_blank">Meeting Minutes</a></li>
        </ul>

        <h2>📬 Contact</h2>
        <p>Contact us at: <strong>strata.manager@harborview.com</strong></p>
      </main>
    </>
  );
}
