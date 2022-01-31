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
      imageurl: "/images/home-page/slider/trending-img-1.jpeg",
      experienceCount: "22",
      title: "Drinks",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/books.jpeg",
      experienceCount: "22",
      title: "Books",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/books.jpeg",
      experienceCount: "22",
      title: "Books",
      text: "Unlock your potential",
    },
  ]);
  const initializeSwiper = () => {
    var trendingSlider = new Swiper(".plan-swiper", {
      slidesPerView: 3,
      spaceBetween: 15,

      loop: false,

      // Navigation arrows
      navigation: {
        nextEl: ".slider-wrapper__control-btn-next",
        prevEl: ".slider-wrapper__control-btn-prev",
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
              {planArray.map((trendingObj, index) => {
                return (
                  <div className="swiper-slide" key={`plan${index}`}>
                    <PlanForWeekendCard />
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
