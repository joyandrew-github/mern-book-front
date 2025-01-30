// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
// import { showAlert } from '../../utils/alerts';
// import './Login.css';

// const Login = () => {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   useEffect(() => {
//     const checkAuth = () => {
//       const token = localStorage.getItem('token');
//       const userStr = localStorage.getItem('user');
      
//       if (token && userStr) {
//         try {
//           const user = JSON.parse(userStr);
//           // If user is already logged in, redirect appropriately
//           if (user.role === 'admin') {
//             navigate('/admin/dashboard');
//           } else {
//             navigate('/');
//           }
//         } catch (error) {
//           // If there's an error parsing user data, clear localStorage
//           console.error('Error parsing user data:', error);
//           localStorage.removeItem('token');
//           localStorage.removeItem('user');
//         }
//       }
//     };

//     checkAuth();
//   }, [navigate]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       console.log('Login response:', data); // Debug log

//       if (response.ok && data.success) {
//         // Store auth data
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('user', JSON.stringify(data.user));
        
//         showAlert.success('Login successful!');
        
//         // Navigate based on role
//         if (data.user.role === 'admin') {
//           navigate('/admin/dashboard');
//         } else {
//           navigate('/');
//         }

//         // Optional: Delay reload to allow navigation to complete
//         setTimeout(() => {
//           window.location.reload();
//         }, 100);
//       } else {
//         // Check if email needs verification
//         if (data.needsVerification) {
//           showAlert.warning('Please verify your email first');
//           navigate('/verify-otp', { 
//             state: { 
//               email: formData.email 
//             }
//           });
//         } else {
//           showAlert.error(data.message || 'Login failed');
//         }
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       showAlert.error('Login failed. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-background"></div>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="auth-form-container"
//       >
//         <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative z-10">
//           <div className="text-center">
//             <motion.h2
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="text-3xl font-extrabold text-gray-900 mb-2"
//             >
//               Welcome Back
//             </motion.h2>
//             <p className="text-gray-600">Sign in to continue to BookHive</p>
//           </div>

//           <form onSubmit={handleSubmit} className="mt-8 space-y-6">
//             <div className="space-y-4">
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaEnvelope className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="appearance-none relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     placeholder="Enter your email"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaLock className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="password"
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     required
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="appearance-none relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     placeholder="Enter your password"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                   >
//                     {showPassword ? (
//                       <FaEyeSlash className="h-5 w-5 text-gray-400" />
//                     ) : (
//                       <FaEye className="h-5 w-5 text-gray-400" />
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                 />
//                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                   Remember me
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
//                   Forgot password?
//                 </Link>
//               </div>
//             </div>

//             <div>
//               <motion.button
//                 whileHover={{ scale: 1.01 }}
//                 whileTap={{ scale: 0.99 }}
//                 type="submit"
//                 disabled={isLoading}
//                 className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 ${
//                   isLoading ? 'opacity-70 cursor-not-allowed' : ''
//                 }`}
//               >
//                 {isLoading ? 'Signing in...' : 'Sign in'}
//               </motion.button>
//             </div>
//           </form>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">Don't have an account?</span>
//               </div>
//             </div>

//             <div className="mt-6">
//               <Link
//                 to="/signup"
//                 className="w-full flex justify-center py-3 px-4 border border-indigo-600 text-sm font-medium rounded-lg text-indigo-600 bg-transparent hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
//               >
//                 Create an account
//               </Link>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Login; 






import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { showAlert } from '../../utils/alerts';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      if (token) {
        navigate('/');
      }
    };
    checkAuth();
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://mern-book-backend-new.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        showAlert.success('Login successful!');
        navigate('/');
        setTimeout(() => {
          window.location.reload();
        }, 100);
      } else {
        if (data.needsVerification) {
          showAlert.warning('Please verify your email first');
          navigate('/verify-otp', { state: { email: formData.email } });
        } else {
          showAlert.error(data.message || 'Login failed');
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      showAlert.error('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-background"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="auth-form-container"
      >
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative z-10">
          <div className="text-center">
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-3xl font-extrabold text-gray-900 mb-2">
              Welcome Back
            </motion.h2>
            <p className="text-gray-600">Sign in to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input id="email" name="email" type="email" required value={formData.email}
                    onChange={handleChange} className="pl-10 py-3 border rounded-lg w-full" placeholder="Enter your email" />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input id="password" name="password" type={showPassword ? "text" : "password"} required
                    value={formData.password} onChange={handleChange} className="pl-10 py-3 border rounded-lg w-full"
                    placeholder="Enter your password" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3">
                    {showPassword ? <FaEyeSlash className="h-5 w-5 text-gray-400" /> : <FaEye className="h-5 w-5 text-gray-400" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4" />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-900">Remember me</label>
              </div>
              <Link to="/forgot-password" className="text-sm text-indigo-600">Forgot password?</Link>
            </div>

            <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} type="submit" disabled={isLoading}
              className="w-full py-3 text-white bg-indigo-600 rounded-lg">
              {isLoading ? 'Signing in...' : 'Sign in'}
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-500">Don't have an account?</p>
            <Link to="/signup" className="text-indigo-600">Create an account</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
