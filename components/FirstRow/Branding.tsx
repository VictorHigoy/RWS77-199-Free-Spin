import Image from "next/image";
import React from "react";
import MiddleRow from "../MiddleRow/MiddleRow";

export default function Branding() {
  return (
    <div className="flex flex-col -mt-6 sm:-mt-7 items-center  relative z-20">
      <Image
        alt="pragmatic play logo"
        width={170}
        height={138}
        src="/images/firstRow/pragmatic-play-logo.svg"
        className="h-auto w-[28%] translate-y-[70%]"
      />
      <div className="relative -z-10 w-full max-w-full  sm:max-w-[600px]">
        <Image
          alt="GOO and Louis"
          width={600}
          height={600}
          src="/images/firstRow/goo-and-louis.svg"
          className="w-full h-auto z-20"
        />
        <div className="w-[83%] absolute bottom-3 left-1">
          <Image
            alt="goo logo"
            width={500}
            height={500}
            src="/images/firstRow/goo-logo.svg"
            className="relative z-20 h-auto"
          />
        </div>
        <Image
          alt="gem 1"
          width={100}
          height={100}
          src="/images/firstRow/gem-1.png"
          className="h-auto w-[17%] absolute bottom-[6%] right-[6%]"
        />
        <Image
          alt="1000x"
          width={115}
          height={115}
          src="/images/firstRow/1000x.svg"
          className="h-auto w-[19%] absolute top-[8%] left-[1%]"
        />
        {/* <div className="w-[17%] absolute -bottom-[6%] left-[2%]">
          <Image
            alt="gem 2"
            width={100}
            height={100}
            src="/images/firstRow/gem-2.svg"
            className="h-auto relative z-10"
          />
        </div> */}
      </div>
    </div>
  );
}
