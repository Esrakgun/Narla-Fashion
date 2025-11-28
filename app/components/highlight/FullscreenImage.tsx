"use client";

import React, { FC } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  onClick: () => void;
};

const FullscreenImage: FC<Props> = ({ src, alt, onClick }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={600}
      height={600}
      className="rounded-xl object-cover w-full h-auto cursor-pointer transition hover:opacity-80"
      onClick={onClick}
    />
  );
};

export default FullscreenImage;
