import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation
import { Mail, Calendar, FileText, UserCheck, MessageCircle, Star, Sun, Moon } from "lucide-react";

const Profile = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      console.log(token)
      if (!token) {
        navigate("/LoginPage"); // Redirect if no token
        return;
      }

      try {
        const response = await fetch("http://localhost:4001/api/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]); // Dependency to navigate on unauthorized access

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* Dark Mode Toggle */}
      <button 
        className="absolute top-6 right-6 p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition" 
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-800" />}
      </button>

      {/* Profile Card */}
      <div className={`w-full max-w-3xl p-6 rounded-xl shadow-lg transition-all ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        {/* Profile Header */}
        <div className="flex items-center space-x-6">
          <img className="w-20 h-20 rounded-full border-4 border-blue-500" src="./images/profile.jpeg" alt="" />
          <div>
            <h2 className="text-2xl font-semibold">{user?.fullName || "Unknown User"}</h2>
            <p className="text-gray-600 dark:text-gray-400">{user?.bio || "No bio available"}</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-2">
            <UserCheck className="text-blue-500" />
            <p>Role: {user?.role}</p>
          </div>
          <div className="flex items-center space-x-2">
            <FileText className="text-green-500" />
            <p>Email: {user?.email}</p>
          </div>
          <div className="flex items-center space-x-2">
            <MessageCircle className="text-orange-500" />
            <a href={user?.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Skills & Achievements */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Skills</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {user?.skills?.length > 0 ? (
              user.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-700 rounded-full">
                  {skill}
                </span>
              ))
            ) : (
              <p>No skills listed</p>
            )}
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="flex items-center px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
            <Mail className="mr-2" /> Contact Mentor
          </button>
          <button className="flex items-center px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition">
            <Calendar className="mr-2" /> Schedule Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
