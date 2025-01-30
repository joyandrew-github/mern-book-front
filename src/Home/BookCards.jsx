// import React from 'react';
// import { Link } from 'react-router-dom';

// const BookCards = ({ books = [] }) => {
//   if (!books.length) {
//     return (
//       <div className="my-16 px-4 lg:px-24 text-center">
//         <h2 className="text-3xl font-bold mb-8">Latest Books</h2>
//         <p className="text-gray-600">No books available at the moment.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="my-16 px-4 lg:px-24">
//       <h2 className="text-3xl font-bold text-center mb-8">Latest Books</h2>
//       <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3">
//         {books.map((book) => (
//           <Link 
//             to={`/book/${book._id}`} 
//             key={book._id} 
//             className="transform hover:scale-105 transition-all duration-300"
//           >
//             <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
//               <div className="relative h-56 overflow-hidden">
//                 <img 
//                   src={book.imageURL} 
//                   alt={book.title}
//                   className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold mb-2 line-clamp-1">{book.title}</h3>
//                 <p className="text-gray-600 mb-2">Author: {book.author}</p>
//                 <p className="text-blue-600 font-bold">${book.price}</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BookCards; 