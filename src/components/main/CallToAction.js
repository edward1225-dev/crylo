import React from "react";

const CallToAction = () => {
  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-out">
        <div className="row g-5">
          <div className="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
            <h3>
              Smart Investing <em>Simplified</em>
            </h3>
            <p>
              CRYLO® is tackling the barriers of complexity and volatility. Stay
              informed about financial news and company updates.
            </p>
            <a className="cta-btn align-self-start" href="#">
              Subscribe Now
            </a>
          </div>

          <div className="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
            <div className="img">
              <img
                src="assets/img/smart%20investing%20simplyfied.webp"
                alt="Smart Investing"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
