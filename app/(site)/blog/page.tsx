"use client";

import Link from "next/link";
import Image from "next/image";

const blogList = [
  {
    slug: "modern-minimal-elegance",
    title: "Modern Minimal Elegance: 2025’e Yön Veren Zarafet",
    desc: "Neutral tonların yükselişi, quiet luxury’nin dönüşü ve tasarımcıların 2025 vizyonu.",
    image: "/assets/blog/1.jpg",
  },
  {
    slug: "soft-textures-natural-shades",
    title: "Soft Textures & Natural Shades",
    desc: "Sütlü kahve, espresso ve nude tonlarıyla modern kapsül gardırop önerileri.",
    image: "/assets/blog/2.jpg",
  },
  {
    slug: "designer-perspectives-2025",
    title: "Designer Perspectives 2025",
    desc: "Phoebe Philo, Jacquemus ve The Row tasarımcılarının yeni sezona bakışı.",
    image: "/assets/blog/3.jpg",
  },
];

export default function BlogPage() {
  return (
    <main className="px-6! md:px-16! py-10! max-w-7xl mx-auto!">
      <h1 className="text-4xl font-bold text-narla-black mb-14!">
        <button
          onClick={() => (window.location.href = "/")}
          className="
            text-inherit
            hover:text-narla-sand!
            transition">Blog
        </button>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogList.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="
               bg-white rounded-xl p-5! shadow-md hover:shadow-xl
                 transition-all duration-300 hover:-translate-y-1
                 flex flex-col">
                        
            {/* Görsel */}
            <div className="relative w-full!   
                h-120!      /* Mobile */
                sm:h-150!   /* Small tablets */
                md:h-110!   /* Tablet */
                lg:h-120!   /* Laptop */
                xl:h-150!   /* Desktop / large screens */ 
                rounded-lg overflow-hidden mb-4!">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* METİN ALANI */}
            <div className="flex flex-col grow">
              {/* BAŞLIK – 2 satır, fazlası ... */}
              <h2 className="text-xl font-semibold text-narla-black line-clamp-2 mb-3!">
                {post.title}
              </h2>

              {/* AÇIKLAMA – 3 satır, fazlası ... */}
              <p className="text-gray-600 line-clamp-3 mb-6! grow">
                {post.desc}
              </p>

              {/* Buton – en alta sabit */}
              <span className="underline text-gray-700 hover:text-narla-sand font-medium mt-auto">
                Devamını Oku →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
