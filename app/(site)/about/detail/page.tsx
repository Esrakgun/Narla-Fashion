"use client";

import Image from "next/image";
import { FC } from "react";

const AboutDetailPage: FC = () => {
  return (
    <section className="w-full min-h-screen bg-[#f4f4f4] p-10! md:px-10 lg:px-20">
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT — COVER */}
        <div className="lg:col-span-5 bg-white rounded-2xl shadow-md p-10! md:p-10 flex flex-col gap-8">
          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111] ">
            <button
              onClick={() => (window.location.href = "/")}
              className="text-inherit hover:text-narla-sand! transition uppercase!"
            >
              Modern Doku
            </button>
          </h1>

          {/* SUB TITLE (issue tamamen kaldırıldı, sadeleşti) */}
          <p className="text-sm md:text-base text-[#555] tracking-wide">
            Moda • Estetik • Güncel Yaklaşımlar
          </p>

          {/* COVER IMAGE */}
          <div className="relative w-full h-[420px] md:h-[520px] rounded-xl overflow-hidden group hover:scale-[1.01] transition-transform duration-300 mt-10!">
            <Image
              src="/assets/highlight/AB.jpeg"
              alt="Magazine Cover"
              fill
              sizes="100%"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* COVER TEXT */}
          <div className="space-y-6 md:space-y-8 pt-4 md:pt-6 p-10!">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#111] tracking-wide">
                Yenilikçi Çizgiler
              </h2>

              <p className="text-[#333] leading-relaxed text-sm md:text-base mt-3!">
                Günümüz moda anlayışı, sade dokular ve güçlü silüetlerin
                birleşimiyle yeni bir kimlik kazanıyor. Minimal yaklaşımlar,
                modern yaşamın ritmine eşlik eden detaylarla yeniden şekilleniyor.
              </p>

              {/* NEW IMAGE */}
              <div className="relative w-full h-64 md:h-150 rounded-xl overflow-hidden group mt-25!">
                <Image
                  src="/assets/highlight/BC.jpeg"
                  alt="Fashion Bottom"
                  fill
                  sizes="100%"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-[#111] tracking-wide mt-35!">
                Editoryal Bakış
              </h2>

              <p className="text-[#333] leading-relaxed text-sm md:text-base mt-3!">
                Moda sadece bir görünüş değil; bir anlatım biçimi. Renklerin,
                dokuların ve ritmin birleştiği bu editoryal yaklaşım,
                kişisel tarzın ruhunu ortaya çıkarıyor. Modern perspektif,
                günlük yaşamla bütünleşen sade bir zarafet sunuyor.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col group"
            >
              {/* PAGE IMAGE */}
              <div className="relative w-full h-60 md:h-120 overflow-hidden">
                <Image
                  src={`/assets/highlight/${i}.jpeg`}
                  alt={`Magazine Page ${i}`}
                  fill
                  sizes="100%"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <div className="p-6! md:p-8 space-y-4 flex-1 hover:translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#111] m-3!">
                  {[
                    "Sade & Zamansız",
                    "Günlük Şıklık",
                    "Renk Dengesi",
                    "Modern Kadraj",
                    "Stil Anlatısı",
                    "Detayın Gücü",
                  ][i - 1]}
                </h3>

                <p className="text-sm md:text-base text-[#444] leading-relaxed">
                  {[
                    "Sadelik, güçlü bir duruşun yansımasıdır. Temiz çizgiler ve nötr renklerle oluşturulan zamansız görünümler, modern yaşamın vazgeçilmez parçasıdır.",
                    "Konforun ve estetiğin birleştiği hafif dokular, günün temposuna uyum sağlarken şıklığı ön planda tutar.",
                    "Renklerin ruhunu taşıyan yumuşak geçişler, stil sahibi bir görünümün en doğal tamamlayıcısıdır.",
                    "Her kare, modern perspektifin izini taşır. Işık ve gölge uyumu, görüntüye derinlik kazandırır.",
                    "Kıyafetlerin anlattığı hikâye, kişisel dokunuşlarla bütünleşerek benzersiz bir stile dönüşür.",
                    "Küçük ayrıntılar, büyük bir bütün oluşturur. Minimal dokunuşlar, görünümü rafine bir seviyeye taşır.",
                  ][i - 1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutDetailPage;
