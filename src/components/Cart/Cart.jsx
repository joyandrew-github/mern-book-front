// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { fetchWithAuth } from '../../utils/api';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = async () => {
//     try {
//       const response = await fetchWithAuth('https://mern-book-backend-w72i.onrender.com/api/cart');
//       const data = await response.json();
//       setCartItems(data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching cart:', error);
//     }
//   };

//   const removeFromCart = async (bookId) => {
//     try {
//       await fetchWithAuth(`https://mern-book-backend-w72i.onrender.com/api/cart/${bookId}`, {
//         method: 'DELETE'
//       });
//       fetchCartItems();
//     } catch (error) {
//       console.error('Error removing from cart:', error);
//     }
//   };

//   const handlePayment = async () => {
//     try {
//       const response = await fetchWithAuth('https://mern-book-backend-w72i.onrender.com/api/create-order', {
//         method: 'POST',
//         body: JSON.stringify({
//           amount: calculateTotal() * 100, // Convert to paise
//         }),
//       });
//       const data = await response.json();

//       const options = {
//         key: 'rzp_test_8mc6IAIyH0jEUK',
//         amount: data.amount,
//         currency: 'INR',
//         name: 'BookHive',
//         description: 'Book Purchase',
//         order_id: data.id,
//         handler: async (response) => {
//           try {
//             const verifyResponse = await fetchWithAuth('https://mern-book-backend-w72i.onrender.com/api/verify-payment', {
//               method: 'POST',
//               body: JSON.stringify({
//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_payment_id: response.razorpay_payment_id,
//                 razorpay_signature: response.razorpay_signature,
//               }),
//             });
//             const verifyData = await verifyResponse.json();
//             if (verifyData.success) {
//               // Clear cart and redirect to success page
//               navigate('/payment-success');
//             }
//           } catch (error) {
//             console.error('Payment verification failed:', error);
//           }
//         },
//         prefill: {
//           name: 'User Name',
//           email: 'user@example.com',
//         },
//         theme: {
//           color: '#2563EB',
//         },
//       };

//       const razorpay = new window.Razorpay(options);
//       razorpay.open();
//     } catch (error) {
//       console.error('Error initiating payment:', error);
//     }
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <>
//           <div className="space-y-4">
//             {cartItems.map((item) => (
//               <div key={item._id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
//                 <div className="flex items-center gap-4">
//                   <img src={item.imageURL} alt={item.title} className="w-20 h-20 object-cover rounded" />
//                   <div>
//                     <h3 className="font-semibold">{item.title}</h3>
//                     <p className="text-gray-600">₹{item.price}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <input
//                     type="number"
//                     min="1"
//                     value={item.quantity}
//                     onChange={(e) => updateQuantity(item._id, e.target.value)}
//                     className="w-16 px-2 py-1 border rounded"
//                   />
//                   <button
//                     onClick={() => removeFromCart(item._id)}
//                     className="text-red-600 hover:text-red-800"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-8 flex justify-between items-center">
//             <div>
//               <p className="text-xl font-semibold">Total: ₹{calculateTotal()}</p>
//             </div>
//             <button
//               onClick={handlePayment}
//               className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             >
//               Proceed to Payment
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart; 




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchWithAuth } from '../../utils/api';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetchWithAuth('https://mern-book-backend-new.onrender.com/api/cart');
      const data = await response.json();
      setCartItems(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  const removeFromCart = async (bookId) => {
    try {
      await fetchWithAuth(`https://mern-book-backend-new.onrender.com/api/cart/${bookId}`, {
        method: 'DELETE'
      });
      fetchCartItems();
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const handlePayment = async () => {
    try {
      const response = await fetchWithAuth('https://mern-book-backend-new.onrender.com/api/create-order', {
        method: 'POST',
        body: JSON.stringify({
          amount: calculateTotal() * 100, // Convert to paise
          items: cartItems,  // Send cart items to associate with order
        }),
      });
      const data = await response.json();

      const options = {
        key: 'rzp_test_8mc6IAIyH0jEUK',
        amount: data.amount,
        currency: 'INR',
        name: 'BookHive',
        description: 'Book Purchase',
        order_id: data.id,
        handler: async (response) => {
          try {
            const verifyResponse = await fetchWithAuth('https://mern-book-backend-new.onrender.com/api/verify-payment', {
              method: 'POST',
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                items: cartItems, // Send cart items to store in DB
                amount: calculateTotal(), // Store the amount
              }),
            });

            const verifyData = await verifyResponse.json();
            if (verifyData.success) {
              // Clear cart from frontend
              setCartItems([]);

              // Redirect to payment success page
              navigate('/payment-success');
            }
          } catch (error) {
            console.error('Payment verification failed:', error);
          }
        },
        prefill: {
          name: 'User Name',
          email: 'user@example.com',
        },
        theme: {
          color: '#2563EB',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                <div className="flex items-center gap-4">
                  <img src={item.imageURL} alt={item.title} className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-600">₹{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-between items-center">
            <p className="text-xl font-semibold">Total: ₹{calculateTotal()}</p>
            <button
              onClick={handlePayment}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
