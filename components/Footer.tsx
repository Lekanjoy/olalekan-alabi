import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t-[3px] lg:border-t-[6px] border-black mt-16 lg:mt-32">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-24 xl:px-32 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-8">
          <div className="flex items-center gap-2 lg:gap-4 order-1 lg:order-1">
            <Image
              src="/icons/star-logo.svg"
              alt="znis logo"
              width={30}
              height={30}
              className="lg:w-[49px] lg:h-[49px]"
            />
            <span className="text-2xl lg:text-4xl font-normal text-black font-space">
              Olalekan
            </span>
          </div>
          <p className="text-xl lg:text-3xl font-medium text-black font-space order-3 lg:order-2">
            Portfolio 2026
          </p>
          <div className="flex items-center gap-12 lg:gap-16 order-2 lg:order-3">
            <a href="#" className="hover:opacity-70 transition">
              <Image
                src="/icons/dribbble.svg"
                alt="Dribbble"
                width={28}
                height={28}
                className="lg:w-[40px] lg:h-[40px]"
              />
            </a>
            <a href="#" className="hover:opacity-70 transition">
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={29}
                height={29}
                className="lg:w-[40px] lg:h-[40px]"
              />
            </a>
            <a href="#" className="hover:opacity-70 transition">
              <Image
                src="/icons/x-twitter.svg"
                alt="X (Twitter)"
                width={28}
                height={29}
                className="lg:w-[40px] lg:h-[40px]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}