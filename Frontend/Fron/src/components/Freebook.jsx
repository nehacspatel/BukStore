import React, { useEffect, useState } from "react";
import "./Freebook.css"; // Import CSS

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from '../../public/list.json';

import Cards from "./Cards";

function Freebook() {
    const [list, setList] = useState([]);

    useEffect(() => {
      fetch("/list.json")
        .then((res) => res.json())
        .then((data) =>setList(data))
       
        .catch((err) => console.error("Error fetching data:", err));
    }, []);
    const filteredData = list.filter((data) => data.category === "Free");
  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="freebook-container">
      <div className="freebook-header">
        <h1>Free Offered Courses</h1>
        <p>
          Explore our collection of free books to enhance your knowledge and
          skills.
        </p>
      </div>

      <Slider {...settings} className="slider-container">
        {filteredData.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Freebook;
