import React from "react";

const BlogPost = ({ image, date, author, title, description, link }) => {
  return (
    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
      <div className="post-box">
        <div className="post-img">
          <img src={image} className="img-fluid" alt="Blog Post" />
        </div>
        <div className="meta">
          <span className="post-date">{date}</span>
          <span className="post-author"> / {author}</span>
        </div>
        <h3 className="post-title">{title}</h3>
        <p>{description}</p>
        <a href={link} className="readmore stretched-link">
          <span>Read More</span>
          <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

const RecentBlogPosts = () => {
  const blogPosts = [
    {
      image: "assets/img/blog/blog-1.jpg",
      date: "December 12, 2024",
      author: "Marcel Isler",
      title: "AI Investing vs. Traditional Investing",
      description:
        "The future of wealth management has just started. Read everything about how artificial intelligence is disrupting traditional investing.",
      link: "blog-details.html",
    },
    {
      image: "assets/img/blog/blog-2.jpg",
      date: "January 12, 2025",
      author: "Marcel Isler",
      title: "How AI Predicts Market Trends & Protects Your Money",
      description:
        "When it comes to price predictions for your next investment, then make sure you only put your trust in artificial intelligence. Read why AI protects your money.",
      link: "blog-details.html",
    },
    {
      image: "assets/img/blog/blog-3.jpg",
      date: "February 12, 2025",
      author: "Marcel Isler",
      title: "Crypto Scams & How to Avoid Them",
      description:
        "Everyone who wants to invest in the booming crypto market will get in touch with them. Scammers trying to steal your money. Here is how to avoid them.",
      link: "blog-details.html",
    },
  ];

  return (
    <section id="recent-blog-posts" className="recent-blog-posts">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Market Insights</h2>
          <p>
            As the market leader in digital asset management, we report monthly
            on the latest events in the financial world and news relating to
            digital assets.
          </p>
        </div>
        <div className="row">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogPosts;
