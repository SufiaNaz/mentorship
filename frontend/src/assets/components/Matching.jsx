import React, { useState, useEffect } from "react";

const mentorsData = [
  { id: 1, name: "Ethan Berry", course: "Business", interests: ["Finance", "Marketing"], location: "NYC" },
  { id: 2, name: "Frances Anderson", course: "Engineering", interests: ["AI", "Data Science"], location: "SF" },
  { id: 3, name: "Frank Elliot", course: "Design", interests: ["UI/UX", "Graphic Design"], location: "LA" },
];

const menteesData = [
  { id: 101, name: "Isabella", course: "Business", interests: ["Marketing"], location: "NYC" },
  { id: 102, name: "David", course: "Engineering", interests: ["AI"], location: "SF" },
  { id: 103, name: "Sebastian", course: "Design", interests: ["UI/UX"], location: "LA" },
];

const MatchingAlgorithm = () => {
  const [matches, setMatches] = useState([]);

  // Matching Logic
  useEffect(() => {
    const matchedPairs = menteesData.map((mentee) => {
      const bestMatch = mentorsData
        .map((mentor) => {
          let score = 0;
          if (mentee.course === mentor.course) score += 40;
          if (mentee.location === mentor.location) score += 20;
          mentee.interests.forEach((interest) => {
            if (mentor.interests.includes(interest)) score += 40;
          });
          return { mentor, score };
        })
        .sort((a, b) => b.score - a.score)[0]; 

      return { mentee, mentor: bestMatch?.mentor, score: bestMatch?.score || 0 };
    });

    setMatches(matchedPairs);
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center">🔄 Mentor-Mentee Matching</h2>
      <p className="text-center text-gray-600 mb-6">
        Automatically matches mentees with the best mentors based on course, interests, and location.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map(({ mentee, mentor, score }) => (
          <div key={mentee.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{mentee.name} (Mentee)</h3>
            <p className="text-gray-500">Course: {mentee.course}</p>
            <p className="text-gray-500">Interests: {mentee.interests.join(", ")}</p>
            <hr className="my-3" />
            {mentor ? (
              <>
                <h4 className="text-green-600 font-semibold">Matched with: {mentor.name}</h4>
                <p>Course: {mentor.course}</p>
                <p>Interests: {mentor.interests.join(", ")}</p>
                <p className="text-sm text-gray-600">Match Score: {score}%</p>
              </>
            ) : (
              <p className="text-red-500">No Suitable Mentor Found</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchingAlgorithm;
