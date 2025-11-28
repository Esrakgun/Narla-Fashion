"use client";

import React, { FC } from "react";

interface Props {
  tracking?: string;
}

const OrderTracking: FC<Props> = ({ tracking }) => {
  return (
    <section className="mb-2! mt-12!">
      <h2 className="text-xl font-bold text-gray-800 mb-3!">
        Kargo Takibi
      </h2>

      <div className="bg-white/70 rounded-xl p-4! shadow-lg backdrop-blur-md">
        {!tracking ? (
          <p className="text-gray-600 text-sm">
            Kargo takip numarası eklenmemiş.
          </p>
        ) : (
          <p className="text-gray-700 text-sm font-medium">
            Takip Numarası: {tracking}
          </p>
        )}
      </div>
    </section>
  );
};

export default OrderTracking;
