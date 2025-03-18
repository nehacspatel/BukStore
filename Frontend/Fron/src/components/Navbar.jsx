import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import Login from "./Login";

export default function Navbar() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  // Reference for the login modal
  const loginModalRef = useRef(null);

  // Apply dark mode on first render
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

  // Open login modal
  const openLoginModal = () => {
    if (loginModalRef.current) {
      loginModalRef.current.showModal();
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">bukStore</div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/course">Course</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      {/* Login button */}
      <button className="login-btn" onClick={openLoginModal}>
        Login
      </button>

      {/* Pass ref to Login component */}
      <Login modalRef={loginModalRef} />

      {/* Dark Mode Toggle */}
      <div className="mode-toggle" onClick={toggleDarkMode}>
        <div className={`toggle-circle ${darkMode ? "dark" : ""}`}>
          {darkMode ? "🌙" : "🌞"}
        </div>
      </div>
    </nav>
  );
}
