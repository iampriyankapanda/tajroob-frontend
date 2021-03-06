import { useState, useEffect } from "react";

import Swiper, { Navigation, Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

import TrendingCard from "./trending-card.js";

//SwiperCore.use([Navigation]);

Swiper.use([Navigation, Pagination]);

export default function TrendingSlider() {
  const [trendingExperienceArray] = useState([
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
      imageurl: "/images/home-page/slider/music.jpeg",
      experienceCount: "22",
      title: "Music",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/photography.jpeg",
      experienceCount: "22",
      title: "Photography",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/trending-img-1.jpeg",
      experienceCount: "22",
      title: "Drinks",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/books.jpeg",
      experienceCount: "22",
      title: "Drinks",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/photography.jpeg",
      experienceCount: "22",
      title: "Drinks",
      text: "Unlock your potential",
    },
  ]);
  const initializeSwiper = () => {
    var trendingSlider = new Swiper(".trending-exp-swiper", {
      slidesPerView: 5,
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
          <div className="swiper trending-exp-swiper">
            <div className="swiper-wrapper">
              {trendingExperienceArray.map((trendingObj, index) => {
                return (
                  <div className="swiper-slide" key={`trending${index}`}>
                    <TrendingCard trendingExperiencePropObj={trendingObj} />
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
