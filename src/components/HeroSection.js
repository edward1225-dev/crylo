import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero-animated"
      className="hero-animated d-flex align-items-center"
    >
      <div
        className="container d-flex flex-column justify-content-center align-items-center text-center position-relative"
        data-aos="zoom-out"
      >
        <img
          src="assets/img/hero-carousel/header-image.webp"
          className="img-fluid animated"
          alt="Hero"
        />
        <h1>CRYLO®</h1>
        <h2>
          Digital Wealth Management for{" "}
          <span>
            <em>Everyone</em>
          </span>
        </h2>
        <p>
          CRYLO® is the future of Investing. No technical knowledge required. No
          trading stress. Simple. Secure. Smart.
        </p>
        <br />
        <div className="d-flex">
          <a href="#about" className="btn-get-started scrollto">
            Get Early Access
          </a>
          <a
            href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            className="glightbox btn-watch-video d-flex align-items-center"
          >
            <i className="bi bi-play-circle"></i>
            <span>Watch Video</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
