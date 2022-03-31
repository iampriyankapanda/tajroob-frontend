import React from "react";
//import '@assets/scss/components/share-an-experience/people-card.scss';
//import Image1 from '@assets/images/share-withus/people/image1.png';

export default class WorkCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="people-card-wrapper mb-5 mb-sm-0">
        <img
          src={this.props.peopleCardObj ? this.props.peopleCardObj.imgURL : ""}
          className="img-fluid"
        />
        <h5 className="medium-bold-font">
          {this.props.peopleCardObj ? this.props.peopleCardObj.title : ""}
        </h5>
        <p className="light-font">
          {this.props.peopleCardObj ? this.props.peopleCardObj.description : ""}
        </p>
        <a href="#0">Go to experience</a>
      </section>
    );
  }
}
