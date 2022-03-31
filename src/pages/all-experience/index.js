import React, { useState } from "react";
import "../../assets/scss/pages/all-experience/index.scss";
import Header from "../../assets/components/home-page//header/index.js";
import ShareExperience from "../../assets/components/home-page/share-experience/index.js";
import Footer from "../../assets/components/home-page/footer/index.js";
import TrendingCards from "../../assets/components/home-page/trending-experience/trending-card.js";

export default function AllExperience() {
  const [trendingArray] = useState([
    {
      imageurl: "/images/home-page/slider/trending-img-1.jpeg",
      experienceCount: "22",
      title: "Drinks",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/trending-img-1.jpeg",
      experienceCount: "22",
      title: "Drinks",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/trending-img-1.jpeg",
      experienceCount: "22",
      title: "Drinks",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/trending-img-1.jpeg",
      experienceCount: "22",
      title: "Drinks",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/trending-img-1.jpeg",
      experienceCount: "22",
      title: "Drinks",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/trending-img-1.jpeg",
      experienceCount: "22",
      title: "Drinks",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/trending-img-1.jpeg",
      experienceCount: "22",
      title: "Drinks",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/trending-img-1.jpeg",
      experienceCount: "22",
      title: "Drinks",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/trending-img-1.jpeg",
      experienceCount: "22",
      title: "Drinks",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/trending-img-1.jpeg",
      experienceCount: "22",
      title: "Drinks",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/trending-img-1.jpeg",
      experienceCount: "22",
      title: "Drinks",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/trending-img-1.jpeg",
      experienceCount: "22",
      title: "Drinks",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/trending-img-1.jpeg",
      experienceCount: "22",
      title: "Drinks",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/trending-img-1.jpeg",
      experienceCount: "22",
      title: "Drinks",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/trending-img-1.jpeg",
      experienceCount: "22",
      title: "Drinks",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/trending-img-1.jpeg",
      experienceCount: "22",
      title: "Drinks",
      text: "Unlock your potential",
    },
    {
      imageurl: "/images/home-page/slider/trending-img-1.jpeg",
      experienceCount: "22",
      title: "Drinks",
      text: "Unlock your potential",
    },
  ]);
  return (
    <div>
      <Header />
      <div className="all-experience-wrapper">
        <div className="container">
          <div className="all-experience-wrapper__header">
            <h2 className="all-experience-wrapper__header-title">
              Online Experiences
            </h2>
            <p className="all-experience-wrapper__header-text">
              Find people with unique experiences and activities - all without
              leaving home
            </p>
          </div>
          <div className="all-experience-wrapper__body">
            <div className="all-experience-wrapper__navigation">
              <ul>
                <li>All Categories</li>
                <li>Trending Experiences</li>
                <li>Popular Experiences</li>
                <li>Weekend Experiences</li>
              </ul>
            </div>
            <div className="tabs">
              {trendingArray.map((cardObj, index) => {
                return (
                  <>
                    <TrendingCards
                      trendingExperiencePropObj={cardObj}
                      key={`trendingcard${index}`}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="margin-bottom-54">
        <ShareExperience />
      </div>
      <Footer />
    </div>
  );
}
