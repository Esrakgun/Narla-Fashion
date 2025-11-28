"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

export default function AccountLayout({
  children,
  content,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
}) {
  const pathname = usePathname();

  // Üstteki BAŞLIK
  const pageTitle =
    pathname === "/account"
      ? "Hesabım"
      : pathname === "/account/profile"
        ? "Profilim"
        : pathname === "/account/addresses"
          ? "Adreslerim"
          : pathname === "/account/orders"
            ? "Siparişlerim"
            : pathname === "/account/cards"
              ? "Kartlarım"
              : "Profilim";

  // Sol menü BAŞLIĞIN TERSİ (sadece profil & hesap için)
  const sideTitle =
    pathname === "/account/profile"
      ? "Profilim"
      : pathname === "/account"
        ? "Hesabım"
        : pageTitle;

  return (
    <section
      className="min-h-screen w-full flex z-[-1000]"
      style={{
        backgroundImage: "url('/assets/hesabim.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* SOL MENÜ */}
      <aside className="w-64 min-h-screen bg-white/60 backdrop-blur-md p-6! shadow-xl hidden md:block">
        <h2 className="text-2xl font-semibold mb-6! text-narla-black">
          {sideTitle}
        </h2>

        <ul className="flex flex-col gap-4 text-lg">
          {/* PROFİL sayfasındayken → sadece Hesabım göster */}
          {pathname === "/account/profile" && (
            <li>
              <Link href="/account" className="hover:underline block">
                Hesabım
              </Link>
            </li>
          )}
          {/* HESABIM sayfasındayken → sadece Profilim göster */}
          {pathname === "/account" && (
            <li>
              <Link href="/account/profile" className="hover:underline block">
                Profilim
              </Link>
            </li>
          )}
          {/* ORTAK MENÜLER */}
          <li>
            <Link href="/account/addresses" className="hover:underline block">
              Adreslerim
            </Link>
          </li>

          <li>
            <Link href="/account/orders" className="hover:underline block">
              Siparişlerim
            </Link>
          </li>

          <li>
            <Link href="/account/cards" className="hover:underline block">
              Kartlarım
            </Link>
          </li>

          {/* 🔙 ANA SAYFAYA GERİ DÖN */}
          <Link
            href="/"
            className="flex items-center gap-2 mb-6! text-narla-black hover:underline"
          >
            <span className="text-2xl">←</span>

          </Link>
        </ul>
      </aside>

      {/* ANA İÇERİK */}
      <main
        className="
    flex-1 
    mt-10!
    p-10 
    mx-auto! 
    max-w-[1100px]

    /* 780 – 850 px → düzeltme */
    [@media(min-width:780px) and (max-width:850px)]:px-20
    [@media(min-width:780px) and (max-width:850px)]:max-w-[900px]

    /* 1020 – 1026 px → düzeltme */
    [@media(min-width:1020px) and (max-width:1026px)]:px-24
    [@media(min-width:1020px) and (max-width:1026px)]:max-w-[950px]

    /* 1026 – 1080 px → düzeltme */
    [@media(min-width:1026px) and (max-width:1080px)]:px-32
    [@media(min-width:1026px) and (max-width:1080px)]:max-w-[980px]
  "
      >
        {content}
      </main>

    </section>
  );
}
