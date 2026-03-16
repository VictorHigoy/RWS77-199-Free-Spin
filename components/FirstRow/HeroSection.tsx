import Image from "next/image";
import React from "react";
import Branding from "./Branding";
import Form from "./Form";
import MiddleRow from "../MiddleRow/MiddleRow";
import { Noto_Sans_SC } from "next/font/google";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "900"],
});
export default function HeroSection() {
  return (
    <div
      className="relative -mb-[7.5%] md:-mb-[8.5%] lg:-mb-[7%] xl:-mb-[5.8%] bg-no-repeat overflow-hidden bg-cover bg-top flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/firstRow/hero-bg.svg')",
      }}
    >
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10" />
      {/* bottom */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10" />
      {/* left */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black/60 to-transparent pointer-events-none z-10" />
      {/* right */}
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black/60 to-transparent pointer-events-none z-10" />
      <div className="z-20 flex flex-col justify-center w-screen sm:flex-row items-center sm:items-start max-w-[1500px] -space-y-[11%] min-[492px]:-space-y-13 sm:space-y-0 sm:-space-x-[7%] lg:-space-x-[5%] mx-auto">
        <Branding />
        <Form />
      </div>
    </div>
  );
}
