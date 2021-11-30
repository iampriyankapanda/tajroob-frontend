import React from 'react';
import '../../assets/scss/pages/home-page/index.scss';
import Header from '../../assets/components/home-page//header/index.js';
import Banner from '../../assets/components/home-page/banner/index.js';
import Experiences from '../../assets/components/home-page/experiences/index.js';
import ShareExperience from '../../assets/components/home-page/share-experience/index.js';
import Footer from '../../assets/components/home-page/footer/index.js';
export default function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <Experiences/>
      <ShareExperience/>
      <Footer/>
    </>
  );
}