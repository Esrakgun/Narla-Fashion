"use client";

import React, { FC } from "react";

interface ErrorProps {
  error: unknown;
  reset: () => void;
}

const ErrorPage: FC<ErrorProps> = ({ error, reset }) => {
  const message = error instanceof Error ? error.message : String(error ?? "Bilinmeyen hata");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Bir hata oluştu</h1>
      <p className="text-gray-600 mb-6">{message}</p>
      <button
        onClick={reset}
        className="px-6 py-2 bg-black text-white rounded-md"
      >
        Tekrar Dene
      </button>
    </div>
  );
};

export default ErrorPage;
