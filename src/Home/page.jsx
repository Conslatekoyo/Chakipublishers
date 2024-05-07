import React from "react";

import './style.css';

const HomePage = () => {
  return (
    <div className="home-section" data-testid="home-section" id="home">
      <div className="intro">
        <h1>Chaki Publishers</h1>

      </div>
      <div className="join-us">
        <p>
        
        </p>

      </div>
      <div>
      <h1 className="slogan">Giving life to ideas</h1>

      </div>
      <div className="buttons">
      <button className="donate">

        <span className="donate-text">Donate Now</span>
      </button>
          <button className="causes">
            <span className="causes-text">See Causes</span>
          </button>

      </div>
    </div>
  );
};

export default HomePage;