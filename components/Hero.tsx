import Image from "next/image";
import { Lightbulb } from "lucide-react";
import { GiSpikyExplosion } from "react-icons/gi";
20;
export default function Hero() {
  return (
    <section className="my-12 lg:my-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8  xl:gap-16">
      <div className="w-full lg:flex-1 relative">
        <Image
          src="/decorations/pink-star-rounded.svg"
          alt=""
          width={80}
          height={80}
        />
        <h1 className="text-[42px] leading-tight xl:text-[60px] 2xl:text-[80px] font-normal text-black font-space mb-6 lg:mb-8 relative z-10">
          I build top notch{" "}
          <span className="relative inline md:ml-2">
            webapps
            <span className="absolute bottom-2 lg:-bottom-1.5 left-0 right-0 h-4.5 lg:h-11 bg-yellow -z-10"></span>
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
            className="absolute -bottom-6 -right-8 lg:-bottom-8 lg:-right-12 w-10.25 h-11.75 lg:w-19 lg:h-22.25"
          />
        </div>
      </div>
      <div className="w-full lg:flex-1 relative mt-12 lg:mt-0">
        <div className="relative max-w-69 lg:max-w-lg mx-auto lg:mx-0">
          <Image
            src="/images/browser-mockup.svg"
            alt="Browser mockup"
            width={276}
            height={346}
            className="shadow-[-5px_6px_0px_rgba(0,0,0,0.44)] lg:shadow-[-9px_10px_0px_rgba(0,0,0,0.44)] w-full h-auto lg:w-[412px] lg:h-[412px]"
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
