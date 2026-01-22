import React from 'react';
import './MenuItem.css';

const MenuItem = ({ title, price, description }) => (
  <div className="app__menuitem hover-scale">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="app__menuitem-description">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{description}</p>
    </div>
  </div>
);

export default MenuItem;
