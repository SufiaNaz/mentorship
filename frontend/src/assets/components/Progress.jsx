import React from "react";
import { Progress } from "../../components/ui/progress.jsx"; 
import { CheckCircle, Book, Users, Target } from "lucide-react"; 

const ProgressTracking = () => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-2xl font-bold text-blue-600 mb-4">Progress Tracker</h3>

      
      <div className="mb-6">

        <div className="flex items-center gap-2 mb-2">
          <Users className="text-blue-500" size={20} />
          <h4 className="text-lg font-semibold">Mentorship Progress</h4>
        </div>
        <Progress value={75} className="h-3 bg-gray-200 rounded-lg" />
        <p className="text-gray-600 text-sm mt-1">3/4 mentorship sessions completed</p>
      </div>

      
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Target className="text-green-500" size={20} />
          <h4 className="text-lg font-semibold">Learning Goals</h4>
        </div>
        <Progress value={60} className="h-3 bg-gray-200 rounded-lg" />
        <p className="text-gray-600 text-sm mt-1">2/5 goals achieved</p>
      </div>

      
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Book className="text-orange-500" size={20} />
          <h4 className="text-lg font-semibold">Course Completion</h4>
        </div>
        <Progress value={85} className="h-3 bg-gray-200 rounded-lg" />
        <p className="text-gray-600 text-sm mt-1">85% of courses completed</p>
      </div>

      
      <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
        <div>
          <h4 className="text-lg font-semibold">Overall GPA</h4>
          <p className="text-gray-600 text-sm">Current: 3.8 / 4.0</p>
        </div>
        <CheckCircle className="text-blue-500" size={30} />
      </div>
    </div>
  );
};

export default ProgressTracking;
