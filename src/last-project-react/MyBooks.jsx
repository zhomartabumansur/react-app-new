import React from "react";
import { Link } from "react-router-dom";

const MyBooks = () => {
     return (
        <div>
            <h1 className="text-blue-500">My Books Page</h1>
            <Link className="" to="/books"><button>Books</button></Link>
            <Link to="/"><button>Home</button></Link>
        </div>
     )
}

export default MyBooks