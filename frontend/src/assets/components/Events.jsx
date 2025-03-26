import React, { useState } from "react";
import { Search, Calendar, Users, Briefcase, Mic, MapPin } from "lucide-react";

const eventsData = [
  {
    id: 1,
    title: "Alumni Networking Night",
    date: "April 15, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "New York City, NY",
    type: "Networking",
    description: "Connect with fellow alumni and expand your professional network.",
    icon: <Users />,
  },
  {
    id: 2,
    title: "Resume & Interview Workshop",
    date: "April 20, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Online (Zoom)",
    type: "Workshop",
    description: "Enhance your resume and ace your next job interview.",
    icon: <Briefcase />,
  },
  {
    id: 3,
    title: "Tech Industry Webinar",
    date: "April 25, 2025",
    time: "5:00 PM - 7:00 PM",
    location: "Online (Google Meet)",
    type: "Webinar",
    description: "Learn about the latest trends in the tech industry.",
    icon: <Mic />,
  },
];

const Events = () => {
  const [search, setSearch] = useState("");

  // Filter events based on search
  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-blue-600">📅 Alumni Events</h1>
        <p className="text-gray-600">Explore upcoming networking and mentorship events.</p>
      </div>

      {/* Search Bar */}
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

      {/* Event Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} className="bg-white shadow-lg rounded-lg p-5 flex flex-col gap-4 hover:shadow-xl transition transform hover:scale-105">
              <div className="text-blue-600 text-3xl">{event.icon}</div>
              <h2 className="text-xl font-bold">{event.title}</h2>
              <p className="text-gray-600">{event.description}</p>
              <div className="flex items-center text-gray-500">
                <Calendar className="w-5 h-5 mr-2" />
                {event.date} • {event.time}
              </div>
              <div className="flex items-center text-gray-500">
                <MapPin className="w-5 h-5 mr-2" />
                {event.location}
              </div>
              <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                RSVP Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default Events;
