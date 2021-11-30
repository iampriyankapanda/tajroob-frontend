import React from 'react';
import Navigation from './header-navigation'
export default function Header(){
    return(
        <header>
        <div className="header-wrapper">
          <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-between">
            <img src="/images/header-images/logo.svg" className="img-responsive logo-img"/>
            <Navigation/>
            <div className="d-flex">
                <button className="theme-button theme-button__primary mr-2">Sign in</button>
                <button className="theme-button theme-button__secondary">View all experiences</button>
                </div>
                </div>
            </div>
        </div>
    </header>
    );
}