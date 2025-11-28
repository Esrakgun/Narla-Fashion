"use client";

import React, { FC } from "react";
import Link from "next/link";
import clsx from "clsx";
import { NavItem } from "../../types/nav";
import { NAV_LINKS } from "../../lib/constants";
import AccountMenuPanel from "../navbar/AccountMenuPanel";
import { usePathname } from "next/navigation";
import { useAuth } from "@/app/lib/auth/AuthContext";

interface Props {
  showAccountMenu: boolean;
  setShowAccountMenu: (v: boolean) => void;
  openLogin: () => void;
  openRegister: () => void;
  firstTimeRegister: boolean;
}

const NavbarDesktopLinks: FC<Props> = ({
  showAccountMenu,
  setShowAccountMenu,
  openLogin,
  openRegister,
  firstTimeRegister,
}) => {
  const pathname = usePathname();
  const { user } = useAuth();

  return (
    <ul className="flex items-center gap-6">
      {NAV_LINKS.map((item: NavItem) => {
        const active = pathname === item.href;
        const isHome = item.name.toLowerCase() === "anasayfa";

        return (
          <li
            key={item.href}
            className="relative"
            onMouseEnter={() => isHome && setShowAccountMenu(true)}
            onMouseLeave={() => isHome && setShowAccountMenu(false)}
          >
            <Link
              href={item.href}
              className={clsx(
                "text-sm text-white transition-colors",
                active && "font-medium",
                "hover:text-narla-rose"
              )}
            >
              {item.name}
            </Link>

            {/* ▼ Account Menu ▼ */}
            {isHome && showAccountMenu && (
              <AccountMenuPanel
                isLoggedIn={!!user}
                onLogin={openLogin}
                onRegister={openRegister}
                isFirstTimeRegister={firstTimeRegister}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarDesktopLinks;
