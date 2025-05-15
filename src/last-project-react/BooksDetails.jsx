import React from "react";
import { useLocation, Link } from "react-router-dom";

const BooksDetails = () => {
  const location = useLocation();
  const { book } = location.state || {};

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl mb-4 text-gray-700">{book.title}</h1>
      <p className="text-gray-600 mb-4">Author: {book.author}</p>
      <img src={book.image} alt={book.title} className="w-48 h-72 mb-4"/>
      <p className="text-gray-600 mb-4">{book.description}</p>

      <Link to="/books">
        <button className="mt-4 px-4 py-2 bg-blue-500 rounded-md">Back to Books</button>
      </Link>
    </div>
  );
};

export default BooksDetails;