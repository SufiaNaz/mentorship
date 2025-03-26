import React, { useState } from "react";
import { Search, Mail, MessageSquare, Phone, ChevronDown } from "lucide-react";

const faqs = [
  { question: "How do I find a mentor?", answer: "You can search for mentors based on your interests and goals in the 'Find Mentor' section." },
  { question: "How do I schedule a meeting?", answer: "You can use the scheduling feature in your dashboard to book a session with your mentor." },
  { question: "Can I message my mentor directly?", answer: "Yes! You can use the messaging system in the platform to chat with your mentor." },
];

const helpTopics = [
  { title: "Getting Started", icon: <Search />, link: "/getting-started" },
  { title: "Account & Profile", icon: <Mail />, link: "/account" },
  { title: "Mentor Matching", icon: <MessageSquare />, link: "/matching" },
  { title: "Technical Support", icon: <Phone />, link: "/support" },
];

const Help = () => {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">🛠 Help Center</h1>
        <p className="text-gray-600">Find answers, get help, and contact support.</p>
      </div>

      
      <div className="flex justify-center mb-6">
        <div className="relative w-1/2">
          <Search className="absolute left-3 top-2.5 text-gray-500" />
          <input
            type="text"
            placeholder="Search help topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {helpTopics.map((topic, index) => (
          <a key={index} href={topic.link} className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center hover:shadow-xl transition">
            <div className="text-blue-600 text-3xl">{topic.icon}</div>
            <p className="text-lg font-semibold mt-2">{topic.title}</p>
          </a>
        ))}
      </div>

      
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg">
              <button
                className="flex justify-between items-center w-full text-lg font-semibold"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <ChevronDown className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>

      
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold text-blue-600 mb-2">Need More Help?</h2>
        <p className="text-gray-600">Reach out to our support team.</p>
        <div className="mt-4">
          <a href="mailto:support@mentorship.com" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Help;
