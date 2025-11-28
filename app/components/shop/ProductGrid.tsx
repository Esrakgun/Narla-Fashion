"use client";

import React, { FC } from "react";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: {
    id: string;
    title: string;
    price: number;
    image: string;
    slug: string;
    colors?: string[];
    colorImages?: Record<string, string[]>; // ⭐️ EKLEDİK — TS HATASI BURADA ÇÖZÜLDÜ
  }[];
}

const ProductGrid: FC<ProductGridProps> = ({ products }) => {
  return (
    <section className="w-full! px-4! md:px-8! mt-2! mb-20!">
      
      {/* GRID WRAPPER */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-6!
        "
      >
        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            slug={item.slug}
            colors={item.colors}
            colorImages={item.colorImages}  // ⭐️ ARTIK ÇALIŞIYOR
          />
        ))}
      </div>

    </section>
  );
};

export default ProductGrid;
