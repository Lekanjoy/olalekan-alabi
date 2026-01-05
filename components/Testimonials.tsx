import Image from "next/image";

const testimonials = [
  { id: 1, name: "Client First Name" },
  { id: 2, name: "Client Name" },
  { id: 3, name: "Client Name" },
  { id: 4, name: "Client Name" },
];

export default function Testimonials() {
  return (
    <section className="my-16 lg:my-32 relative">
      <div className="flex items-start gap-4 lg:gap-12 mb-8 lg:mb-16">
        <h2 className="text-2xl lg:text-5xl font-medium text-black font-space max-w-md lg:max-w-xl leading-tight">
          Here&apos;s what my clients are saying about my work
        </h2>
        <Image
          src="/decorations/new-badge.svg"
          alt="NEW!"
          width={31}
          height={31}
          className="shrink-0 lg:w-[67px] lg:h-[67px]"
        />
      </div>

      {/* Mobile: Stacked testimonials */}
      <div className="lg:hidden flex flex-col gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-6 bg-white border-[2px] border-black"
          >
            <p className="text-base font-medium text-black font-space mb-4">
              &quot;Design is a bridge that connects everyone and
              everything&quot;
            </p>
            <div className="flex items-center gap-3">
              <Image
                src={`https://i.pravatar.cc/48?u=client${testimonial.id}`}
                alt="Client"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-bold text-black font-space">
                  {testimonial.name}
                </p>
                <p className="text-xs font-medium text-black font-space opacity-70">
                  UX Designer, Company Name
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Overlapping testimonials */}
      <div className="hidden lg:block relative min-h-[800px]">
        <Image
          src="/images/testimonials-bg.svg"
          alt=""
          width={1234}
          height={814}
          className="w-full h-auto"
        />

        <div className="absolute top-12 left-12 max-w-md p-8 bg-white border-[3px] border-black transform -rotate-2">
          <p className="text-xl font-medium text-black font-space mb-6">
            &quot;Design is a bridge that connects everyone and
            everything&quot;
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="https://i.pravatar.cc/60?u=client1"
              alt="Client"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <p className="text-lg font-bold text-black font-space">
                Client First Name
              </p>
              <p className="text-base font-medium text-black font-space opacity-70">
                UX Designer, Company Name
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-12 right-12 max-w-md p-8 bg-white border-[3px] border-black transform rotate-1">
          <p className="text-xl font-medium text-black font-space mb-6">
            &quot;Design is a bridge that connects everyone and
            everything&quot;
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="https://i.pravatar.cc/60?u=client2"
              alt="Client"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <p className="text-lg font-bold text-black font-space">
                Client Name
              </p>
              <p className="text-base font-medium text-black font-space opacity-70">
                UX Designer, Company Name
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-32 left-12 max-w-md p-8 bg-white border-[3px] border-black transform -rotate-1">
          <p className="text-xl font-medium text-black font-space mb-6">
            &quot;Design is a bridge that connects everyone and
            everything&quot;
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="https://i.pravatar.cc/60?u=client3"
              alt="Client"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <p className="text-lg font-bold text-black font-space">
                Client Name
              </p>
              <p className="text-base font-medium text-black font-space opacity-70">
                UX Designer, Company Name
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 right-32 max-w-md p-8 bg-white border-[3px] border-black transform rotate-2">
          <p className="text-xl font-medium text-black font-space mb-6">
            &quot;Design is a bridge that connects everyone and
            everything&quot;
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="https://i.pravatar.cc/60?u=client4"
              alt="Client"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <p className="text-lg font-bold text-black font-space">
                Client Name
              </p>
              <p className="text-base font-medium text-black font-space opacity-70">
                UX Designer, Company Name
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}