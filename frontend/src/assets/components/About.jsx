import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-pink-500">About GuidingStar</h1>
        <p className="mt-4 text-lg">
          GuidingStar is your ultimate platform for discovering the best books, 
          connecting with fellow readers, and exploring insightful recommendations.
        </p>
        <p className="mt-2 text-lg">
          We believe in the power of stories to inspire, educate, and entertain. 
          Whether you’re a casual reader or a book enthusiast, we have something for you.
        </p>
        <div className="mt-6">
          <img
            src="https://source.unsplash.com/600x300/?books,library"
            alt="Books"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
