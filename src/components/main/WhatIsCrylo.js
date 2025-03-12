import React from "react";

const WhatIsCrylo = () => {
  return (
    <section id="what-is-crylo" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>
            CRYLO<sup>®</sup> is the <em>Top</em> Wealth Management Platform
          </h2>
          <p>
            CRYLO® is NOT a bank, NOT a fund, NOT a trading platform. It's the
            most powerful AI-driven digital wealth manager. Made for everyone
            who wants to invest in digital assets with ease. CRYLO® is
            democratizing Wall Street and makes professional Wealth Management
            accessible to absolutely everyone. No entry barriers. No minimum
            capital requirements. No hidden fees. No conflicts of interest and
            no human bias. CRYLO® is fully automated, data-driven, and
            emotion-free investing.
          </p>
        </div>

        <div className="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">
          <div className="col-lg-5">
            <div className="about-img">
              <img
                src="assets/img/best%20wealth%20management%20services%20for%20everyone.webp"
                className="img-fluid"
                alt="Best Wealth Management Services"
              />
            </div>
          </div>

          <div className="col-lg-7">
            <h3 className="pt-0 pt-lg-5">
              The Best Wealth Management Platform for Absolutely Everyone.
            </h3>

            <ul className="nav nav-pills mb-3">
              <li>
                <a
                  className="nav-link active"
                  data-bs-toggle="pill"
                  href="#tab1"
                >
                  For Retail Investors
                </a>
              </li>
              <li>
                <a className="nav-link" data-bs-toggle="pill" href="#tab2">
                  For Institutional Investors
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab1">
                {retailInvestors.map((item, index) => (
                  <div key={index} className="mt-4">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-check2"></i>
                      <h4>{item.title}</h4>
                    </div>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="tab-pane fade" id="tab2">
                {institutionalInvestors.map((item, index) => (
                  <div key={index} className="mt-4">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-check2"></i>
                      <h4>{item.title}</h4>
                    </div>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex">
          <a href="#" className="btn-get-started scrollto">
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

const retailInvestors = [
  {
    title: "Short and long-term wealth accumulation",
    description:
      "After onboarding, we determine your risk and profit requirements. Our AI agent then creates a customized investment portfolio for you. Sit back and be amazed.",
  },
  {
    title: "Financial freedom through digital assets",
    description:
      "Save for your education, pay off your student loan and start investing in your future. CRYLO® is here to build your wealth in short and long term. Just the way you want and need it.",
  },
  {
    title: "Retirement plan participations",
    description:
      "Investors who use their employer's pension plan or people who want to retire early can gain more capital in less time. Don't wait, live now and enjoy your successes before it's too late.",
  },
];

const institutionalInvestors = [
  {
    title: "Consultants",
    description:
      "CRYLO® is the perfect platform for consultants. Find the right investment portfolio for those who want to participate in short and long-term growth opportunities with digital assets.",
  },
  {
    title: "Investment Professionals",
    description:
      "CRYLO® helps investment professionals in evaluating the perfect strategies and active portfolio management to fulfill digital asset mandates.",
  },
  {
    title: "Pension Funds",
    description:
      "Institutions actively managing pension funds and retirement plans use CRYLO® to optimize and diversify their strategies. A complementary investment in digital assets is a modern way of building wealth.",
  },
];

export default WhatIsCrylo;
