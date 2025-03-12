import React from "react";

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar">
      <ul>
        <li className="dropdown">
          <a href="#">
            <span>About us</span>{" "}
            <i className="bi bi-chevron-down dropdown-indicator"></i>
          </a>
          <ul>
            <li>
              <a href="about-us.html">About CRYLO®</a>
            </li>
            <li>
              <a href="history.html">History</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Media</a>
            </li>
            <li>
              <a href="#">Technology</a>
            </li>
            <li>
              <a href="#">Sustainability</a>
            </li>
            <li>
              <a href="#">Cyber Security</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="index.html#investment-plans">Pricing</a>
        </li>
        <li className="dropdown megamenu">
          <a href="index.html#products">
            <span>Products</span>{" "}
            <i className="bi bi-chevron-down dropdown-indicator"></i>
          </a>
          <ul>
            <li>
              <a href="index.html#products">CRYLO® VHR</a>
              <a href="index.html#products">CRYLO® HRP</a>
              <a href="index.html#products">CRYLO® MRP</a>
            </li>
            <li>
              <a href="index.html#products">CRYLO® LRP</a>
              <a href="index.html#products">CRYLO® VLR</a>
              <a href="index.html#products">CRYLO® CRP</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="index.html#services">Services</a>
        </li>
        <li>
          <a href="blog.html">Insights</a>
        </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle d-none"></i>
    </nav>
  );
};

const Header = () => {
  return (
    <header id="header" className="header fixed-top" data-scrollto-offset="0">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <a
          href="index.html"
          className="logo d-flex align-items-center scrollto me-auto me-lg-0"
        >
          <img src="assets/img/crylo-logo-black.png" alt="CRYLO logo" />
        </a>

        <Navbar />

        <div className="header-actions">
          <a href="#">EN</a>
          <a href="help.html">
            <i className="bi bi-question-circle"></i>&nbsp;Help
          </a>
          <a href="contact.html">
            <i className="bi bi-headset"></i>&nbsp;Contact
          </a>
          <a className="btn-getstarted scrollto" href="#">
            Log In
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
