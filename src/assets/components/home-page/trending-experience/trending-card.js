export default function TrendingCard(props) {
  const trendingObj = props.trendingExperiencePropObj;
  console.log(trendingObj);
  return (
    <div className="slider-wrapper__slider-item">
      <img
        src={trendingObj?.imageurl}
        className="img-fluid slider-wrapper__slider-image"
        alt=""
      />
      <div className="slider-wrapper__slider-item-details">
        <h6>{trendingObj?.text}</h6>
        <h5>{trendingObj?.title}</h5>
      </div>
      <div className="d-flex align-items-center slider-wrapper__slider-item-exp-count">
        <p className="slider-wrapper__slider-item-exp-count-text">
          {`${trendingObj?.experienceCount} Experiences`}
        </p>

        <img
          src="/images/generic-icons/arrow-right.svg"
          className="img-fluid"
        />
      </div>
    </div>
  );
}
