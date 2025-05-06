import React from "react";
import { CalendarDays } from "lucide-react";
import "./Hackthon.css"; // Import the CSS
import hackthonWinner from "./hackthonWin.jpg"; // Import the image
import TeamLead from "./TeamLead.mp4"; // Import the video

const achievements = [
  {
    icon: "🏆",
    title: "Hackathon Winner – MERN Stack Project",
    date: "April 2025",
    role: "Full-Stack Developer",
    mediaType: "image",
    media: hackthonWinner,
    description:
      "Developed a complete web application using the MERN stack (MongoDB, Express.js, React, Node.js) as part of a competitive hackathon. The application featured a modern, responsive UI with a focus on user experience and performance.",
    highlights: [
      "Awarded Winner of the hackathon for innovative solution and clean implementation.",
      "Delivered a seamless product within tight deadlines under real-world constraints."
    ]
  },
  {
    icon: "👥",
    title: "Team Lead – XpertSwap (Skill-Exchange Platform) Hackathon Project",
    date: "April 2025",
    role: "Team Leader",
    mediaType: "video",
    media: TeamLead,
    description:
      "Led a dynamic team in building XpertSwap, a full-fledged platform from scratch during a time-bound hackathon.",
    highlights: [
      "Delegated and coordinated tasks across frontend, backend, and deployment.",
      "Ensured project delivery within deadlines while maintaining code quality.",
      "Acted as the bridge between team members, design, and development phases."
    ]
  }
];

export default function HackathonAchievements() {
  return (
    <>
    <h3 style={{textAlign:"center", fontSize:"30px", textDecoration:"underline"}}>ACHIEVEMENTS</h3>
    <div className="achievements-grid">
      {achievements.map((item, index) => (
          <div key={index} className="achievement-card">
          {item.mediaType === "image" ? (
              <img src={item.media} alt={item.title} className="achievement-image" />
            ) : (
                <video
                src={item.media}
                autoPlay
                loop
                muted
                className="achievement-image"
                title={item.title}
                />
            )}
          <div className="card-header">
            <span className="card-icon">{item.icon}</span>
            <h2 className="card-title">{item.title}</h2>
          </div>
          <div className="card-date">
            <CalendarDays className="h-4 w-4" />
            <span>{item.date}</span>
          </div>
          <span className="card-role">{item.role}</span>
          <p className="card-description">{item.description}</p>
          <ul className="card-list">
            {item.highlights.map((point, i) => (
                <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
      </>
  );
}
