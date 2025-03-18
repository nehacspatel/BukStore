import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import { Link } from "react-router-dom";
import './Course.css'
function Course() {
  return (
    <div className="course-container">
      <div className="course-content">
        <h1 className="course-title">
          We're delighted to have you <span className="highlight">Here! :)</span>
        </h1>
        <p className="course-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
          assumenda? Repellendus, iste corrupti? Tempore laudantium repellendus
          accusamus accusantium sed architecto odio, nisi expedita quas quidem
          nesciunt debitis dolore non aspernatur praesentium assumenda sint
          quibusdam, perspiciatis, explicabo sequi fugiat amet animi eos aut.
          Nobis quisquam reiciendis sunt quis sed magnam consequatur!
        </p>
        
        <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        
      </div>

      <div className="course-grid">
        {list.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;