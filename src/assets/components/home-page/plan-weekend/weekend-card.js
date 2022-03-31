import React from "react";

export default function PlanForWeekendCard(props) {
  return (
    <div className="card-container">
      <img
        src={props.planArrayObj.imageurl}
        className="img-fluid card-container__banner-img"
        alt=""
        height="177"
        width="354"
      />
      <div className="card-container__details">
        <div className="d-flex align-items-center justify-content-between">
          <h5>{props.planArrayObj.title}</h5>
          <p className="card-container__details-text">
            {props.planArrayObj.experienceCount}
          </p>
        </div>
        <p className="card-container__details__text">
          {props.planArrayObj.text}
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
          <h6>{props.planArrayObj.name}</h6>
          <p>{props.planArrayObj.location}</p>
        </div>
      </div>
    </div>
  );
}
