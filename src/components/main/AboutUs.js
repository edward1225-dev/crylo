import React from "react";

const AboutUs = () => {
  return (
    <section id="about-us" className="cta">
      <div className="container" data-aos="zoom-out">
        <div className="row g-5">
          <div className="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
            <h3>
              CRYLO® in <em>short</em>
            </h3>
            <p>
              We want to create above-average value for our customers,
              shareholders, and employees. And we want to distinguish ourselves
              as the best in our industry: through our expertise and
              technological edge, our contribution to society, our working
              environment, and our business success.
            </p>
            <a href="#">Our firm →</a>
            <br />
            <a href="#">Careers →</a>
            <br />
            <a href="#">Investor relations →</a>
            <br />
            <a href="#">Media →</a>
            <br />
            <a href="#">Technology →</a>
            <br />
            <a href="#">Sustainability →</a>
          </div>
          <div className="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
            <div className="img">
              <img
                src="assets/img/about-us.webp"
                alt="About Us"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
