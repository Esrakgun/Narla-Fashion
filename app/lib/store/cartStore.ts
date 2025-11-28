"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: string;
  slug: string;
  title: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

interface CartStore {
  cart: CartItem[];

  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;

  getTotal: () => number;

  clearCart: () => void; // ⭐ EKLEDİK
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (item) => {
        const existing = get().cart.find(
          (i) =>
            i.id === item.id &&
            i.color === item.color &&
            i.size === item.size
        );

        if (existing) {
          set({
            cart: get().cart.map((i) =>
              i === existing
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
          });
        } else {
          set({
            cart: [...get().cart, item],
          });
        }
      },

      removeFromCart: (id) => {
        set({
          cart: get().cart.filter((i) => i.id !== id),
        });
      },

      increaseQty: (id) => {
        set({
          cart: get().cart.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        });
      },

      decreaseQty: (id) => {
        set({
          cart: get().cart
            .map((i) =>
              i.id === id && i.quantity > 1
                ? { ...i, quantity: i.quantity - 1 }
                : i
            )
            .filter((i) => i.quantity > 0),
        });
      },

      getTotal: () => {
        return get().cart.reduce((acc, item) => acc + item.quantity, 0);
      },

      // ⭐ EKLENEN FONKSİYON
      clearCart: () => {
        set({ cart: [] });
      },
    }),
    {
      name: "narla-cart",
    }
  )
);
