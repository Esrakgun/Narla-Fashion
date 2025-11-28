"use client";

import React, { FC } from "react";
import { useOrders } from "./hooks/useOrders";
import OrderList from "./OrderList";
import Loader from "@/app/(site)/shared/loader";
import { useRouter } from "next/navigation";

const OrdersPage: FC = () => {
  const { orders, loading } = useOrders();
  const router = useRouter();

  return (
    <main
     className=" w-full max-w-[1000px] mx-auto backdrop-blur-md shadow-xl rounded-2xl p-6! sm:p-8! md:p-10! " >
      <h1
        className="
          text-3xl md:text-4xl font-bold tracking-tight
          mb-5!
          text-narla-black
        "
      >
        Siparişlerim
      </h1>

      {loading && (
        <p>
          <Loader />
        </p>
      )}

      {!loading && orders.length === 0 && (
        <div className="text-center">
          <p className="text-white! font-semibold mb-4">
            Henüz bir siparişiniz yok.
          </p>

          {/* ⭐ DÜZELTİLMİŞ BUTON ⭐ */}
          <button
            onClick={() => router.push("/shop")}
            className="
              bg-narla-sand text-white font-bold 
              py-2! px-4! rounded mt-5!
              transition-transform duration-200  
              hover:scale-[1.05]                  
              active:scale-[0.97]"
          >
            Alışverişe Başla
          </button>
        </div>
      )}

      {!loading &&
        orders.map((order) => (
          <div key={order.id} className="mb-6!">
            <OrderList
              id={order.id}
              total={order.total}
              createdAt={order.createdAt}
              status={order.status}
            />
          </div>
        ))}
    </main>
  );
};

export default OrdersPage;
