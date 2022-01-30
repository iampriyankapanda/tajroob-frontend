import React from "react";
import PopularSlider from "./most-popular-slider.js";

export default function MostPopular() {
  return (
    <>
      <div className="slider-wrapper">
        <div className="container slider-wrapper__container">
          <div className="slider-wrapper__header d-flex align-items-center justify-content-between">
            <h3 className="slider-wrapper__title">Most Popular</h3>
            <div className="slider-wrapper__link d-flex align-items-center">
              <a href="#0">View all categoriess</a>
              <div className="slider-wrapper__slider-controls d-flex">
                <button className="slider-wrapper__control-btn slider-wrapper__control-btn-back">
                  <img
                    src="/images/generic-icons/arrow-left.svg"
                    className="img-fluid"
                  />
                </button>
                <button className="slider-wrapper__control-btn slider-wrapper__control-btn-front slider-wrapper__control-btn--margin">
                  <img
                    src="/images/generic-icons/arrow-right-black.svg"
                    className="img-fluid"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <PopularSlider />
      </div>
    </>
  );
}
