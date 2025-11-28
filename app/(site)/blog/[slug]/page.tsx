"use client";

import { use } from "react";
import Image from "next/image";

interface BlogDetailProps {
  params: Promise<{ slug: string }>;
}

const blogPosts: Record<
  string,
  {
    title: string;
    image: string;
    content: string;
  }
> = {
  "modern-minimal-elegance": {
    title: "Modern Minimal Elegance: 2025’e Yön Veren Zarafet",
    image: "/assets/blog/1.jpg",
    content: `
2025 yılında moda dünyasını belirleyen en önemli trendlerden biri minimal elegans.
Neutral tonların yeniden yükselişi, “quiet luxury” akımının güç kazanması ve
tasarımcıların yalın ama etkili formlara yönelmesi, bu estetiğin temelini oluşturuyor.
    `,
  },

  "soft-textures-natural-shades": {
    title: "Soft Textures & Natural Shades",
    image: "/assets/blog/2.jpg",
    content: `
Nude, sütlü kahve ve espresso tonları, 2025 yılında gardıropların temel taşını oluşturuyor.
Rahat dokular, doğal tonlarla birleşerek sade ama güçlü bir görünüm sağlıyor.
    `,
  },

  "designer-perspectives-2025": {
    title: "Designer Perspectives 2025",
    image: "/assets/blog/3.jpg",
    content: `
Phoebe Philo, Jacquemus ve The Row tasarımcıları,
2025 yılının modern silüetlerine yön veren isimler arasında.
Zamansız tasarımlar ve yalın çizgiler öne çıkıyor.
    `,
  },
};

export default function BlogDetailPage({ params }: BlogDetailProps) {
  // ⭐ Next.js 13-14 için gerekli çözüm
  const { slug } = use(params);

  const cleanSlug = slug.trim();
  const post = blogPosts[cleanSlug];

  if (!post) {
    return (
      <main className="px-6 py-120! text-center">
        <h1 className="text-2xl font-bold text-red-600!">
          Yazı bulunamadı.
        </h1>
      </main>
    );
  }

  return (
    <main className="px-6! md:px-16! py-10! max-w-4xl mx-auto!">
      <h1 className="text-4xl font-bold text-narla-black mb-6!">
        {post.title}
      </h1>

      <div className="relative w-full h-220! rounded-xl overflow-hidden mb-2!">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line px-2!">
        {post.content}
      </p>
    </main>
  );
}
