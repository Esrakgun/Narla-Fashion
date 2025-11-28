"use client";

import AddressForm from "./AddressForm";
import AddressList from "./AddressList";

export default function AddressesPage() {
  return (
    <section className="min-h-screen w-full py-20! px-6! flex justify-center">
      <div
        className="
          w-full max-w-3xl 
          backdrop-blur-xl
          p-10! rounded-3xl shadow-xl
          border border-white/20
        "
      >
        {/* BAŞLIK */}
   
          <h1 className="text-4xl font-semibold text-narla-black">
            Adreslerim
          </h1>

          <p className="mt-3 text-gray-700 text-lg">
            Yeni adres ekleyebilir veya mevcut adreslerini görüntüleyebilirsin.
          </p>
       

        {/* FORM */}
        <AddressForm />

        {/* LİSTE */}
        <div className="mt-12">
          <AddressList />
        </div>
      </div>
    </section>
  );
}
