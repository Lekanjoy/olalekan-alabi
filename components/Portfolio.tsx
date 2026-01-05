import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio" className="my-16 lg:my-32">
      <div className="flex items-center justify-center gap-4 lg:gap-6 mb-12 lg:mb-16">
        <h2 className="text-[40px] lg:text-[80px] font-normal text-black font-space relative leading-tight">
          My Portfolio
          <Image
            src="/decorations/underline.svg"
            alt=""
            width={177}
            height={7}
            className="absolute -bottom-1 lg:-bottom-2 left-0 w-[177px] h-[7px] lg:w-[358px] lg:h-[15px]"
          />
        </h2>
        <Image
          src="/decorations/blue-star.svg"
          alt=""
          width={80}
          height={79}
          className="lg:w-[161px] lg:h-[160px]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="relative group">
            <div className="border-[2px] lg:border-[5px] border-black p-4 lg:p-6 bg-white hover:translate-x-2 hover:translate-y-2 transition-transform">
              <div className="border-[2px] lg:border-4 border-black mb-4 lg:mb-6 overflow-hidden">
                <Image
                  src={`/images/portfolio-${item}.png`}
                  alt={`Portfolio project ${item}`}
                  width={273}
                  height={173}
                  className="w-full h-auto lg:w-[464px] lg:h-[293px]"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl lg:text-4xl font-bold text-black font-space mb-2 lg:mb-3">
                    Portfolio design
                  </h3>
                  <p className="text-[15px] lg:text-2xl font-medium text-black font-space">
                    UI design - User research -<br />
                    webflow develop
                  </p>
                </div>
                <button className="shrink-0 p-1 lg:p-2 hover:scale-110 transition-transform">
                  <Image
                    src="/icons/arrow-external.svg"
                    alt="View project"
                    width={16}
                    height={16}
                    className="lg:w-[27px] lg:h-[27px]"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
