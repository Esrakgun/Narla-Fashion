"use client";

import React, { FC } from "react";
import Link from "next/link";
import { useOrderStore } from "@/app/lib/store/orderStore";
import { useAuth } from "@/app/lib/auth/AuthContext";

interface OrderProps {
  id: string;
  total: number;
  createdAt?:
    | {
        seconds: number;
        nanoseconds: number;
        toDate: () => Date;
      }
    | string;
  status: string;
}

const OrderList: FC<OrderProps> = ({ id, total, createdAt, status }) => {
  const { deleteOrder } = useOrderStore();
  const { user } = useAuth();

  let formattedDate = "";
  if (createdAt && typeof createdAt === "object" && "seconds" in createdAt) {
    const d = new Date(createdAt.seconds * 1000);
    formattedDate = d.toLocaleString("tr-TR");
  } else if (typeof createdAt === "string") {
    formattedDate = createdAt;
  }

  return (
    <div
      className="
        w-full
        max-w-[1000px] md:mx-auto!
        mx-auto!
        rounded-2xl!
        p-10!
        transition-all duration-300 cursor-pointer
        bg-white/60 backdrop-blur-md
        hover:bg-white/80! hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]! hover:-translate-y-1!
      "
    >
      {/* ÜST SATIR */}
      <div
        className="
          flex justify-between items-center mb-3!
          flex-wrap gap-3
        "
      >
        <div className="flex items-center gap-3">
          <h2 className="text-lg md:text-xl font-semibold tracking-tight">
            Sipariş
          </h2>

          <span className="text-base md:text-lg font-bold text-gray-800">
            #{id.substring(0, 8)}
          </span>
        </div>

        <span
          className="
            shrink-0
            text-[11px]! md:text-xs!
            text-gray-600 font-medium tracking-wide
          "
        >
          {formattedDate}
        </span>
      </div>

      <p className="text-sm md:text-base text-gray-700 mb-1!">
        Durum:{" "}
        <span className="font-semibold text-narla-black">{status}</span>
      </p>

      <p className="text-sm md:text-base text-gray-800 mb-4!">
        Toplam:{" "}
        <span className="font-bold">
          {Number(total ?? 0).toLocaleString("tr-TR")} TL
        </span>
      </p>

      <div className="flex justify-between items-center mt-4! flex-wrap gap-3">
        <Link
          href={`/account/orders/${id}`}
          className="
            text-sm underline text-gray-700
            hover:text-narla-sand! font-medium
          "
        >
          Detayları Gör
        </Link>

        {user?.uid && (
          <button
            onClick={() => deleteOrder(user.uid, id)}
            className="
              text-sm  text-gray-700
              hover:text-red-500! font-semibold
            "
          >
            İptal Et
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderList;
