"use client";

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, ArrowLeft } from "lucide-react";

import { useCartStore } from "@/app/lib/store/cartStore";

/* 🟡 EKLENDİ – Sipariş için gereken importlar */
import { useOrderStore } from "@/app/lib/store/orderStore";   // 🟡
import { useAuth } from "@/app/lib/auth/AuthContext";         // 🟡
import { notifySuccess, notifyError } from "@/app/Notification"; // 🟡
import { useRouter } from "next/navigation"; // 🟡

const CartPage: FC = () => {
  const cart = useCartStore((state) => state.cart);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  /* 🟡 EKLENDİ – Sipariş için */
  const { createOrder } = useOrderStore();       // 🟡
  const { user } = useAuth();                   // 🟡
  const router = useRouter();                   // 🟡

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 39 : 0;
  const total = subtotal + shipping;

  /* 🟡 🟡 🟡 EKLENDİ – asıl sipariş oluşturma fonksiyonu */
  const handlePlaceOrder = async () => {
    if (!user) {
      notifyError("Sipariş oluşturmak için giriş yapmalısınız.");
      return;
    }

    if (cart.length === 0) {
      notifyError("Sepetiniz boş.");
      return;
    }

    try {
      const orderId = await createOrder({
        userId: user.uid,
        items: cart,
        total,
      });

      notifySuccess(`Siparişiniz oluşturuldu! (#${orderId.substring(0, 6)})`);
      router.push("/account/orders");
    } catch (error) {
      notifyError("Sipariş oluşturulurken bir hata oluştu.");
    }
  };
  /* 🟡 EKLENDİ BİTTİ */

  return (
    <main className="w-full px-4 md:px-8 lg:px-12 p-10! mx-4!">

      {/* 🔙 GERİ OK — ANASAYFA */}
      <button
        onClick={() => (window.location.href = "/")}
        className="
          mb-1!
          flex items-center gap-2!
          text-gray-700 hover:text-narla-sand!
          transition font-bold!
        "
      >
        <ArrowLeft size={20} />
        Anasayfa
      </button>

      {/* ⭐ BAŞLIK — TIKLANINCA SHOP SAYFASINA GİDER */}
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
        <button
          onClick={() => (window.location.href = "/shop")}
          className="
            text-inherit
            hover:text-narla-sand!
            transition
          "
        >
          Sepetim
        </button>
      </h1>

      {/* EMPTY */}
      {cart.length === 0 && (
        <div className="w-full text-center py-20 text-gray-500 p-20!">
          <p>Sepetin şu an boş.</p>
          <Link
            href="/shop"
            className="inline-block mt-2! px-6! py-2! bg-black text-white! rounded-lg"
          >
            Alışverişe Başla
          </Link>
        </div>
      )}

      {/* LISTE */}
      {cart.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* PRODUCT ITEMS */}
          <div className="lg:col-span-2 space-y-8 p-6! px-1!">
            {cart.map((item) => (
              <div
                key={item.id + item.size + item.color}
                className="flex gap-4 border-b pb-6! mt-5! items-start"
              >
                {/* FOTO */}
                <div className="relative w-80 h-120 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* BİLGİLER */}
                <div className="flex-1 mx-5! w-full">
                  <div className="flex justify-between items-start gap-3 md:gap-0 flex-wrap md:flex-nowrap">
                    <h3 className="font-medium text-sm md:text-base max-w-full truncate md:whitespace-normal">
                      {item.title}
                    </h3>

                    <button onClick={() => removeFromCart(item.id)}>
                      <X size={20} className="text-gray-500 mt-1 md:mt-5!" />
                    </button>
                  </div>

                  <p className="text-gray-700 mt-1! text-sm md:text-base">
                    Beden: {item.size}
                  </p>

                  <p className="mt-1! flex items-center gap-2 text-sm md:text-base">
                    Renk:
                    <span
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: item.color }}
                    />
                  </p>

                  {/* ADET */}
                  <div className="flex items-center gap-4 mt-1!">
                    <button
                      className="p-2 border rounded-lg"
                      onClick={() => decreaseQty(item.id)}
                    >
                      <Minus size={16} />
                    </button>

                    <span className="w-6 text-center">{item.quantity}</span>

                    <button
                      className="p-2 border rounded-lg"
                      onClick={() => increaseQty(item.id)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* FİYAT */}
                  <p className="mt-3! font-semibold text-sm md:text-base">
                    ₺{(item.price * item.quantity).toLocaleString("tr-TR")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ÖZET */}
          <div className="border rounded-xl p-6! h-fit shadow-sm">
            <h2 className="text-lg font-semibold mb-6!">Özet</h2>

            <div className="flex justify-between mb-3!">
              <span>Ara Toplam</span>
              <span>₺{subtotal.toLocaleString("tr-TR")}</span>
            </div>

            <div className="flex justify-between mb-6!">
              <span>Kargo</span>
              <span>₺{shipping}</span>
            </div>

            <div className="flex justify-between mb-6! text-lg font-bold">
              <span>Toplam</span>
              <span>₺{total.toLocaleString("tr-TR")}</span>
            </div>

            {/* 🟡 EKLENDİ — Ödemeye geç butonuna sipariş işlemi bağlandı */}
            <button
              onClick={handlePlaceOrder}   // 🟡 EKLENDİ
              className="w-full bg-black text-white py-1! rounded-lg"
            >
              Siparişi Tamamla
            </button>

            <Link
              href="/shop"
              className="block text-center mt-4! text-gray-600 underline hover:text-narla-sand! font-semibold"
            >
              Alışverişe Devam Et
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default CartPage;
