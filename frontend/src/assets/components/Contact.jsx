import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white flex items-center justify-center p-6">
      <div className="max-w-2xl bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full">
        <h1 className="text-3xl font-bold text-pink-500 text-center mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-center mb-6">
          Have questions? Reach out to us, and we’ll get back to you soon!
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-semibold transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
