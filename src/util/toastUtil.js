import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastTimeout = 2000; // Example timeout duration

export const showSuccessToast = (message) => {
  toast.success(message, {
    position: "top-left", // Use string directly
    autoClose: ToastTimeout,
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    position: "top-left", // Use string directly
    autoClose: ToastTimeout,
  });
};

