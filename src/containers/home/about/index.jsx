const HomeAbout = () => {
  return (
    <div className="section bg-dark overflow-hidden">
      <div className="about-section section-padding mt-n3 mb-n1">
        <div
          className="about-images"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/headshots/headshot-plaid-front1.png)`,
          }}
        ></div>

        <div className="container">
          <div
            className="row justify-content-end"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="col-lg-6">
              <div className="about-content">
                <h3 className="title">Zack Anderson</h3>
                <p>
                  {" "}
                  Web and Software Developer / Designer with dynamic and
                  purposeful passion for creating and engineering solutions.
                  Eager to grow and develop amidst the ever evolving trends and
                  technologies. Experience demonstrated in streamlining
                  educational organizations and achieving new standards within
                  web development, project management and financial improvement.
                  Well equipped with skills that contribute to overall product
                  growth and capability.{" "}
                </p>
                <p>
                  {" "}
                  As a Lead CX/UX Designer, I excel in
                  cultivating collaborative efforts across design, product,
                  marketing and engineering teams. My expertise lies in
                  delivering user-centric design solutions that resonate with
                  users and growing market demands. With a diverse and creative
                  background, I specialize in crafting captivating web and app
                  experiences that truly engage users. I am particularly
                  passionate about leveraging digital best practices to enhance
                  engagement, communication, and satisfaction. I bring to the
                  table an organized, thoughtful, and creative approach,
                  enriching collaborative endeavors with my expertise. Let's
                  collaborate to create exceptional digital experiences!{" "}
                </p>
                <img className="signzchar" src="./images/z-sign2.png" alt="" />
                <h6 className="name">Zack Anderson</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
