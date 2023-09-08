import React from "react";
import "./index.css"

// Displays each drawing, and imports from my idex.css file to apply styling. 
// The styling elements applied here let the title display on a white field (for visibility)
// when a user hovers over an image. 


const ArtCard = ({ drawing }) => {
  return (
    <div className="ArtCard">
      <img className="art-card-image" src={drawing.image} alt={drawing.id} />
      <h2 className="art-card-title">{drawing.title}</h2>
    </div>
  );
};

export default ArtCard;

