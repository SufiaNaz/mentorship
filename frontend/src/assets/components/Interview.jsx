import React from "react";
import { FileText, Briefcase, Mic, Star, Download } from "lucide-react";

const resumeTemplates = [
  { id: 1, title: "Modern Resume", link: "/resumes/modern.pdf" },
  { id: 2, title: "Professional Resume", link: "/resumes/professional.pdf" },
  { id: 3, title: "Creative Resume", link: "/resumes/creative.pdf" },
];

const Interview = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">📄 Resume & Interview Prep</h1>
        <p className="text-gray-600">Build a professional resume & ace your interviews!</p>
      </div>

      {/* Sections */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Resume Templates */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FileText className="text-blue-500" /> Resume Templates
          </h2>
          <p className="text-gray-600 mt-2">Download professional resume templates.</p>
          <ul className="mt-4 space-y-3">
            {resumeTemplates.map((template) => (
              <li key={template.id} className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                <span>{template.title}</span>
                <a
                  href={template.link}
                  download
                  className="bg-blue-600 text-white px-3 py-1 rounded-md flex items-center gap-1 hover:bg-blue-700"
                >
                  <Download size={16} /> Download
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Interview Tips */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Briefcase className="text-green-500" /> Interview Tips
          </h2>
          <p className="text-gray-600 mt-2">Best practices to ace your interviews.</p>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            <li>Research the company before the interview.</li>
            <li>Prepare answers for common questions.</li>
            <li>Dress professionally & be confident.</li>
            <li>Follow up with a thank-you email.</li>
          </ul>
        </div>

        {/* Mock Interviews */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Mic className="text-purple-500" /> Mock Interviews
          </h2>
          <p className="text-gray-600 mt-2">Practice with real interview scenarios.</p>
          <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
            Schedule a Mock Interview
          </button>
        </div>

        {/* Resume Review */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Star className="text-yellow-500" /> Resume Review
          </h2>
          <p className="text-gray-600 mt-2">Get feedback from experts.</p>
          <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
            Upload Resume for Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Interview;
