"use client";

import Image from "next/image";
import { SKIN_COLLECTION } from "@/app/lib/skinCollection";
import { FC } from "react";
import { useRouter } from "next/navigation";

const CollectionsPage: FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/"); // Tıklanınca ana sayfaya
  };

  return (
    <section className="w-full min-h-screen bg-[#f7f4f2]">
      {/* HERO ---------------------------------------------------- */}
      <div
        className="relative w-full h-[90vh] md:h-100vh overflow-hidden cursor-pointer"
        onClick={handleClick} // Hero tıklanabilir
      >
        <Image
          src={SKIN_COLLECTION[0]}
          alt="Narla Skin Collection Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 bg-black/20 backdrop-blur-sm">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light italic tracking-wide">
            Narla Skin Collection
          </h1>
          <p className="mt-6 text-lg md:text-2xl font-light">
            second skin • smoother • invisible touch
          </p>
        </div>
      </div>

      {/* GRID ---------------------------------------------------- */}
      <div className="w-full flex justify-center py-20">
        <div
          className="max-w-7xl w-full px-6 sm:px-8 lg:px-10 
                  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                  gap-10 p-10!"
        >
          {SKIN_COLLECTION.map((src, i) => (
            <div
              key={i}
              className="relative w-full h-[380px] md:h-[450px] 
                   rounded-3xl overflow-hidden shadow-md group cursor-pointer"
              onClick={handleClick} // Her görsel tıklanabilir
            >
              <Image
                src={src}
                alt={`Collection Item ${i}`}
                fill
                sizes="100%"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsPage;
