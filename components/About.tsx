import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="my-16 lg:my-32">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="w-full lg:w-1/2 relative">
                    <div className="relative z-10 border-[5px] border-black shadow-brutal-lg overflow-hidden bg-white">
                        <Image
                            src="/images/about-me.png"
                            alt="Olalekan Alabi Illustration"
                            width={600}
                            height={600}
                            className="w-full h-auto"
                        />
                    </div>
                    {/* Decorative shapes */}
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow -z-10 border-[3px] border-black"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink -z-10 border-[3px] border-black rounded-full"></div>
                </div>

                <div className="w-full lg:w-1/2 text-left">
                    <h2 className="text-[40px] lg:text-[64px] font-bold text-black font-space mb-6 leading-tight">
                        I’m a <span className="bg-light-blue px-2">engineer</span>
                    </h2>
                    <p className="text-xl lg:text-2xl font-medium text-black font-space mb-8 leading-relaxed">
                        I&apos;ve spent the last 2 years learning and working in high-stakes industries like Fintech and Foodtech, I specialize in engineering digital products that balance technical precision with bold design.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-4 h-4 bg-yellow border-2 border-black"></div>
                            <p className="text-lg lg:text-xl font-bold font-space">User-Centric Design</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-4 h-4 bg-pink border-2 border-black"></div>
                            <p className="text-lg lg:text-xl font-bold font-space">Performance Focused Code</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-4 h-4 bg-light-blue border-2 border-black"></div>
                            <p className="text-lg lg:text-xl font-bold font-space">Scalable Architecture</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
