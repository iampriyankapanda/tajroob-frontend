import React from 'react';

export default function HomePageBanner() {
    return (

        <div className="banner-wrapper d-flex">
         <div className="banner-wrapper__elements text-center">
         <h1 className="banner-wrapper__heading">Online Experiences</h1>
         <p className="banner-wrapper__description">Find people with unique experiences and activities - all without leaving home</p>
         <button className="theme-button theme-button__secondary">View all experiences</button>
         </div>
        </div>
    );
}