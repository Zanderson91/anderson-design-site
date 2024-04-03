const HomeAbout = () => {
  return (
    <div className="section bg-dark overflow-hidden">
      <div className="about-section section-padding mt-8 mb-n1">
        <div
          className="about-images"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/anderson-family-photo.jpg)`,
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
                <h3 className="title">The Andersons</h3>
                <p>
                  {" "}
                  We're The Andersons, a dedicated UX designer, developer and
                  researcher committed to elevating digital experiences. With a
                  rich background in user experience and research, we've had the
                  privilege of collaborating with diverse clients across various
                  industries, delivering impactful solutions that drive results.
                  <br />
                  <br />
                  In today's digital landscape, user experience reigns supreme.
                  It's not just about creating visually appealing websites; it's
                  about crafting experiences that resonate with audiences and
                  keep them coming back for more. We understand the importance
                  of empathy-driven design, putting ourselves in the shoes of
                  your users to create intuitive, user-centric interfaces.
                  Investing in UX design isn't just about making your website
                  look good, it's about driving tangible business outcomes.
                  Studies have shown that businesses that prioritize UX see
                  higher conversion rates, increased customer satisfaction, and
                  lower bounce rates. By optimizing the user journey and
                  reducing friction points, we can help you unlock the full
                  potential of your digital presence.
                  <br />
                  <br />
                  When you work with us, you're not just hiring a designer;
                  you're partnering with strategic allies dedicated to your
                  success. We have the expertise and
                  creativity to bring your vision to life.{" "}
                </p>
                <img className="signzchar" src="./images/z-sign2.png" alt="" />
                <h6 className="name">Zack & Sara Anderson</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
