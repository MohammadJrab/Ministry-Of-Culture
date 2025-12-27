import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import Image from "next/image";
import SearchBar from "../SearchBar";
import { ServerMotion, MotionItem } from "@/components/motion";

export default async function HeroSection() {
    const t = await getTranslations();

    return (
        <section className="container min-h-screen relative flex flex-col justify-center lg:justify-start" id={"home"}>

            <ServerMotion animation="stagger" trigger="onMount" className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-10 mx-auto mt-24 lg:mt-60 items-center">
                <MotionItem className="flex flex-col justify-center items-center lg:items-start lg:ms-11 text-center lg:text-start">
                    <h3 className="text-lg md:text-3xl font-[400s] leading-normal text-foreground max-w-2xl">
                        {t.rich('hero.quotePart1', {
                            primary: (chunks) => <span className="text-primary">{chunks}</span>,
                            secondary: (chunks) => <span className="text-secondary">{chunks}</span>,
                            br: () => <br />
                        })}
                        <span className="block text-end mt-5 ms-auto">
                            {t.rich('hero.quotePart2', {
                                primary: (chunks) => <span className="text-primary">{chunks}</span>,
                                secondary: (chunks) => <span className="text-secondary">{chunks}</span>,
                                br: () => <br />
                            })}
                        </span>
                    </h3>
                    <div className="flex gap-4 items-center mt-5 w-full justify-center lg:justify-start">
                        <div className="flex w-16 md:w-32 lg:w-60 h-1 bg-secondary"></div>
                        <div className="flex items-center px-6 py-2 rounded-[16px] justify-center bg-lightBlack">
                            <h1 className="text-white text-nowrap">{t('hero.badgeText')}</h1>
                        </div>
                        <div className="flex w-16 md:w-32 lg:w-60 h-1 bg-secondary"></div>
                    </div>
                    <SearchBar />
                </MotionItem>
                <MotionItem className="flex w-full lg:w-fit mx-auto flex-col-reverse lg:flex-col items-center lg:order-0 gap-4">
                    {/* Follow US */}
                    <div className="flex gap-4 self-center lg:self-start items-center">
                        <p className="text-sm font-medium">{t('hero.followUs')}</p>
                        <div className="flex gap-4">
                            <Button asChild size={"icon"} variant="outline" className="border-[0.8px] border-border shadow-none rounded-md [&_svg]:size-6">
                                <Link href={"#"}>
                                    <IconBrandInstagram className="text-primary" />
                                </Link>
                            </Button>
                            <Button asChild size={"icon"} variant="outline" className="border-[0.8px] border-border shadow-none rounded-md [&_svg]:size-6">
                                <Link href={"#"}>
                                    <IconBrandFacebook className="text-primary" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <Image
                        src="/images/hero-image.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </MotionItem>
            </ServerMotion>

        </section>
    )
}