"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface WishlistItem {
  id: string;
  title: string;
  slug: string;
  price: number;
  image: string;
}

interface WishlistState {
  wishlistItems: WishlistItem[];
  toggleWishlist: (item: WishlistItem) => void;
  isInWishlist: (id: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlistItems: [],

      toggleWishlist: (item) => {
        const list = get().wishlistItems;

        const exists = list.some((i) => i.id === item.id);

        if (exists) {
          // ❌ Var → kaldır
          set({
            wishlistItems: list.filter((i) => i.id !== item.id),
          });
        } else {
          // ✅ Yok → ekle
          set({
            wishlistItems: [...list, item],
          });
        }
      },

      isInWishlist: (id) => {
        return get().wishlistItems.some((i) => i.id === id);
      },

      clearWishlist: () => set({ wishlistItems: [] }),
    }),

    {
      name: "narla-wishlist",
    }
  )
);
