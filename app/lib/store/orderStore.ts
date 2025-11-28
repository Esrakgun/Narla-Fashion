"use client";

import { create } from "zustand";
import { db } from "@/app/lib/firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useCartStore } from "./cartStore";

interface OrderItem {
  id: string;
  slug: string;
  title: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

interface CreateOrderParams {
  userId: string;
  items: OrderItem[];
  total: number;
}

interface OrderStore {
  createOrder: (data: CreateOrderParams) => Promise<string>;
  deleteOrder: (userId: string, orderId: string) => Promise<void>; // 🟡 EKLENDİ
}

export const useOrderStore = create<OrderStore>(() => ({
  /** 🟡 SİPARİŞ OLUŞTURMA */
  createOrder: async ({ userId, items, total }) => {
    if (!userId) throw new Error("Kullanıcı bulunamadı.");
    if (!items || items.length === 0) throw new Error("Sepet boş.");

    const ref = collection(db, "users", userId, "orders");

    const orderData = {
      items,
      total,
      status: "Hazırlanıyor",
      createdAt: serverTimestamp(),
    };

    const docRef = await addDoc(ref, orderData);

    // Sepeti temizle
    const { clearCart } = useCartStore.getState();
    clearCart();

    return docRef.id;
  },

  /** 🟡 SİPARİŞ SİLME */
  deleteOrder: async (userId, orderId) => {
    if (!userId) throw new Error("Kullanıcı bulunamadı.");
    if (!orderId) throw new Error("Sipariş ID bulunamadı.");

    const ref = doc(db, "users", userId, "orders", orderId);
    await deleteDoc(ref);
  },
}));
