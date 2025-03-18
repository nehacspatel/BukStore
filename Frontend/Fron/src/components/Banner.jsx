import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-content">
        {/* Left Side - Text Section */}
        <div className="text-section">
          <h1>
            Hello, welcome here to learn something{" "}
            <span className="highlight">new every day!!!</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor et
            totam. Tempora amet atque expedita, quae corrupti totam sed pariatur
            corporis at veniam est voluptas animi!
          </p>
          <div className="input-container">
            <input type="text" placeholder="Email" />
          </div>
          <button className="btn">Get Started</button>
        </div>

        {/* Right Side - Image Section */}
        <div className="image-section">
          <img src="/Banner.jpg" alt="Banner" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
