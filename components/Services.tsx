import Image from "next/image";

const services = [
  {
    icon: "/icons/star-service.svg",
    iconSize: { width: 31, height: 27, lgWidth: 43, lgHeight: 37 },
    bgColor: "bg-yellow",
    title: "User Research",
  },
  {
    icon: "/icons/hash-service.svg",
    iconSize: { width: 35, height: 40, lgWidth: 48, lgHeight: 55 },
    bgColor: "bg-[#c084fc]",
    title: "Wireframing",
  },
  {
    icon: "/icons/heart-service.svg",
    iconSize: { width: 22, height: 33, lgWidth: 30, lgHeight: 44 },
    bgColor: "bg-[#f87171]",
    title: "UI Designing",
  },
  {
    icon: "/icons/star-blue-service.svg",
    iconSize: { width: 34, height: 28, lgWidth: 46, lgHeight: 39 },
    bgColor: "bg-light-blue",
    title: "Prototyping",
  },
];

export default function Services() {
  return (
    <section className="my-16 lg:my-32">
      <div className="flex items-start gap-3 lg:gap-4 mb-8 lg:mb-12">
        <h2 className="text-2xl lg:text-5xl font-medium text-black font-space max-w-xl lg:max-w-2xl leading-tight">
          Services we&apos;re providing that derive 99% result
        </h2>
        <Image
          src="/icons/smiley-face-small.svg"
          alt="Smiley"
          width={58}
          height={58}
          className="shrink-0 lg:w-[73px] lg:h-[68px]"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] border-y-[2px] lg:border-y-[3px] border-black">
        {/* Stats Column */}
        <div className="border-r-0 lg:border-r-[2px] lg:border-r-[3px] border-black">
          <div className="p-6 lg:p-10 border-b-[2px] lg:border-b-[3px] border-black">
            <p className="text-[34px] lg:text-5xl font-medium text-black font-space mb-1">
              39
            </p>
            <p className="text-base lg:text-2xl font-medium text-black font-space">
              Projects
            </p>
          </div>
          <div className="p-6 lg:p-10">
            <p className="text-[34px] lg:text-5xl font-medium text-black font-space mb-1">
              100k+
            </p>
            <p className="text-base lg:text-2xl font-medium text-black font-space">
              generated
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`p-6 lg:p-10 ${
                index < services.length - 1
                  ? "border-b-[2px] lg:border-b-[3px] border-black"
                  : ""
              }`}
            >
              <div
                className={`flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 ${service.bgColor} rounded-full mb-4 lg:mb-6`}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={service.iconSize.width}
                  height={service.iconSize.height}
                  className={`lg:w-[${service.iconSize.lgWidth}px] lg:h-[${service.iconSize.lgHeight}px]`}
                />
              </div>
              <h3 className="text-[26px] lg:text-4xl font-bold text-black font-space mb-3 lg:mb-4">
                {service.title}
              </h3>
              <p className="text-base lg:text-2xl font-medium text-black font-space mb-4 lg:mb-6">
                Services we&apos;re providing that derive 99% result
              </p>
              <a
                href="#"
                className="text-[26px] lg:text-4xl font-medium text-black font-space hover:underline"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}