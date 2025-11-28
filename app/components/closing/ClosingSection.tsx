"use client";

import Image from "next/image";

export default function ClosingSection() {
  return (
    <section className="w-full py-32 overflow-x-hidden">
      <div className="container mx-auto max-w-[1200px] px-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        {/* SOL – YAN GÖRSEL */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <Image
            src="/assets/left.jpg"
            alt="left"
            width={400}
            height={430}
            className="rounded-xl opacity-85 hover:opacity-100 transition-all duration-300 w-full max-w-[400px] h-auto"
          />
        </div>

        {/* ORTA METİN */}
        <div className="text-center w-full md:w-[450px] flex justify-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-semibold mb-6 tracking-wide">
              Zarafetin Sessiz Dokunuşu
            </h2>

            <p className="text-gray-800 text-lg sm:text-xl leading-relaxed">
              Çorap sadece bir aksesuar değil; kendinizi ifade etmenin zarif bir
              yoludur. Her detayda kadınlığın gücünü, zarafetini ve duruşunu
              hissetmeniz için sizinle buluşuyoruz. Narla’nın dokunuşu her
              adımda sizinle.
            </p>
          </div>
        </div>

        {/* SAĞ – YAN GÖRSEL */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <Image
            src="/assets/right.jpg"
            alt="right"
            width={240}
            height={340}
            className="rounded-xl opacity-85 hover:opacity-100 transition-all duration-300 w-full max-w-60 h-auto"
          />
        </div>
      </div>
    </section>
  );
}
