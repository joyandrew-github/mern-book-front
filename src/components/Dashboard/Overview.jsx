// import React, { useState, useEffect } from 'react';
// import { FaBook, FaUsers, FaShoppingCart, FaDollarSign } from 'react-icons/fa';

// const Overview = () => {
//   const [stats, setStats] = useState({
//     totalBooks: 0,
//     totalUsers: 0,
//     totalOrders: 0,
//     totalRevenue: 0
//   });

//   useEffect(() => {
//     fetchStats();
//   }, []);

//   const fetchStats = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/admin/stats', {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });
//       const data = await response.json();
//       setStats(data);
//     } catch (error) {
//       console.error('Error fetching stats:', error);
//     }
//   };

//   const StatCard = ({ icon, label, value, color }) => (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <div className="flex items-center">
//         <div className={`p-3 rounded-full ${color} text-white mr-4`}>
//           {icon}
//         </div>
//         <div>
//           <p className="text-gray-500 text-sm">{label}</p>
//           <p className="text-2xl font-semibold">{value}</p>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <StatCard
//           icon={<FaBook size={24} />}
//           label="Total Books"
//           value={stats.totalBooks}
//           color="bg-blue-500"
//         />
//         <StatCard
//           icon={<FaUsers size={24} />}
//           label="Total Users"
//           value={stats.totalUsers}
//           color="bg-green-500"
//         />
//         <StatCard
//           icon={<FaShoppingCart size={24} />}
//           label="Total Orders"
//           value={stats.totalOrders}
//           color="bg-purple-500"
//         />
//         <StatCard
//           icon={<FaDollarSign size={24} />}
//           label="Total Revenue"
//           value={`$${stats.totalRevenue.toFixed(2)}`}
//           color="bg-yellow-500"
//         />
//       </div>
//     </div>
//   );
// };

// export default Overview; 