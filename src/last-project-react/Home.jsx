import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Home = () => {
  const Books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: " Война и мир", author: "Лев Толстой" },
    { id: 3, title: "1984", author: "George Orwell" },
  ];

  return (
    <div className="p-6 flex flex-col items-center ml-85">
      <h1 className="text-blue-600">Welcome to our library</h1>
      <p className="text-blue-600 mb-7 text-2xl">We have different books here look like:</p>

      <div className="grid grid-cols-3 gap-4">
        {Books.map((book) => (
          <div key={book.id} className="border border-blue-400 border-3 p-4 text-center text-lg text-gray-700">
            <h2 className="mb-2">{book.title}</h2>
            <p className="text-gray-500 mb-2">{book.author}</p>
          </div>
        ))}
      </div>

      <div className="m-10">
          <Link className="mr-3" to="/my-Books"><button>My Books</button></Link>
          <Link className="mr-3" to="/books"><button>Books</button></Link>
          <Link to="/gemini-assistant"><button>Gemini Assistant</button></Link>
      </div>

    </div>
  );
};

export default Home;
