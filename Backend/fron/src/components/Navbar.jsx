import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  // Get dark mode state from localStorage
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  // Apply mode on first render
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      
      // Apply instantly
      if (newMode) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }

      return newMode;
    });
  };

  return (
    <nav className="navbar">
      <div className="logo">bookStore</div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="mode-toggle" onClick={toggleDarkMode}>
        <div className={`toggle-circle ${darkMode ? "dark" : ""}`}>
          {darkMode ? "🌙" : "🌞"}
        </div>
      </div>
    </nav>
  );
}
