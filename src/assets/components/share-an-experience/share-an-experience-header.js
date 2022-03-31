import React from "react";
//import '@assets/scss/components/share-an-experience/share-an-experience-header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <section className="share-withus-wrapper">
        <div className="custom-container">
          <div className="share-withus-wrapper--header">
            <h2 className="medium-bold-font">
              Share your experience and earn money
            </h2>
            <p className="light-font">
              Join a community of people bringing the world together in a whole
              new way.
            </p>
            <button className="theme-button theme-primary-btn mb-3">
              Get Started
            </button>
          </div>
        </div>
      </section>
    );
  }
}
