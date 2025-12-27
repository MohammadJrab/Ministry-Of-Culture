import React from 'react'
import { getTranslations } from 'next-intl/server'
import Image from "next/image";
import { Motion, MotionItem } from "@/components/motion";

export default async function AboutMinistryHero() {
    const t = await getTranslations();
    return (
        <section className="container  relative flex flex-col  justify-center items-center " id={"home"}>

            <Motion animation="stagger" trigger="onMount" className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-20 mx-auto lg:mt-60 items-center">
                <MotionItem className="flex flex-col justify-center  lg:items-start lg:ms-11 items-start">
                    <h3 className="text-3xl text-gold  md:text-3xl text-start">
                        {t('aboutMinistry.hero.title')}
                    </h3>
                    <p className="text-2xl md:text-3xl text-start text-foreground mt-5  leading-relaxed">
                        {t('aboutMinistry.hero.description')}
                    </p>
                    <div className="flex gap-4 items-center mt-14 w-full justify-center lg:justify-start">
                        <div className="flex w-16 md:w-32 lg:w-60 h-1 bg-secondary"></div>
                        <div className="flex items-center px-4 py-2 border-2 rounded-[16px] justify-center bg-lightBlack">
                            <h1 className="text-white text-nowrap">{t('hero.badgeText')}</h1>
                        </div>
                        <div className="flex w-16 md:w-32 lg:w-60 h-1 bg-secondary"></div>
                    </div>
                </MotionItem>
                <MotionItem className="flex w-full justify-center lg:w-fit mx-auto flex-col-reverse lg:flex-col items-center lg:order-0 gap-4">
                    <Image
                        src="/images/about-hero-image.png"
                        width={700}
                        height={500}
                        alt="Picture of the author"
                        className='rounded-2xl'
                    />
                </MotionItem>
            </Motion>

        </section>
    )
}

