// import React, { useState, useEffect } from 'react';
// import { showAlert } from '../../utils/alerts';

// const ManageBooks = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   const fetchBooks = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/all-books');
//       const data = await response.json();
//       setBooks(data.books);
//     } catch (error) {
//       console.error('Error fetching books:', error);
//       showAlert.error('Error fetching books');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePriceUpdate = async (bookId, newPrice) => {
//     try {
//       const response = await fetch(`http://localhost:5000/update-book-price/${bookId}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         },
//         body: JSON.stringify({ price: newPrice })
//       });

//       const data = await response.json();

//       if (response.ok) {
//         showAlert.success('Price updated successfully');
//         fetchBooks(); // Refresh the book list
//       } else {
//         showAlert.error(data.message || 'Failed to update price');
//       }
//     } catch (error) {
//       console.error('Error updating price:', error);
//       showAlert.error('Error updating price');
//     }
//   };

//   const setDefaultPrices = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/admin/set-default-prices', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });

//       const data = await response.json();

//       if (response.ok) {
//         showAlert.success('Default prices set successfully');
//         fetchBooks(); // Refresh the book list
//       } else {
//         showAlert.error(data.message || 'Failed to set default prices');
//       }
//     } catch (error) {
//       console.error('Error setting default prices:', error);
//       showAlert.error('Error setting default prices');
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold">Manage Books</h2>
//         <button
//           onClick={setDefaultPrices}
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Set Default Prices
//         </button>
//       </div>
//       <div className="grid gap-4">
//         {books.map((book) => (
//           <div key={book._id} className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
//             <div>
//               <h3 className="font-semibold">{book.bookTitle}</h3>
//               <p className="text-gray-600">by {book.authorName}</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="flex items-center gap-2">
//                 <label className="text-sm">Price ($):</label>
//                 <input
//                   type="number"
//                   min="0"
//                   step="0.01"
//                   defaultValue={book.price || 0}
//                   className="w-24 p-1 border rounded"
//                   onBlur={(e) => {
//                     const newPrice = parseFloat(e.target.value);
//                     if (!isNaN(newPrice) && newPrice !== book.price) {
//                       handlePriceUpdate(book._id, newPrice);
//                     }
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ManageBooks; 