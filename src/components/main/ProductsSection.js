import React from "react";

const ProductTab = ({ id, icon, title, active }) => {
  return (
    <li className="nav-item col-6 col-md-4 col-lg-2">
      <a
        className={`nav-link ${active ? "active show" : ""}`}
        data-bs-toggle="tab"
        data-bs-target={`#${id}`}
      >
        <i className={`bi ${icon}`}></i>
        <h4>{title}</h4>
      </a>
    </li>
  );
};

const ProductContent = ({
  id,
  title,
  description,
  yieldRange,
  drawdown,
  risk,
}) => {
  return (
    <div className={`tab-pane ${id === "tab-1" ? "active show" : ""}`} id={id}>
      <div className="row gy-4">
        <div
          className="col-lg-8 order-2 order-lg-1"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3>What is {title}?</h3>
          <p className="fst-italic">{description}</p>
          <ul>
            <li>
              <i className="bi bi-check-circle-fill"></i> Expected annual
              percentage yield: {yieldRange}
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i> Expected maximum
              drawdown: {drawdown}
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i> Confidence
              value-at-risk: {risk}
            </li>
          </ul>
          <p>
            <a href="#">Invest now</a>
          </p>
        </div>
        <div
          className="col-lg-4 order-1 order-lg-2 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="assets/img/tradingview.webp"
            alt="Trading view"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const products = [
    {
      id: "tab-1",
      icon: "bi-binoculars color-cyan",
      title: "CRYLO® VHR",
      description:
        "CRYLO® VHR for aggressive investors who are looking for maximum profit.",
      yieldRange: "50 - 300%",
      drawdown: "> 35%",
      risk: "> 95%",
    },
    {
      id: "tab-2",
      icon: "bi-box-seam color-indigo",
      title: "CRYLO® HRP",
      description:
        "CRYLO® HRP is for all those who are willing to take some risk while hungry for growing their capital.",
      yieldRange: "20 - 50%",
      drawdown: "20 - 35%",
      risk: "98%",
    },
    {
      id: "tab-3",
      icon: "bi-brightness-high color-teal",
      title: "CRYLO® MRP",
      description:
        "CRYLO® MRP is for all those who prefer medium risk combined with medium growth on their capital.",
      yieldRange: "10 - 20%",
      drawdown: "10 - 20%",
      risk: "99%",
    },
    {
      id: "tab-4",
      icon: "bi-command color-red",
      title: "CRYLO® LRP",
      description:
        "CRYLO® LRP is for investors who want to take a little bit more risk and profitably invest their capital.",
      yieldRange: "5 - 12%",
      drawdown: "5 - 10%",
      risk: "99.5%",
    },
    {
      id: "tab-5",
      icon: "bi-easel color-blue",
      title: "CRYLO® VLR",
      description:
        "CRYLO® VLR is for beginners and investors who want to take a very low risk and still invest their capital profitably.",
      yieldRange: "2 - 8%",
      drawdown: "0 - 4%",
      risk: "99.9%",
    },
    {
      id: "tab-6",
      icon: "bi-map color-orange",
      title: "CRYLO® CRP",
      description: "CRYLO® CRP is fully customized to your individual needs.",
      yieldRange: "Individual",
      drawdown: "Individual",
      risk: "Individual",
    },
  ];

  return (
    <section id="products" className="features">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>
            CRYLO<sup>®</sup> Investment <span>Products</span>
          </h2>
          <p>
            You choose a ready-made portfolio or let our algorithms put together
            a customized portfolio for you. This is the future of personalized
            Digital Wealth Management.
          </p>
        </div>

        <ul className="nav nav-tabs row gy-4 d-flex">
          {products.map((product, index) => (
            <ProductTab key={product.id} {...product} active={index === 0} />
          ))}
        </ul>

        <div className="tab-content">
          {products.map((product) => (
            <ProductContent key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
