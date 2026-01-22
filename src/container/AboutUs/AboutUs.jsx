import React, { useState } from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [historyExpanded, setHistoryExpanded] = useState(false);

  const toggleAbout = () => setAboutExpanded(prevState => !prevState);
  const toggleHistory = () => setHistoryExpanded(prevState => !prevState);

  return (
    <div className="app__aboutus app__bg flex__center section-padding" id="about">
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant text-gradient">About Us</h1>

          <p className="p__opensans" style={{ margin: '2rem 0', color: '#AAAAAA' }}>
            At FINE DINING BD, we blend the rich flavors of Bangladesh with fine dining to create an unforgettable culinary experience
          </p>
          {aboutExpanded && (
            <p className="p__opensans" style={{ marginBottom: '2rem', color: '#AAAAAA' }}>
              Our team is dedicated to delivering excellence in every dish, ensuring a refined experience through impeccable service, vibrant ambiance, and the best of Bangladeshi ingredients. We aim to bring authentic local flavors, complemented by a sophisticated twist, to every guest who walks through our doors.
            </p>
          )}
          <button type="button" className="custom__button hover-scale" onClick={toggleAbout}>
            {aboutExpanded ? 'Show Less' : 'Know More'}
          </button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant text-gradient">Our History</h1>
          <p className="p__opensans" style={{ margin: '2rem 0', color: '#AAAAAA' }}>
            Founded to celebrate Bangladesh’s culinary heritage, FINE DINING BD blends authentic flavors with fine dining, offering a sophisticated experience that elevates local ingredients and traditional recipes.
          </p>
          {historyExpanded && (
            <p className="p__opensans" style={{ marginBottom: '2rem', color: '#AAAAAA' }}>
              Our roots trace back to a small family kitchen where the love for cooking and dedication to quality first began. We have since grown into a renowned dining experience, maintaining our core values of authenticity, hospitality, and excellence in every dish. Our history is built on a foundation of respect for tradition while embracing innovation to create a modern fine dining experience.
            </p>
          )}
          <button type="button" className="custom__button hover-scale" onClick={toggleHistory}>
            {historyExpanded ? 'Show Less' : 'Know More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
