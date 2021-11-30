import React from "react";

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="container">
                <div className="footer-wrapper__header">
                    <p className="footer-wrapper__header-text">Follow us</p>
                </div>
                <div className="footer-wrapper__body d-flex">
                    <div className="flex-1 footer-wrapper-margin">
                        <img src="/images/header-images/logo.svg" className="img-responsive" />
                        <p className="footer-wrapper__body-text">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero’s De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                    </div>
                    <div className="flex-3 d-flex justify-content-between mt-3">
                        <div className="flex-1">
                            <h4 className="mb-3">HELP & SUPPORT</h4>
                            <ul>
                                <li className="d-flex align-items-start mb-1">

                                    <img src="/images/footer-icons/call-back.svg" className="img-responsive mr-2 footer-wrapper__footer-icon" />
                                    <p className="footer-wrapper__body-support">+91 9845198451</p>

                                </li>
                                <li className="d-flex align-items-start mb-1">

                                    <img src="/images/footer-icons/email.svg" className="img-responsive mr-2 footer-wrapper__footer-icon"/>
                                    <p className="footer-wrapper__body-support">+care@.tajaroob.com</p>

                                </li>
                                <li className="d-flex align-items-start">

                                    <img src="/images/footer-icons/business.svg" className="img-responsive mr-2 footer-wrapper__footer-icon"/>
                                    <p className="footer-wrapper__text footer-wrapper__body-support">Shop 5, 189 Queen Street, Melbourne, VIC, 3000 Australia</p>

                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <h4 className="mb-3">OTHERS</h4>
                            <ul className="footer-wrapper__list-wrapper">
                                <li className="footer-wrapper__list">
                                    Home
                                </li>
                                <li className="footer-wrapper__list">
                                    All Experiences
                                </li>
                                <li className="footer-wrapper__list">
                                    Share an Experience
                                </li>
                                <li className="footer-wrapper__list">
                                    Become an Ambassador
                                </li>
                                <li className="footer-wrapper__list">
                                    Help
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <h4 className="mb-3">COMPANY</h4>
                            <ul>
                                <li className="footer-wrapper__list">
                                    About
                                </li>
                                <li className="footer-wrapper__list">
                                    Careers
                                </li>
                                <li className="footer-wrapper__list">
                                    Contact Us
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-wrapper__footer d-flex justify-content-between align-item-center">
                    <ul className="d-flex">
                        <li className="mr-3"><a href="#0">Privacy</a></li>
                        <li><a href="#0">Terms of Service</a></li>
                    </ul>
                    <p>Copyright © Tajaroob. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}