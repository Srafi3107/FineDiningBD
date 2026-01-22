import React from 'react';

import { images } from '../../constants';

const Location = () => (
  <div className="app__bg app__wrapper section-padding glassmorphism" id="contact" style={{ margin: '2rem', borderRadius: '20px' }}>
    <div className="app__wrapper_info" style={{ padding: '2rem' }}>
      <h1 className="headtext__cormorant text-gradient" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans" style={{ color: '#AAAAAA' }}>House #16, Road #27, Dhanmondi, Dhaka 1209</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans" style={{ marginBottom: '0.5rem' }}>Sun - Thur: 12:00 am - 8:00 pm</p>
        <p className="p__opensans">Fri - Sat: 10:00 am - 10:00 pm</p>
      </div>
      <button type="button" className="custom__button hover-scale" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img" style={{ padding: '2rem' }}>
      <img src={images.findus} alt="findus_img" style={{ borderRadius: '20px', boxShadow: 'var(--shadow-luxe)' }} />
    </div>
  </div>
);

export default Location;
