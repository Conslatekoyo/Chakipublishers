import React from "react";
import "./style.css";
import CausesElement from "../Atoms/causes";

const Causes = () => {
  return (
    <div>
      <h1 className="causes-title"  id="causes">Why work with Us</h1>
    <div className="our-causes ">
      <CausesElement
        h1="Personalized Services"
        imageUrl="images/sustain.png"
        text="Tailored publishing service supports authors from manuscript evaluation to launch, ensuring success with dedicated guidance and attention to detail."
      />
            <CausesElement
        h1="Simplified Process"
        imageUrl="images/inspo.png"
        text="Our streamlined self-publishing approach removes complexities, making publishing accessible and understandable. We handle editing, design, distribution, and marketing, freeing authors to focus on writing."
      />
            <CausesElement
        h1="Quality and Excellence"
        imageUrl="images/earth.png"
        text="We ensure quality in every service, from editing to design and marketing, enhancing your book's market presence with dedicated excellence."
      />
    </div>
    </div>
  );
};

export default Causes;
