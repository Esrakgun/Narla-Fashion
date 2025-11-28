"use client";

import React, { FC } from "react";
import { FirestoreTimestamp } from "../page";
import { OrderDetail } from "../page";

interface Props {
  order: OrderDetail;
}

const OrderHeader: FC<Props> = ({ order }) => {
  let formattedDate = "";

  if (order.createdAt?.seconds) {
    formattedDate = new Date(order.createdAt.seconds * 1000).toLocaleString(
      "tr-TR"
    );
  }

  return (
    <section className="mb-2!">
      <h1 className="text-3xl font-bold text-narla-black tracking-tight mb-5!">
        Sipariş Detayı
      </h1>

      <div className="bg-white/70 rounded-xl p-4! shadow-lg backdrop-blur-md ">
        <p className="text-lg font-semibold text-gray-800">
          Sipariş Kodu:{" "}
          <span className="font-bold">
            #{String(order.id).substring(0, 10)}
          </span>
        </p>

        <p className="text-sm text-gray-700 mt-1!">
          Tarih: <span className="font-medium">{formattedDate}</span>
        </p>

        <p className="text-sm text-gray-700 mt-1!">
          Durum:{" "}
          <span className="font-semibold text-narla-black">{order.status}</span>
        </p>
      </div>
    </section>
  );
};

export default OrderHeader;
