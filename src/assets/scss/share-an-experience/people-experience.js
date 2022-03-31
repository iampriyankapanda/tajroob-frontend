import React from 'react';
import '@/assets/scss/components/share-an-experience/work-exp.scss';
import Peoplecard from '@components/share-an-experience/people-card.js';

export default class WorkExp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleCardArray: [
        {
          imgURL:'image/share-withus/people/image1.png',
          title: 'James Smith',
          description:
            'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
        },
        {
          imgURL:'image/share-withus/people/share-people-img1.png',
          title: 'Sara Rodriguez',
          description:
            'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
        },
        {
          imgURL:'image/share-withus/people/share-people-img3.png',
          title: 'Mohammed Rafi',
          description:
            'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
        }
      ]
    };
  }
  render() {
    const { peopleCardArray } = this.state;
    return (
      <section className="work-experience-wrapper bg-color section-padding">
        <div className="custom-container">
          <div className="work-experience-wrapper--title text-center">
            <h2 className="medium-bold-font">
              How people are sharing their world
            </h2>
            <p className="light-font">
              These creators bring the spirit of experiences to the screen with
              unique small-group activities to do together while we’re apart.
            </p>
          </div>
          <div className="d-flex aling-items-center justify-content-between flex-direction-column-mobile">
            {peopleCardArray.map((peopleObj, index) => {
              return <Peoplecard key={index} peopleCardObj={peopleObj} />;
            })}
          </div>
          <div className="work-experience-wrapper--exp-button text-center mt-5">
            <button className="theme-button theme-primary-btn">
              View all experiences
            </button>
          </div>
        </div>
      </section>
    );
  }
}
