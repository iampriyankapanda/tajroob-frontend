import React from 'react';
import '@/assets/scss/components/home/share-experience/share-experience.scss';
import ShareExp from '@/assets/images/share-withus/ambasador.svg';

export default class ShareEperience extends React.Component {
  render() {
    return (
      <section className="share-experience-wrapper section-padding">
        <div className="custom-container">
          <div className="d-flex justify-content-between flex-direction-column-reverse-mobile border-green">
            <div className="share-experience-wrapper--content">
              <h2 className="medium-bold-font">
              Become an Ambassador and earn money
              </h2>
              <p className="light-font">Join a community of people bringing the world together in a whole new way.</p>
              <div className="share-experience-buttons">
                  <button className="theme-button theme-secondary-btn mr-0 mr-sm-3 mb-2 mb-sm-0 margin-right">Learn More</button>
                  <button className="theme-button theme-primary-btn">Get Started</button>
              </div> 
            </div>
            <div className="share-experience-wrapper--image">
              <img
                src={ShareExp}
                className="img-fluid"
                alt="experience-image"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
