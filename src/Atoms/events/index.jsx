import React from "react";
import "./style.css"; // Import your CSS file

const EventsAtom = ({ imageUrl, h1, text }) => {
  return (
    <div className="events-atom-container">
      <div className="flex-container">
        <div className="icons">
          {imageUrl && (
            <img
              src={imageUrl}
              alt="EventElement"
              className="imageStyl"
            />
          )}
        </div>
        <div className="events-words">
          {h1 && <div className="divH1">{h1}</div>}
          {text && <div className="text1">{text}</div>}
          <button className="learn-more">
            <span className="causes-text">Learn More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsAtom;
