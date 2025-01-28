import React from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import "./Header.css";


import welcomeImage from "../../assets/welcome.jpg";
import ilishImage from "../../assets/ilish.jpg";
import kalaBhunaImage from "../../assets/kala bhuna.jpg";

const Header = () => {

  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

  return (
    <div className="app__header section__padding" id="home">

      <div className="app__header_text">
        <h1 className="header__title">Welcome to Fine Dining BD</h1>
        <p className="header__subtitle">
          Experience culinary excellence at its finest.
        </p>
      </div>


      <div className="app__header_slider">
        <Slider {...settings}>
          <div>
            <img src={welcomeImage} alt="Slide 1" className="header__slide-img" />
          </div>
          <div>
            <img src={ilishImage} alt="Slide 2" className="header__slide-img" />
          </div>
          <div>
            <img src={kalaBhunaImage} alt="Slide 3" className="header__slide-img" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Header;
