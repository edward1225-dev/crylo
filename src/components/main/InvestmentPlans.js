import React from "react";

const InvestmentPlans = () => {
  const plans = [
    {
      name: "Starter",
      deposit: "500 USD minimum deposit",
      managementFee: "10% Management Fee",
      performanceFee: "50% Performance Fee",
      profitRule: "We only profit when you do",
      buttonText: "Start Now",
    },
    {
      name: "Professional",
      deposit: "50,000 USD minimum deposit",
      managementFee: "3% Management Fee",
      performanceFee: "35% Performance Fee",
      profitRule: "We only profit when you do",
      buttonText: "Invest Now",
      featured: true,
    },
    {
      name: "VIP",
      deposit: "500,000 USD minimum deposit",
      managementFee: "Low Management Fee",
      performanceFee: "Low Performance Fee",
      profitRule: "We only profit when you do",
      buttonText: "Contact Us",
    },
  ];

  return (
    <section id="investment-plans" className="pricing">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>
            CRYLO<sup>®</sup> Investment <span>Plans</span>
          </h2>
          <p>
            The pricing of our investment plans is simple and completely
            transparent.
          </p>
        </div>

        <div className="row gy-4">
          {plans.map((plan, index) => (
            <div
              className="col-lg-4"
              data-aos="zoom-in"
              data-aos-delay={(index + 1) * 200}
              key={plan.name}
            >
              <div
                className={`pricing-item ${plan.featured ? "featured" : ""}`}
              >
                <div className="pricing-header">
                  <h3>{plan.name}</h3>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-dot"></i> <span>{plan.deposit}</span>
                  </li>
                  <li>
                    <i className="bi bi-dot"></i>{" "}
                    <span>{plan.managementFee}</span>
                  </li>
                  <li>
                    <i className="bi bi-dot"></i>{" "}
                    <span>{plan.performanceFee}</span>
                  </li>
                  <li>
                    <i className="bi bi-dot"></i> <span>{plan.profitRule}</span>
                  </li>
                </ul>
                <div className="text-center mt-auto">
                  <a href="#" className="buy-btn">
                    {plan.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;
