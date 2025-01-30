// import { toast } from 'react-toastify';

// export const showAlert = {
//   success: (message) => {
//     toast.success(message, {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });
//   },
//   error: (message) => {
//     toast.error(message, {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });
//   },
//   warning: (message) => {
//     toast.warning(message, {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });
//   },
//   info: (message) => {
//     toast.info(message, {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });
//   }
// }; 



import { toast } from 'react-toastify';

const showToast = (type, message) => {
  toast[type](message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const showAlert = {
  success: (message) => showToast("success", message),
  error: (message) => showToast("error", message),
  warning: (message) => showToast("warning", message),
  info: (message) => showToast("info", message),
};
