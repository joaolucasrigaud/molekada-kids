"use client";

import { useEffect, useState } from "react"; // A importação do React em si não é mais necessária nas versões mais recentes do Next.js
import styles from "./Toast.module.css";
import { CheckCircle, XCircle, Info } from "lucide-react";

interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
  onClose: () => void;
  isVisible: boolean; // Adicionamos para controlar a animação de saída
}

const Toast: React.FC<ToastProps> = ({ message, type, isVisible, onClose }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        onClose();
      }, 4000); // O toast some depois de 4 segundos

      return () => clearTimeout(timer);
    } else {
      // Espera a animação de saída terminar antes de remover do DOM
      const timer = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!shouldRender) {
    return null;
  }

  const icons = {
    success: <CheckCircle />,
    error: <XCircle />,
    info: <Info />,
  };

  return (
    <div
      className={`${styles.toast} ${styles[type]} ${
        isVisible ? styles.slideIn : styles.slideOut
      }`}
    >
      <div className={styles.icon}>{icons[type]}</div>
      <p>{message}</p>
      <button onClick={onClose} className={styles.closeButton}>
        &times;
      </button>
    </div>
  );
};

export default Toast;
