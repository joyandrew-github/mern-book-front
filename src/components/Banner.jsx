// import React from "react";

// const Banner = () => {
//   return (
//     <div className="px-4 lg:px-24 bg-teal-100 flex items-center justify-between">
//       {/* Left Side */}
//       <div className="w-full lg:w-1/2 space-y-6">
//         <h2 className="text-5xl font-bold leading-snug text-black">
//           Buy and Sell Your Books
//         </h2>
//         <p className="md:w-1">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
//           nostrum ullam, odio corporis, eaque quas ipsa quod vitae tempora,
//           rerum doloribus fugiat minima consectetur dicta mollitia suscipit.
//         </p>
//         <div className="flex items-center space-x-4">
//           <input
//             type="search"
//             name="search"
//             id="search"
//             placeholder="Search a book"
//             className="py-2 px-4 border border-gray-300 rounded-sm outline-none"
//           />
//           <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="hidden lg:block w-full lg:w-1/2">
//         <img
//           src="/path/to/image.png" // Replace with your actual image path
//           alt="Books banner"
//           className="w-full h-auto"
//         />
//       </div>
//     </div>
//   );
// };

// export default Banner;
import React, { useState } from 'react';
import BannerCard from '../Home/BannerCard';

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-teal-50 to-blue-50">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-100 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-24 lg:py-32">
          {/* Left content section */}
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">Buy and Sell Your</span>
              <span className="block mt-2 text-blue-600">Books for the Best Prices</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl">
              Discover a vast collection of books at unbeatable prices. Join our community of book lovers 
              and find your next great read or give your books a new home.
            </p>

            <div className="mt-8">
              <div className="flex max-w-md rounded-xl shadow-sm ring-1 ring-gray-200 bg-white">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for your favorite books..."
                  className="flex-1 min-w-0 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none rounded-l-xl"
                />
                <button className="inline-flex items-center gap-2 rounded-r-xl px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <span>Search</span>
                </button>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-4 items-center text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Verified Sellers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right section with BannerCard */}
          <div className="flex-1 w-full md:w-1/2">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-teal-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
              
              {/* Card container with subtle animation */}
              <div className="relative transition-transform hover:-translate-y-2 duration-300">
                <BannerCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
