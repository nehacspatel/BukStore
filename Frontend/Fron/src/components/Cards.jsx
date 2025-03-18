import React from "react";
import "./Cards.css"; // Import CSS file

function Cards({ item }) {
    if (!item) {
        return <p>Loading...</p>;
      }
  return (
    <div className="card-container">
      <div className="card">
        <img src={`/${item.image}`} alt="Book Cover" className="card-image" />
        <div className="card-body">
          <h2 className="card-title">
            {item.name} <span className="badge">{item.category}</span>
          </h2>
          <p className="card-text">{item.title}</p>
          <div className="card-actions">
            <span className="price">${item.price}</span>
            <button className="buy-button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
