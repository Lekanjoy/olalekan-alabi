import Image from "next/image";
import { Lightbulb } from "lucide-react";
import { GiSpikyExplosion } from "react-icons/gi";

export default function Hero() {
  return (
    <section className="my-12 lg:my-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-20 xl:gap-32">
      <div className="w-full lg:flex-1 relative">
        <Image
          src="/decorations/pink-star-rounded.svg"
          alt=""
          width={109}
          height={108}
          className="absolute -top-12 -left-4 lg:-top-50 lg:-left-20 w-[109px] h-[108px] lg:w-[205px] lg:h-[203px]"
        />
        <h1 className="text-[42px] leading-tight xl:text-[60px] 2xl:text-[80px] font-normal text-black font-space mb-6 lg:mb-8 relative z-10">
          I build top notch
          <span className="relative inline md:ml-2">
            websites
            <span className="absolute -bottom-1 lg:-bottom-2 left-0 right-0 h-[18px] lg:h-11 bg-yellow -z-10"></span>
          </span>
        </h1>
        <div className="relative inline-block">
          <button className="px-8 py-3 lg:px-16 lg:py-6 bg-light-blue rounded-full text-base lg:text-3xl font-bold text-black font-space border-[3px] lg:border-[5px] border-black shadow-[0px_8px_0px_rgba(0,0,0,0.25)] lg:shadow-[0px_16px_0px_rgba(0,0,0,0.25)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            See Portfolio
          </button>
          <Image
            src="/decorations/small-lines.svg"
            alt=""
            width={41}
            height={47}
            className="absolute -bottom-6 -right-8 lg:-bottom-8 lg:-right-12 w-[41px] h-[47px] lg:w-[76px] lg:h-[89px]"
          />
        </div>
      </div>
      <div className="w-full lg:flex-1 relative mt-12 lg:mt-0">
        <div className="relative max-w-[276px] lg:max-w-[512px] mx-auto lg:mx-0">
          <Image
            src="/images/browser-mockup.svg"
            alt="Browser mockup"
            width={276}
            height={346}
            className="shadow-[-5px_6px_0px_rgba(0,0,0,0.44)] lg:shadow-[-9px_10px_0px_rgba(0,0,0,0.44)] w-full h-auto lg:w-[512px] lg:h-[512px]"
          />
          {/* Lightbulb icon */}
          <div className="absolute top-[50px] lg:top-[100px] left-[25px] lg:left-[50px] w-12 h-12 lg:w-16 lg:h-16 bg-yellow rounded-full flex items-center justify-center border-[2px] lg:border-[3px] border-black">
            <Lightbulb className="w-6 h-6 lg:w-8 lg:h-8 text-black" />
          </div>
          {/* Smiley face */}
          <Image
            src="/icons/smiley-face.svg"
            alt="Smiley face"
            width={80}
            height={80}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] lg:w-[120px] lg:h-[120px]"
          />
          {/* Star decoration */}
          <GiSpikyExplosion className="absolute bottom-[50px] lg:bottom-[100px] right-[25px] lg:right-[50px] w-14 h-14 lg:w-20 lg:h-20 text-[#f87171]" />
        </div>
      </div>
    </section>
  );
}
