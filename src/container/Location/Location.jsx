import React from 'react';

import { images } from '../../constants';

const Location = () => (
  <div className="app__bg app__wrapper section__padding" id="contact" style={{ background: 'var(--color-black)', paddingTop: '0' }}>
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">House #16, Road #27, Dhanmondi, Dhaka 1209</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Sun - Thur: 12:00 am - 8:00 pm</p>
        <p className="p__opensans">Fri - Sat: 10:00 am - 10:00 pm</p>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus_img" />
    </div>
  </div>
);

export default Location;
