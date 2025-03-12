import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>CRYLO® AI Digital Wealth Management</title>
        <meta
          name="description"
          content="The AI Wealth Manager for digital assets"
        />
        <meta
          name="keywords"
          content="ai, artificial intelligence, ml, machine learning, wealth management, wealth manager, wealth management firm, digital assets, crypto, tokens, nft, crypto portfolio"
        />
        <link rel="icon" href="/assets/img/favicon.svg" />
        <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />
        <link
          rel="stylesheet"
          href="/assets/vendor/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="/assets/vendor/aos/aos.css" />
        <link
          rel="stylesheet"
          href="/assets/vendor/glightbox/css/glightbox.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/vendor/swiper/swiper-bundle.min.css"
        />
        <link rel="stylesheet" href="/assets/css/variables-red.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </Head>

      <header className="header fixed-top">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <img src="/assets/img/crylo-logo-black.png" alt="CRYLO logo" />
          </a>
          <nav className="navbar">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#investment-plans">Pricing</a>
              </li>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="/blog">Insights</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section
        id="hero-animated"
        className="hero-animated d-flex align-items-center"
      >
        <div className="container d-flex flex-column justify-content-center align-items-center text-center">
          <img
            src="/assets/img/hero-carousel/header-image.webp"
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
            CRYLO® is the future of Investing. No technical knowledge required.
            No trading stress. Simple. Secure. Smart.
          </p>
          <div className="d-flex">
            <a href="#about" className="btn-get-started">
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

      <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/assets/vendor/aos/aos.js"></script>
      <script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="/assets/js/main.js"></script>
    </>
  );
}
