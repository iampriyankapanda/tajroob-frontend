import React from "react";
//import "@assets/scss/components/share-an-experience/share-an-experience-banner.scss";

import Swiper from "swiper/bundle";
import "swiper/swiper.scss";

export default class ShareBanner extends React.Component {
  initiShareWitsusSlider() {
    new Swiper(".share-banner-slider", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        loop: true,
      },
    });
  }
  componentDidMount() {
    this.initiShareWitsusSlider();
  }
  render() {
    return (
      <section className="share-withus-banner-wrapper position-realtive">
        <div className="swiper-container share-banner-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src={BannerImage}
                className="img-fluid"
                alt="share-withus-banner"
              />
            </div>
            <div className="swiper-slide">
              <img
                src={BannerImage}
                className="img-fluid"
                alt="share-withus-banner"
              />
            </div>
            <div className="swiper-slide">
              <img
                src={BannerImage}
                className="img-fluid"
                alt="share-withus-banner"
              />
            </div>
          </div>
          <div className="swiper-pagination"></div>
          <div className="share-withus-banner-wrapper--slider-controls d-none-mobile">
            <div className="swiper-button-prev img-bg img-prev">
              <img src={Arrowback} />
            </div>
            <div className="swiper-button-next img-bg img-next">
              <img src={Arrowforward} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
