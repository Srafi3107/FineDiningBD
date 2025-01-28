import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">MENU</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_cousines  flex__center">
        <p className="app__specialMenu-menu_heading">Lunch and Dinner</p>
        <div className="app__specialMenu_menu_items">
          {data.cousines.map((cousines, index) => (
            <MenuItem key={cousines.title + index} title={cousines.title} price={cousines.price} description={cousines.description}/>
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">

      </div>

      <div className="app__specialMenu-menu_drinks  flex__center">
        <p className="app__specialMenu-menu_heading">Drinks</p>
        <div className="app__specialMenu_menu_items">
          {data.drinks.map((drinks, index) => (
            <MenuItem key={drinks.title + index} title={drinks.title} price={drinks.price} description={drinks.description} />
          ))}
        </div>
      </div>
    </div>

  
  </div>
);

export default SpecialMenu;