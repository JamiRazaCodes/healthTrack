import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import landingPageData from "../Webdata/webdata";

function Hero() {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    arrows: true, 
  };

  const { slides } = landingPageData;

  return (
    <div className="hero-slider relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative slide">
            <img src={slide.img} alt={`Slide ${index + 1}`} className="w-full h-auto" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50 z-10">
              <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Hero;
