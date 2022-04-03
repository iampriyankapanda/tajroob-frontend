import React from "react";

export default function HomePageBanner() {
  return (
    <div className="main-banner-wrapper">
      <img
        src="/images/home-page/banner/home-banner-image.jpeg"
        className="img-fluid banner-image"
      />
      <div className="banner-wrapper">
        <div className="banner-wrapper__elements text-center">
          <h1 className="banner-wrapper__heading">Online Experiences</h1>
          <p className="banner-wrapper__description">
            Find people with unique experiences and activities - all without
            leaving home
          </p>
          <button className="theme-button theme-button__secondary mb-3">
            View all experiences
          </button>
        </div>
      </div>
    </div>
  );
}
