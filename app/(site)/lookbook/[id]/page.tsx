"use client";

import { use } from "react";
import Image from "next/image";

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

interface Props {
  params: Promise<{ id: string }>;
}

export default function LookBookItemPage({ params }: Props) {
  const { id } = use(params);

  return (
    <main className="px-6! py-3!">
      <Image
        src={images[Number(id)]}
        alt="lookbook full"
        width={1200}
        height={1600}
        className="rounded-xl mx-auto"
        style={{ height: "900px", width: "auto" }}
      />
    </main>
  );
}
