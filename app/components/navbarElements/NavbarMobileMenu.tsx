"use client";

import React, { FC } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import clsx from "clsx";
import { NavItem } from "../../types/nav";
import { NAV_LINKS } from "../../lib/constants";

interface Props {
  open: boolean;
  setOpen: (v: boolean) => void;
  pathname: string;
}

const NavbarMobileMenu: FC<Props> = ({ open, setOpen, pathname }) => {
  if (!open) return null;

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 z-40 md:hidden"
        onClick={() => setOpen(false)}
      />

      {/* MOBILE SIDEBAR */}
      <div
        className="
          fixed inset-y-0 left-0
          w-[70%] max-w-[280px]
          z-50 shadow-xl h-screen!
          bg-[#212121]
          transform transition-transform duration-300
          translate-x-0 md:hidden p-2!
        "
      >
        {/* TOP BAR */}
        <div className="h-14 flex items-center justify-between">
          <button
            aria-label="Menüyü Kapat"
            onClick={() => setOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/60 text-white"
          >
            <X size={18} />
          </button>
          <span className="font-semibold text-white text-lg">NARLA</span>
        </div>

        {/* NAVIGATION LINKS */}
        <ul className="mt-6 flex flex-col gap-10 px-2 text-white h-dvh">
          {NAV_LINKS.map((item: NavItem) => {
            const active = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "block py-3 px-3 text-base rounded-md transition-all text-center",
                    "hover:bg-black hover:text-white",
                    active && "font-medium"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default NavbarMobileMenu;
