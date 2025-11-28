"use client";

import React, { FC, useState, useMemo } from "react";
import { useParams } from "next/navigation";
import ProductGrid from "@/app/components/shop/ProductGrid";
import SortMenu from "@/app/components/shop/SortMenu";
import { categories } from "@/app/data/categories";
import { products } from "@/app/data/product";
import { ArrowLeft } from "lucide-react";

const CategoryPage: FC = () => {
  const { category } = useParams() as { category: string };

  const baseProducts = useMemo(() => {
    return products.filter((item) => item.category === category);
  }, [category]);

  const [sortedProducts, setSortedProducts] = useState(baseProducts);

  const categoryInfo = categories.find((c) => c.slug === category);

  const handleSortChange = (value: string) => {
    let sorted = [...baseProducts];

    if (value === "default") {
      sorted = [...baseProducts];
    } 
    else if (value === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } 
    else if (value === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    } 
    else if (value === "latest") {
      sorted = products.filter((item) => item.isLatest === true);
    } 
    else if (value === "bestseller") {
      sorted = products.filter((item) => item.isBestseller === true);
    }

    setSortedProducts(sorted);
  };

  return (
    <main className="w-full p-10!">

      {/* 🔙 GERİ OK — ANASAYFA */}
      <button
        onClick={() => (window.location.href = "/")}
        className="
          mb-4! ml-7!
          flex items-center gap-2!
          text-gray-700 hover:text-narla-sand!
          transition font-bold!
        "
      >
        <ArrowLeft size={20} />
        Anasayfa
      </button>

      {/* ⭐ MEVCUT BAŞLIĞINI TIKLANABİLİR YAPTIK */}
      <div className="w-full px-8! md:px-8 mt-8! -ml-5! sm:ml-0!">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight capitalize">
          <button
            onClick={() => (window.location.href = "/shop")}
            className="text-inherit hover:text-narla-sand! transition"
          >
            {categoryInfo?.name ?? category}
          </button>
        </h1>

        <p className="text-gray-500 mt-1! px-0.5! ml-0!">
          {sortedProducts.length} ürün bulundu
        </p>
      </div>

      <div className="w-full flex items-center justify-between px-10! mt-6! mb-3!  -ml-5! sm:ml-0!">
        <div className="ml-auto">
          <SortMenu onSortChange={handleSortChange} />
        </div>
      </div>

      <ProductGrid products={sortedProducts} />
    </main>
  );
};

export default CategoryPage;
