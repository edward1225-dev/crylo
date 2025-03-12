import React from "react";

const FAQItem = ({ question, answer, id, delay }) => {
  return (
    <div className="accordion-item" data-aos="fade-up" data-aos-delay={delay}>
      <h3 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#faq-content-${id}`}
        >
          <i className="bi bi-question-circle question-icon"></i>
          {question}
        </button>
      </h3>
      <div
        id={`faq-content-${id}`}
        className="accordion-collapse collapse"
        data-bs-parent="#faqlist"
      >
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqData = [
    {
      id: 1,
      question: "What authorization has CRYLO®?",
      answer:
        "CRYLO® is based in Switzerland and is supervised by FINMA, the Swiss Financial Market Supervisory Authority. We are accredited according to FIDLEG and FINIG.",
      delay: 200,
    },
    {
      id: 2,
      question: "What are your qualifications at CRYLO®?",
      answer:
        "Our team consists of highly qualified personnel. Consisting of IT experts as well as trading experts with decades of wealth management experience.",
      delay: 300,
    },
    {
      id: 3,
      question: "How much experience does CRYLO® have?",
      answer:
        "Even though CRYLO® is a young start-up, we have decades of experience. All employees are highly qualified and some have more than 40 years of experience.",
      delay: 400,
    },
    {
      id: 4,
      question: "Do you have references?",
      answer:
        "Of course we have the necessary references. On our website you will find dozens of references as well as long-term investment successes.",
      delay: 500,
    },
    {
      id: 5,
      question: "Is CRYLO® independent?",
      answer:
        "CRYLO® is 100% independent. We are neither resellers nor affiliates. Our algorithms buy and sell what is best for you.",
      delay: 600,
    },
  ];

  return (
    <section id="faq" className="faq">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
            <div className="content px-xl-5">
              <h3>
                Frequently Asked <em>Questions</em>
              </h3>
              <p>
                You certainly have a lot of questions. We answer the most
                important ones below.
              </p>
            </div>
            <div className="accordion accordion-flush px-xl-5" id="faqlist">
              {faqData.map((faq) => (
                <FAQItem key={faq.id} {...faq} />
              ))}
            </div>
          </div>
          <div
            className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
            style={{ backgroundImage: "url(assets/img/faq.jpg)" }}
          >
            &nbsp;
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
