// import React, { useState } from 'react';
// import { FaBook, FaUsers, FaTruck, FaHeadset, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';

// const About = () => {
//   const [hoveredFeature, setHoveredFeature] = useState(null);
//   const [hoveredMember, setHoveredMember] = useState(null);

//   const features = [
//     {
//       icon: <FaBook className="text-4xl text-blue-600" />,
//       title: "Extensive Collection",
//       description: "Access to over 10,000 books across various genres and categories.",
//       stats: "10,000+ Books"
//     },
//     {
//       icon: <FaUsers className="text-4xl text-blue-600" />,
//       title: "Community",
//       description: "Join a growing community of book lovers and share your reading experiences.",
//       stats: "50,000+ Members"
//     },
//     {
//       icon: <FaTruck className="text-4xl text-blue-600" />,
//       title: "Fast Delivery",
//       description: "Quick and reliable delivery to your doorstep within 2-3 business days.",
//       stats: "98% On-time Delivery"
//     },
//     {
//       icon: <FaHeadset className="text-4xl text-blue-600" />,
//       title: "24/7 Support",
//       description: "Round-the-clock customer support to assist you with any queries.",
//       stats: "< 2hr Response Time"
//     }
//   ];

//   const teamMembers = [
//     {
//       name: "JoyAndrew",
//       role: "Founder & CEO",
//       image: "https://randomuser.me/api/portraits/men/1.jpg",
//       bio: "20+ years of experience in publishing and digital content distribution.",
//       contact: {
//         email: "john@bookhive.com",
//         phone: "+1 234-567-8900"
//       }
//     },
//     {
//       name: "Sarah Johnson",
//       role: "Head of Operations",
//       image: "https://randomuser.me/api/portraits/women/1.jpg",
//       bio: "Former Amazon executive with expertise in supply chain management.",
//       contact: {
//         email: "sarah@bookhive.com",
//         phone: "+1 234-567-8901"
//       }
//     },
//     {
//       name: "Michael Brown",
//       role: "Chief Librarian",
//       image: "https://randomuser.me/api/portraits/men/2.jpg",
//       bio: "PhD in Library Science with 15 years of digital library experience.",
//       contact: {
//         email: "michael@bookhive.com",
//         phone: "+1 234-567-8902"
//       }
//     }
//   ];

//   const contactInfo = {
//     address: "123 BookHive Street, Literary Lane, BK 12345",
//     email: "contact@bookhive.com",
//     phone: "+1 (555) 123-4567"
//   };

//   return (
//     <div className="container mx-auto px-4 py-12">
//       {/* Hero Section with Parallax Effect */}
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-center mb-16 relative overflow-hidden rounded-2xl p-12 bg-gradient-to-r from-blue-500 to-blue-700"
//       >
//         <motion.div
//           animate={{ y: [0, -10, 0] }}
//           transition={{ duration: 3, repeat: Infinity }}
//           className="absolute inset-0 bg-opacity-20 bg-white"
//         />
//         <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white relative z-10">About BookHive</h1>
//         <p className="text-xl text-white max-w-3xl mx-auto relative z-10">
//           Your premier destination for discovering, purchasing, and exploring the world of books. 
//           We're passionate about connecting readers with their next favorite read.
//         </p>
//       </motion.div>

//       {/* Mission Statement with Hover Effect */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         className="bg-blue-50 rounded-xl p-8 mb-16 transform hover:scale-105 transition-transform duration-300"
//         whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
//       >
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
//           <p className="text-gray-700 text-lg">
//             To make quality literature accessible to everyone, foster a love for reading, 
//             and build a community where book lovers can connect, share, and grow together.
//           </p>
//         </div>
//       </motion.div>

//       {/* Features Grid with Interactive Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//         {features.map((feature, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 * index }}
//             className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//             onHoverStart={() => setHoveredFeature(index)}
//             onHoverEnd={() => setHoveredFeature(null)}
//             whileHover={{ y: -10 }}
//           >
//             <div className="text-center">
//               <motion.div 
//                 className="mb-4"
//                 animate={{ rotate: hoveredFeature === index ? 360 : 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 {feature.icon}
//               </motion.div>
//               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
              
//               <AnimatePresence>
//                 {hoveredFeature === index && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                     className="mt-4 p-2 bg-blue-50 rounded-lg"
//                   >
//                     <span className="font-semibold text-blue-600">{feature.stats}</span>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Team Section with Bio Cards */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6 }}
//         className="mb-16"
//       >
//         <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               className="relative group"
//               onHoverStart={() => setHoveredMember(index)}
//               onHoverEnd={() => setHoveredMember(null)}
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className="text-center p-6 bg-white rounded-lg shadow-lg transition-all duration-300">
//                 <motion.img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
//                   whileHover={{ scale: 1.1 }}
//                 />
//                 <h3 className="text-xl font-semibold">{member.name}</h3>
//                 <p className="text-blue-600">{member.role}</p>
                
