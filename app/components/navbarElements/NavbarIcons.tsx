"use client";

import React, { FC, useState } from "react";
import { Heart, ShoppingCart, Bell } from "lucide-react";
import { useRouter } from "next/navigation";
import { useWishlistStore } from "@/app/lib/store/wishlistStore";

interface Props {
  totalQuantity: number; // ⭐ NAVBAR'DAN GELEN SEPET SAYISI
}

const mockNotifications = [
  { id: 1, text: "1 yeni indirim!", link: "/shop" },
  { id: 2, text: "Kargo güncellendi.", link: "/account/orders" },
];

const NavbarIcons: FC<Props> = ({ totalQuantity }) => {
  const router = useRouter();
  const [openNotif, setOpenNotif] = useState(false);

  const wishlistCount = useWishlistStore((s) => s.wishlistItems.length);

  return (
    <div className="flex items-center gap-6 relative">

      {/* ❤️ WISHLIST */}
      <button
        onClick={() => router.push("/wishlist")}
        className="relative flex items-center justify-center"
      >
        <Heart
          size={20}
          className="text-white hover:text-narla-rose transition-all"
        />

        {wishlistCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {wishlistCount}
          </span>
        )}
      </button>

      {/* 🛒 CART */}
      <button
        onClick={() => router.push("/cart")}
        className="relative flex items-center justify-center"
      >
        <ShoppingCart
          size={20}
          className="text-white hover:text-narla-rose transition-all"
        />

        {totalQuantity > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {totalQuantity}
          </span>
        )}
      </button>

      {/* 🔔 NOTIFICATIONS */}
      <div className="relative">
        <button
          onClick={() => setOpenNotif((prev) => !prev)}
          className="relative flex items-center justify-center"
        >
          <Bell
            size={20}
            className="text-white hover:text-narla-rose transition-all"
          />

          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {mockNotifications.length}
          </span>
        </button>

        {openNotif && (
          <div
            className="
              absolute right-[50%] translate-x-1/2 mt-3!
              w-64 bg-narla-beige text-black
              shadow-xl rounded-xl p-3! z-50
            "
          >
            {mockNotifications.map((n) => (
              <div
                key={n.id}
                onClick={() => router.push(n.link)}
                className="
                  px-3! py-2 rounded-lg cursor-pointer
                  hover:bg-gray-100 p-2! text-sm
                "
              >
                {n.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarIcons;
