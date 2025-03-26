import React, { useState } from "react";
import { Calendar, MapPin, Clock, Search, Users } from "lucide-react";

const eventsData = [
  {
    id: 1,
    title: "Alumni Mentorship Meetup",
    date: "April 10, 2025",
    time: "5:00 PM - 7:00 PM",
    location: "Zoom",
    description: "Connect with experienced alumni for career guidance and networking.",
    type: "upcoming",
  },
  {
    id: 2,
    title: "Tech Career Fair",
    date: "April 25, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "University Hall",
    description: "Meet top recruiters from tech companies and explore job opportunities.",
    type: "upcoming",
  },
  {
    id: 3,
    title: "Resume Review Workshop",
    date: "March 5, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Career Center",
    description: "Get feedback on your resume from industry professionals.",
    type: "past",
  },
];

const Networking = () => {
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-blue-600">🌐 Networking Events</h1>
        <p className="text-gray-600">Join events to grow your network and career.</p>
      </div>

      
      <div className="flex justify-center mb-6">
        <div className="relative w-1/2">
          <Search className="absolute left-3 top-2.5 text-gray-500" />
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents
            .filter((event) => event.type === "upcoming")
            .map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="bg-white shadow-lg rounded-lg p-5 cursor-pointer hover:shadow-xl transition transform hover:scale-105"
              >
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="text-gray-600 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {event.date}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {event.time}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {event.location}
                </p>
              </div>
            ))}
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto mt-10">
        <h2 className="text-2xl font-bold text-gray-600 mb-4">Past Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents
            .filter((event) => event.type === "past")
            .map((event) => (
              <div
                key={event.id}
                className="bg-gray-200 shadow-md rounded-lg p-5 cursor-pointer"
              >
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="text-gray-600 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {event.date}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {event.time}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {event.location}
                </p>
              </div>
            ))}
        </div>
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
            <h3 className="text-2xl font-bold mb-2">{selectedEvent.title}</h3>
            <p className="text-gray-600 flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {selectedEvent.date}
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <Clock className="w-4 h-4" /> {selectedEvent.time}
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {selectedEvent.location}
            </p>
            <p className="mt-4">{selectedEvent.description}</p>
            <button
              onClick={() => setSelectedEvent(null)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Networking;
