import React from "react";

const CourseList = () => {
  const courses = [
    { name: "Machine Learning", status: "Ongoing" },
    { name: "Data Structures", status: "Completed" },
    { name: "Web Development", status: "Ongoing" },
  ];

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h3 className="font-bold text-lg mb-2">Enrolled Courses</h3>
      <ul>
        {courses.map((course, index) => (
          <li key={index} className="border-b py-2">
            {course.name} <span className="text-gray-500">({course.status})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
