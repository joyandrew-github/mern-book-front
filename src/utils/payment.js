import { showAlert } from './alerts';

const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    document.body.appendChild(script);
  });
};

export const makePayment = async (bookData) => {
  try {
    await loadRazorpay();

    // Validate amount
    if (!bookData.amount || isNaN(bookData.amount) || bookData.amount <= 0) {
      throw new Error('Invalid amount provided');
    }

    // Create order
    const orderResponse = await fetch('https://mern-book-backend-new.onrender.com/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: bookData.amount,
      }),
    });

    const orderData = await orderResponse.json();

    if (!orderData.success || !orderData.order) {
      throw new Error(orderData.message || 'Failed to create order');
    }

    return new Promise((resolve, reject) => {
      const options = {
        key: 'rzp_test_KJEDkOerVm97es',
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: 'BookHive',
        description: `Purchase: ${bookData.bookTitle}`,
        order_id: orderData.order.id,
        handler: function(response) {
          // Verify payment
          fetch('https://mern-book-backend-new.onrender.com/verify-payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
              bookId: bookData._id,
              amount: bookData.amount
            }),
          })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              resolve({
                success: true,
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                transactionId: data.transactionId
              });
            } else {
              console.error('Payment verification failed:', data.message);
              reject(new Error(data.message || 'Payment verification failed'));
            }
          })
          .catch(error => {
            console.error('Payment verification error:', error);
            reject(error);
          });
        },
        prefill: {
          name: JSON.parse(localStorage.getItem('user'))?.name || '',
          email: JSON.parse(localStorage.getItem('user'))?.email || '',
        },
        theme: {
          color: '#3B82F6'
        }
      };

      const rzp = new window.Razorpay(options);
      
      rzp.on('payment.failed', function(response) {
        reject(new Error(response.error.description || 'Payment failed'));
      });

      rzp.open();
    });
  } catch (error) {
    console.error('Payment Error:', error);
    throw error;
  }
}; 