import React from "react";

const WhyCryloSection = () => {
  return (
    <section id="why" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>
            Why is CRYLO<sup>®</sup> THE <em>Trustworthy</em> Wealth Manager?
          </h2>
          <p>
            CRYLO® cannot be manipulated by humans. The platform is 100%
            controlled by artificial intelligence. It's not only about reducing
            costs. It is giving everyone access to professional wealth
            management. Everyone can benefit. You don't need any technical or
            investment knowledge.
          </p>
          <br />
          <p>
            <strong>Testimonial and IMAGE of Peter Zuber</strong> - “CRYLO made
            investing in digital assets simple and stress-free. In addition, the
            results are outstanding in times of bull and bear markets.”
          </p>
        </div>

        <section id="featured-why" className="featured-services">
          <div className="container">
            <div className="row gy-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="col-xl-3 col-md-6 d-flex"
                  data-aos="zoom-out"
                  data-aos-delay={feature.delay}
                >
                  <div className="service-item position-relative">
                    <div className="icon">
                      <i className={feature.icon}></i>
                    </div>
                    <h4>
                      <a href="" className="stretched-link">
                        {feature.title}
                      </a>
                    </h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

const features = [
  {
    title: "Secure",
    icon: "bi bi-activity icon",
    description:
      "CRYLO® is not a bank! But a Swiss-made platform with bank-grade security, enabling absolutely EVERYONE to invest in Digital Assets. Simple and Smart.",
    delay: "0",
  },
  {
    title: "Regulated",
    icon: "bi bi-bounding-box-circles icon",
    description:
      "CRYLO® is 100% regulated and compliant with all regulatory authorities wherever we operate. SEC for the USA, MiCa in Europe, MAS in Singapore and more.",
    delay: "200",
  },
  {
    title: "Professional",
    icon: "bi bi-calendar4-week icon",
    description:
      "The CRYLO® platform is powered entirely by Artificial Intelligence and Machine Learning algorithms, without any human interaction. Hence, fraud is impossible.",
    delay: "400",
  },
  {
    title: "Superior",
    icon: "bi bi-broadcast icon",
    description:
      "Unlike humans, the CRYLO® algorithms work for you 24/7, 365 days a year. That's why our platform never misses an opportunity for you. The future of investment is now.",
    delay: "600",
  },
];

export default WhyCryloSection;
