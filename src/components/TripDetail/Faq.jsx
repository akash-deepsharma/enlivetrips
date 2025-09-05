"use client";
import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Faq() {
  // Load bootstrap JS for accordion toggle
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // FAQ JSON data
  const faqData = [
    {
      id: 1,
      question: "Q1. How do I start the process of buying a home?",
      answer:
        "The open-concept layout seamlessly connects the living room with the fully equipped kitchen, boasting top-of-the-line appliances and all the essentials for preparing delicious meals.",
    },
    {
      id: 2,
      question: "Q2. What factors should I consider when choosing a neighborhood?",
      answer:
        "The responsibility for paying closing costs can vary depending on the terms negotiated between the buyer and the seller, as well as local customs and regulations. In some cases…",
    },
    {
      id: 3,
      question: "Q3. How can I determine the right price for selling my property?",
      answer:
        "Research the local real estate market to understand current trends, property values, and comparable sales in the area. Knowing the market will give you leverage during negotiations.",
    },
    {
      id: 4,
      question: "Q4. What are closing costs and who is responsible for paying them?",
      answer:
        "Closing costs vary depending on local regulations and agreements between the buyer and seller. Always review before signing.",
    },
    {
      id: 5,
      question: "Q5. How do I get pre-approved for a mortgage?",
      answer:
        "You can apply with banks or lenders who will check your credit score, income, and assets before giving you a pre-approval letter.",
    },
    {
      id: 6,
      question: "Q6. What is the role of a real estate agent in the buying/selling process?",
      answer:
        "A real estate agent helps with property searches, pricing, negotiations, paperwork, and ensures legal compliance.",
    },
    {
      id: 7,
      question: "Q7. How can I improve my credit score before applying for a mortgage?",
      answer:
        "Pay bills on time, reduce outstanding debts, and avoid opening too many new credit accounts in a short period.",
    },
    {
      id: 8,
      question: "Q8. What are property taxes and how are they calculated?",
      answer:
        "Property taxes are local taxes based on the assessed value of your property, set by local government and tax authorities.",
    },
    {
      id: 9,
      question: "Q9. How long does the typical home buying process take?",
      answer:
        "On average, it takes 30–60 days from making an offer to closing, depending on financing and legal processes.",
    },
    {
      id: 10,
      question: "Q10. What is a home inspection and why is it important?",
      answer:
        "A home inspection identifies any structural or mechanical issues in a property before finalizing the purchase.",
    },
  ];

  return (
    <div className=" min_box-detail Age_limit container my-5 position-relative z-0">
      <div className="title">
        <h6 className="text-start fw-bold mb-4 page-title">
          Frequently Asked Questions
        </h6>
      </div>

      <div className="accordion-area accordion mb-30 mt-3" id="faqAccordion">
        {faqData.map((item, index) => (
          <div
            key={item.id}
            className={`accordion-card style2 ${index === 0 ? "active" : ""}`}
          >
            <div className="accordion-header" id={`heading-${item.id}`}>
              <button
                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${item.id}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse-${item.id}`}
              >
                {item.question}
              </button>
            </div>
            <div
              id={`collapse-${item.id}`}
              className={`accordion-collapse collapse ${
                index === 0 ? "show" : ""
              }`}
              aria-labelledby={`heading-${item.id}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body style2">
                <p className="faq-text">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
