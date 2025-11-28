"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowLeft } from "lucide-react";
import { useWishlistStore } from "@/app/lib/store/wishlistStore";

const WishlistPage = () => {
  const { wishlistItems, toggleWishlist } = useWishlistStore();

  return (
    <main className="w-full px-20! md:px-8 lg:px-12 p-10!">

      {/* 🔙 GERİ OK — ANASAYFA */}
      <button
        onClick={() => (window.location.href = "/")}
        className="
          mb-4!
          flex items-center gap-2!
          text-gray-700 hover:text-narla-sand!
          transition font-bold!
        "
      >
        <ArrowLeft size={20} />
        Anasayfa
      </button>

      {/* ⭐ BAŞLIK — TIKLANINCA SHOP SAYFASI */}
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-5!">
        <button
          onClick={() => (window.location.href = "/shop")}
          className="
            text-inherit
            hover:text-narla-sand!
            transition
          "
        >
          Favorilerim
        </button>
      </h1>

      {/* BOŞ LİSTE */}
      {wishlistItems.length === 0 && (
        <div className="w-full text-center py-20! text-gray-500">
          <p>Henüz favori ürününüz bulunmuyor.</p>
          <Link
            href="/shop"
            className="inline-block mt-6! px-6! py-2! bg-black text-white! rounded-lg"
          >
            Alışverişe Başla
          </Link>
        </div>
      )}

      {/* DOLU LİSTE */}
      {wishlistItems.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl overflow-hidden shadow-sm bg-white relative"
            >
              {/* ❌ FAVORİDEN SİLME BUTONU — ARTIK GÖRÜNÜYOR */}
              <button
                onClick={() => toggleWishlist(item)}
                className="
                  absolute top-3 right-3 z-50
                  w-8 h-8 rounded-full bg-white
                  shadow flex items-center justify-center
                  hover:bg-gray-200!
                "
              >
                <X size={18} className="text-gray-700" />
              </button>

              {/* FOTO */}
              <Link href={`/product/${item.slug}`}>
                <div className="relative w-full aspect-3/4 bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>

              {/* BİLGİ */}
              <div className="p-2!">
                <Link href={`/product/${item.slug}`}>
                  <h3 className="font-medium text-base line-clamp-1">
                    {item.title}
                  </h3>
                </Link>

                <p className="text-sm font-semibold mt-1!">
                  ₺{Number(item.price).toLocaleString("tr-TR")}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default WishlistPage;
