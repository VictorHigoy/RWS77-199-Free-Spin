import React from "react";
import { Noto_Sans_SC } from "next/font/google";
import Image from "next/image";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "900"],
});

export default function MiddleRow() {
  return (
    <div
      className="relative z-20 bg-no-repeat w-full flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/middleRow/middle-row-bg.svg')",
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      {" "}
      <div className="max-w-[1000px] w-full mx-auto">
        <div className="absolute -top-1 sm:top-0 left-[5%]">
          <Image
            alt="gem 2"
            width={100}
            height={100}
            src="/images/firstRow/gem-2.svg"
            className="h-auto w-[60px] sm:w-[60px] lg:w-[100px] relative z-10"
          />
        </div>

        <div className="mt-[18%] sm:mt-[16%] mb-[15%] flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 px-5 md:px-0">
            <h1
              className={`${notoSansSC.className} text-[20px] text-center sm:text-[24px] md:text-[28px] font-black text-[#161c6a]`}
              style={{ WebkitTextStroke: "0.5px #161c6a" }}
            >
              受到全球数百万玩家的信赖!
            </h1>
            <Image
              alt="Sponsors"
              width={600}
              height={600}
              src="/images/middleRow/sponsors.svg"
              className="h-auto"
            />
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 px-5 md:px-0">
            <h1
              className={`${notoSansSC.className} text-[28px] sm:text-[40px] md:text-[50px] font-black text-center text-[#161c6a]`}
              style={{ WebkitTextStroke: "0.5px #161c6a" }}
            >
              注册并获取199个免费旋转，您将有机会赢取 巨额大奖！
            </h1>
            <h2
              className={`${notoSansSC.className} text-[18px] mb-3 sm:mb-0 text-center sm:text-[22px] md:text-[26px] font-black text-center text-[#161c6a]`}
            >
              RWS77迄今已支付超过1,360万令吉的奖金！
            </h2>
            <div className="relative w-full max-w-[1000px] flex items-center justify-center">
              <Image
                alt="scatter icon"
                width={150}
                height={150}
                src="/images/middleRow/scatter.png"
                className="h-auto w-[17%] mt-[25%]"
              />
              <div className="flex flex-col mr-2 items-center -space-y-[3%] w-[66%]">
                <Image
                  alt="Phone Mockups"
                  width={660}
                  height={660}
                  src="/images/middleRow/phone-mockups.png"
                  className="h-auto w-full"
                />
                <button className="mt-1 w-[60%] cursor-pointer hover:scale-105 transition-all">
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
                alt="1000x icon"
                width={150}
                height={150}
                src="/images/middleRow/1000x.png"
                className="h-auto w-[17%] mb-[23%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
