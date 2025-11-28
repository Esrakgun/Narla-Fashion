"use client";

import React, { FC, useState } from "react";
import HeroSlider from "@/app/components/shop/HeroSlider";
import CategorySlider from "@/app/components/shop/CategorySlider";
import FilterPanel from "@/app/components/shop/FilterPanel";
import SortMenu from "@/app/components/shop/SortMenu";
import ProductGrid from "@/app/components/shop/ProductGrid";
import { products } from "@/app/data/product";

const ShopPage: FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortedProducts, setSortedProducts] = useState(products);

  const handleSortChange = (value: string) => {
    let sorted = [...products];

    if (value === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (value === "latest") {
      sorted = sorted.filter((item) => item.isLatest === true);
    } else if (value === "bestseller") {
      sorted = sorted.filter((item) => item.isBestseller === true);
    } else {
      sorted = [...products]; // Varsayılan
    }

    setSortedProducts(sorted);
  };

  return (
    <main className="w-full">

      <HeroSlider />
      <CategorySlider />

      {/* ⭐⭐ BURAYA EKLEME YAPILDI — SAĞDA FAVORİLERİ GÖR BUTONU ⭐⭐ */}
      <div className="w-full flex items-center justify-between px-8! md:px-8 mt-10">

        <button
          onClick={() => setIsFilterOpen(true)}
          className="
            md:hidden
            px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white
          "
        >
          Filtrele
        </button>

        {/* SOLDA SIRALAMA */}
        <div className="ml-auto">
          <SortMenu onSortChange={handleSortChange} />
        </div>

        {/* ⭐ YENİ — SAĞDA FAVORİLERİ GÖR BUTONU ⭐ */}
        <button
          onClick={() => (window.location.href = "/wishlist")}
          className="
            ml-4 bg-narla-rose! rounded-2xl py-2! px-5!
            text-sm md:text-base
            font-bold
            text-gray-700
            hover:text-narla-sand!
            transition
          "
        >
          Favorileri Gör
        </button>
      </div>
      {/* ⭐⭐ EKLEME BİTTİ ⭐⭐ */}

      <FilterPanel isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

      <ProductGrid products={sortedProducts} />
    </main>
  );
};

export default ShopPage;
