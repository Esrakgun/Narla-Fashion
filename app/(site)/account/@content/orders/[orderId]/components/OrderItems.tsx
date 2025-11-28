"use client";

import React, { FC } from "react";
import Image from "next/image";
import { OrderItem } from "../../hooks/useOrders";
import Link from "next/link";


interface Props {
  items: OrderItem[];
}

const OrderItems: FC<Props> = ({ items }) => {
  return (
    <section className="mb-2! mt-2!">
      <h2 className="text-xl font-bold text-gray-800 mb-1!">
        Ürünler
      </h2>

      <div className="space-y-4 mt-2!">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              flex items-center gap-4 mt-2!
              bg-white/70 backdrop-blur-md
              rounded-xl p-2! shadow-lg
            "
          >
            <Link href={`/product/${item.id}`}>
              <Image
                src={item.image}
                width={80}
                height={80}
                alt={item.title}
                className="rounded-lg object-cover aspect-square cursor-pointer hover:opacity-90 transition"
              />
            </Link>

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{item.title}</h3>

              {item.color && (
                <p className="text-sm text-gray-600">
                  Renk: <span className="font-medium">{item.color}</span>
                </p>
              )}

              {item.size && (
                <p className="text-sm text-gray-600">
                  Beden: <span className="font-medium">{item.size}</span>
                </p>
              )}

              <p className="text-sm text-gray-600">
                Adet: <span className="font-medium">{item.quantity}</span>
              </p>
            </div>

            <p className="font-bold text-gray-900 whitespace-nowrap">
              {item.price.toLocaleString("tr-TR")} TL
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderItems;
