import React from "react";

const HowCryloWorks = () => {
  return (
    <section id="how-crylo-works" className="onfocus">
      <div className="container-fluid p-0" data-aos="fade-up">
        <div className="row g-0">
          <div className="col-lg-6 video-play position-relative">
            <a
              href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              className="glightbox play-btn"
            ></a>
          </div>
          <div className="col-lg-6">
            <div className="content d-flex flex-column justify-content-center h-100">
              <h3>How CRYLO's Digital Wealth Management Works</h3>
              <p className="fst-italic">
                With CRYLO® you need neither technical nor trading knowledge. It
                makes investing in digital assets super easy. This is how it
                works:
              </p>
              <ul>
                {steps.map((step, index) => (
                  <li key={index}>
                    <i className="bi bi-check-circle"></i> {step}
                  </li>
                ))}
              </ul>
              <p className="fst-italic">
                Unlock the future of digital Wealth Management.
              </p>
              <a href="#" className="read-more align-self-start">
                <span>Join the Future of Investing</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const steps = [
  "Answer a few questions and CRYLO® will determine the perfect investment strategy for you.",
  "CRYLO® automatically builds your portfolio with customized investment allocation.",
  "Watch your wealth grow, while CRYLO® continuously trades and manages your portfolio.",
];

export default HowCryloWorks;
