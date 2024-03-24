import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import ContactContainer from "../containers/contact";
import Layout from "../layouts";
import Header from "../layouts/header";
import Footer from "../layouts/footer";

const ContactPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Zack Anderson - Contact" />
                <div className="main-wrapper">
                    <Header />
                    <ContactContainer />
                    <Footer />
                </div>
                <ScrollToTop />
            </Layout>
        </React.Fragment>
    );
};

export default ContactPage;
