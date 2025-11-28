"use client";

import React, { FC } from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface RecommendedSliderProps {
  products: {
    id: string;
    title: string;
    price: number;
    image: string;
    slug: string;
    colors?: string[];
  }[];
}

const RecommendedSlider: FC<RecommendedSliderProps> = ({ products }) => {
  return (
    <section className="w-full mt-16 px-4! md:px-4 p-3! mb-5! lg:px-6">
      <h2 className="text-xl md:text-2xl font-semibold mb-3! tracking-tight ">
        Bunları da Beğenebilirsiniz
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-10"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              slug={product.slug}
              colors={product.colors}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RecommendedSlider;
