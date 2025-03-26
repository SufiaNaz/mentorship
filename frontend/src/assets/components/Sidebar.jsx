import React from "react";
import { Home, Book, Calendar, FileText, MessageCircle, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-900 text-white p-4 h-screen flex flex-col">
      <h2 className="text-xl font-bold mb-6">Student Dashboard</h2>
      <ul className="space-y-4">
        <li className="flex items-center gap-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
          <Home size={20} /> Home
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
          <Book size={20} /> Courses
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
          <Calendar size={20} /> Time Table
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
          <FileText size={20} /> Exams
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
          <MessageCircle size={20} /> Messages
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
          <Settings size={20} /> Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
