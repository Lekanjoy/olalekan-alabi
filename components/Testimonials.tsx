import Image from "next/image";

const testimonials = [
  { id: 1, name: "Joshua", title: "CEO, Gohangers" },
  { id: 3, name: "Emmanuel", title: "CEO, Tourgrin" },
  { id: 4, name: "Olakunle", title: "Co-founder, Swapspace " },
  { id: 2, name: "Juliet", title: "Project Manager, Gohangers" },
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

      {/* Mobile: Stacked testimonials with rotations and shadows */}
      <div className="md:hidden flex flex-col gap-4">
        <div className="p-6 bg-white border-[2px] border-black transform -rotate-2 shadow-[8px_8px_0px_rgba(0,0,0,0.1)]">
          <p className="text-base font-medium text-black font-space mb-4">
            &quot;Design is a bridge that connects everyone and everything&quot;
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="https://i.pravatar.cc/48?u=client1"
              alt="Client"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-bold text-black font-space">
                {testimonials[0].name}
              </p>
              <p className="text-xs font-medium text-black font-space opacity-70">
                {testimonials[0].title}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white border-[2px] border-black transform rotate-1 shadow-[8px_8px_0px_rgba(0,0,0,0.1)]">
          <p className="text-base font-medium text-black font-space mb-4">
            &quot;Design is a bridge that connects everyone and everything&quot;
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="https://i.pravatar.cc/48?u=client2"
              alt="Client"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-bold text-black font-space">
                {testimonials[1].name}
              </p>
              <p className="text-xs font-medium text-black font-space opacity-70">
                {testimonials[1].title}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white border-[2px] border-black transform -rotate-1 shadow-[8px_8px_0px_rgba(0,0,0,0.1)]">
          <p className="text-base font-medium text-black font-space mb-4">
            &quot;Design is a bridge that connects everyone and everything&quot;
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="https://i.pravatar.cc/48?u=client3"
              alt="Client"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-bold text-black font-space">
                {testimonials[2].name}
              </p>
              <p className="text-xs font-medium text-black font-space opacity-70">
                {testimonials[2].title}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white border-[2px] border-black transform rotate-2 shadow-[8px_8px_0px_rgba(0,0,0,0.1)]">
          <p className="text-base font-medium text-black font-space mb-4">
            &quot;Design is a bridge that connects everyone and everything&quot;
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="https://i.pravatar.cc/48?u=client4"
              alt="Client"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-bold text-black font-space">
                {testimonials[3].name}
              </p>
              <p className="text-xs font-medium text-black font-space opacity-70">
                {testimonials[3].title}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Grid-based testimonials with scattered effect */}
      <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        <div className="p-6 lg:p-8 bg-white border-[3px] border-black transform -rotate-2">
          <p className="text-lg lg:text-xl font-medium text-black font-space mb-6">
            &quot;Design is a bridge that connects everyone and everything&quot;
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
              <p className="text-base lg:text-lg font-bold text-black font-space">
                {testimonials[0].name}
              </p>
              <p className="text-sm lg:text-base font-medium text-black font-space opacity-70">
                {testimonials[0].title}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 lg:p-8 bg-white border-[3px] border-black transform rotate-1">
          <p className="text-lg lg:text-xl font-medium text-black font-space mb-6">
            &quot;Design is a bridge that connects everyone and everything&quot;
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
              <p className="text-base lg:text-lg font-bold text-black font-space">
                {testimonials[1].name}
              </p>
              <p className="text-sm lg:text-base font-medium text-black font-space opacity-70">
                {testimonials[1].title}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 lg:p-8 bg-white border-[3px] border-black transform -rotate-1">
          <p className="text-lg lg:text-xl font-medium text-black font-space mb-6">
            &quot;Design is a bridge that connects everyone and everything&quot;
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
              <p className="text-base lg:text-lg font-bold text-black font-space">
                {testimonials[2].name}
              </p>
              <p className="text-sm lg:text-base font-medium text-black font-space opacity-70">
                {testimonials[2].title}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 lg:p-8 bg-white border-[3px] border-black transform rotate-2">
          <p className="text-lg lg:text-xl font-medium text-black font-space mb-6">
            &quot;Design is a bridge that connects everyone and everything&quot;
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
              <p className="text-base lg:text-lg font-bold text-black font-space">
                {testimonials[3].name}
              </p>
              <p className="text-sm lg:text-base font-medium text-black font-space opacity-70">
                {testimonials[3].title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
