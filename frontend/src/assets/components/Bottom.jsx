import React from 'react';

function Bottom() {
  return (
   <>
   <div>
   <div className="bg-white-100 flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="text-blue-500 uppercase tracking-widest">Some Reasons</p>
        <h1 className="text-3xl font-bold mt-2 mb-8 text-violet-500">Why Choose Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-blue-500 text-xl font-bold mb-2">01</h2>
            <h3 className="text-lg font-semibold mb-2 text-violet-500">User-friendly Interface</h3>
            <p className="text-gray-600">Our website is intuitive, easy to navigate, and designed to enhance the overall user experience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-blue-500 text-xl font-bold mb-2">02</h2>
            <h3 className="text-lg font-semibold mb-2 text-violet-500">One-on-One Guidance</h3>
            <p className="text-gray-600">Our website offers personalized one-on-one guidance to help you achieve your goals with expert mentorship and support.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-blue-500 text-xl font-bold mb-2">03</h2>
            <h3 className="text-lg font-semibold mb-2 text-violet-500">Communication Tools</h3>
            <p className="text-gray-600">Our website provides a range of communication tools to facilitate seamless interaction and collaboration between students and alumnis.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-blue-500 text-xl font-bold mb-2">04</h2>
            <h3 className="text-lg font-semibold mb-2 text-violet-500">Progress Tracking</h3>
            <p className="text-gray-600">Our website offers progress tracking tools to help you monitor your growth and stay on track with your goals.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-blue-500 text-xl font-bold mb-2">05</h2>
            <h3 className="text-lg font-semibold mb-2 text-violet-500">Feedback</h3>
            <p className="text-gray-600">Our website provides a structured feedback system to help you receive valuable insights and improve your skills throughout your journey.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-blue-500 text-xl font-bold mb-2">06</h2>
            <h3 className="text-lg font-semibold mb-2 text-violet-500">Authenticity</h3>
            <p className="text-gray-600">Our website ensures authenticity by connecting you with verified mentors, fostering trust and credibility in every interaction.</p>
          </div>
        </div>
      </div>
    </div>
    <h1 className='text-5xl flex justify-center mt-20 mr-22 mb-20 text-violet-400 '>OUR MENTORS</h1>
    </div></>
  );
}

export default Bottom;
