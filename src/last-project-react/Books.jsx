import React from "react";
import { Link } from "react-router-dom";

export default function Books() {
  const recentBooks = [
    { id: 1, title: 'Atomic Habits', author: 'James Clear', image: 'https://m.media-amazon.com/images/I/51-nXsSRfZL.jpg', description: 'A guide to building good habits and breaking bad ones.'},
    { id: 2, title: 'Sapiens', author: 'Yuval Noah Harari', image: 'https://m.media-amazon.com/images/I/81OwOW9rH5L.jpg', description: 'A brief history of humankind from the beginning of the Stone Age to the modern age.'},
    { id: 3, title: 'The Alchemist', author: 'Paulo Coelho', image: 'https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg', description: 'A young shepherd’s journey to discover his personal legend.'},
    { id: 4, title: 'Educated', author: 'Tara Westover', image: 'https://m.media-amazon.com/images/I/71oXw5nC47L.jpg', description: 'A memoir of a woman’s escape from a survivalist family and her quest for education.'},
    { id: 5, title: 'The Subtle Art of Not Giving a', author: 'Mark Manson', image: 'https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg', description: 'A blunt guide to living a better life by focusing on what really matters.'},
    { id: 6, title: 'The Power of Now', author: 'Eckhart Tolle', image: 'https://m.media-amazon.com/images/I/81I19l2fHyL.jpg', description: 'A spiritual guide to help you live in the present moment.'},
    { id: 7, title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', image: 'https://m.media-amazon.com/images/I/71nybpm6u9L.jpg', description: 'A deep dive into the two systems of thinking that drive human behavior.'},
    { id: 8, title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', image: 'https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg', description: 'A comparison between two fathers and the lessons learned about money and success.'},
    { id: 9, title: 'The Catcher in the Rye', author: 'J.D. Salinger', image: 'https://m.media-amazon.com/images/I/71Vbi-1IPpL.jpg', description: 'A story about a troubled teen, Holden Caulfield, who struggles with the world around him.'},
    { id: 10, title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling', image: 'https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg', description: 'A young boy discovers he is a wizard and begins his magical journey at Hogwarts.'},
    { id: 11, title: 'Франкенштейн', author: 'Мэри Шелли', image: 'https://m.media-amazon.com/images/I/91t4gS69m4L.jpg', description: 'A scientist creates a living being, but the consequences are deadly.'},
    { id: 12, title: 'Потерянный рай', author: 'Джон Мильтон', image: 'https://m.media-amazon.com/images/I/71MT5X58h7L.jpg', description: 'A poem about the fall of man and the ultimate consequences of Adam and Eve\'s sin.'},
  ];
  

  return (
    <div>
      <div>
      <header class="booksheader">
        <Link to="/"><button>Home</button></Link>
        <h1 className="pl-10">Books</h1>
        <Link to="/my-Books"><button>My Books</button></Link>
      </header>
      </div>
      
      <h1 className="text-blue-700 p-6 flex flex-col items-center mt-50 ml-10">We have a lot of books</h1>

      <div className="grid grid-cols-3 gap-4 mt-9 mb-10 ml-10">
        {recentBooks.map((book) => (
          <div key={book.id} className="border border-blue-800 border-3 p-4 text-center text-lg text-gray-700">
            <h2 className="mb-2">{book.title}</h2>
            <p className="text-gray-500 mb-2">{book.author}<br/>
              <Link 
                to="/books-details" 
                state={{ book }}
              >
                <button>Books Details</button>
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
