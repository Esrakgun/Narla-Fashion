"use client";

import React, { FC } from "react";
import { OrderDetail } from "../page";

interface Props {
  order: OrderDetail;
}

const OrderInvoice: FC<Props> = ({ order }) => {
  return (
    <section className="mb-2! mt-12!">
      <h2 className="text-xl font-bold text-gray-800 mb-3!">
        Fatura
      </h2>

      {/* ⭐ TÜM BUTONLAR SAĞA DAYALI */}
      <div className="w-full flex justify-between! gap-3">

        {/* PDF İndir */}
        <button
          onClick={() => alert("PDF oluşturma yakında ekleniyor!")}
          className="
            px-4! py-2!
            bg-narla-black text-white
            rounded-xl text-sm font-semibold
            hover:bg-narla-sand transition
          "
        >
          PDF İndir
        </button>

        {/* Sipariş İptal Et */}
        <button
          onClick={() => alert('Sipariş iptal ediliyor...')}
          className="
            px-4! py-2!
            bg-red-500 text-white
            rounded-xl text-sm font-semibold
            hover:bg-red-600 transition
          "
        >
          Siparişi İptal Et
        </button>

      </div>
    </section>
  );
};

export default OrderInvoice;
