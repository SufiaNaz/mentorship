import React from "react";
import CourseList from './CourseList.jsx';
import Sidebar from "./Sidebar.jsx";
import Profilecard from "./Profilecard.jsx";
import Overview from "./Overview.jsx";
import Assessments from "./Assessments.jsx";
import Notification from './Notification.jsx';


const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      

        <div className="p-4 grid grid-cols-3 gap-4">
          {/* Left Section */}
          <div className="col-span-1 space-y-4">
            <Profilecard />
            <CourseList />
           
          </div>

          {/* Center Section */}
          <div className="col-span-2 space-y-4">
            <Overview />
            <Assessments /> 
          </div>
          
        </div>
        <div className=" absolute top-4 right-6">
          <Notification />
            
          </div>

        </div>
      
  );
};

export default Dashboard; 
