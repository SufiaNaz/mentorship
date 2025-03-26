import React from "react";

const Profilecard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold">Student Profile</h3>
      <img src="https://via.placeholder.com/100" alt="Profile" className="rounded-full my-2" />
      <p><strong>Name:</strong> John Doe</p>
      <p><strong>Student ID:</strong> 123456</p>
      <p><strong>Course:</strong> Computer Science</p>
    </div>
  );
};

export default Profilecard;




