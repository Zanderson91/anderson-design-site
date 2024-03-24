import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import AboutAward from "../containers/about/about-awards";
import AboutBannerContainer from "../containers/about/about-banner-container";
import BrandTwoContainer from "../containers/global/brand-two";
// import SkillContainer from "../containers/global/skill";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import HomeAbout from "../containers/home/about";
import IconBoxContainer from "../containers/home/icon-box";

const AboutPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Zack Anderson - About Me" />
                <div className="main-wrapper">
                    <Header />
                    <AboutBannerContainer />
                    <BrandTwoContainer />
                    <HomeAbout />
                    <IconBoxContainer />
                    {/* <SkillContainer /> */}
                    <AboutAward />
                    <Footer />
                </div>
                <ScrollToTop />
            </Layout>
        </React.Fragment>
    );
};

export default AboutPage;
