import React from "react";
import WeekendSlider from "../../home-page/plan-weekend/weekend-slider.js";

export default function TrendingProperties() {
  return (
    <>
      <div className="slider-wrapper">
        <div className="container slider-wrapper__container">
          <div className="slider-wrapper__header d-flex align-items-center justify-content-between">
            <h3 className="slider-wrapper__title">Plan For Weekend</h3>
            <div className="slider-wrapper__link d-flex align-items-center">
              <a href="#0">View all categoriess</a>
              <div className="slider-wrapper__slider-controls d-flex">
                <button className="slider-wrapper__control-btn slider-wrapper-plan__control-btn-prev">
                  <img
                    src="/images/generic-icons/arrow-left.svg"
                    className="img-fluid"
                  />
                </button>
                <button className="slider-wrapper__control-btn slider-wrapper-plan__control-btn-next slider-wrapper__control-btn--margin">
                  <img
                    src="/images/generic-icons/arrow-right-black.svg"
                    className="img-fluid"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <WeekendSlider />
      </div>
    </>
  );
}
