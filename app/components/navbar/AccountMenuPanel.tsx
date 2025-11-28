"use client";

import React, { FC } from "react";
import "@/app/styles/dropdown.css";
import { useAuth } from "@/app/lib/auth/AuthContext";
import { useRouter } from "next/navigation";

interface AccountMenuPanelProps {
  isLoggedIn: boolean;
  isFirstTimeRegister: boolean;
  onLogin: () => void;
  onRegister: () => void;
}

const AccountMenuPanel: FC<AccountMenuPanelProps> = ({
  isLoggedIn,
  isFirstTimeRegister,
  onLogin,
  onRegister,
}) => {
  const { logout } = useAuth();
  const router = useRouter();

  const goAccount = () => router.push("/account");
  const goProfile = () => router.push("/account/profile");
  const goOrders = () => router.push("/account/orders");
  const goAddresses = () => router.push("/account/addresses");
  const goCards = () => router.push("/account/cards");
  const goWishlist = () => router.push("/wishlist");

  const handleLogout = async () => {
    await logout();

    // ⭐ LOGOUT → UID temizleme
    localStorage.removeItem("uid");

    router.push("/");
  };

  return (
    <div
      className="
        absolute top-full left-0
        w-64 rounded-xl shadow-xl
        bg-narla-rose/95 backdrop-blur-md
        border border-narla-sand/40
        narla-dropdown
        overflow-hidden p-5!
        z-50
      "
    >
      <ul className="flex flex-col text-sm select-none">
        {!isLoggedIn && (
          <li
            className="px-4 py-3 text-narla-sand font-medium cursor-pointer hover:bg-narla-black hover:text-white transition-all"
            onClick={onLogin}
          >
            Giriş Yap / Kaydol
          </li>
        )}

        {isLoggedIn && (
          <li
            className="px-4 py-3 text-narla-sand cursor-pointer font-medium hover:bg-narla-black hover:text-white transition-all"
            onClick={isFirstTimeRegister ? goAccount : goProfile}
          >
            {isFirstTimeRegister ? "Hesabım" : "Profilim"}
          </li>
        )}

        {/* <li className="px-4 py-3 text-narla-sand cursor-pointer hover:bg-narla-black hover:text-white transition-all">
          Narla Lover
        </li> */}

        {isLoggedIn && (
          <li
            className="px-4 py-3 text-narla-sand cursor-pointer hover:bg-narla-black hover:text-white transition-all"
            onClick={goOrders}
          >
            Siparişlerim
          </li>
        )}

        <li
          className="px-4 py-3 text-narla-sand cursor-pointer hover:bg-narla-black hover:text-white transition-all"
          onClick={goAddresses}
        >
          Adreslerim
        </li>

        <li
          className="px-4 py-3 text-narla-sand cursor-pointer hover:bg-narla-black hover:text-white transition-all"
          onClick={goCards}
        >
          Kartlarım
        </li>

        <li
          className="px-4 py-3 text-narla-sand cursor-pointer hover:bg-narla-black hover:text-white transition-all"
          onClick={goWishlist}
        >
          İstek Listem
        </li>

        {isLoggedIn && (
          <li
            className="px-4 py-3 text-narla-sand cursor-pointer font-medium hover:bg-narla-black hover:text-white transition-all"
            onClick={handleLogout}
          >
            Çıkış Yap
          </li>
        )}
      </ul>
    </div>
  );
};

export default AccountMenuPanel;
