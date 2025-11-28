"use client";

import { FC } from "react";
import { useAuth } from "@/app/lib/auth/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AccountHomePage: FC = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/");
    return null;
  }

  const userName =
    user.displayName || user.email?.split("@")[0] || "Kullanıcı";

  return (
    <section
      className="min-h-screen w-full flex justify-center items-start py-40!"
      style={{
        backgroundImage: "url('/assets/hesabim.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundPositionY: "-220px",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* BACKDROP ALANI DARALTILDI */}
      <div className="p-10! px-6! max-w-6xl w-full  backdrop-blur-xl rounded-2xl shadow-xl">

        {/* HEADER */}
        <h1 className="text-4xl md:text-5xl font-semibold text-narla-sand!">
          Hoş geldin {userName} 👋
        </h1>

        <p className="mt-4! text-lg text-black! max-w-xl">
          Hesabınla ilgili tüm bilgileri buradan yönetebilirsin.
        </p>

        {/* GRID MENÜLER */}
        <div className="mt-12! grid grid-cols-1 sm:grid-cols-2 gap-6!">
          <Link
            href="/account/profile"
            className="
              p-6! rounded-xl border border-narla-beige bg-white shadow 
              transition-all transform hover:scale-[1.03] hover:shadow-2xl
            "
          >
            <h2 className="font-semibold text-xl">Profil Bilgilerim</h2>
            <p className="text-gray-600 mt-2 text-sm">
              Kişisel bilgilerini görüntüle ve düzenle.
            </p>
          </Link>

          <Link
            href="/account/orders"
            className="
              p-6! rounded-xl border border-narla-beige bg-white shadow 
              transition-all transform hover:scale-[1.03] hover:shadow-2xl
            "
          >
            <h2 className="font-semibold text-xl">Siparişlerim</h2>
            <p className="text-gray-600 mt-2 text-sm">
              Geçmiş siparişlerini görüntüle.
            </p>
          </Link>

          <Link
            href="/account/addresses"
            className="
              p-6! rounded-xl border border-narla-beige bg-white shadow 
              transition-all transform hover:scale-[1.03] hover:shadow-2xl
            "
          >
            <h2 className="font-semibold text-xl">Adreslerim</h2>
            <p className="text-gray-600 mt-2 text-sm">
              Teslimat adreslerini güncelle.
            </p>
          </Link>

          <Link
            href="/account/cards"
            className="
              p-6! rounded-xl border border-narla-beige bg-white shadow 
              transition-all transform hover:scale-[1.03] hover:shadow-2xl
            "
          >
            <h2 className="font-semibold text-xl">Kayıtlı Kartlar</h2>
            <p className="text-gray-600 mt-2 text-sm">
              Ödeme yöntemlerini yönet.
            </p>
          </Link>
        </div>

        {/* LOGOUT */}
        <div className="flex items-center justify-end m-5!">
          <button
            onClick={logout}
            className="
              px-8! py-3! rounded-xl
              bg-red-500 hover:bg-red-700
              text-white font-semibold
              transition
            "
          >
            Çıkış Yap
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccountHomePage;