//                 <AnimatePresence>
//                   {hoveredMember === index && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: 'auto' }}
//                       exit={{ opacity: 0, height: 0 }}
//                       className="mt-4 text-left"
//                     >
//                       <p className="text-gray-600 mb-2">{member.bio}</p>
//                       <div className="space-y-1 text-sm">
//                         <p className="flex items-center gap-2">
//                           <FaEnvelope className="text-blue-600" />
//                           {member.contact.email}
//                         </p>
//                         <p className="flex items-center gap-2">
//                           <FaPhoneAlt className="text-blue-600" />
//                           {member.contact.phone}
//                         </p>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Interactive Contact Section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.8 }}
//         className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 text-center"
//         whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
//       >
//         <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
//         <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <motion.div 
//             className="flex flex-col items-center p-4 bg-white rounded-lg"
//             whileHover={{ y: -5 }}
//           >
//             <FaMapMarkerAlt className="text-2xl text-blue-600 mb-2" />
//             <p className="text-gray-600">{contactInfo.address}</p>
//           </motion.div>
//           <motion.div 
//             className="flex flex-col items-center p-4 bg-white rounded-lg"
//             whileHover={{ y: -5 }}
//           >
//             <FaEnvelope className="text-2xl text-blue-600 mb-2" />
//             <p className="text-gray-600">{contactInfo.email}</p>
//           </motion.div>
//           <motion.div 
//             className="flex flex-col items-center p-4 bg-white rounded-lg"
//             whileHover={{ y: -5 }}
//           >
//             <FaPhoneAlt className="text-2xl text-blue-600 mb-2" />
//             <p className="text-gray-600">{contactInfo.phone}</p>
//           </motion.div>
//         </div>
//         <div className="flex justify-center space-x-4">
//           <motion.button 
//             className="px-6 py-3 bg-blue-600 text-white rounded-lg transition-colors"
//             whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Contact Us
//           </motion.button>
//           <motion.button 
//             className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg transition-colors"
//             whileHover={{ scale: 1.05, backgroundColor: "#EFF6FF" }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Learn More
//           </motion.button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default About; 


import React, { useState } from "react";
import { FaBook, FaUsers, FaTruck, FaHeadset, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./About.css"; // Import the CSS file

const About = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: <FaBook className="text-4xl text-blue-600" />,
      title: "Extensive Collection",
      description: "Access to over 10,000 books across various genres and categories.",
      stats: "10,000+ Books",
    },
    {
      icon: <FaUsers className="text-4xl text-blue-600" />,
      title: "Community",
      description: "Join a growing community of book lovers and share your reading experiences.",
      stats: "50,000+ Members",
    },
    {
      icon: <FaTruck className="text-4xl text-blue-600" />,
      title: "Fast Delivery",
      description: "Quick and reliable delivery to your doorstep within 2-3 business days.",
      stats: "98% On-time Delivery",
    },
    {
      icon: <FaHeadset className="text-4xl text-blue-600" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you with any queries.",
      stats: "< 2hr Response Time",
    },
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">About BookHive</h1>
        <p className="hero-description">
          Your premier destination for discovering, purchasing, and exploring the world of books. 
          We're passionate about connecting readers with their next favorite read.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mission-container">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg">
          To make quality literature accessible to everyone, foster a love for reading, 
          and build a community where book lovers can connect, share, and grow together.
        </p>
      </div>

      {/* Features Section */}
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-box"
            onMouseEnter={() => setHoveredFeature(index)}
            onMouseLeave={() => setHoveredFeature(null)}
          >
            <div>
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              {hoveredFeature === index && (
                <div className="mt-4 p-2 bg-blue-50 rounded-lg">
                  <span className="font-semibold text-blue-600">{feature.stats}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="contact-box">
            <FaMapMarkerAlt className="text-2xl text-blue-600 mb-2" />
            <p>123 BookHive Street, BK 12345</p>
          </div>
          <div className="contact-box">
            <FaEnvelope className="text-2xl text-blue-600 mb-2" />
            <p>contact@bookhive.com</p>
          </div>
          <div className="contact-box">
            <FaPhoneAlt className="text-2xl text-blue-600 mb-2" />
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
