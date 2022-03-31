import React from "react";
import ExperienceHeader from "../../assets/components/share-an-experience/share-an-experience-header";
import ShareBanner from "../../assets/components/share-an-experience/share-an-experience-banner.js";
import WorkExperience from "../../assets/components/share-an-experience/work-experience.js";
import PeopleExperience from "../../assets/components/share-an-experience/people-experience.js";
import Accordian from "../../assets/components/share-an-experience/accordian.js";
import Ambasador from "../../assets/components/share-an-experience/ambasador.js";

export default class ShareAnexperience extends React.Component {
  render() {
    return (
      <div className="share-with-us mt-5">
        <ExperienceHeader />
        <ShareBanner />
        <WorkExperience />
        <PeopleExperience />
        <Accordian />
        <Ambasador />
      </div>
    );
  }
}
