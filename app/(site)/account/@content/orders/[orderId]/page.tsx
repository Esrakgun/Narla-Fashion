"use client";

import React, { FC, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { db } from "@/app/lib/firebase";
import { doc, getDoc, Timestamp } from "firebase/firestore";
import Loader from "@/app/(site)/shared/loader";

// COMPONENTS
import OrderHeader from "./components/OrderHeader";
import OrderItems from "./components/OrderItems";
import OrderAddress from "./components/OrderAddress";
import OrderTracking from "./components/OrderTracking";
import OrderInvoice from "./components/OrderInvoice";
import OrderSummary from "./components/OrderSummary";
import { OrderItem } from "../hooks/useOrders";


export interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}
export interface Address {
  fullName?: string;
  street?: string;
  city?: string;
  country?: string;
}
export interface OrderDetail {
  id: string;
  items: OrderItem[];
  total: number;
  status: string;
  address?: Address;
  trackingNumber?: string;
  createdAt?: Timestamp | FirestoreTimestamp | null;
}

const OrderDetailPage: FC = () => {
  const { orderId } = useParams();
  const router = useRouter();
  const [order, setOrder] = useState<OrderDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // 🟡 EKLENDİ — İKİ AYRI EKRAN KONTROLÜ
  const [showMore, setShowMore] = useState<boolean>(false);

  useEffect(() => {
    const userId = localStorage.getItem("uid");

    if (!userId) {
      console.error("UID bulunamadı! Kullanıcı giriş yapmamış.");
      setLoading(false);
      return;
    }

    if (!orderId) {
      console.error("OrderID bulunamadı!");
      setLoading(false);
      return;
    }

    const fetchOrder = async () => {
      try {
        const ref = doc(db, "users", userId, "orders", String(orderId));
        const snap = await getDoc(ref);

        if (snap.exists()) {
          setOrder({
            id: snap.id,
            ...(snap.data() as Omit<OrderDetail, "id">),
          });
        }
      } catch (err) {
        console.error("Order detail fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) return <Loader />;

  if (!order)
    return (
      <main className="p-100! text-center">
        <p className="text-xl font-semibold text-red-600!">
          Sipariş bulunamadı.
        </p>
      </main>
    );

  return (
    <main
      className="absolute h-220
        w-[92%] sm:w-[85%] md:w-[70%] lg:w-[55%]
        mx-auto              
        backdrop-blur-md shadow-[0_-8px_20px_rgba(0,0,0,0.12)]!
        rounded-2xl
        p-15! sm:p-9! md:p-10! bg-narla-beige!
      "
    >
      {/* 🔙 Geri Butonu */}
      <button
        onClick={() => {
          if (showMore) setShowMore(false);
          else router.back();
        }}
        className="text-sm mb-1! font-semibold text-gray-700 hover:text-narla-sand!"
      >
        ← {showMore ? "Geri" : "Siparişlere Dön"}
      </button>

      {/* 🟢 EĞER showMore FALSE → 1. EKRAN (Ürünler) */}
      {!showMore && (
        <>
          <OrderHeader order={order} />
          <OrderItems items={order.items} />

          {/* Sağ altta Devamını Gör */}
          <div className="w-full flex justify-end mt-4!">
            <button
              onClick={() => setShowMore(true)}
              className="
                text-sm font-semibold 
                text-gray-700 hover:text-narla-sand!
              "
            >
              Devamını Gör ↓
            </button>
          </div>
        </>
      )}

      {/* 🟡 EĞER showMore TRUE → 2. EKRAN (Adres + Kargo + Fatura + Toplam) */}
      {showMore && (
        <>
          <OrderAddress address={order.address} />
          <OrderTracking tracking={order.trackingNumber} />
          <OrderInvoice order={order} />
          <OrderSummary total={order.total} />
        </>
      )}
    </main>
  );
};

export default OrderDetailPage;
