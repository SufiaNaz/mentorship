import React, { useState } from "react";
import { Bell, Mail, Users, Calendar, CheckCircle } from "lucide-react";

const initialNotifications = [
  { id: 1, type: "message", content: "You have a new message from your mentor.", time: "2 mins ago", read: false, icon: <Mail /> },
  { id: 2, type: "request", content: "A new student has requested mentorship.", time: "10 mins ago", read: false, icon: <Users /> },
  { id: 3, type: "event", content: "Upcoming networking event tomorrow!", time: "1 hr ago", read: false, icon: <Calendar /> },
];

const Notification = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [showDropdown, setShowDropdown] = useState(false);

  
  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => notif.id === id ? { ...notif, read: true } : notif));
  };

  return (
    <div className="relative">
      
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="relative p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
      >
        <Bell className="text-gray-700 w-6 h-6" />
        {notifications.some(notif => !notif.read) && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
        )}
      </button>

      
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-4 z-50">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Notifications</h3>
          
          {notifications.length > 0 ? (
            <ul className="max-h-64 overflow-y-auto">
              {notifications.map((notif) => (
                <li
                  key={notif.id}
                  className={`flex items-center gap-3 p-3 rounded-lg transition ${
                    notif.read ? "bg-gray-100" : "bg-blue-100"
                  } hover:bg-gray-200 cursor-pointer`}
                  onClick={() => markAsRead(notif.id)}
                >
                  <span className="text-blue-600">{notif.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm">{notif.content}</p>
                    <span className="text-xs text-gray-500">{notif.time}</span>
                  </div>
                  {!notif.read && <CheckCircle className="text-green-500 w-4 h-4" />}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500 text-center">No new notifications</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Notification;
