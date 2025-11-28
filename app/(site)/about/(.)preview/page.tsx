"use client";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AboutModalProps {
  bannerUrl: string; // arka plan resmi yolu
}

const AboutModal: FC<AboutModalProps> = ({ bannerUrl }) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // Boşluğa tıklayınca home sayfasına
  const handleBackgroundClick = () => {
    setIsVisible(false);
    setTimeout(() => router.push("/"), 400);
  };

  // X butonuna tıklayınca about sayfasına
  const handleCloseButton = () => {
    setIsVisible(false);
    setTimeout(() => router.push("/about"), 400);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleBackgroundClick}
    >
      {/* Arka plan: banner resmi + hafif blur */}
      <div
        className="absolute inset-0 bg-cover bg-center backdrop-blur-sm! transition-opacity duration-300"
        style={{ backgroundImage: `url(${bannerUrl})` }}
      >
        
      </div>

      {/* Modal kutusu */}
      <div
        className={`relative bg-white max-w-3xl w-full mx-4! sm:mx-6! rounded-3xl shadow-2xl p-10! sm:p-25! z-10 transform transition-all duration-400 ${
          isVisible
            ? "opacity-100 scale-100 rotate-0"
            : "opacity-0 scale-75 -rotate-6"
        }`}
      >
        {/* Kapatma butonu */}
        <button
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-black font-bold text-xl sm:text-2xl p-3! hover:text-gray-700 transition-colors"
          onClick={handleCloseButton}
        >
          ×
        </button>

        {/* Başlık */}
        <h2 className="text-4xl md:text-5xl font-serif mb-8! tracking-wide text-gray-900 ">
          Minimal. Elegant. Narla.
        </h2>

        {/* Koleksiyon açıklaması */}
        <p className="text-lg md:text-xl mb-10! text-gray-700 italic leading-relaxed">
          Narla Çorap Koleksiyonu, sadeliğin en güçlü ifade olduğuna inanan bir
          tasarım yaklaşımıyla ortaya çıktı. Zarif detaylar, monokrom dokular ve
          zamansız bir siluet; koleksiyonumuzun temelini oluşturuyor.
        </p>

        {/* Tasarım felsefesi */}
        <h3 className="text-2xl md:text-3xl font-light mb-8!  text-gray-800">
          Tasarım Felsefemiz
        </h3>
        <p className="text-lg md:text-xl mb-10! text-gray-700 leading-relaxed">
          Her model, modern kadın siluetinden ilham alarak şekillenir. Renk
          seçimlerimiz kadar, dokunun hissi ve ürünün gündelik hayatta bıraktığı
          etki bizim için önemlidir. Konfor, kalite ve estetik tek bir çizgide
          buluşur.
        </p>

        {/* Değerler */}
        <h3 className="text-2xl md:text-3xl font-light mb-8! text-gray-800">
          Değerlerimiz
        </h3>
        <ul className="list-disc list-inside mb-10! text-lg md:text-xl lg:text-2xl text-gray-700 space-y-3">
          <li>✔️ Yüksek kalite & modern üretim anlayışı</li>
          <li>✔️ Minimal high-fashion çizgi</li>
          <li>✔️ Zarif ve özgün siluet</li>
          <li>✔️ Her stile uyumlu renkler</li>
        </ul>

        {/* Koleksiyonu keşfet butonu */}
        <div className="text-center mt-6">
          <a
            href="/about/detail"
            className="inline-block px-8! py-1! rounded-full border border-black text-black font-medium hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-sm"
          >
            Koleksiyonu Keşfet
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
