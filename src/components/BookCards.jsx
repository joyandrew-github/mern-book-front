// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper/modules";
// import { showAlert } from '../utils/alerts';
// import { makePayment } from '../utils/payment';
// import { FaRupeeSign } from 'react-icons/fa';
// import PurchaseConfirmation from './PurchaseConfirmation';

// const BookCards = () => {
//   const [books, setBooks] = useState([]);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const [purchaseDetails, setPurchaseDetails] = useState(null);
//   const [isProcessing, setIsProcessing] = useState(false);

//   useEffect(() => {
//     fetchBooks();
//     checkAdmin();
//   }, []);

//   const fetchBooks = async () => {
//     try {
//       const response = await fetch('https://mern-book-backend-w72i.onrender.com/all-books');
//       const data = await response.json();
//       setBooks(data.books);
//     } catch (error) {
//       console.error('Error fetching books:', error);
//     }
//   };

//   const checkAdmin = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/auth/check-role', {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });
//       const data = await response.json();
//       setIsAdmin(data.role === 'admin');
//     } catch (error) {
//       console.error('Error checking admin status:', error);
//     }
//   };

//   const handleBuyNow = async (book) => {
//     try {
//       setIsProcessing(true);

//       if (!book.price) {
//         showAlert.error('Book price not set');
//         return;
//       }

//       const priceInINR = Math.round(parseFloat(book.price) * 75);
      
//       if (isNaN(priceInINR) || priceInINR <= 0) {
//         showAlert.error('Invalid price');
//         return;
//       }

//       const response = await makePayment({
//         amount: priceInINR,
//         bookTitle: book.bookTitle || book.title,
//         bookId: book._id
//       });

//       if (response && response.success) {
//         setPurchaseDetails({
//           orderId: response.orderId,
//           paymentId: response.paymentId,
//           book,
//           amount: priceInINR,
//           timestamp: new Date().toISOString()
//         });
//         setShowConfirmation(true);
//         showAlert.success('Payment successful!');
//       }
//     } catch (error) {
//       console.error('Payment failed:', error);
//       showAlert.error(error.message || 'Payment failed. Please try again.');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   const formatPrice = (price) => {
//     if (!price) return '0.00';
//     const priceInINR = Math.round(parseFloat(price) * 75);
//     return `₹${priceInINR.toFixed(2)}`;
//   };

//   return (
//     <div className="my-16 px-4 lg:px-24">
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={20}
//         pagination={{
//           clickable: true,
//           dynamicBullets: true,
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 30,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 4,
//             spaceBetween: 50,
//           },
//         }}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         modules={[Pagination, Autoplay]}
//         className="mySwiper pb-12"
//       >
//         {books.map((book) => (
//           <SwiperSlide key={book._id}>
//             <div className="relative bg-white rounded-xl shadow-lg h-[420px] flex flex-col transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
//               <div className="h-[200px] relative overflow-hidden rounded-t-xl">
//                 <img 
//                   src={book.imageURL} 
//                   alt={book.bookTitle}
//                   className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                 />
//               </div>
//               <div className="p-5 flex flex-col flex-grow">
//                 <div className="flex-grow">
//                   <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-gray-800 min-h-[56px]">
//                     {book.bookTitle}
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-1">by {book.authorName}</p>
//                   <p className="text-gray-500 text-sm mb-3 italic">{book.category}</p>
//                 </div>
//                 <div className="mt-auto pt-4 border-t border-gray-100">
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center text-indigo-600 font-bold text-lg">
//                       <FaRupeeSign className="mr-1 text-base" />
//                       {formatPrice(book.price)}
//                     </div>
//                     <button
//                       onClick={() => handleBuyNow(book)}
//                       disabled={isProcessing}
//                       className={`px-4 py-2 bg-indigo-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg ${
//                         isProcessing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'
//                       }`}
//                     >
//                       {isProcessing ? 'Processing...' : 'Buy Now'}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       {books.length === 0 && (
//         <div className="text-center py-10">
//           <p className="text-gray-500 text-lg">No books available at the moment.</p>
//         </div>
//       )}

//       {/* Purchase Confirmation Modal */}
//       <PurchaseConfirmation
//         isOpen={showConfirmation}
//         onClose={() => setShowConfirmation(false)}
//         purchaseDetails={purchaseDetails}
//       />
//     </div>
//   );
// };

// export default BookCards;


// // mongodb://localhost:27017/



import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { showAlert } from '../utils/alerts';
import { makePayment } from '../utils/payment';
import { FaRupeeSign } from 'react-icons/fa';
import PurchaseConfirmation from './PurchaseConfirmation';

const BookCards = () => {
  const [books, setBooks] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [purchaseDetails, setPurchaseDetails] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://mern-book-backend-new.onrender.com/all-books');
      const data = await response.json();
      setBooks(data.books);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleBuyNow = async (book) => {
    try {
      setIsProcessing(true);

      if (!book.price) {
        showAlert.error('Book price not set');
        return;
      }

      const priceInINR = Math.round(parseFloat(book.price) * 75);
      
      if (isNaN(priceInINR) || priceInINR <= 0) {
        showAlert.error('Invalid price');
        return;
      }

      const response = await makePayment({
        amount: priceInINR,
        bookTitle: book.bookTitle || book.title,
        bookId: book._id
      });

      if (response && response.success) {
        setPurchaseDetails({
          orderId: response.orderId,
          paymentId: response.paymentId,
          book,
          amount: priceInINR,
          timestamp: new Date().toISOString()
        });
        setShowConfirmation(true);
        showAlert.success('Payment successful!');
      }
    } catch (error) {
      console.error('Payment failed:', error);
      showAlert.error(error.message || 'Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const formatPrice = (price) => {
    if (!price) return '0.00';
    const priceInINR = Math.round(parseFloat(price) * 75);
    return `₹${priceInINR.toFixed(2)}`;
  };

  return (
    <div className="my-16 px-4 lg:px-24">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper pb-12"
      >
        {books.map((book) => (
          <SwiperSlide key={book._id}>
            <div className="relative bg-white rounded-xl shadow-lg h-[420px] flex flex-col transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="h-[200px] relative overflow-hidden rounded-t-xl">
                <img 
                  src={book.imageURL} 
                  alt={book.bookTitle}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-gray-800 min-h-[56px]">
                    {book.bookTitle}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">by {book.authorName}</p>
                  <p className="text-gray-500 text-sm mb-3 italic">{book.category}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-indigo-600 font-bold text-lg">
                      <FaRupeeSign className="mr-1 text-base" />
                      {formatPrice(book.price)}
                    </div>
                    <button
                      onClick={() => handleBuyNow(book)}
                      disabled={isProcessing}
                      className={`px-4 py-2 bg-indigo-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg ${
                        isProcessing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'
                      }`}
                    >
                      {isProcessing ? 'Processing...' : 'Buy Now'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {books.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">No books available at the moment.</p>
        </div>
      )}

      {/* Purchase Confirmation Modal */}
      <PurchaseConfirmation
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        purchaseDetails={purchaseDetails}
      />
    </div>
  );
};

export default BookCards;
