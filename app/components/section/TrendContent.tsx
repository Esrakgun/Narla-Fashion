"use client";

import { FC } from "react";
import SimpleTabs from "./SimpleTabs";

const TrendContent: FC = () => {
  return (
    <section className="container mx-auto px-10 py-30">

      {/* BLUR BACKGROUND */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start
                      backdrop-blur-xl bg-white/30 p-20 ">

        {/* SOL METİN */}
        <div className="lg:col-span-7">

          {/* El Yazısı Vibe Başlık */}
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-15 italic">
            Zarafetin Sessiz Dokunuşu
          </h2>

          <div className="max-w-[65ch] space-y-10 text-gray-900 leading-loose mb-15">

            <p>
              Günümüz kadını; özgürlüğü, hareketi ve zarafeti aynı anda taşır.  
              Biz de bu yolculuğa eşlik eden parçaları, sadelikten ödün vermeden  
              modern bir çizgide yeniden yorumladık.
            </p>

            <p>
              Yumuşak dokular, hafif hatlar ve işlevsel detaylar…  
              Her bir tasarım, size günün her anında eşlik edecek kadar  
              rahat ve bir o kadar iddialı bir stile sahiptir.
            </p>

            <p>
              Koleksiyonumuz, her adımda kendinizi daha özgün,  
              daha feminen ve daha güçlü hissetmeniz için tasarlandı.
            </p>

          </div>
        </div>

        {/* SAĞ TARAF TABS */}
        <div className="lg:col-span-5 max-w-[65ch]">

          <SimpleTabs
            className="py-4"
            tabs={[
              {
                id: "tasarim",
                label: "Tasarım Felsefesi",
                content: (
                  <div className="space-y-4">
                    <b className="block text-xl italic text-gray-900 mb-3">
                      İnceliğin Modern Yorumu
                    </b>

                    <p className="text-gray-900 leading-loose">
                      Tasarımlarımız, sade çizgilerle güçlendirilmiş modern bir  
                      estetik anlayışına dayanır.  
                      Her detay, görünümünüzü ağırlaştırmadan zarafet katmak üzerine kuruludur.  
                      Renkler, dokular ve form; hem minimal hem de karakter sahibi bir stil yaratır.
                    </p>
                  </div>
                ),
              },
              {
                id: "deneyim",
                label: "Kullanım Deneyimi",
                content: (
                  <div className="space-y-4">
                    <b className="block text-xl italic text-gray-900 mb-3">
                      Hafiflik ve Konforun Dengesi
                    </b>

                    <p className="text-gray-900 leading-loose">
                      Koleksiyonumuz, gün boyu konforu hissetmeniz için geliştirilmiş  
                      esnek yapılar ve nefes alan dokular kullanır.  
                      İster ofis temposunda ister şehir yürüyüşlerinde;  
                      her adımda sizi destekleyen hafif bir zarafet sunar.
                    </p>
                  </div>
                ),
              },
            ]}
          />

        </div>

      </div>
    </section>
  );
};

export default TrendContent;
