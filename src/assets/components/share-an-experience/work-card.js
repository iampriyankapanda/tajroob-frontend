import React from "react";
//import '@assets/scss/components/share-an-experience/work-crad.scss';
//import Image1 from '@assets/images/share-withus/work/image1.svg';

export default class WorkCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="work-card-wrapper">
        <img
          src={this.props.workCardObj ? this.props.workCardObj.imgURL : ""}
          className="img-fluid"
        />
        <h5 className="medium-bold-font">
          {this.props.workCardObj ? this.props.workCardObj.title : ""}
        </h5>
        <p className="light-font">
          {this.props.workCardObj ? this.props.workCardObj.description : ""}
        </p>
      </section>
    );
  }
}
