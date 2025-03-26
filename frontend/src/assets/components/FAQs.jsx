import React, { useState } from "react";
import { ChevronDown, Search, Mail, Phone, LifeBuoy } from "lucide-react";

const faqsData = [
  { question: "How do I find a mentor?", answer: "You can browse mentors based on your interests in the mentorship section." },
  { question: "How do I contact my mentor?", answer: "You can use the messaging feature inside your dashboard to communicate with your mentor." },
  { question: "What should I do if I don’t get a response?", answer: "If your mentor doesn’t respond within a week, try reaching out again or choose another available mentor." },
  { question: "Are mentorship sessions free?", answer: "Yes, mentorship sessions are free for registered students." },
  { question: "Can I change my mentor?", answer: "Yes, you can request a mentor change under your profile settings." },
];

const FAQs = () => {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  // Filter FAQs based on search input
  const filteredFaqs = faqsData.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  // Toggle FAQ accordion
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">❓ FAQs & Support</h1>
        <p className="text-gray-600">Find answers to common questions or reach out for support.</p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <div className="relative w-2/3 md:w-1/2">
          <Search className="absolute left-3 top-2.5 text-gray-500" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {filteredFaqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="w-full flex justify-between items-center py-3 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <ChevronDown className={`transform transition ${openIndex === index ? "rotate-180" : ""}`} />
            </button>
            {openIndex === index && <p className="text-gray-600 p-3">{faq.answer}</p>}
          </div>
        ))}
      </div>

      {/* Support Section */}
      <div className="max-w-3xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <LifeBuoy className="text-blue-600" /> Need More Help?
        </h2>
        <p className="text-gray-600 mb-4">Contact us through email or phone, or submit your question below.</p>

        {/* Contact Info */}
        <div className="flex gap-6 mb-4">
          <div className="flex items-center gap-2">
            <Mail className="text-blue-600" />
            <span>support@mentorship.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-blue-600" />
            <span>+1 (123) 456-7890</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Your Email" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          <textarea placeholder="Write your message..." className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FAQs;
