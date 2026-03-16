import Image from "next/image";
import React from "react";
import { Noto_Sans_SC } from "next/font/google";
import Link from "next/link";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Header({
  setRemoveHeader,
}: {
  setRemoveHeader: (value: boolean) => void;
}) {
  return (
    <div className=" w-screen bg-white py-3.5 px-5 sm:px-8 xl:px-30">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            alt="sponsor"
            width={172}
            height={90}
            src="/images/firstRow/sponsor.svg"
            className="w-[50px] sm:w-[70px] md:w-[100px]"
          />
          <p
            className={`${notoSansSC.className} text-black text-[8px] sm:text-[12px]   tracking-widest uppercase`}
          >
            Looking for our homepage?
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={"/"}
            className={`${notoSansSC.className} hover:scale-105 transition-all cursor-pointer text-[8px] sm:text-[12px]  text-white bg-[#1778e1] px-5 sm:px-7 md:px-10  py-2.5 sm:py-3 rounded-lg tracking-widest uppercase`}
          >
            Entering <span className="font-bold">RWS77</span>
          </Link>
          <button
            onClick={() => setRemoveHeader(true)}
            className="group cursor-pointer"
          >
            <p className="text-[12px] group-hover:text-gray-700 group-hover:scale-105 transition-all text-black">
              X
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
