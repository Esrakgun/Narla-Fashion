"use client";

import React, { FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface SlideItem {
  id: string;
  image: string;
  title?: string;
  subtitle?: string;
}

const slides: SlideItem[] = [
  { id: "slide-1", image: "/assets/Hero/10.jpg" },
  { id: "slide-2", image: "/assets/Hero/11.jpg" },
  { id: "slide-3", image: "/assets/Hero/12.jpg" },
  { id: "slide-4", image: "/assets/Hero/13.jpg" },
  { id: "slide-5", image: "/assets/Hero/14.jpg" },
  { id: "slide-6", image: "/assets/Hero/15.jpg" },
  { id: "slide-7", image: "/assets/Hero/16.jpg" },
  { id: "slide-8", image: "/assets/Hero/17.jpg" },
];

const HeroSlider: FC = () => {
  return (
    <section className="relative w-full! h-[45vh]! md:h-[70vh]! lg:h-[80vh]! overflow-hidden!">

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 2200, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="w-full! h-full!"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>

            {/* ⭐ TÜM SLIDE TIKLANABİLİR */}
            <div
              onClick={() => (window.location.href = "/")}
              className="relative w-full h-full flex cursor-pointer"
            >

              {/* FOTO 1 */}
              <div className="w-full sm:w-1/2 lg:w-1/3 h-full relative">
                <Image
                  src={slide.image}
                  alt={slide.id}
                  fill
                  className="object-cover"
                  priority
                  quality={95}
                />
              </div>

              {/* FOTO 2 */}
              <div className="hidden sm:block w-1/2 lg:w-1/3 h-full relative">
                <Image
                  src={slide.image}
                  alt={slide.id}
                  fill
                  className="object-cover"
                  priority
                  quality={95}
                />
              </div>

              {/* FOTO 3 */}
              <div className="hidden lg:block w-1/3 h-full relative">
                <Image
                  src={slide.image}
                  alt={slide.id}
                  fill
                  className="object-cover"
                  priority
                  quality={95}
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default HeroSlider;
