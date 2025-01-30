// import React, { useState, useEffect } from 'react';
// import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
// import { showAlert } from '../../utils/alerts';

// const ManageCategories = () => {
//   const [categories, setCategories] = useState([]);
//   const [newCategory, setNewCategory] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/admin/categories', {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });
//       const data = await response.json();
//       setCategories(data.categories);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//       showAlert.error('Error fetching categories');
//       setLoading(false);
//     }
//   };

//   const handleAddCategory = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/admin/categories', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         },
//         body: JSON.stringify({ name: newCategory })
//       });

//       if (response.ok) {
//         showAlert.success('Category added successfully');
//         setNewCategory('');
//         fetchCategories();
//       } else {
//         showAlert.error('Failed to add category');
//       }
//     } catch (error) {
//       console.error('Error adding category:', error);
//       showAlert.error('Error adding category');
//     }
//   };

//   const handleDeleteCategory = async (categoryId) => {
//     if (window.confirm('Are you sure you want to delete this category?')) {
//       try {
//         const response = await fetch(`http://localhost:5000/api/admin/categories/${categoryId}`, {
//           method: 'DELETE',
//           headers: {
//             'Authorization': `Bearer ${localStorage.getItem('token')}`
//           }
//         });

//         if (response.ok) {
//           showAlert.success('Category deleted successfully');
//           fetchCategories();
//         } else {
//           showAlert.error('Failed to delete category');
//         }
//       } catch (error) {
//         console.error('Error deleting category:', error);
//         showAlert.error('Error deleting category');
//       }
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">Manage Categories</h2>
      
//       {/* Add Category Form */}
//       <form onSubmit={handleAddCategory} className="mb-8">
//         <div className="flex gap-4">
//           <input
//             type="text"
//             value={newCategory}
//             onChange={(e) => setNewCategory(e.target.value)}
//             placeholder="Enter new category name"
//             className="flex-1 p-2 border rounded"
//             required
//           />
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             <FaPlus className="inline mr-2" />
//             Add Category
//           </button>
//         </div>
//       </form>

//       {/* Categories List */}
//       <div className="grid gap-4">
//         {categories.map((category) => (
//           <div
//             key={category._id}
//             className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
//           >
//             <span className="font-medium">{category.name}</span>
//             <div className="flex gap-2">
//               <button
//                 onClick={() => handleDeleteCategory(category._id)}
//                 className="p-2 text-red-600 hover:text-red-800"
//               >
//                 <FaTrash />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ManageCategories; 