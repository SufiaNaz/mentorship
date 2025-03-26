import React from "react";
import { useNavigate } from "react-router-dom";
import "./Features.css";

function Features() {
  const navigate = useNavigate();

  const items = [
    {
      image: "/assets/profile.png", // Replace with actual images
      title: "Profile",
      description: "Manage your personal and professional details in one place.",
      path: "/profile",
    },
    {
      image: "/assets/matching.png",
      title: "Matching Algorithm",
      description: "Get paired with the best mentors based on preferences.",
      path: "/matching",
    },
    {
      image: "/assets/messaging.png",
      title: "Messaging & Video Calling",
      description: "Communicate seamlessly with mentors and peers.",
      path: "/Message",
    },
    {
      image: "/assets/progress.png",
      title: "Progress Tracking",
      description: "Track your mentorship progress with structured goals.",
      path: "/Progress",
    },
    {
      image: "/assets/resources.png",
      title: "Resources",
      description: "Access valuable learning materials and guides.",
      path: "/Resources",
    },
    {
      image: "/assets/events.png",
      title: "Events (Facility for Alumni)",
      description: "Join networking events and alumni meetups.",
      path: "/Events",
    },
  ];

  return (
    <div className="features-container bg-violet-400">
      {items.map((item, index) => (
        <div key={index} className={`feature ${index % 2 === 0 ? "left" : "right"}`}>
          <div className="feature-text">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button onClick={() => navigate(item.path)}>Learn More</button>
          </div>
          <div className="feature-image">
            <img src={item.image} alt={item.title} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;
