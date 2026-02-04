import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ServerMotion } from "@/components/motion";
import Image from "next/image";
import SearchBar from "../SearchBar";

export default async function HeroSection() {
    const t = await getTranslations("hero");

    return (
        <section
            className="relative min-h-screen pt-12 flex flex-col items-center justify-center overflow-hidden"
            id={"home"}
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/panorama.jpg"
                    alt="Syria Cultural"
                    fill
                    priority
                    className="object-cover object-bottom"
                />
                {/* Multi-layer gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a2420]/95 via-[#2B3130]/40 to-[#428177\]/70" />
                {/* <div className="absolute inset-0 bg-gradient-to-r from-[#1a2420]/50 via-transparent to-[#1a2420]/50" /> */}
            </div>

            {/* Decorative Pattern Overlay */}
            <div className="absolute inset-0 z-[1] opacity-5">
                <div className="absolute inset-0 bg-[url(/svg/unisco_pattern.svg)] bg-repeat bg-[length:200px]" />
            </div>

            {/* Animated Decorative Elements */}
            <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
                {/* Floating golden circles */}
                <div className="absolute top-[15%] start-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-[#A48E68]/20 to-transparent blur-xl animate-pulse" />
                <div className="absolute top-[60%] end-[15%] w-48 h-48 rounded-full bg-gradient-to-br from-[#A48E68]/15 to-transparent blur-2xl animate-pulse [animation-delay:1s]" />
                <div className="absolute bottom-[20%] start-[20%] w-24 h-24 rounded-full bg-gradient-to-br from-[#A48E68]/10 to-transparent blur-lg animate-pulse [animation-delay:2s]" />


            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">

                {/* Badge */}
                {/* <ServerMotion animation="fadeUp" className="mb-8">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
                        <div className="w-2 h-2 rounded-full bg-[#A48E68] animate-pulse" />
                        <span className="text-white/80 text-sm font-medium tracking-wide">
                            {t("badgeText")}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-[#A48E68] animate-pulse" />
                    </div>
                </ServerMotion> */}


                {/* Main Quote Container */}
                <ServerMotion animation="fadeUp" staggerIndex={2} className="w-full max-w-4xl mx-auto">
                    <div className="relative">


                        {/* Quote Card with Glassmorphism */}
                        <div className="relative bg-gradient-to-br from-black/30 via-black/30 to-transparent backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
                            {/* Inner decorative border */}
                            <div className="absolute inset-4 border border-[#A48E68]/20 rounded-2xl pointer-events-none" />

                            {/* Corner decorations */}
                            <div className="absolute top-4 start-4 w-8 h-8 border-t-2 border-s-2 border-[#A48E68]/50 rounded-tl-lg" />
                            <div className="absolute top-4 end-4 w-8 h-8 border-t-2 border-e-2 border-[#A48E68]/50 rounded-tr-lg" />
                            <div className="absolute bottom-4 start-4 w-8 h-8 border-b-2 border-s-2 border-[#A48E68]/50 rounded-bl-lg" />
                            <div className="absolute bottom-4 end-4 w-8 h-8 border-b-2 border-e-2 border-[#A48E68]/50 rounded-br-lg" />

                            {/* Quote Text */}
                            <blockquote className="relative z-10 text-center">
                                <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-relaxed tracking-wide">
                                    {t("quote")}
                                </p>
                            </blockquote>
                            {/* Search Bar */}
                            <ServerMotion className="w-full max-w-xl mx-auto  mt-12">
                                <SearchBar />
                            </ServerMotion>
                            {/* Decorative line below quote */}
                            <div className="flex items-center justify-center gap-4 mt-8">
                                <span className="h-0.5 w-16 md:w-24 bg-gradient-to-l rtl:bg-gradient-to-r from-[#A48E68] to-transparent" />
                                <div className="w-3 h-3 rotate-45 bg-[#ebb962]" />
                                <span className="h-0.5 w-16 md:w-24 bg-gradient-to-r rtl:bg-gradient-to-l from-[#A48E68] to-transparent" />
                            </div>

                            {/* Ministry attribution */}
                            <p className="text-center text-[#ebb962] text-sm md:text-base font-medium mt-6 tracking-wider">
                                — {t("badgeText")} —
                            </p>
                        </div>
                    </div>
                </ServerMotion>





                {/* Social Media Links */}
                <ServerMotion animation="fadeUp" staggerIndex={4} className="mt-12">
                    <div className="inline-flex items-center gap-3 px-8 py-3 rounded-sm bg-black/30 backdrop-blur-xl border border-white/10 shadow-sm">
                        <div className="flex flex-col items-center gap-4">
                            <div className="absolute top-2 start-2 w-4 h-4 border-t-2 border-s-2 border-[#A48E68]/50 rounded-tl-lg" />
                            <div className="absolute top-2 end-2 w-4 h-4 border-t-2 border-e-2 border-[#A48E68]/50 rounded-tr-lg" />
                            <div className="absolute bottom-2 start-2 w-4 h-4 border-b-2 border-s-2 border-[#A48E68]/50 rounded-bl-lg" />
                            <div className="absolute bottom-2 end-2 w-4 h-4 border-b-2 border-e-2 border-[#A48E68]/50 rounded-br-lg" />

                            <p className="text-white text-sm font-bold mt-4">{t("followUs")}</p>
                            <div className="flex items-center gap-4">
                                {/* Facebook */}
                                <a
                                    href="https://facebook.com/mocsyr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group w-12 h-12 rounded-full  backdrop-blur-sm  border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#A48E68]/20 hover:border-[#A48E68]/50 hover:scale-110"
                                >
                                    <svg className="w-5 h-5 text-white  transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://instagram.com/mocsyr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group w-12 h-12 rounded-full  backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#A48E68]/20 hover:border-[#A48E68]/50 hover:scale-110"
                                >
                                    <svg className="w-5 h-5 text-white  transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>

                                {/* X (Twitter) */}
                                <a
                                    href="https://x.com/mocsyr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group w-12 h-12 rounded-full  backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#A48E68]/20 hover:border-[#A48E68]/50 hover:scale-110"
                                >
                                    <svg className="w-5 h-5 text-white  transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>


                                {/* Youtube */}
                                <a
                                    href="https://www.youtube.com/channel/UC0ewHFtG0rtVCwbohVWvHyA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group w-12 h-12 rounded-full  backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#A48E68]/20 hover:border-[#A48E68]/50 hover:scale-110"
                                >
                                    {/* Youtube */}
                                    <svg className="w-5 h-5 text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </ServerMotion>
            </div>



            {/* Bottom Gradient Fade */}
            {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F9F9F9] to-transparent z-[3]" /> */}
        </section>
    );
}