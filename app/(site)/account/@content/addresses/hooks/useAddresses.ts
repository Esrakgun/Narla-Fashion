"use client";

import { useEffect, useState } from "react";
import { db, auth } from "@/app/lib/firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
  DocumentData,
} from "firebase/firestore";

// 📌 Adres veri tipi
export interface AddressData {
  id?: string;
  title: string;
  address: string;
  phone: string;
  createdAt: string;
  updatedAt?: string;
}

// 📌 Ana Hook
export default function useAddresses() {
  const user = auth.currentUser;
  const userId = user?.uid ?? null;

  const [addresses, setAddresses] = useState<AddressData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 🔥 Firestore Listener
  useEffect(() => {
    if (!userId) return;

    const q = query(
      collection(db, "users", userId, "addresses"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const list: AddressData[] = snapshot.docs.map((docSnap) => {
          const data = docSnap.data() as DocumentData;

          return {
            id: docSnap.id,
            title: String(data.title ?? ""),
            address: String(data.address ?? ""),
            phone: String(data.phone ?? ""),
            createdAt: String(data.createdAt ?? ""),
            updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
          };
        });

        setAddresses(list);
        setLoading(false);
      },
      (err) => {
        console.error("Adresleri çekerken hata:", err);
        setError("Adresler yüklenirken bir hata oluştu.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  // ➕ Adres Ekleme
  const addAddress = async (data: Omit<AddressData, "id">): Promise<boolean> => {
    try {
      if (!userId) return false;

      await addDoc(collection(db, "users", userId, "addresses"), {
        ...data,
        createdAt: new Date().toISOString(),
      });

      return true;
    } catch (error) {
      console.error("Adres ekleme hatası:", error);
      return false;
    }
  };

  // 🟡 Adres Güncelleme
  const updateAddress = async (
    id: string,
    data: Partial<AddressData>
  ): Promise<boolean> => {
    try {
      if (!userId) return false;

      const ref = doc(db, "users", userId, "addresses", id);

      await updateDoc(ref, {
        ...data,
        updatedAt: new Date().toISOString(),
      });

      return true;
    } catch (error) {
      console.error("Adres güncelleme hatası:", error);
      return false;
    }
  };

  // ❌ Adres Sil
  const deleteAddress = async (addressId: string): Promise<boolean> => {
    try {
      if (!userId) return false;

      await deleteDoc(doc(db, "users", userId, "addresses", addressId));

      return true;
    } catch (error) {
      console.error("Adres silme hatası:", error);
      return false;
    }
  };

  return {
    addresses,
    loading,
    error,
    addAddress,
    deleteAddress,
    updateAddress,
  };
}
