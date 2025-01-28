import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
  

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">House #16, Road #27, Dhanmondi, Dhaka 1209</p>
        <p className="p__opensans">01824721481</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo} alt="Fine Dining Logo" className="app__navbar-logo-img" />
      <h1 className="app__footer-headtext">Fine Dining BD</h1>
        <p className="p__opensans">&quot;Experience the rich flavors of Bangladesh in a sophisticated, modern fine dining setting&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Sunday-Thursday:</p>
        <p className="p__opensans">08:00 am - 09:00 pm</p>
        <p className="p__opensans">Friday-Saturday:</p>
        <p className="p__opensans">08:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Rafi. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;