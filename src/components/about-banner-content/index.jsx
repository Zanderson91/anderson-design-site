// eslint-disable-next-line
import { Link } from "react-router-dom";
import PropsTypes from "prop-types";
import SectionTitle from "../section-title";

const AboutBannerContent = ({ data }) => {
  return (
    <div className="about-banner-content">
      <h1
        className="banner-title"
        data-aos="fade-up"
        dangerouslySetInnerHTML={{
          __html: data.title,
        }}
      ></h1>

      <div className="banner-social" data-aos="fade-up" data-aos-duration="600">
        <p>{data.excerpt}</p>
        <ul>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="github"
              href="https://www.linkedin.com/in/zack-anderson-2021/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="behance"
              href="https://www.facebook.com/Zanderson91"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>

      <div
        className="banner-service"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <SectionTitle classOption="section-title-2" title="Services" />
        <h4 className="service-text">
          <span>
            UX Design, User Research and Analysis, <br />
            Responsive Web Design &amp; UX Strategy Consulting
          </span>
        </h4>
      </div>
    </div>
  );
};

AboutBannerContent.propTypes = {
  data: PropsTypes.object,
};

export default AboutBannerContent;
