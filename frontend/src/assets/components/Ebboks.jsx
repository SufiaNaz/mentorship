import React, { useState } from "react";
import { Search, Download, Eye } from "lucide-react";

// Sample E-Books Data
const booksData = [
  { id: 1, title: "Introduction to React", author: "John Doe", file: "/ebooks/react.pdf", cover: "https://source.unsplash.com/200x300/?book" },
  { id: 2, title: "JavaScript Essentials", author: "Jane Smith", file: "/ebooks/js-essentials.pdf", cover: "https://source.unsplash.com/200x300/?javascript" },
  { id: 3, title: "Web Development Basics", author: "Michael Lee", file: "/ebooks/web-dev.pdf", cover: "https://source.unsplash.com/200x300/?coding" },
  { id: 4, title: "Machine Learning Guide", author: "Sara Connor", file: "/ebooks/ml-guide.pdf", cover: "https://source.unsplash.com/200x300/?ai" },
  { id: 5, title: "Data Structures & Algorithms", author: "David Clark", file: "/ebooks/dsa.pdf", cover: "https://source.unsplash.com/200x300/?technology" },
];

const EBooks = () => {
  const [search, setSearch] = useState("");

  // Filter books based on search input
  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">📚 E-Books & PDFs</h1>
      <p className="text-center text-gray-600 mb-6">Explore and download learning materials.</p>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search e-books..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute right-3 top-2 text-gray-500" />
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition">
              <img src={book.cover} alt={book.title} className="w-40 h-60 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-bold">{book.title}</h2>
              <p className="text-gray-600 mb-2">by {book.author}</p>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-3">
                <a href={book.file} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  <Eye size={18} /> View
                </a>
                <a href={book.file} download className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                  <Download size={18} /> Download
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-3">No books found.</p>
        )}
      </div>
    </div>
  );
};

export default EBooks;
