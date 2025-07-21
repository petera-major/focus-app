import React from "react";
import "../styles/LandingPage.css";
import '../styles/GallerySection.css'; 
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const videoData = [
    {
      title: 'Preview 1',
      src: '/assets/lofi1.mp4',
    },
    {
      title: 'Preview 2',
      src: '/assets/lofi2.mp4',
    },
    {
      title: 'Preview 3',
      src: '/assets/lofi4.mp4',
    },
  ];

  return (
    <div className="landing-wrapper">
      <div className="overlay" />
      <div className="hero-content">
        <h1>QuietZenFocus</h1>
        <p>
        QuietZenFocus is your minimalist focus companion. With calming videos, ambient music, a built-in Pomodoro timer, to-do list, and hydration reminders — it's designed to help you lock in and stay productive.
        </p>
      </div>
      <h2> Features</h2>
        <ul>
        <li> Ambient music & video loops</li>
        <li> Pomodoro-style focus timer</li>
        <li> Quick Notes & To-Do List</li>
        <li> Hydration reminders</li>
        </ul>
        <section className="gallery-section">
        <h2> App Preview</h2>
            <div className="video-gallery">
                {videoData.map((vid, i) => (
                <div key={i} className="video-card">
                    <video src={vid.src} controls muted loop />
                    <p>{vid.title}</p>
                </div>
                ))}
            </div>
            </section>

            <a
                className="download-btn"
                href="https://drive.google.com/uc?export=download&id=1ytGA4ljlw3r4BMBD0O8zpBpl2Wv6hyOL"
                target="_blank"
                >
                Download QuietZenFocus for macOS
                </a>

            <div className="macos-note">
                <h3>🛠 macOS Security Tip</h3>
                <p>
                    macOS may block the app since it’s not from the App Store. That’s okay! Just follow these steps:
                </p>
                <ol>
                    <li>
                    Right-click (or Control + click) the downloaded file and choose <strong>Open</strong>
                    </li>
                    <li>
                    When prompted, click <strong>Open</strong> again
                    </li>
                    <li>
                    If blocked, go to <strong>System Settings &gt; Privacy &amp; Security</strong>
                    </li>
                    <li>
                    Scroll down and click <strong>Allow Anyway</strong> under Security
                    </li>
                </ol>
                <p> You only need to do this once!</p>
                <p>It will allow the app to work. Right Click, Press Quit and relaunch the app and there you go!</p>
                </div>


      <footer>
        <p>PeteraMajor @ 2025</p>
        <a href="https://github.com/petera-major/zenfocus-app">View Source on GitHub</a>
      </footer>
    </div>
  );
}

