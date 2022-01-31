import React from "react";
import "../../assets/scss/pages/home-page/index.scss";
import Header from "../../assets/components/home-page//header/index.js";
import Banner from "../../assets/components/home-page/banner/index.js";
import Experiences from "../../assets/components/home-page/experiences/index.js";
import ShareExperience from "../../assets/components/home-page/share-experience/index.js";
import Footer from "../../assets/components/home-page/footer/index.js";
import Testimonial from "../../assets/components/home-page/testimonial/index.js";
import TrendingProperties from "../../assets/components/home-page/trending-experience/index.js";
import PopularSlider from "../../assets/components/home-page/most-popular/index.js";
import PlanForWeekend from "../../assets/components/home-page/plan-weekend/weekend-slider.js";
export default function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <TrendingProperties />
      <PopularSlider />
      <Experiences />
      <Testimonial />
      <ShareExperience />
      <PlanForWeekend />
      <Footer />
    </>
  );
}
