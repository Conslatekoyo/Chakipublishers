import React from "react";

import './style.css';

const HomePage = () => {
  return (
    <div className="home-section" data-testid="home-section" id="home">
      <div className="intro">
        <h1>Greening Futures Empowering Lives</h1>

      </div>
      <div className="join-us">
        <p>
        Join us in creating sustainable green landscapes and thriving ecosystems in semi-desert regions, 
        fostering biodiversity, mitigating climate change, and improving the livelihoods of local communities.
        </p>

      </div>
      <div>
      <h1 className="slogan">Together We Can Make a difference</h1>

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