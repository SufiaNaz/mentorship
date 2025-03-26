import React, { useState } from "react";
import { Briefcase, Search, MapPin, Clock, Building2 } from "lucide-react";

const jobsData = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Google",
    location: "California, USA",
    type: "Internship",
    link: "https://careers.google.com/jobs/",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Microsoft",
    location: "Remote",
    type: "Full-Time",
    link: "https://careers.microsoft.com/",
  },
  {
    id: 3,
    title: "Marketing Intern",
    company: "Tesla",
    location: "Texas, USA",
    type: "Internship",
    link: "https://www.tesla.com/careers",
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Amazon",
    location: "New York, USA",
    type: "Part-Time",
    link: "https://www.amazon.jobs/en/",
  },
];

const Jobs = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  
  const filteredJobs = jobsData.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) &&
    (filter === "All" || job.type === filter)
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
     
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-blue-600">🚀 Jobs & Internship Listings</h1>
        <p className="text-gray-600">Explore career opportunities that match your skills.</p>
      </div>

      
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
        
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-2.5 text-gray-500" />
          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        
        <select
          className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Jobs</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Internship">Internships</option>
        </select>
      </div>

      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition transform hover:scale-105"
            >
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Briefcase className="text-blue-600" /> {job.title}
              </h2>
              <p className="text-gray-600 flex items-center gap-2">
                <Building2 className="text-gray-400" /> {job.company}
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <MapPin className="text-gray-400" /> {job.location}
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <Clock className="text-gray-400" /> {job.type}
              </p>
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Apply Now
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-3">No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;
