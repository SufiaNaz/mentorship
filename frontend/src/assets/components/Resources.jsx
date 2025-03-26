import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Book, Briefcase, Users, HelpCircle, Star } from "lucide-react";

const resourcesData = [
  { id: 1, title: "E-Books & PDFs", description: "Download study materials & guides.", icon: <Book />, path: "/Ebboks" },
  { id: 2, title: "Job & Internship Listings", description: "Find job & internship opportunities.", icon: <Briefcase />, path: "/jobs" },
  { id: 3, title: "Networking Events",  description: "Upcoming mentorship & networking sessions.", icon: <Users />, path: "/networking" },
  { id: 4, title: "Resume & Interview Prep", description: "Guides & templates for career success.", icon: <Star />, path: "/career" },
  { id: 5, title: "FAQ & Support", description: "Get answers to your common queries.", icon: <HelpCircle />, path: "/faq" },
];

const Resources = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); 

  
  const filteredResources = resourcesData.filter((resource) =>
    resource.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-blue-600">📚 Resources Hub</h1>
        <p className="text-gray-600">Explore learning materials, career guides, and mentorship resources.</p>
      </div>

      
      <div className="flex justify-center mb-6">
        <div className="relative w-1/2">
          <Search className="absolute left-3 top-2.5 text-gray-500" />
          <input
            type="text"
            placeholder="Search resources..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            onClick={() => navigate(resource.path)} 
            className="bg-white shadow-lg rounded-lg p-5 flex items-center gap-4 hover:shadow-xl transition transform hover:scale-105 cursor-pointer"
          >
            <div className="text-blue-600 text-3xl">{resource.icon}</div>
            <div>
              <h2 className="text-xl font-bold">{resource.title}</h2>
              <p className="text-gray-600">{resource.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
