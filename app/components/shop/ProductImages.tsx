"use client";

import React, { FC } from "react";
import Image from "next/image";

interface ProductImagesProps {
  images: string[];
  selectedImage: string;
  onSelectImage: (img: string) => void;
}

const ProductImages: FC<ProductImagesProps> = ({
  images,
  selectedImage,
  onSelectImage,
}) => {
  return (
    <div className="w-full space-y-4 mx-5! py-3!">
      {/* ANA FOTO */}
      <div className="relative w-full aspect-3/4 rounded-xl overflow-hidden">
        <Image
          src={selectedImage}
          alt="product"
          fill
          className="object-cover transition-all duration-300"
        />
      </div>

      {/* THUMBNAIL — DESKTOP */}
      <div className="hidden md:grid grid-cols-5 gap-3 mt-2!">
        {images.map((img) => (
          <button
            key={img}
            onClick={() => onSelectImage(img)}
            className={`
              relative w-full aspect-square rounded-md overflow-hidden border!
              ${selectedImage === img
                ? "border-black scale-105"
                : "border-gray-300"
              }
              transition
            `}
          >
            <div className="relative h-[280px] w-full rounded-xl overflow-hidden">
              <Image src={img} alt="thumbnail" fill className="object-cover" />
            </div>

          </button>
        ))}
      </div>

      {/* THUMBNAIL — MOBILE */}
      <div className="md:hidden flex gap-3 overflow-x-auto mt-1">
        {images.map((img) => (
          <button
            key={img}
            onClick={() => onSelectImage(img)}
            className={`
              min-w-[60px] h-[60px] rounded-md overflow-hidden border
              ${selectedImage === img
                ? "border-black scale-105"
                : "border-gray-300"
              }
            `}
          >
            <Image
              src={img}
              alt="thumbnail"
              width={60}
              height={60}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
