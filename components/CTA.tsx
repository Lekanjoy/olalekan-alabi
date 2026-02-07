import Image from "next/image";

export default function CTA() {
  return (
    <section className="my-16 lg:my-32">
      <div className="relative max-w-md lg:max-w-5xl mx-auto p-8 lg:p-16 bg-white border-[2px] lg:border-[6px] border-black shadow-[5px_5px_0px_rgba(0,0,0,0.4)] lg:shadow-[21px_21px_0px_rgba(0,0,0,0.4)]">
        <Image
          src="/decorations/pink-star-rounded.svg"
          alt=""
          width={60}
          height={60}
          className="absolute -top-8 -right-8 lg:-top-12 lg:-right-12 lg:w-[100px] lg:h-[100px]"
        />
        <h2 className="text-lg lg:text-5xl font-medium text-black font-space text-center mb-4 lg:mb-6">
          Let&apos;s start building your project
        </h2>
        <p className="text-[13px] lg:text-3xl font-normal text-black font-space text-center mb-8 lg:mb-12 max-w-sm lg:max-w-none mx-auto">
          Want to see how to transform your brand into a unique style? Send us a
          message
        </p>
        <div className="flex justify-center relative">
          <a href="#contact" className="px-8 py-3 lg:px-16 lg:py-6 bg-light-blue rounded-full text-base lg:text-3xl font-bold text-black font-space border-[3px] lg:border-[5px] border-black hover:translate-x-1 hover:translate-y-1 transition-all">
            Send a Message
          </a>
          <Image
            src="/decorations/small-lines.svg"
            alt=""
            width={41}
            height={47}
            className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 lg:w-[76px] lg:h-[89px]"
          />
        </div>
      </div>
    </section>
  );
}
