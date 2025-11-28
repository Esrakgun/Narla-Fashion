"use client";

import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import EmailJSForm from "./EmailJSForm";

const ModernContactSection: FC = () => {
  const router = useRouter();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50 mt-20! mb-20!">
      <div className="max-w-7xl w-full bg-white/90 p-10! rounded-xl shadow-[0_10px_25px_rgba(115,85,60,0.6)] hover:shadow-[0_15px_35px_rgba(115,85,60,0.8)] transition-shadow duration-300 mt-20! mb-20!">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT TEXT + IMAGE */}
          <div className="lg:w-5/12 m-10!">
            <h3 className="text-3xl font-semibold mb-4! text-gray-900">Bize Ulaşın</h3>

            <p className="text-gray-700 leading-relaxed m-10">
              Bizimle iletişime geçmek oldukça kolay! İhtiyacınız olan her türlü
              destek için size yardımcı olmaktan memnuniyet duyarız. Sorularınızı, görüşlerinizi
              ya da önerilerinizi bizimle paylaşmak için aşağıdaki iletişim formunu kullanabilir ya da
              doğrudan e-posta adresimiz aracılığıyla ulaşabilirsiniz.
            </p>

            {/* 🟡 FOTOĞRAFA TIKLAYINCA ANASAYFA */}
            <div
              className="ml-10 mt-10! cursor-pointer"
              onClick={() => router.push("/")}
            >
              <Image
                src="/assets/contact.jpg"
                alt="Contact Illustration"
                width={500}
                height={900}
                className="rounded-lg shadow-md object-contain"
              />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:w-6/12">
            <EmailJSForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ModernContactSection;
