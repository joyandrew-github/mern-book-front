import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home/Home';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Announcement from './components/Announcement';
import OTPVerification from './components/OTPVerification/OTPVerification';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css'; 

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <div className="app-container">
          <Navbar />
          <div className="content-wrapper">
            <Announcement />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <Routes>
              {/* Public routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/verify-otp" element={<OTPVerification />} />
              
              {/* Protected routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
              </Route>

              {/* Catch all route */}
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
