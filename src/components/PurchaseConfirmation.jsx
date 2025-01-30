import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimes, FaRupeeSign } from 'react-icons/fa';
import jsPDF from 'jspdf';

const PurchaseConfirmation = ({ isOpen, onClose, purchaseDetails }) => {
  if (!isOpen || !purchaseDetails) return null;

  const downloadReceipt = () => {
    const doc = new jsPDF();
    
    // Add BookHive logo/header
    doc.setFontSize(20);
    doc.setTextColor(59, 130, 246); // Blue color
    doc.text('BookHive', 105, 20, { align: 'center' });
    
    // Add receipt title
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('Purchase Receipt', 105, 35, { align: 'center' });
    
    // Add date
    doc.setFontSize(10);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 45);
    
    // Add payment details
    doc.setFontSize(12);
    doc.text('Payment Details:', 20, 60);
    doc.setFontSize(10);
    doc.text(`Order ID: ${purchaseDetails.orderId}`, 20, 70);
    doc.text(`Transaction ID: ${purchaseDetails.transactionId}`, 20, 80);
    doc.text(`Payment ID: ${purchaseDetails.paymentId}`, 20, 90);
    
    // Add book details
    doc.setFontSize(12);
    doc.text('Book Details:', 20, 110);
    doc.setFontSize(10);
    doc.text(`Title: ${purchaseDetails.book?.bookTitle}`, 20, 120);
    doc.text(`Author: ${purchaseDetails.book?.authorName}`, 20, 130);
    doc.text(`Category: ${purchaseDetails.book?.category}`, 20, 140);
    doc.text(`Price: ₹${parseFloat(purchaseDetails.book?.price).toFixed(2)}`, 20, 150);
    
    // Add payment status
    doc.setFontSize(12);
    doc.setTextColor(39, 174, 96); // Green color
    doc.text('Payment Status: Successful', 20, 170);
    
    // Add footer
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128); // Gray color
    doc.text('Thank you for shopping with BookHive!', 105, 280, { align: 'center' });
    
    // Save the PDF
    doc.save(`BookHive_Receipt_${purchaseDetails.orderId}.pdf`);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <FaTimes className="text-xl" />
          </button>

          <div className="text-center mb-6">
            <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Purchase Successful!</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Payment Details</h3>
              <div className="space-y-2 text-sm">
                <p className="flex justify-between">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-medium">{purchaseDetails.orderId}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-600">Transaction ID:</span>
                  <span className="font-medium">{purchaseDetails.transactionId}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-600">Payment ID:</span>
                  <span className="font-medium">{purchaseDetails.paymentId}</span>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Book Details</h3>
              <div className="flex gap-4">
                <img
                  src={purchaseDetails.book?.imageURL}
                  alt={purchaseDetails.book?.bookTitle}
                  className="w-20 h-28 object-cover rounded-lg"
                />
                <div className="flex-1 space-y-1">
                  <h4 className="font-medium text-gray-800">{purchaseDetails.book?.bookTitle}</h4>
                  <p className="text-sm text-gray-600">by {purchaseDetails.book?.authorName}</p>
                  <p className="text-sm text-gray-500">{purchaseDetails.book?.category}</p>
                  <div className="flex items-center text-indigo-600 font-bold">
                    <FaRupeeSign className="mr-1" />
                    {parseFloat(purchaseDetails.book?.price).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-green-700 font-medium">Payment Status</span>
                <span className="text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm">
                  Successful
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button
              onClick={onClose}
              className="w-full py-2 px-4 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
            <button
              onClick={downloadReceipt}
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Download Receipt
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PurchaseConfirmation; 