"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link"; // ← Next Link
import SwiperAbout from "@/app/components/SwiperAbout";

const AboutPage: FC = () => {
  return (
    <section className="w-full">
      {/* BANNER ------------------------------------------------------ */}
      <div className="relative w-full h-[150vh] md:h-[120vh]">
        <Image
          src="/assets/A.jpg"
          alt="Narla Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          {/* TIKLANABİLİR BAŞLIK – modal önizleme tetikler */}
          <Link href="/about/preview" scroll={false} passHref>
            <h1 className="cursor-pointer text-white text-4xl md:text-6xl font-light tracking-wide text-center">
             The Story Behind the Narla 
            </h1>
          </Link>
        </div>
      </div>

      {/* SLIDER ------------------------------------------------------ */}
      <div className="about-slider-section max-w-6xl mx-auto px-4 py-16 md:py-24">
        <SwiperAbout />
      </div>

      {/* CONTENT ----------------------------------------------------
      <div className="container max-w-4xl mx-auto px-4 md:px-0 py-16 md:py-24 space-y-16">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#111]">
            Minimal. Elegant. Narla.
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#222] leading-relaxed tracking-wide">
            Narla Çorap Koleksiyonu, sadeliğin en güçlü ifade olduğuna inanan
            bir tasarım yaklaşımıyla ortaya çıktı. Zarif detaylar, monokrom
            dokular ve zamansız bir siluet; koleksiyonumuzun temelini
            oluşturuyor.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-[#111]">
            Tasarım Felsefemiz
          </h3>
          <p className="text-[#333] text-base md:text-lg leading-relaxed tracking-wide">
            Her model, modern kadın siluetinden ilham alarak şekillenir. Renk
            seçimlerimiz kadar, dokunun hissi ve ürünün gündelik hayatta
            bıraktığı etki bizim için önemlidir. Konfor, kalite ve estetik tek
            bir çizgide buluşur.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-[#111]">
            Değerlerimiz
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[#333] tracking-wide leading-relaxed text-base md:text-lg">
            <li>Yüksek kalite & modern üretim anlayışı</li>
            <li>Minimal high-fashion çizgi</li>
            <li>Zarif ve özgün siluet</li>
            <li>Her stile uyumlu renkler</li>
          </ul>
        </div>

        <div className="pt-8 md:pt-12">
          <a
            href="/site/shop"
            className="inline-block px-6 md:px-8 py-3 md:py-4 border border-black text-black tracking-wide text-sm md:text-base uppercase hover:bg-black hover:text-white transition-all duration-300"
          >
            Koleksiyonu Keşfet
          </a>
        </div>
      </div> */}
    </section>
  );
};

export default AboutPage;