import React from "react";
import AboutBannerContent from "../../../components/about-banner-content";
import SocialIcon from "../../../components/social-icon";
import AboutData from "../../../data/about.json";

const AboutBannerContainer = () => {
    return (
        <div className="section about-banner-section overflow-hidden">
            <div className="about-banner d-flex align-items-center">
                <div className="container">
                    <AboutBannerContent data={AboutData[1]} />
                </div>

                <div className="about-banner-image">
                    <img src="/images/headshots/Home-page-hs.jpg" alt="zack" />
                </div>
            </div>

            <ul className="social">
                <li>
                    <SocialIcon
                        path="https://www.linkedin.com/in/zack-anderson-2021/"
                        icon="fab fa-linkedin"
                    />
                </li>
                <li>
                    <SocialIcon
                        path="https://www.facebook.com/Zanderson91"
                        icon="fab fa-facebook-f"
                    />
                </li>
                <li>
                    <SocialIcon
                        path="https://www.github.com/Zanderson91"
                        icon="fab fa-github"
                    />
                </li>
            </ul>
        </div>
    );
};

export default AboutBannerContainer;
