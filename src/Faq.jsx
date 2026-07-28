import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "Is Neo Downtown RERA Approved?",
    answer:
      "Yes. Neo Downtown is a RERA-registered commercial project. Please verify the latest registration details from the official sales team before making any investment decision.",
  },
  {
    question: "Where is Neo Downtown located?",
    answer:
      "Neo Downtown is strategically located in Gomti Nagar Extension, Lucknow, adjacent to Phoenix Palassio Mall with excellent connectivity to Shaheed Path and major business destinations.",
  },
  {
    question: "What types of commercial spaces are available?",
    answer:
      "The project offers premium retail shops on the lower floors and modern office spaces on the upper floors, designed to cater to businesses of all sizes.",
  },
  {
    question: "What is the starting price?",
    answer:
      "Office spaces start from approximately ₹1.98 Cr*, while retail spaces start from approximately ₹4.11 Cr*. Final pricing depends on floor, size, and availability.",
  },
  {
    question: "What is the expected possession timeline?",
    answer:
      "The expected possession timeline is around November 2030, subject to construction progress and regulatory approvals.",
  },
  {
    question: "Are bank loans available?",
    answer:
      "Yes. Financing options are generally available through leading banks and financial institutions, subject to eligibility and lender approval.",
  },
  {
    question: "How can I book a site visit?",
    answer:
      "You can book a site visit by filling out the enquiry form on this website or by contacting the sales team directly.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-28 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-[#B58A45] font-semibold">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-5xl font-serif text-gray-900">
            Everything You Need to Know
          </h2>

          <p className="mt-6 text-gray-600 leading-8 max-w-2xl mx-auto">
            Find answers to the most common questions about Neo Downtown,
            including pricing, location, investment plans, possession, and
            booking.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm border overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="w-full flex items-center justify-between p-7 text-left"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {faq.question}
                </h3>

                <FiChevronDown
                  className={`text-2xl transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-7 pb-7 text-gray-600 leading-8">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-[#111111] rounded-[32px] p-10 text-center text-white">

          <h3 className="text-3xl font-serif">
            Still Have Questions?
          </h3>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto leading-8">
            Our team is here to help you with pricing, availability, payment
            plans, and investment opportunities.
          </p>

          <button className="mt-8 bg-[#B58A45] hover:bg-white hover:text-black transition px-8 py-4 rounded-full font-semibold">
           <a href="tel:+917311144475">
           Talk to Our Expert
           </a> 
          </button>

        </div>

      </div>
    </section>
  );
}