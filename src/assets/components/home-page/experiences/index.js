import React from 'react';

export default function HomePageExperience() {
    return (
        <div className="experience-wrapper">
            <div className="container d-flex justify-content-between">
                <div className="flex-1 experience-wrapper__details">
                    <h2 className="experience-wrapper__details-title">A whole world of people with experiences ready to share at your finger tips</h2>
                    <ul>
                        <li>
                            <div className="experience-wrapper__details-information d-flex align-items-start">
                                <div className="mr-2">
                                    <img src="/images/generic-icons/check-circle.svg" className="img-responsive" />
                                </div>
                                <div className="experience-wrapper__details-information-exp">
                                    <h3 className="experience-wrapper__details-information-title">Find your experience</h3>
                                    <p className="experience-wrapper__details-information-text">Browse and choose your favorite online experience. Your host can answer all your questions!</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="experience-wrapper__details-information d-flex align-items-start">
                                <div className="mr-2">
                                    <img src="/images/generic-icons/check-circle.svg" className="img-responsive" />
                                </div>
                                <div className="experience-wrapper__details-information-exp">
                                    <h3 className="experience-wrapper__details-information-title">Easily Book</h3>
                                    <p className="experience-wrapper__details-information-text">Ready to book? Choose your preferred date and time.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="experience-wrapper__details-information d-flex align-items-start">
                                <div className="mr-2">
                                    <img src="/images/generic-icons/check-circle.svg" className="img-responsive" />
                                </div>
                                <div className="experience-wrapper__details-information-exp">
                                    <h3 className="experience-wrapper__details-information-title">Enjoy privately or with a group</h3>
                                    <p className="experience-wrapper__details-information-text">The link to your video call will work on any device.</p>
                                </div>

                            </div>
                            <a href="#0" className="experience-wrapper__details-information-link">Watch How it works</a>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <img src="/images/home-page/experience-image.png" className="img-responsive experience-wrapper__image" />
                </div>
            </div>
        </div>
    );
}