"use client";

import React, { useState, FC } from "react";
import { useParams } from "next/navigation";

import ProductImages from "@/app/components/shop/ProductImages";
import ProductDetails from "@/app/components/shop/ProductDetails";
import RecommendedSlider from "@/app/components/shop/RecommendedSlider";
import { products } from "@/app/data/product";

const ProductDetailPage: FC = () => {
  const { slug } = useParams() as { slug: string };

  // ÜRÜNÜ BUL
  const product = products.find((p) => p.slug === slug);

  // Renkler — hook değil
  const safeColors = product?.colors ?? [];

  // STATE: RENK
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  // SEÇİLİ RENK
  const selectedColor =
    safeColors[selectedColorIndex] ?? safeColors[0] ?? "";

  // Görselleri getiren fonksiyon
  const getImages = (colorIndex: number): string[] => {
    if (!product) return [];
    const color = safeColors[colorIndex];
    return (
      product.colorImages?.[color] ??
      product.images ??
      [product.image]
    );
  };

  // Mevcut görsel listesi
  const currentImages = getImages(selectedColorIndex);

  // STATE: seçili foto
  const [selectedImage, setSelectedImage] = useState(
    currentImages[0] ?? product?.image ?? ""
  );

  // Renk değişince foto değişsin
  const handleColorSelect = (index: number) => {
    setSelectedColorIndex(index);
    const imgs = getImages(index);
    setSelectedImage(imgs[0]);
  };

  // STATE: beden seçimi
  const [selectedSize, setSelectedSize] = useState("");

  // Önerilen ürünler
  const recommended = product
    ? products.filter(
        (p) => p.category === product.category && p.slug !== slug
      )
    : [];

  // *** EARLY RETURN EN ALTTA — bütün hook’lardan SONRA ***
  if (!product) {
    return (
      <div className="w-full py-20 text-center text-gray-600">
        Ürün bulunamadı.
      </div>
    );
  }

  return (
    <main className="w-full px-4 md:px-8 lg:px-12 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

        {/* Resimler */}
        <ProductImages
          images={currentImages}
          selectedImage={selectedImage}
          onSelectImage={setSelectedImage}
        />

        {/* Detaylar */}
        <ProductDetails
          id={product.id}
          slug={product.slug}
          title={product.title}
          price={product.price}
          colors={safeColors}
          sizes={product.sizes}
          description={product.description}
          composition={product.composition}
          care={product.care}
          
          selectedColorIndex={selectedColorIndex}
          selectedColor={selectedColor}
          selectedImage={selectedImage}

          selectedSize={selectedSize}
          onSelectSize={setSelectedSize}

          onSelectColor={handleColorSelect}
        />
      </div>

      {recommended.length > 0 && (
        <div className="mt-20">
          <RecommendedSlider products={recommended} />
        </div>
      )}
    </main>
  );
};

export default ProductDetailPage;
