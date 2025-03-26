import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="flex items-center bg-white dark:bg-gray-800 p-2 rounded-md shadow-md w-full max-w-md mx-auto">
      <input
        type="text"
        className="w-full p-2 outline-none bg-transparent dark:text-white"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md transition-all"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
