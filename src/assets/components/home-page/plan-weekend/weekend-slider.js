import React from "react";
import PlanForWeekendCard from "../../home-page/plan-weekend/weekend-card.js";

import { useState, useEffect } from "react";

import Swiper, { Navigation, Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

//SwiperCore.use([Navigation]);

Swiper.use([Navigation, Pagination]);

export default function PlanForWeekend() {
  const [planArray] = useState([
    {
      imageurl: "/images/home-page/slider/icon.jpeg",
      experienceCount: "4.6",
      title: "From $ 100 / Person",
      text: "Ancient Secret Masala Ingredients for tasty non-veg Indian food",
      name: "Hafisa Begum",
      location: "India",
    },
    {
      imageurl: "/images/home-page/slider/icon.jpeg",
      experienceCount: "4.6",
      title: "From $ 200 / Person",
      name: "Hafisa Begum",
      location: "India",
      text: "Painting on the wood from professional painting job for large cut outs",
    },
    {
      imageurl: "/images/home-page/slider/icon.jpeg",
      experienceCount: "4.6",
      title: "From $ 100 / Person",
      name: "By Elon Mantana",
      location: "Argentina",
      text: "Professional photography - indoor and out door with editing skills training",
    },
    {
      imageurl: "/images/home-page/slider/icon.jpeg",
      experienceCount: "4.6",
      title: "From $ 200 / Person",
      name: "Hafisa Begum",
      location: "India",
      text: "Painting on the wood from professional painting job for large cut outs",
    },
    {
      imageurl: "/images/home-page/slider/icon.jpeg",
      experienceCount: "4.6",
      title: "From $ 100 / Person",
      name: "By Elon Mantana",
      location: "Argentina",
      text: "Professional photography - indoor and out door with editing skills training",
    },
  ]);
  const initializeSwiper = () => {
    var planingSlider = new Swiper(".plan-swiper", {
      slidesPerView: 3,
      spaceBetween: 15,

      loop: false,

      // Navigation arrows
      navigation: {
        nextEl: ".slider-wrapper-plan__control-btn-next",
        prevEl: ".slider-wrapper-plan__control-btn-prev",
      },
    });
  };
  useEffect(() => {
    initializeSwiper();
  }, []);
  return (
    <>
      <div className="container">
        <div className="slider-wrapper__body">
          <div className="swiper plan-swiper">
            <div className="swiper-wrapper">
              {planArray.map((planningObj, index) => {
                return (
                  <div className="swiper-slide" key={`plan${index}`}>
                    <PlanForWeekendCard planArrayObj={planningObj} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
