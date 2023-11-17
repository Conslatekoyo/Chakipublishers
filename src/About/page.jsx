import React from "react";
import './style.css';
import { VectorElement } from "../Atoms/aboutAtoms";


const About = () => {
    return (
        <div className="about-centred-section">
          <div className="about-section-container">
            <div className="header" id="about">
                <h1 className="about-title">About Us</h1>
                <h2 className="mision">Mission</h2>
                <p className="goals"> We work collaboratively with local communities, striving to develop and implement sustainable solutions that uplift living conditions and safeguard the environment.
.</p>
                <h2 className="mision">Vision</h2>
                <p className="goals">Creating sustainable green landscapes and thriving ecosystems in semi-desert regions, Fostering Bio diversity, Mitigating climate change and improving the livelihoods of local communities.</p>
            </div>
            <div className="value">
      <div className="header">
      <h1 className="core">Our Goals and Objectives</h1>
      </div>
        <div className="values-container">
        <VectorElement backgroundColor="#093121" triangleColor="#093121" h1=" Environmental Transformation"  text="Transform semi-deserts into green havens through ecosystem restoration, boost biodiversity with reforestation, and combat climate change." imageUrl="images/environment.png" />
        <VectorElement backgroundColor="#093121" triangleColor="#093121" h1="Community Empowerment"  text="Work with communities, address needs, improve living conditions sustainably, and empower with skills/resources, reducing reliance on fragile ecosystems.

" imageUrl="images/community.png"   />
        <VectorElement backgroundColor="#093121" triangleColor="#093121" h1="Education and Awareness"  text="Increase awareness, provide education, and inspire positive change through success stories and best practices." imageUrl="images/awareness.png" />
      </div>
      <div className="values-container">
        <VectorElement backgroundColor="#093121" triangleColor="#093121" h1="Advocacy and Partnerships"  text="Champion policies for environmental protection, build strong partnerships for collective impact, and engage in international collaborations to share." imageUrl="images/advocacy.png" />
        <VectorElement backgroundColor="#093121" triangleColor="#093121" h1="Research and Innovation"  text="Conduct innovative research addressing environmental challenges in semi-desert regions and contribute findings to the global body of knowledge on sustainable development." imageUrl="images/research.png"   />
      </div>
      </div>
      </div>
      </div>
    );
  };

  export default About