import React from "react";

const services = [
  {
    id: 1,
    title: "Customer Support",
    description:
      "Our customer support team is available around the clock. You can call us, email us or chat after logging in.",
    icon: "bi bi-activity",
    image: "assets/img/services-1.jpg",
  },
  {
    id: 2,
    title: "Institutional Service",
    description:
      "Enterprises and institutional clients can contact us for white-label solutions, API access, special terms and conditions.",
    icon: "bi bi-broadcast",
    image: "assets/img/services-2.jpg",
  },
  {
    id: 3,
    title: "Financial Education",
    description:
      "As a client you can profit from our investor education program. Watch tutorials, attend our webinars, and play around with our AI-driven investment simulation programs.",
    icon: "bi bi-easel",
    image: "assets/img/services-3.jpg",
  },
  {
    id: 4,
    title: "Financial Advisory",
    description:
      "Get instant answers to all of your investment queries. Our AI-powered chatbots are trained to give you full advise in every situation of your life.",
    icon: "bi bi-bounding-box-circles",
    image: "assets/img/services-4.jpg",
  },
  {
    id: 5,
    title: "Investment Club",
    description:
      "All our Professional and VIP customers automatically become members of our CRYLO® Investors Club. Many exclusive surprises await you.",
    icon: "bi bi-calendar4-week",
    image: "assets/img/services-5.jpg",
  },
  {
    id: 6,
    title: "Referral & Rewards",
    description:
      "Anyone can join our referral and reward programs. As a CRYLO® affiliate you gain exclusive insights and you can earn outstanding rewards.",
    icon: "bi bi-chat-square-text",
    image: "assets/img/services-6.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>
            Our <em>Services</em>
          </h2>
          <p>
            As the market leader in digital wealth management, we offer a wide
            range of exceptional services.
          </p>
        </div>

        <div className="row gy-5">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="col-xl-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={(index + 1) * 100 + 100}
            >
              <div className="service-item">
                <div className="img">
                  <img
                    src={service.image}
                    className="img-fluid"
                    alt={service.title}
                  />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className={service.icon}></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>{service.title}</h3>
                  </a>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <a href="#" className="btn-get-started scrollto">
          Register Right Now
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;
