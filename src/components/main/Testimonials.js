import React from "react";

const testimonials = [
  {
    img: "assets/img/testimonials/testimonials-1.webp",
    name: "Jamie Dimon",
    title: "JPMorgan Chase",
    quote:
      "Our 2024 report clearly shows that artificial intelligence will increase efficiency in wealth and asset management by 90%.",
  },
  {
    img: "assets/img/testimonials/testimonials-2.webp",
    name: "Michael Miebach",
    title: "Mastercard",
    quote:
      "In 2024, our study on the use of artificial intelligence in the financial sector found that AI provides 2x better risk protection for investors.",
  },
  {
    img: "assets/img/testimonials/testimonials-3.webp",
    name: "Bob Sternfels",
    title: "McKinsey",
    quote:
      "As early as 2022, we at McKinsey came to the conclusion that artificial intelligence makes market analysis 30% faster than when humans try to do it.",
  },
];

const TestimonialItem = ({ img, name, title, quote }) => (
  <div className="swiper-slide">
    <div className="testimonial-item">
      <img
        src={img}
        className="testimonial-img"
        alt={`Testimonial from ${name}`}
      />
      <h3>{name}</h3>
      <h4>{title}</h4>
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="bi bi-star-fill"></i>
        ))}
      </div>
      <p>
        <i className="bi bi-quote quote-icon-left"></i>
        {quote}
        <i className="bi bi-quote quote-icon-right"></i>
      </p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">
        <div className="testimonials-slider swiper">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <TestimonialItem key={index} {...testimonial} />
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
      <div className="d-flex">
        <a href="#" className="btn-get-started scrollto">
          Sign Up Now
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
