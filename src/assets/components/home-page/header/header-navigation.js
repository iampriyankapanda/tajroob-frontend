import React from 'react';

export default function HomePageNavigation(){
    return(
        <ul className="d-flex navigation-header">
        <li className="navigation-header__list"><a href="#0" className="navigation-header__link active">Home</a></li>
        <li className="navigation-header__list"><a href="#0" className="navigation-header__link">All Experiences</a></li>
        <li className="navigation-header__list"><a href="#0" className="navigation-header__link">Share an Experience</a></li>
        <li className="navigation-header__list"><a href="#0" className="navigation-header__link">Become an Ambassador</a></li>
      </ul>
    );
}