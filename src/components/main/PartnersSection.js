import React from "react";

const PartnersSection = () => {
  return (
    <section id="partners" className="clients">
      <div className="container" data-aos="zoom-out">
        <div className="clients-slider swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide">
              <img
                src="assets/img/clients/trustpilot-logo.webp"
                className="img-fluid"
                alt="Trustpilot"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/Google-Reviews.webp"
                className="img-fluid"
                alt="Google Reviews"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/hslu-logo.webp"
                className="img-fluid"
                alt="HSLU"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/SEC-logo.webp"
                className="img-fluid"
                alt="SEC"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/MiCa-regulations.webp"
                className="img-fluid"
                alt="MiCa Regulation"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/Monetary-Authority-of-Singapore.webp"
                className="img-fluid"
                alt="Monetary Authority of Singapore"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/clients/ETH-Zurich-logo.webp"
                className="img-fluid"
                alt="ETH Zürich"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
