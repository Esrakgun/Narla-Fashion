"use client";

import toast from "react-hot-toast";

// Başarılı
export const notifySuccess = (message: string) => {
  toast.success(message, {
    duration: 3000,
  });
};

// Hata
export const notifyError = (message: string) => {
  toast.error(message, {
    duration: 3000,
  });
};

// Uyarı
export const notifyWarning = (message: string) => {
  toast(message, {
    icon: "⚠️",
    duration: 3000,
  });
};
