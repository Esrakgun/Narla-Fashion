"use client";

import { useEffect, useState } from "react";
import { db } from "@/app/lib/firebase";
import { useAuth } from "@/app/lib/auth/AuthContext";
import { collection, onSnapshot, orderBy, query, DocumentData } from "firebase/firestore";

// ✔ TYPE SAFE
export interface OrderItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  color?: string;
  size?: string;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  status: string;
  createdAt?: {
    seconds: number;
    nanoseconds: number;
    toDate: () => Date;
  };
}

export const useOrders = () => {
  const { user } = useAuth();

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    // 🟩 USER YOKSA – STATE GÜNCELLEMESİ ASYNC YAPILDI
    if (!user) {
      queueMicrotask(() => {
        if (isMounted) {
          setOrders([]);
          setLoading(false);
        }
      });
      return;
    }

    const q = query(
      collection(db, "users", user.uid, "orders"),
      orderBy("createdAt", "desc")
    );

    const unsub = onSnapshot(q, (snapshot) => {
      if (!isMounted) return;

      const list: Order[] = snapshot.docs.map((doc) => {
        const data = doc.data() as DocumentData;

        return {
          id: doc.id,
          items: data.items as OrderItem[],
          total: data.total as number,
          status: data.status as string,
          createdAt: data.createdAt,
        };
      });

      // 🟩 ONCHANGE – STATE GÜNCELLEMESİ ASYNC
      queueMicrotask(() => {
        if (isMounted) {
          setOrders(list);
          setLoading(false);
        }
      });
    });

    return () => {
      isMounted = false;
      unsub();
    };
  }, [user]);

  return { orders, loading };
};
