"use client";

import React, { FC } from "react";

const Loader: FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <p className="text-gray-600 text-xl">Yükleniyor...</p>
    </div>
  );
};

export default Loader;
