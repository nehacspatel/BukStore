import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
import "./Courses.css"; // Import CSS file

function Courses() {
  
  return (
    <>
      <Navbar />
      <div className="courses-container">
        <h1 className="courses-title">Explore Our Courses</h1>
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
