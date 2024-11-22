"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface Toast {
  message: string;
  type: "success" | "error" | "info" | "warning";
  duration?: number;
}

interface ToastContextValue {
  toasts: Toast | null;
  addToast: (toast: Toast) => void;
  removeToast: () => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast | null>(null);

  const addToast = ({ message, type, duration = 3000 }: Toast) => {
    const newToast: Toast = { message, type, duration };

    setToasts(newToast);

    setTimeout(() => {
      removeToast();
    }, duration);
  };

  const removeToast = () => {
    setToasts(null);
  };

  function getBackground(type: string) {
    switch (type) {
      case "success":
        return "bg-green-600";

      case "error":
        return "bg-red-600";

      case "info":
        return "bg-sky-600";

      default:
        return "";
    }
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        {toasts && (
          <div
            onClick={() => removeToast()}
            className={`cursor-pointer py-4 px-4 text-xs sm:text-sm sm:min-w-80 text-center rounded-md text-white font-semibold ${getBackground(
              toasts.type
            )}`}
          >
            {toasts.message}
          </div>
        )}
      </div>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
