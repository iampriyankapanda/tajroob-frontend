import React from "react";

export default function PlanForWeekendCard() {
  return (
    <div className="card-container">
      <img
        src="/images/home-page/slider/icon.jpeg"
        className="img-fluid card-container__banner-img"
        alt=""
        height="177"
        width="354"
      />
      <div className="card-container__details">
        <div className="d-flex align-items-center justify-content-between">
          <h5>From $ 100 / Person</h5>
          <p className="card-container__details-text">4.6</p>
        </div>
        <p className="card-container__details__text">
          Ancient Secret Masala Ingredients for tasty non-veg Indian food
        </p>
      </div>
      <div className="d-flex card-container__person-info align-items-center">
        <img
          src="/images/home-page/slider/icon.jpeg"
          height="48"
          width="48"
          className="img-fluid card-container__person-info-img"
        />
        <div className="card-container__person-info-details">
          <h6>Hafisa Begum</h6>
          <p>India</p>
        </div>
      </div>
    </div>
  );
}
