"use client";

import React, { FC, useState } from "react";
import FullscreenImage from "./FullscreenImage";
import ImageModal from "./ImageModal";

const IntroImages: FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const handleOpen = (src: string) => {
    setSelectedImg(src);
    setOpen(true);
  };

  return (
    <section className="container mx-auto px-6 py-32 space-y-44 mt-20!">
      {/* MODAL */}
      <ImageModal
        isOpen={open}
        src={selectedImg}
        onClose={() => setOpen(false)}
      />

      {/* ---------------------- 1. SATIR ---------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        {/* SOL FOTO */}
        <div className="md:-translate-x-6">
          <FullscreenImage
            src="/assets/1.jpg"
            alt="Narla Image 1"
            onClick={() => handleOpen("/assets/1.jpg")}
          />
        </div>

        {/* SAĞ METİN */}
        <div className="md:pl-14 space-y-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-5xl font-semibold tracking-wide">
              “Her Adımda Zarafet”
            </h2>
            <p className="text-gray-800 text-xl leading-loose">
              Kadınlığın her hâlini kutlayan zarif detaylar. Her adımda daha
              özgüvenli, daha stil sahibi hissetmeniz için tasarlandı. Hafif
              dokusuyla her ana uyum sağlar ve minimal şıklığı öne çıkarır.
            </p>
          </div>
        </div>
      </div>

      {/* ---------------------- 2. SATIR ---------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        {/* SOL METİN */}
        <div className="order-2 md:order-1 md:pr-14 space-y-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-5xl font-semibold tracking-wide">
              “Adımlarınızı Şıklıkla Sarın”
            </h2>
            <p className="text-gray-800 text-xl leading-loose">
              Modern yaşamın temposuna eşlik eden konfor. Esnek yapısı ve
              yumuşak dokusuyla hareket özgürlüğü sunarken görünümünüzden ödün
              vermez. Şıklık artık hissettiğiniz yerden başlıyor.
            </p>
          </div>
        </div>

        {/* SAĞ FOTO */}
        <div className="order-1 md:order-2 md:translate-x-6">
          <FullscreenImage
            src="/assets/2.jpg"
            alt="Narla Image 2"
            onClick={() => handleOpen("/assets/2.jpg")}
          />
        </div>
      </div>

      {/* ---------------------- 3. SATIR ---------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        {/* SOL FOTO */}
        <div className="md:-translate-x-6 ">
          <FullscreenImage
            src="/assets/3.jpg"
            alt="Narla Image 3"
            onClick={() => handleOpen("/assets/3.jpg")}
          />
        </div>

        {/* SAĞ METİN */}
        <div className="md:pl-14 space-y-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-5xl font-semibold tracking-wide">
              “Şıklığın Tamamlayıcısı”
            </h2>
            <p className="text-gray-800 text-xl leading-loose">
              Tarzınızı güçlendiren minimal ama etkili dokunuşlar. Kalite,
              dayanıklılık ve modern çizgiyi bir arada sunan koleksiyon,
              görünümünüzün en zarif tamamlayıcısı olmak için tasarlandı. Her
              ana ışıltı ve kusursuz uyum katıyor.
            </p>
          </div>
        </div>
      </div>

      {/* EXTRA WHITE SPACE FOR TRANSITION */}
      <div className="w-full h-24 md:h-20"></div>
    </section>
  );
};

export default IntroImages;
