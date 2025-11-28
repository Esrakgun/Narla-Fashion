"use client";

import { FC } from "react";

// Eğer Navbar ve Footer varsa import et
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

const SiteLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-white text-narla-black">
      {/* Navbar (istersen aç) */}
      {/* <Navbar /> */}

      <main className="relative z-0">
        {children}
      </main>

      {/* Footer (istersen aç) */}
      {/* <Footer /> */}
    </div>
  );
};

export default SiteLayout;
