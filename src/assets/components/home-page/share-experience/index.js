import React from 'react';

export default function HomePageShareExperience() {
    return (
        <div className="share-experience-wrapper">
            <div className="d-flex justify-content-between">
                <div className="flex-1 share-experience-wrapper__details">
                    <h2 className="share-experience-wrapper__details-title">Share your experience and earn money</h2>
                    <p className="share-experience-wrapper__details-text">Join a community of people bringing the world together in a whole new way.</p>
                    <button className="theme-button theme-button__primary mr-3">Learn more</button>
                    <button className="theme-button theme-button__secondary">Get Started</button>
                </div>
                <div className="flex-1 d-flex justify-content-end">
                    <img src="/images/home-page/ask-community.png" className="img-responsive share-experience-wrapper__image" />
                </div>
            </div>
        </div>
    );
}