"use client";

import React, { FC } from "react";

import Hero from "./components/Hero";
import IntroImages from "./components/highlight/IntroImages";
import ParallaxSection from "./components/section/ParallaxSection";
import SectionTitle from "./components/section/SectionTitle";
import TrendContent from "./components/section/TrendContent";
import ClosingSection from "./components/closing/ClosingSection";
import ModernContactSection from "./components/contact/ModernContactSection";
import Footer from "./components/Footer";



const Page: FC = () => {
  return (
    <main className="flex flex-col min-h-screen w-full bg-white overflow-x-hidden">

      {/* HERO */}
      <div className="pb-32 w-full">
        <Hero />
      </div>

      {/* INTRO IMAGES */}
      <div className="py-32 w-full">
        <IntroImages />
      </div>

      {/* GEÇİŞ */}
      <div className="h-32 w-full bg-white" />

      {/* PARALLAX 1 */}
      <ParallaxSection
        image="/assets/5.jpg"
        heightClass="min-h-[60vh]"
        overlay={30}
      >
        <SectionTitle
          title="All Day, Everyday"
          subtitle="Her Adımda Zarafet"
          light
        />
      </ParallaxSection>

      {/* GEÇİŞ */}
      <div className="h-40 w-full bg-white" />

      {/* TREND CONTENT */}
      <section className="py-32 w-full">
        <div className="container mx-auto px-4">
          <TrendContent />
        </div>
      </section>

      {/* GEÇİŞ */}
      <div className="h-40 w-full bg-white" />

      {/* PARALLAX 2 */}
      <ParallaxSection
        image="/assets/6.jpeg"
        heightClass="min-h-[60vh]"
        overlay={40}
      >
        <SectionTitle
          title="Yeni Trend"
          subtitle="Konfor, zarafet ve modern dokunuş."
          light
        />
      </ParallaxSection>

      {/* GEÇİŞ */}
      <div className="h-25 w-full bg-white" />

      {/* CLOSING SECTION */}
      <section className="py-32 w-full">
        <div className="container mx-auto px-4">
          <ClosingSection />
        </div>
      </section>

      {/* GEÇİŞ */}
      <div className="h-5 w-full bg-white" />

      {/* CONTACT SECTION */}
      <section className="py-32 w-full">
        <div className="container mx-auto px-4">
          <ModernContactSection />
        </div>
      </section>

      {/* GEÇİŞ */}
      <div className="h-1 w-full bg-white" />

      {/* FOOTER */}
      <footer className="w-full bg-[#212121] py-20">
        <div className="w-full px-20">
          <Footer />
        </div>
      </footer>

    </main>
  );
};

export default Page;
