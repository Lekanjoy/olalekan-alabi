"use client";
import { Send, CheckCircle, X } from "lucide-react";
import { useState } from "react";

export default function Contact() {

    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const formData = new FormData(e.target as HTMLFormElement);
            formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                (e.target as HTMLFormElement).reset();
                setIsVisible(true);
            }
        } catch (error) {
            console.error("Form submission error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCloseClick = () => {
        setIsVisible(false);
    };

    return (
        <section id="contact" className="my-16 lg:my-32 relative">
            <div className="bg-pink/60 border-[5px] border-black p-8 lg:p-16 shadow-brutal-lg">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="w-full lg:w-1/3">
                        <h2 className="text-[40px] lg:text-[56px] font-bold text-black font-space mb-6 leading-tight">
                            Let&apos;s build
                        </h2>
                        <p className="text-xl font-medium font-space mb-8">
                            Have a project in mind? Or just want to say hi? Feel free to reach out. I&apos;m always open to new opportunities!
                        </p>
                        <div className="space-y-2">
                            <p className="text-lg font-bold font-space uppercase tracking-wider">Email me</p>
                            <a href="mailto:alabilekanemmanuel@gmail.com" className="text-xl font-bold font-space border-b-2 border-black hover:bg-white transition-colors">
                                alabilekanemmanuel@gmail.com
                            </a>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="w-full lg:w-2/3 flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-lg font-bold font-space">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    className="p-4 bg-white border-[3px] border-black text-xl font-medium font-space focus:outline-none focus:shadow-[4px_4px_0px_#000] focus:-translate-x-1 focus:-translate-y-1 transition-all"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-lg font-bold font-space">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    className="p-4 bg-white border-[3px] border-black text-xl font-medium font-space focus:outline-none focus:shadow-[4px_4px_0px_#000] focus:-translate-x-1 focus:-translate-y-1 transition-all"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="subject" className="text-lg font-bold font-space">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="How can I help you?"
                                className="p-4 bg-white border-[3px] border-black text-xl font-medium font-space focus:outline-none focus:shadow-[4px_4px_0px_#000] focus:-translate-x-1 focus:-translate-y-1 transition-all"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-lg font-bold font-space">Message</label>
                            <textarea
                                name="message"
                                rows={4}
                                placeholder="Tell me about your project..."
                                className="p-4 bg-white border-[3px] border-black text-xl font-medium font-space focus:outline-none focus:shadow-[4px_4px_0px_#000] focus:-translate-x-1 focus:-translate-y-1 transition-all resize-none"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="mt-4 flex items-center justify-center gap-3 bg-black text-white p-6 text-2xl font-bold font-space border-[3px] border-black hover:bg-yellow hover:text-black transition-all shadow-[6px_6px_0px_rgba(0,0,0,0.25)]"
                            disabled={isLoading}
                        >
                            {isLoading ? "Sending..." : "Send Message"} <Send className="w-6 h-6" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Success Modal */}
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white border-[5px] border-black p-8 lg:p-12 max-w-md w-full shadow-[20px_20px_0px_#000] relative animate-in zoom-in-95 duration-300">
                        <button
                            onClick={handleCloseClick}
                            className="absolute top-4 right-4 p-2 hover:bg-cream border-2 border-transparent hover:border-black transition-all"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-yellow border-[3px] border-black rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0px_#000]">
                                <CheckCircle className="w-10 h-10 text-black" />
                            </div>

                            <h3 className="text-3xl lg:text-4xl font-bold font-space mb-4">Message Sent!</h3>
                            <p className="text-xl font-medium font-space text-gray-700 mb-8">
                                Thanks for reaching out! I&apos;ll get back to you as soon as possible.
                            </p>

                            <button
                                onClick={handleCloseClick}
                                className="w-full bg-light-blue py-4 text-xl font-bold font-space border-[3px] border-black shadow-[6px_6px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                            >
                                Awesome!
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
