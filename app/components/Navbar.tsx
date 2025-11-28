"use client";

import React, { FC, useState } from "react";
import { usePathname } from "next/navigation";

import NavbarBrand from "./navbarElements/NavbarBrand";
import NavbarDesktopLinks from "./navbarElements/NavbarDesktopLinks";
import NavbarIcons from "./navbarElements/NavbarIcons";
import NavbarMobileMenu from "./navbarElements/NavbarMobileMenu";

import AccountPanelLogin from "./navbar/AccountPanelLogin";
import AccountPanelRegister from "./navbar/AccountPanelRegister";

import { useCartStore } from "@/app/lib/store/cartStore"; // ⭐ EKLENDİ

const Navbar: FC = () => {
  const pathname = usePathname();

  // ⭐ HATA DTOĞRUSU — sadece bu satır değiştirildi
  const totalQuantity = useCartStore((state) => state.getTotal());

  const [open, setOpen] = useState<boolean>(false);
  const [showAccountMenu, setShowAccountMenu] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showRegister, setShowRegister] = useState<boolean>(false);
  const [firstTimeRegister, setFirstTimeRegister] = useState<boolean>(false);

  const openLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  const openRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
    setFirstTimeRegister(true);
  };

  const closeAllPanels = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/10 backdrop-blur">
      
      {/* MOBILE */}
      <nav className="container h-14 flex items-center justify-between md:hidden">
        {!open && (
          <button
            aria-label="Menüyü Aç"
            onClick={() => setOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/60 text-white"
          >
            <span className="block">☰</span>
          </button>
        )}
        <div onClick={() => setOpen(false)}>
          <NavbarBrand />
        </div>
      </nav>

      {/* DESKTOP */}
      <nav className="container h-14 hidden md:flex items-center justify-between">
        <NavbarBrand />

        <NavbarDesktopLinks
          showAccountMenu={showAccountMenu}
          setShowAccountMenu={setShowAccountMenu}
          openLogin={openLogin}
          openRegister={openRegister}
          firstTimeRegister={firstTimeRegister}
        />

        {/* ⭐ SEPET SAYISI BURAYA EKLENİYOR */}
        <NavbarIcons totalQuantity={totalQuantity} />
      </nav>

      <NavbarMobileMenu open={open} setOpen={setOpen} pathname={pathname} />

      {showLogin && (
        <AccountPanelLogin
          isOpen={showLogin}
          onClose={closeAllPanels}
          onOpenRegister={openRegister}
        />
      )}

      {showRegister && (
        <AccountPanelRegister
          isOpen={showRegister}
          onClose={closeAllPanels}
          onOpenLogin={openLogin}
        />
      )}
    </header>
  );
};

export default Navbar;
