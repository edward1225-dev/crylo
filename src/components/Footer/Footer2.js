import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>CRYLO®</h3>
                <p>
                  CRYLO® is a platform to democratize Wall Street. We're
                  enabling everyone to access and benefit from professional
                  Digital Wealth Management. We leverage advanced AI and ML to
                  empower individuals to grow their savings with digital assets,
                  while minimizing the risks.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Corporate</h4>
              <ul>
                <li>
                  <a href="#">Fraud protection</a>
                </li>
                <li>
                  <a href="#">Newsroom</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
                <li>
                  <a href="#">Accessibility</a>
                </li>
                <li>
                  <a href="#">Responsibility Disclosure</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Business Continuity</a>
                </li>
                <li>
                  <a href="#">Order Placement Policy</a>
                </li>
                <li>
                  <a href="#">Rule 606 Disclosure</a>
                </li>
                <li>
                  <a href="#">Investor Rights</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Sign up to our newsletter and receive all news, insights and
                views from experts.
              </p>
              <form action="" method="post">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-legal text-left">
        <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
          <div className="d-flex flex-column align-items-left align-items-lg-start">
            <div className="copyright">
              <a href="imprint.html">Imprint</a> |{" "}
              <a href="terms-of-use.html">Terms of use</a> |{" "}
              <a href="privacy-statement.html">Privacy statement</a> |{" "}
              <a href="legal-notice.html">Legal notices</a> |{" "}
              <a href="privacy-settings.html">Privacy settings</a>
              <br />
              <br />
              The products, services, information and/or materials contained
              within these web pages may not be available for residents of
              certain jurisdictions. Please consult the sales restrictions
              relating to the products or services in question for further
              information.
              <br />
              <br />
              Copying, editing, modifying, distributing, sharing, linking, or
              any other use (whether for commercial purpose or otherwise) of
              this material, other than personal viewing, without CRYLO's prior
              written permission is strictly prohibited.
              <br />
              <br />
              &copy; CRYLO 2025. All Rights Reserved
            </div>
          </div>
          <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
            <a href="https://linkedin.com/company/cryloai" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://x.com/CRYLOai" className="twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://github.com/CRYLOai" className="github">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://discord.gg/5DYja7HFZm" className="discord">
              <i className="bi bi-discord"></i>
            </a>
            <a href="https://telegram.me/cryloai" className="telegram">
              <i className="bi bi-telegram"></i>
            </a>
            <a href="https://bsky.app/profile/crylo.bsky.social">
              <img
                src="assets/img/bluesky.png"
                alt="bluesky"
                style={{ width: "24px", height: "18px" }}
              />
            </a>
            <a href="https://www.facebook.com/CRYLOai/" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.youtube.com/@CRYLO-ai" className="youtube">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
