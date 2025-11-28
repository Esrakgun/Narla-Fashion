"use client";

import React, { FC } from "react";

interface Props {
  total: number;
}

const OrderSummary: FC<Props> = ({ total }) => {
  return (
    <section className="mt-16! border-t pt-4!">
      <div className="flex justify-between text-lg font-semibold text-gray-900">
        <span>Toplam</span>
        <span>{total.toLocaleString("tr-TR")} TL</span>
      </div>
    </section>
  );
};

export default OrderSummary;
