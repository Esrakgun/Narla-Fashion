
import Image from "next/image";
import Navbar from "./Navbar";

const Hero: FC = () => (
  <section className="relative w-full min-h-screen md:min-h-[110vh]">
    <Navbar /> 
    <Image
      src="/assets/Banner.fotoreal.png"
      alt="Narla Banner"
      fill
      priority
      className="object-cover"
      />
  </section>
);
import React, { FC } from "react";
export default Hero; 







