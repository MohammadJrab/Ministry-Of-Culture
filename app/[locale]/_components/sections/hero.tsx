import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { IconBrandFacebook, IconBrandInstagram, IconBrandX, IconBrandYoutube } from "@tabler/icons-react";
import SearchBar from "../SearchBar";
import { ServerMotion, MotionItem } from "@/components/motion";

export default async function HeroSection() {
    const t = await getTranslations();

    return (
        <section
            className="relative min-h-screen flex flex-col"
            id={"home"}
            style={{
                backgroundImage: `url('/images/panorama.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content Container */}
            <div className="relative z-10 container  flex flex-col items-center justify-between min-h-screen py-32">

                {/* Center Content: Quote + Badge + Search */}
                <ServerMotion animation="stagger" trigger="onMount" className="flex flex-col items-center justify-center gap-6 text-center">

                    {/* Main Quote */}
                    <MotionItem className="flex flex-col mt-40 items-center">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-relaxed tracking-wide drop-shadow-lg">
                            {t('hero.quote')}
                        </h1>

                        {/* Decorative Line with Badge */}
                        <div className="flex gap-4 items-center mt-6 w-full justify-center">
                            <div className="flex w-16 md:w-32 lg:w-48 h-0.5 bg-secondary rounded-full"></div>
                            <div className="flex items-center px-6 py-2 rounded-full justify-center bg-white/10 backdrop-blur-sm border border-white/20">
                                <span className="text-white text-sm md:text-base font-medium text-nowrap">{t('hero.badgeText')}</span>
                            </div>
                            <div className="flex w-16 md:w-32 lg:w-48 h-0.5 bg-secondary rounded-full"></div>
                        </div>
                    </MotionItem>

                    {/* Search Bar */}
                    <MotionItem className="w-full max-w-2xl mt-2">
                        <SearchBar />
                    </MotionItem>

                </ServerMotion>

                {/* Follow Us Section - Bottom */}
                <ServerMotion animation="fadeOnly" trigger="onMount" className="flex-shrink-0 mt-auto">
                    <div className="flex gap-4 items-center bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                        <p className="text-sm font-medium text-white">{t('hero.followUs')}</p>
                        <div className="w-px h-6 bg-white/30"></div>
                        <div className="flex gap-3">
                            <Button asChild size={"icon"} variant="ghost" className="hover:bg-white/20 rounded-full [&_svg]:size-5 text-white">
                                <Link href={"https://www.instagram.com/mocsyr/"}>
                                    <IconBrandInstagram />
                                </Link>
                            </Button>
                            <Button asChild size={"icon"} variant="ghost" className="hover:bg-white/20 rounded-full [&_svg]:size-5 text-white">
                                <Link href={"https://www.facebook.com/profile.php?id=61574722665055"}>
                                    <IconBrandFacebook />
                                </Link>
                            </Button>
                            <Button asChild size={"icon"} variant="ghost" className="hover:bg-white/20 rounded-full [&_svg]:size-5 text-white">
                                <Link href={"https://x.com/mocsyr"}>
                                    <IconBrandX />
                                </Link>
                            </Button>
                            <Button asChild size={"icon"} variant="ghost" className="hover:bg-white/20 rounded-full [&_svg]:size-5 text-white">
                                <Link href={"https://www.youtube.com/@MinistryofCultureSyria"}>
                                    <IconBrandYoutube />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </ServerMotion>

            </div>
        </section>
    )
}