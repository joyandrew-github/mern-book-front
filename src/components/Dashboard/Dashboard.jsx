import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Home from '../../Home/Home';
import './Dashboard.css';
import { fetchWithAuth } from '../../utils/api';
import { showAlert } from '../../utils/alerts';

const Dashboard = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const response = await fetch('https://mern-book-backend-w72i.onrender.com/api/auth/check-admin', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await response.json();
        if (!data.isAdmin) {
          showAlert.error('Admin access required');
          navigate('/');
        }
      } catch (error) {
        console.error('Error verifying admin:', error);
        showAlert.error('Error verifying admin access');
        navigate('/');
      }
    };

    verifyAdmin();
  }, [navigate, token]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetchWithAuth('https://mern-book-backend-w72i.onrender.com/all-books');
      const data = await response.json();
      setBooks(data.books);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching books:', error);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleDelete = async (bookId) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await fetchWithAuth(`https://mern-book-backend-w72i.onrender.com/delete-book/${bookId}`, {
          method: 'DELETE'
        });
        fetchBooks(); // Refresh the book list
      } catch (error) {
        console.error('Error deleting book:', error);
      }
    }
  };

  const handleEdit = (bookId) => {
    // Navigate to edit page or open edit modal
    navigate(`/edit-book/${bookId}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      {/* Navbar with logout */}
      <div className="mb-16">
        <Navbar onLogout={handleLogout} />
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        <h2 className="text-2xl font-bold mb-4">Your Books</h2>
        {books.length === 0 ? (
          <p>No books found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <div key={book._id} className="bg-white rounded-lg shadow-md p-4">
                <img
                  src={book.imageURL}
                  alt={book.bookTitle}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{book.bookTitle}</h3>
                <p className="text-gray-600 mb-2">by {book.authorName}</p>
                <p className="text-gray-600 mb-2">{book.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">${book.price}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(book._id)}
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard; 