import React from "react";
import "./style.css";
import CausesElement from "../Atoms/causes";

const Causes = () => {
  return (
    <div>
      <h1 className="causes-title"  id="causes">Our Major Causes</h1>
    <div className="our-causes ">
      <CausesElement
        h1="Preserve Collaboratively"
        imageUrl="images/sustain.png"
        text="Join us for environmental sustainability! Be an inspiration, lend your support, or become a dedicated volunteer and make a lasting impact on our planet."
      />
            <CausesElement
        h1="Green Inspiration"
        imageUrl="images/inspo.png"
        text="Inspire change for a greener world. Your support, whether through spreading awareness or volunteering, helps us drive environmental sustainability forward."
      />
            <CausesElement
        h1="Earth Champions"
        imageUrl="images/earth.png"
        text="Become an Earth Champion! Your inspiration or volunteer efforts are vital in our mission to create a sustainable and thriving planet. Join us in making a difference today!"
      />
    </div>
    </div>
  );
};

export default Causes;
