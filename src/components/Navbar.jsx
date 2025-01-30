// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FaBars, FaTimes, FaUser } from "react-icons/fa";
// import { BsBook } from 'react-icons/bs';
// import './Navbar.css';
// import { showAlert } from '../utils/alerts';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     checkAuthStatus();
//   }, []);

//   const checkAuthStatus = () => {
//     const token = localStorage.getItem('token');
//     const userStr = localStorage.getItem('user');

//     if (token && userStr) {
//       try {
//         const userData = JSON.parse(userStr);
//         setIsAuthenticated(true);
//         setUser(userData);
//       } catch (error) {
//         console.error('Error parsing user data:', error);
//         handleLogout();
//       }
//     } else {
//       setIsAuthenticated(false);
//       setUser(null);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     setIsAuthenticated(false);
//     setUser(null);
//     showAlert.success('Logged out successfully');
//     navigate('/login');
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navItems = [
//     { link: "Home", path: "/" },
//     { link: "Shop", path: "/shop" },
//     { link: "About", path: "/about" },
//     { link: "Blog", path: "/blog" },
//   ];

//   return (
//     <div className="fixed w-full top-0 left-0 right-0 z-50">
//       <header className="bg-white shadow-lg fixed w-full top-0 z-50">
//         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <Link 
//                 to="/" 
//                 className="flex items-center gap-2 text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <BsBook className="text-3xl transform -rotate-12" />
//                 <span className="hidden sm:block">Book<span className="text-gray-800">Hive</span></span>
//               </Link>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               {isAuthenticated ? (
//                 <>
//                   {navItems.map(({ link, path }) => (
//                     <Link
//                       key={path}
//                       to={path}
//                       className={`nav-link ${
//                         location.pathname === path
//                           ? "text-blue-600"
//                           : "text-gray-700 hover:text-blue-600"
//                       }`}
//                     >
//                       {link}
//                     </Link>
//                   ))}
//                   {user?.role === 'admin' && (
//                     <Link
//                       to="/admin/dashboard"
//                       className={`nav-link ${
//                         location.pathname.includes('/admin/dashboard')
//                           ? "bg-blue-100 text-blue-600"
//                           : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
//                       }`}
//                     >
//                       Dashboard
//                     </Link>
//                   )}
//                   <div className="relative group">
//                     <button className="flex items-center space-x-2">
//                       <FaUser className="text-gray-600" />
//                       <span className="text-gray-600">{user?.name}</span>
//                     </button>
//                     <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-lg shadow-xl hidden group-hover:block">
//                       <button
//                         onClick={handleLogout}
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                       >
//                         Logout
//                       </button>
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   {navItems.map(({ link, path }) => (
//                     <Link
//                       key={path}
//                       to={path}
//                       className={`nav-link ${
//                         location.pathname === path
//                           ? "text-blue-600"
//                           : "text-gray-700 hover:text-blue-600"
//                       }`}
//                     >
//                       {link}
//                     </Link>
//                   ))}
//                   <Link
//                     to="/login"
//                     className="nav-link"
//                   >
//                     Login
//                   </Link>
//                   <Link
//                     to="/signup"
//                     className="nav-link"
//                   >
//                     Sign Up
//                   </Link>
//                 </>
//               )}
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden flex items-center">
//               <button
//                 onClick={toggleMenu}
//                 className="text-gray-600 hover:text-gray-900 focus:outline-none"
//               >
//                 {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//               </button>
//             </div>
//           </div>
//         </nav>
//       </header>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {isAuthenticated ? (
//               <>
//                 {navItems.map(({ link, path }) => (
//                   <Link
//                     key={path}
//                     to={path}
//                     className="mobile-nav-link"
//                     onClick={toggleMenu}
//                   >
//                     {link}
//                   </Link>
//                 ))}
//                 {user?.role === 'admin' && (
//                   <Link
//                     to="/admin/dashboard"
//                     className="mobile-nav-link"
//                     onClick={toggleMenu}
//                   >
//                     Dashboard
//                   </Link>
//                 )}
//                 <button
//                   onClick={() => {
//                     handleLogout();
//                     toggleMenu();
//                   }}
//                   className="mobile-nav-link w-full text-left"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   className="mobile-nav-link"
//                   onClick={toggleMenu}
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/signup"
//                   className="mobile-nav-link"
//                   onClick={toggleMenu}
//                 >
//                   Sign Up
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { BsBook } from 'react-icons/bs';
import './Navbar.css';
import { showAlert } from '../utils/alerts';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');

    if (token && userStr) {
      try {
        const userData = JSON.parse(userStr);
        setIsAuthenticated(true);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing user data:', error);
        handleLogout();
      }
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
    showAlert.success('Logged out successfully');
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Shop", path: "/shop" },
    { link: "About", path: "/about" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <div className="fixed w-full top-0 left-0 right-0 z-50">
      <header className="bg-white shadow-lg fixed w-full top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link 
                to="/" 
                className="flex items-center gap-2 text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <BsBook className="text-3xl transform -rotate-12" />
                <span className="hidden sm:block">Book<span className="text-gray-800">Hive</span></span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {isAuthenticated ? (
                <>
                  {navItems.map(({ link, path }) => (
                    <Link
                      key={path}
                      to={path}
                      className={`nav-link ${
                        location.pathname === path
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {link}
                    </Link>
                  ))}
                  <div className="relative group">
                    <button className="flex items-center space-x-2">
                      <FaUser className="text-gray-600" />
                      <span className="text-gray-600">{user?.name}</span>
                    </button>
                    <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-lg shadow-xl hidden group-hover:block">
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {navItems.map(({ link, path }) => (
                    <Link
                      key={path}
                      to={path}
                      className={`nav-link ${
                        location.pathname === path
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {link}
                    </Link>
                  ))}
                  <Link
                    to="/login"
                    className="nav-link"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="nav-link"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {isAuthenticated ? (
              <>
                {navItems.map(({ link, path }) => (
                  <Link
                    key={path}
                    to={path}
                    className="mobile-nav-link"
                    onClick={toggleMenu}
                  >
                    {link}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="mobile-nav-link w-full text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="mobile-nav-link"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="mobile-nav-link"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

