"use client";

import React, { FC } from "react";
import { notifySuccess, notifyError } from "@/app/Notification";
import { useCartStore } from "@/app/lib/store/cartStore";

interface ProductDetailsProps {
  id: string;
  slug: string;
  title: string;
  price: number;
  colors: string[];
  sizes?: string[];
  description?: string;
  composition?: string;
  care?: string;

  selectedColorIndex: number;
  selectedColor: string;
  selectedImage: string;

  selectedSize: string;
  onSelectSize: (size: string) => void;

  onSelectColor: (index: number) => void;
}

const ProductDetails: FC<ProductDetailsProps> = ({
  id,
  slug,
  title,
  price,
  colors,
  sizes = ["S", "M", "L", "XL"],
  description,
  composition,
  care,

  selectedColorIndex,
  selectedColor,
  selectedImage,

  selectedSize,
  onSelectSize,

  onSelectColor,
}) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    if (!selectedSize) {
      notifyError("Lütfen beden seçin.");
      return;
    }

    addToCart({
      id,
      slug,
      title,
      price,
      image: selectedImage,
      color: selectedColor,
      size: selectedSize,
      quantity: 1,
    });

    notifySuccess("Ürün sepete eklendi!");
  };

  return (
    <div className="w-full space-y-6 py-30! px-10!">

      {/* BAŞLIK */}
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2!">
        {title}
      </h1>

      {/* FİYAT */}
      <p className="text-xl md:text-2xl font-semibold mb-2!">₺{price}</p>

      {/* RENK BALONCUKLARI */}
      <div>
        <h3 className="text-sm font-medium mb-2!">Renk</h3>

        <div className="flex items-center gap-3">
          {colors.map((color, index) => (
            <button
              key={color}
              onClick={() => onSelectColor(index)}
              className={`
                w-7 h-7 rounded-full border transition
                ${
                  selectedColorIndex === index
                    ? "border-black scale-110"
                    : "border-gray-300"
                }
              `}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* BEDEN */}
      <div>
        <h3 className="text-sm font-medium mt-2! mb-2!">Beden</h3>

        <div className="grid grid-cols-4 gap-3 mb-2!">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSelectSize(size)}
              className={`
                border rounded-lg py-2 text-sm transition
                ${
                  selectedSize === size
                    ? "border-black bg-black text-white"
                    : "border-gray-300 hover:border-black"
                }
              `}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* SEPETE EKLE */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-black text-white py-2! rounded-xl text-sm md:text-base tracking-wide hover:bg-gray-900 transition mb-2! mt-3!"
      >
        SEPETE EKLE
      </button>


      {/* AÇILIR ALANLAR */}
      <div className="divide-y divide-gray-200 border rounded-xl mt-10!">
        {description && (
          <div className="p-4!">
            <span className="font-medium">Ürün Açıklaması</span>
            <p className="mt-3 text-sm text-gray-700">{description}</p>
          </div>
        )}

        {composition && (
          <div className="p-4!">
            <span className="font-medium">Kompozisyon</span>
            <p className="mt-3 text-sm text-gray-700">{composition}</p>
          </div>
        )}

        {care && (
          <div className="p-4!">
            <span className="font-medium">Bakım Talimatları</span>
            <p className="mt-3 text-sm text-gray-700">{care}</p>
          </div>
        )}
      </div>

       {/* ⭐⭐⭐ ALT NAV BUTONLARI — RESPONSIVE ⭐⭐⭐ */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-3 mt-4! py-10!">

  <button
    onClick={() => (window.location.href = "/shop")}
    className="
      w-full
      flex items-center justify-center gap-2
      py-2! 
      border rounded-full 
      text-xs sm:text-sm 
      hover:bg-gray-300 transition
    "
  >
    ← Alışverişe Devam Et
  </button>

  <button
    onClick={() => (window.location.href = "/")}
    className="
      w-full
      flex items-center justify-center gap-2
      px-4 py-2! 
      border rounded-full 
      text-xs sm:text-sm 
      hover:bg-gray-300 transition
    "
  >
    🏠 Ana Sayfa
  </button>

  <button
    onClick={() => (window.location.href = "/cart")}
    className="
      w-full
      flex items-center justify-center gap-2
      px-4 py-2! 
      border rounded-full 
      text-xs sm:text-sm 
      hover:bg-gray-300 transition
    "
  >
    🛒 Sepetim
  </button>

</div>
{/* ⭐⭐⭐ ALT NAV BUTONLARI BİTİŞ ⭐⭐⭐ */}

    </div>
  );
};

export default ProductDetails;
