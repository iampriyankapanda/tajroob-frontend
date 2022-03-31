import React from 'react';
import '@/assets/scss/components/share-an-experience/work-exp.scss';
import Workcard from '@/components/share-an-experience/work-card.js';

export default class WorkExp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workCardArray: [
        {
          imgURL:'image/share-withus/image1.svg',
          title: 'Start the submission process',
          description:
            'Sign up and set up your profile. Already have an account? Then, let’s get started with your “share an experience” submission process.'
        },
        {
          imgURL:'image/share-withus/share-work-img2.svg',
          title: 'Describe your activity',
          description:
            'We recommend sharing the value of what you’re offering in detail, starting with a lower price until you have some reviews, and setting the length to 90 minutes or less.'
        },
        {
          imgURL:'image/share-withus/share-work-img3.svg',
          title: 'Submit for quick approval',
          description:
            'Once everything else is completed, you’re ready to submit. Our team will read through it and let you know if it’s been approved within 5 working days.'
        }
      ],
    //   initialValue: 'Preity',
    //   initialArray: [1,2,3]
    };
  }
//   changeName = () => {
//     this.setState({
//         initialValue: 'sandeep'
//     })
//   }
//   changeArrayValues = () => {
//       this.setState({
//         initialArray: [5,6,7]
//       })
//   }
  render() {
    const {workCardArray} = this.state;
    return (
      <section className="work-experience-wrapper section-padding">
        <div className="custom-container">
          <div className="work-experience-wrapper--title">
            <h2 className="medium-bold-font">How it works</h2>
            <p className="light-font">
              Its a free platform that empowers you to earn money by sharing
              your experience about anything you love. you’ll need to create a
              new experience and submit it for review following the process
              below.
            </p>
          </div>
          {/* <button onClick={this.changeName}>Change name to sandeep</button>
          <h1>{ this.state.initialValue }</h1>
          <button onClick={this.changeArrayValues}>Change Array to 4,5,6</button>
          <ul>
          {
            this.state.initialArray.map((values, index) => {
              return (
                <li key={index}>{ values }</li>
              )
            })
          }
          </ul> */}
          <div className="work-experience-wrapper--work">
            {
                workCardArray.map((workObj,index) => {
                    return(
                        <Workcard key={index} workCardObj={workObj}/>
                    )
                })
            }
           
          </div>
          <div className="work-experience-wrapper--exp-button text-center mt-5">
            <button className="theme-button theme-primary-btn">
              Start Creating your experience
            </button>
          </div>
        </div>
      </section>
    );
  }
}
