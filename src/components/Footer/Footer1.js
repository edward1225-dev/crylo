import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <FooterColumn
              title="Help"
              links={[
                "Registration",
                "Onboarding",
                "Login problems",
                "Billing",
                "Tax statement",
                "Other issues",
              ]}
            />
            <FooterColumn
              title="Products"
              links={[
                "CRYLO® VLR",
                "CRYLO® LRP",
                "CRYLO® MRP",
                "CRYLO® HRP",
                "CRYLO® VHR",
                "CRYLO® CRP",
              ]}
            />
            <FooterColumn
              title="Insights"
              links={[
                "Private Clients",
                "Institutional Clients",
                "CRYLO® Investment Club",
                "Customer Service",
                "AI Wealth Management",
              ]}
            />
            <FooterColumn
              title="About us"
              links={[
                "Company Overview",
                "Branches",
                "Careers",
                "Life at CRYLO®",
                "Media",
                "Sustainability",
                "Cyber Security",
              ]}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => {
  return (
    <div className="col-lg-3 col-md-6 footer-links">
      <h4>{title}</h4>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <i className="bi bi-chevron-right"></i> <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
