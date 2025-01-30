import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards"; 

const FavouriteBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://mern-book-backend-new.onrender.com/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  return (
    <div>
      <BookCards books={books} headline="Best Seller Books" />
    </div>
  );
};

export default FavouriteBooks;
