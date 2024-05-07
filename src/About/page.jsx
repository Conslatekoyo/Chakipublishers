import React from "react";
import './style.css';
import { VectorElement } from "../Atoms/aboutAtoms";


const About = () => {
    return (
        <div className="about-centred-section">
          <div className="about-section-container">
            <div className="header" id="about">
                <h1 className="about-title">About Us</h1>

                <h2 className="mission">Mission</h2>
                <p className="goals"> To transform authors' dreams into inspiring literary works, captivating readers of all ages.</p>

                <h2 className="mission">Vision</h2>
                <p className="goals">A world where every story is shared and cherished, connecting hearts and minds across different cultures.</p>
            </div>
            <div className="value">
      <div className="header">
      <h1 className="core">Our Services</h1>
      </div>
        <div className="values-container">
        <VectorElement backgroundColor="#093121" triangleColor="#093121" h1=" Full Manusript Evaluation"  text="Dedicated to personalized author support, we offer a full manuscript evaluation to assess potential and refine manuscripts. With readiness, we seamlessly navigate the publishing journey, ensuring a smooth transition to a published masterpiece." imageUrl="images/environment.png" />
        <VectorElement backgroundColor="#093121" triangleColor="#093121" h1="Editing, Proofreading and Quality Assurance"  text=" From developmental editing to enhance structure and content, to copy and line editing refining prose, and proofreading for error elimination, we ensure your manuscript meets the highest quality standards.

" imageUrl="images/community.png"   />
        <VectorElement backgroundColor="#093121" triangleColor="#093121" h1="Design, Layout, Distribution and Digital Services"  text="We manage design distribution, royalties, and eBook creation for major platforms like Kindle and Apple Books, also offering print-on-demand paperback and optional hardcover printing for a traditional touch." imageUrl="images/awareness.png" />
      </div>
      <div className="values-container">
        <VectorElement backgroundColor="#093121" triangleColor="#093121" h1="Audiobooks"  text="Understanding the growing popularity of audiobooks, we offer audiobook creation and distribution services to make your book accessible on leading platforms like Audible, Kobo, and AppleBooks." imageUrl="images/advocacy.png" />
        <VectorElement backgroundColor="#093121" triangleColor="#093121" h1="Marketing Support and Additional Services"  text="We offer copyrighting, ISBN cataloging, professional author photos, and tailored marketing materials. Our comprehensive support includes strategic marketing development." imageUrl="images/research.png"   />
      </div>
      </div>
      </div>
      </div>
    );
  };

  export default About