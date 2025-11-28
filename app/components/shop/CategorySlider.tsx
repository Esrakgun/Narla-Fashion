"use client";

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface CategoryItem {
  id: string;
  label: string;
  image: string;
  href: string;
}

const categories: CategoryItem[] = [
  {
    id: "fashion-addicted",
    label: "Fashion Addicted",
    image: "/assets/Hero/1.jpeg",
    href: "/shop/fashion-addicted",
  },
  {
    id: "trendsetter",
    label: "Trendsetter",
    image: "/assets/Hero/2.jpeg",
    href: "/shop/trendsetter",
  },
  {
    id: "boss",
    label: "Boss",
    image: "/assets/Hero/b.PNG",
    href: "/shop/boss",
  },
  {
    id: "new",
    label: "Yeni Gelenler",
    image: "/assets/Hero/de.PNG",
    href: "/shop/new",
  },
  {
    id: "best",
    label: "En Çok Satanlar",
    image: "/assets/Hero/e.PNG",
    href: "/shop/best",
  },
];

const CategorySlider: FC = () => {
  return (
    <section className="w-full px-4! md:px-8! mt-20!">

      {/* ÜSTTE ORTALANMIŞ BÖLÜM BAŞLIĞI */}
      <div className="w-full text-center mb-10!">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Koleksiyonlar
        </h2>
        <p className="text-gray-600 mt-1!">
          Tarzını yansıtan parçaları keşfet
        </p>
      </div>

      {/* KATEGORİ SLIDER */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="w-full!"
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.id}>
            <Link
              href={cat.href}
              className="block group cursor-pointer w-full"
            >
              {/* RESİM ALANI (küçültülmüş boy) */}
              <div className="relative w-full h-45! md:h-65 lg:h-85! rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="
                    object-cover
                    transition-transform duration-300
                    group-hover:scale-105!
                  "
                />
              </div>

              {/* YAZI (resmin altında) */}
              <p className="mt-3 text-center text-sm md:text-base font-medium p-2! mb-5!">
                {cat.label}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CategorySlider;
