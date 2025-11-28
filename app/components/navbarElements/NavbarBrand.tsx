"use client";

import React, { FC } from "react";
import Link from "next/link";

const NavbarBrand: FC = () => {
  return (
    <Link
      href="/"
      className="font-semibold tracking-wide text-white text-lg"
    >
      NARLA
    </Link>
  );
};

export default NavbarBrand;
