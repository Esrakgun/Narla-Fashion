"use client";

import React, { FC } from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-[#212121]! text-white! pt-16 pb-10 mt-15!">
      <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row md:justify-between gap-12">
        {/* About Us */}
        <div className="md:w-1/2">
          <h5 className="text-lg font-semibold mb-4 tracking-wide mt-5! text-white! ">
            HAKKIMIZDA
          </h5>
          <p className="text-sm leading-relaxed mt-2 text-white! ">
            NARLA olarak, her kadının kendini zarif, özgüvenli ve rahat
            hissetmeye hakkı olduğuna inanıyoruz. Amacımız, özenle tasarlanmış
            çorap koleksiyonumuzla her adımınızda stil, kalite ve lüksü bir
            araya getirmektir. İster yoğun bir iş gününe, ister özel bir geceye
            hazırlanıyor olun, isterse sadece kendinizi şımartmak isteyin,
            tasarımlarımız her anınızı zarafet ve konforla taçlandırır. Farklı
            dokular, desenler ve renk seçenekleriyle, ürünlerimiz her yaştan
            kadının ihtiyaçlarına hitap etmektedir. NARLA ile her adımda
            güzelliği kutlayın – burada stil ve konfor birleşiyor, her kadın
            parlıyor.
          </p>
        </div>

        {/* Connect Us */}{" "}
        <div className="md:pl-12">
          {" "}
          <h5 className="text-lg text-white! font-semibold mb-4 tracking-wide mt-5!">
            {" "}
            İLETİŞİM{" "}
          </h5>{" "}
          {/* Çalışma Saatleri */}{" "}
          <div className="mb-4 text-white! ">
            {" "}
            <p className="text-white! font-medium">Çalışma Saatlerimiz:</p>{" "}
            <p className="text-sm text-white!">
              {" "}
              Pazartesi – Cuma: 09:00 – 18:00 <br /> Cumartesi: 10:00 – 16:00{" "}
              <br /> Pazar: Kapalı{" "}
            </p>{" "}
          </div>{" "}
          <ul className="flex flex-col gap-6 mt-5!">
            {" "}
            <li>
              {" "}
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-pink-300 transition-transform transform hover:scale-110 flex items-center gap-2"
              >
                {" "}
                <Facebook size={22} /> Facebook{" "}
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-300 transition-transform transform hover:scale-110 flex items-center gap-2"
              >
                {" "}
                <Instagram size={22} /> Instagram{" "}
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-pink-300 transition-transform transform hover:scale-110 flex items-center gap-2"
              >
                {" "}
                <Twitter size={22} /> Twitter{" "}
              </a>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
      {/* Copyright */}{" "}
      <div className="mt-14! mb-5 text-sm">
        {" "}
        <p className="text-white! text-center">
          {" "}
          &copy; {new Date().getFullYear()} Esra Akgündoğdu tarafından
          hazırlandı. Tüm hakları saklıdır.{" "}
        </p>{" "}
      </div>{" "}
    </footer>
  );
};
export default Footer;
