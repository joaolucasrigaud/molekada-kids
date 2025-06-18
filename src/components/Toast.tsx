import React, { useState, useEffect } from (
    'react'
  );
  import styles from './Toast.module.css';
  
  interface ToastProps {
    message: string;
    type?: 'success' | 'error' | 'info';
    duration?: number; // in milliseconds
    onClose: () => void;
  }
  
  const Toast: React.FC<ToastProps> = ({ message, type = 'info', duration = 3000, onClose }) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
  
      return () => {
        clearTimeout(timer);
      };
    }, [duration, onClose]);
  
    return (
      <div className={`${styles.toast} ${styles[type]}`}>
        {message}
      </div>
    );
  };
  
  export default Toast;
  