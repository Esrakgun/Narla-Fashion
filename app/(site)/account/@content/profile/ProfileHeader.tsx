"use client";

import { FC } from "react";
import Link from "next/link";

const ProfileHeader: FC = () => {
  return (
    <>
      <Link
        href="/account"
        className="text-narla-sand! underline hover:text-white!"
      >
        ← Hesabıma Dön
      </Link>

      <h1 className="mt-6! text-4xl md:text-5xl font-semibold text-narla-sand!">
        Profil Bilgilerim
      </h1>

      <p className="mt-3! text-white!">
        Kişisel bilgilerini buradan görüntüleyebilir ve düzenleyebilirsin.
      </p>
    </>
  );
};

export default ProfileHeader;
