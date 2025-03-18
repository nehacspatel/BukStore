import React from "react";
import "./Footer.css"; // Import the CSS file

function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <footer className="footer">
        <nav className="footer-links">
          <a href="#">About us</a>
          <a href="#">Contact</a>
          <a href="#">Jobs</a>
          <a href="#">Press kit</a>
        </nav>
        <nav className="social-icons">
          <a href="#">
            <img src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png" alt="Twitter" />
          </a>
          <a href="#">
            <img src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?semt=ais_hybrid" alt="YouTube" />
          </a>
          <a href="#">
            <img src="https://cdn-icons-png.freepik.com/256/5968/5968764.png?semt=ais_hybrid" alt="Facebook" />
          </a>
        </nav>
        <aside>
          <p>Copyright © 2025 - All rights reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
