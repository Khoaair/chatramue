'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastProvider = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer style={{ fontSize: '1.8rem' }} />
    </>
  );
};
export default ToastProvider;
