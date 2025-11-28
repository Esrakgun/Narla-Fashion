"use client";

import Image from "next/image";
import Link from "next/link";

const images = [
  "/LookBook/1.jpg",
  "/LookBook/2.jpeg",
  "/LookBook/3.jpeg",
  "/LookBook/4.jpg",
  "/LookBook/5.jpg",
  "/LookBook/6.jpeg",
  "/LookBook/7.jpeg",
  "/LookBook/8.jpg",
  "/LookBook/9.jpeg",
  "/LookBook/10.jpeg",
  "/LookBook/11.jpeg",
  "/LookBook/12.jpg",
];

export default function LookBookPage() {
  return (
    <main className="px-3! py-5!">
      <div className="grid grid-cols-4 grid-rows-3 gap-4 w-full">
        {images.map((src, index) => (
          <Link
            key={index}
            href={`/lookbook/${index}`}
            scroll={false}
            className="relative w-full h-[700px] overflow-hidden rounded-xl group"
          >
            <Image
              src={src}
              alt={`lookbook-${index}`}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
