import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="my-8 lg:my-14 mx-auto max-w-[733px] flex items-center justify-between px-4 lg:px-6 py-4 lg:py-5 bg-white border-[2px] lg:border-[5px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.25)] lg:shadow-[6px_6px_0px_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-2 lg:gap-4">
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
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        <a
          href="#about"
          className="text-lg lg:text-2xl font-medium text-black font-space hover:opacity-70 transition"
        >
          About //
        </a>
        <a
          href="#portfolio"
          className="text-lg lg:text-2xl font-medium text-black font-space relative hover:opacity-70 transition"
        >
          Portfolio
          <span className="absolute -bottom-2 left-0 right-0 h-2 lg:h-2.5 bg-yellow -z-10"></span>
        </a>
        <a
          href="#hire"
          className="text-lg lg:text-2xl font-medium text-black font-space hover:opacity-70 transition"
        >
          Hire Me
        </a>
      </div>
      {/* Mobile Menu Icon */}
      <button className="md:hidden p-2" aria-label="Menu">
        <div className="w-6 h-0.5 bg-black mb-1.5"></div>
        <div className="w-6 h-0.5 bg-black mb-1.5"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </button>
    </nav>
  );
}