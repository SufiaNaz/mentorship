import React, { useState } from "react";
import { Lock, EyeOff, Eye, ShieldCheck, Trash, Settings, KeyRound } from "lucide-react";

const Privacy = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState("public");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleTwoFactorAuth = () => {
    setTwoFactorAuth(!twoFactorAuth);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-blue-600 flex items-center justify-center gap-2">
          <ShieldCheck size={32} /> Privacy & Security
        </h1>
        <p className="text-gray-600">Manage your account security and privacy preferences.</p>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Eye size={24} className="text-blue-500" /> Profile Visibility
          </h2>
          <p className="text-gray-500 text-sm mb-2">Control who can see your profile.</p>
          <select
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={profileVisibility}
            onChange={(e) => setProfileVisibility(e.target.value)}
          >
            <option value="public">Public</option>
            <option value="mentors-only">Mentors Only</option>
            <option value="private">Private</option>
          </select>
        </div>

        
        <div className="mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <KeyRound size={24} className="text-blue-500" /> Change Password
          </h2>
          <p className="text-gray-500 text-sm mb-2">Update your password for account security.</p>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new password"
            />
            <button
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-2 text-gray-500"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </div>

       
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Lock size={24} className="text-blue-500" /> Two-Factor Authentication (2FA)
            </h2>
            <p className="text-gray-500 text-sm">Enhance security by requiring a second authentication step.</p>
          </div>
          <button
            onClick={toggleTwoFactorAuth}
            className={`px-4 py-2 rounded-lg font-semibold ${
              twoFactorAuth ? "bg-green-500 text-white" : "bg-gray-300"
            }`}
          >
            {twoFactorAuth ? "Enabled" : "Disabled"}
          </button>
        </div>

        
        <div className="mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Settings size={24} className="text-blue-500" /> Linked Accounts
          </h2>
          <p className="text-gray-500 text-sm mb-2">Manage your connected accounts.</p>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Link Google</button>
            <button className="px-4 py-2 bg-blue-800 text-white rounded-lg">Link Facebook</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Link LinkedIn</button>
          </div>
        </div>

        
        <div className="text-center">
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-red-700">
            <Trash size={20} /> Delete Account
          </button>
          <p className="text-gray-500 text-sm mt-2">This action is irreversible.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
