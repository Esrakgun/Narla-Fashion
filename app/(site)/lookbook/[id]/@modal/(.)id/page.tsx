"use client";

import { useRouter } from "next/navigation";
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
  params: { id: string };
}

export default function LookBookModal({ params }: Props) {
  const router = useRouter();
  const { id } = params;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-999999">
      <div className="relative max-w-3xl w-full px-4">
        <button
          className="absolute -top-10 right-0 text-white text-3xl"
          onClick={() => router.back()}
        >
          ×
        </button>

        <Image
          src={images[Number(id)]}
          alt="lookbook-modal"
          width={1200}
          height={1600}
          className="rounded-xl w-full"
        />
      </div>
    </div>
  );
}
