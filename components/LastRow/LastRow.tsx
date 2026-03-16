import React from "react";
import { Noto_Sans_SC } from "next/font/google";
import Image from "next/image";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "900"],
});

export default function LastRow() {
  return (
    <div className="relative">
      {/* coins outside the clipped div so they don't get cut */}
      <Image
        alt="coin 1"
        width={150}
        height={150}
        src="/images/lastRow/coin-1.png"
        className="h-auto w-[80px] sm:w-[100px] lg:w-[150px] absolute -top-5 z-40 right-5 sm:right-20"
      />

      <div
        className="relative z-20 bg-no-repeat w-full flex items-center -mt-14 md:-mt-16 justify-center"
        style={{
          backgroundImage: "url('/images/lastRow/lastRowBg.svg')",
          backgroundPosition: "top center",
          backgroundSize: "cover",
          clipPath: "ellipse(150% 100% at 50% 100%)",
        }}
      >
        <div className="mt-20 mb-10 space-y-8">
          <h1
            className={`${notoSansSC.className} text-[22px] text-center sm:text-[26px] md:text-[30px] font-black text-white`}
          >
            您可以成为 <span className="text-[#e4ff00]">百万富翁</span>{" "}
            像他们一样！
          </h1>
          <div className="relative w-full lg:min-w-[1000px] gap-5 lg:gap-0 lg:pr-20 flex items-center justify-center">
            <Image
              alt="coin 2"
              width={200}
              height={200}
              src="/images/lastRow/coin-2.png"
              className="h-auto w-[15%] lg:mr-20 sm:w-[23%] -mt-[30%]"
            />

            <div className="flex  flex-col items-center space-y-[3%] w-[120%]">
              <Image
                alt="Winners"
                width={700}
                height={700}
                src="/images/lastRow/Winners.png"
                className="h-auto w-full"
              />
              <button className="mt-1 w-[65%] cursor-pointer hover:scale-105 transition-all">
                <Image
                  alt="199 free spin button"
                  width={400}
                  height={400}
                  src="/images/firstRow/199fs-button.png"
                  className="h-auto w-full"
                />
              </button>
            </div>

            <Image
              alt="coin 3"
              width={200}
              height={200}
              src="/images/lastRow/coin-3.png"
              className="h-auto w-[15%] sm:w-[23%] -mb-[40%] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
