"use client";

import React, { FC } from "react";

interface Address {
  fullName?: string;
  street?: string;
  city?: string;
  country?: string;
}

interface Props {
  address?: Address;
}

const OrderAddress: FC<Props> = ({ address }) => {
  return (
    <section className="mb-2! mt-12!">
      <h2 className="text-xl font-bold text-gray-800 mb-3!">
        Teslimat Adresi
      </h2>

      <div className="bg-white/70 rounded-xl p-4! shadow-lg backdrop-blur-md">
        {!address ? (
          <p className="text-gray-600 text-sm">
            Adres bilgisi eklenmemiş.
          </p>
        ) : (
          <div className="text-gray-700 text-sm leading-relaxed">
            <p className="font-semibold">{address.fullName}</p>
            <p>{address.street}</p>
            <p>
              {address.city} / {address.country}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderAddress;
