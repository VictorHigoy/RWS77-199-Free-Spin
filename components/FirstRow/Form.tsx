import Image from "next/image";

export default function Form() {
  const inputClass =
    "placeholder:italic w-full text-black outline-none bg-white rounded-sm py-[clamp(8px,1.5vw,8px)] min-[440px]:py-[clamp(10px,1.5vw,8px)] sm:py-[clamp(6px,1vw,8px)] px-[clamp(8px,2vw,16px)] sm:px-[clamp(10px,1.5vw,16px)] text-[clamp(7px,2.5vw,11px)] sm:text-[clamp(8px,1.2vw,12px)] placeholder:text-[#4b4b4b] font-bold";

  return (
    <div className="mb-0 sm:-mb-5 sm:-mr-5 md:mb-10">
      <div className="relative w-full max-w-full sm:max-w-[500px]">
        <Image
          alt="form container"
          width={500}
          height={500}
          src="/images/firstRow/form.svg"
          className="h-auto max-h-[550px] sm:max-h-full"
        />
        <div className="absolute bottom-[11%] min-[876px]:bottom-[13%] left-1/2 -translate-x-1/2 space-y-[clamp(5px,1vw,4px)] md:space-y-[clamp(4px,0.8vw,9px)] w-[62%] sm:w-[58%]">
          <input type="text" className={inputClass} placeholder="USERNAME" />
          <input
            type="text"
            className={inputClass}
            placeholder="PHONE NUMBER"
          />
          <input type="text" className={inputClass} placeholder="PASSWORD" />
          <input
            type="text"
            className={inputClass}
            placeholder="CONFIRM PASSWORD"
          />
          <button className="mt-1 cursor-pointer w-full hover:scale-105 transition-all">
            <Image
              alt="199 free spin button"
              width={260}
              height={260}
              src="/images/firstRow/199fs-button.png"
              className="h-auto w-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
