"use client";

import React, { FC } from "react";
import Image from "next/image";

type Props = {
  isOpen: boolean;
  src: string;
  onClose: () => void;
};

const ImageModal: FC<Props> = ({ isOpen, src, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-9999 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl h-[95vh] p-10">
        <Image
          src={src}
          alt="Fullscreen Zoom"
          fill
          className="object-contain rounded-xl"
          priority
        />
      </div>
    </div>
  );
};

export default ImageModal;
