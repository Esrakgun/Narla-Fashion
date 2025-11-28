"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiper-about.css";
import Image from "next/image";
import { ABOUT_CARDS } from "@/app/lib/aboutCards";

export default function SwiperAbout() {
  return (
    <div className="about-slider-wrapper relative w-full group">
      {/* OKLAR */}
      <div className="swiper-button-prev custom-nav"></div>
      <div className="swiper-button-next custom-nav"></div>

      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation={{          // ← sadece bu satır değişti
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSwiper={(swiper) => {
          if (swiper.navigation) {
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.1 },
          1024: { slidesPerView: 2.2 },
          1400: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {ABOUT_CARDS.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className="
                rounded-3xl overflow-hidden shadow-md 
                border border-black/10 bg-white group cursor-pointer
                mt-10! mb-5! p-10!
              "
            >
              {/* IMAGE */}
              <div className="relative w-full h-64 md:h-90">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* TEXT */}
              <div className="p-6 md:p-8 space-y-3 min-h-[130px] flex flex-col">
                <h3 className="text-xl md:text-2xl mt-10! font-light tracking-wide text-[#111]">
                  {card.title}
                </h3>

                <p className="text-[#333] text-base md:text-lg leading-relaxed mt-1!">
                  {card.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}