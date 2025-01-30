import React, { useEffect, useState } from 'react';
import BannerCard from './BannerCard';
import BookCards from '../components/BookCards';
import FavoriteBooks from './FavoriteBooks';
import SearchBar from '../components/SearchBar';
import './Home.css'; // Import the CSS file

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://mern-book-backend-new.onrender.com/all-books');
      const data = await response.json();
      setBooks(data.books);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching books:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loader">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="home-container">
      {/* Banner Section */}
      <div className="banner-section">
        <div>
          <div className="banner-content">
            <h1 className="banner-title">
              Buy and Sell Your Books{' '}
              <span className="banner-highlight">for the Best Prices</span>
            </h1>
            <p className="banner-text">
              Find your next favorite book or give your old books a new home.
              Join our community of book lovers today.
            </p>
            <SearchBar />
          </div>
        </div>
        {/* Banner Image */}
        <div>
          <BannerCard />
        </div>
      </div>

      {/* Main Content */}
      <div className="book-section">
        <BookCards books={books} />
        <FavoriteBooks />
      </div>
    </div>
  );
};

export default Home;
