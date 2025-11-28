"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useWishlistStore } from "@/app/lib/store/wishlistStore";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  slug: string;
  colors?: string[];
  colorImages?: Record<string, string[]>;
}

const ProductCard: FC<ProductCardProps> = ({
  id,
  title,
  price,
  image,
  slug,
  colors = [],
  colorImages = {},
}) => {
  const [selectedImage, setSelectedImage] = useState(image);

  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const isFav = isInWishlist(id);

  return (
    <div className="group w-full! cursor-pointer!">
      <div className="relative w-full! aspect-3/4! rounded-xl! overflow-hidden! bg-gray-100! shadow-sm!">
        <Link href={`/product/${slug}`}>
          <Image
            src={selectedImage}
            alt={title}
            fill
            className="object-cover! transition-transform! duration-300! group-hover:scale-105!"
          />
        </Link>

        {/* ⭐ FAVORİ BUTONU */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist({
              id,
              title,
              price,
              slug,
              image,
            });
          }}
          className="
            absolute top-2! right-2! w-9! h-9! rounded-full!
            bg-white! shadow-md! flex items-center! justify-center!
            opacity-0! group-hover:opacity-100! transition!
          "
        >
          <Heart
            size={18}
            className={`${isFav ? "scale-110!" : "scale-100!"}`}
            style={{
              color: isFav ? "#8b1a3a" : "#333",
              fill: isFav ? "#e31a23" : "none",
            }}
          />
        </button>
      </div>

      <div className="mt-3!">
        <Link href={`/product/${slug}`}>
          <h3 className="text-sm! md:text-base! font-medium! line-clamp-1!">
            {title}
          </h3>
        </Link>

        <p className="text-sm! md:text-base! font-semibold! mt-1!">
          ₺{price.toFixed(2).replace(".", ",")}
        </p>

        {colors.length > 0 && (
          <div className="flex items-center! gap-2! mt-2!">
            {colors.slice(0, 4).map((color, index) => (
              <button
                key={index}
                onClick={() => {
                  if (colorImages[color]?.length > 0) {
                    setSelectedImage(colorImages[color][0]);
                  }
                }}
                className="w-5! h-5! rounded-full! border! shadow-sm!"
                style={{ backgroundColor: color }}
              />
            ))}

            {colors.length > 4 && (
              <span className="text-xs! text-gray-600!">
                +{colors.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
