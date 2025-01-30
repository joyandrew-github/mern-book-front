// import React, { useState } from 'react';
// import { showAlert } from '../../utils/alerts';

// const Settings = () => {
//   const [settings, setSettings] = useState({
//     siteName: 'BookHive',
//     contactEmail: '',
//     defaultCurrency: 'USD',
//     orderEmailNotifications: true
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/admin/settings', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         },
//         body: JSON.stringify(settings)
//       });

//       if (response.ok) {
//         showAlert.success('Settings updated successfully');
//       } else {
//         showAlert.error('Failed to update settings');
//       }
//     } catch (error) {
//       console.error('Error updating settings:', error);
//       showAlert.error('Error updating settings');
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">Settings</h2>
//       <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
//         <div>
//           <label className="block mb-2 font-medium">Site Name</label>
//           <input
//             type="text"
//             value={settings.siteName}
//             onChange={(e) => setSettings({...settings, siteName: e.target.value})}
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium">Contact Email</label>
//           <input
//             type="email"
//             value={settings.contactEmail}
//             onChange={(e) => setSettings({...settings, contactEmail: e.target.value})}
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium">Default Currency</label>
//           <select
//             value={settings.defaultCurrency}
//             onChange={(e) => setSettings({...settings, defaultCurrency: e.target.value})}
//             className="w-full p-2 border rounded"
//           >
//             <option value="USD">USD</option>
//             <option value="EUR">EUR</option>
//             <option value="GBP">GBP</option>
//             <option value="INR">INR</option>
//           </select>
//         </div>

//         <div className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={settings.orderEmailNotifications}
//             onChange={(e) => setSettings({...settings, orderEmailNotifications: e.target.checked})}
//             className="rounded"
//           />
//           <label className="font-medium">Enable Order Email Notifications</label>
//         </div>

//         <button
//           type="submit"
//           className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Save Settings
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Settings; 