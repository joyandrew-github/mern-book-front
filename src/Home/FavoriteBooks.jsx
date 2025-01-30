import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const FavoriteBooks = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      fetchFavoriteBooks();
    }
  }, [isAuthenticated]);

  const fetchFavoriteBooks = async () => {
    try {
      const response = await fetch('https://mern-book-backend-w72i.onrender.com/api/favorite-books', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      setFavoriteBooks(data.books);
    } catch (error) {
      console.error('Error fetching favorite books:', error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="my-16 px-4 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-8">Your Favorite Books</h2>
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">Please log in to see your favorite books</p>
          <Link 
            to="/login" 
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Login here
          </Link>
        </div>
      </div>
    );
  }

  if (favoriteBooks.length === 0) {
    return (
      <div className="my-16 px-4 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-8">Your Favorite Books</h2>
        <p className="text-center text-gray-600">You haven't added any books to your favorites yet.</p>
      </div>
    );
  }

  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-8">Your Favorite Books</h2>
      <div className="grid gap-6 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3">
        {favoriteBooks.map((book) => (
          <div key={book._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={book.imageURL} 
              alt={book.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-600 mb-2">by {book.author}</p>
              <p className="text-blue-600 font-bold">${book.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteBooks; 