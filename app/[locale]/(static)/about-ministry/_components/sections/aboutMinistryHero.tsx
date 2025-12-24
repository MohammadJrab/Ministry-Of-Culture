import React from 'react'
import { getTranslations } from 'next-intl/server'
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';

export default async function AboutMinistryHero() {
    const t = await getTranslations();
    return (
        <section className=" container min-h-screen relative flex flex-col lg:mt-28 justify-center lg:justify-start" id={"home"}>

            <div className="grid  grid-cols-1 lg:grid-cols-2 justify-center gap-10 mx-auto mt-24 lg:mt-60 items-center">
                <div className="flex flex-col justify-center items-center lg:items-start lg:ms-11 text-center lg:text-start">
                    <h3 className="text-xl text-gold md:text-3xl font-[400s] leading-normal ">
                        {t('aboutMinistry.hero.title')}
                    </h3>
                    <p className="text-2xl text-foreground mt-5">
                        {t('aboutMinistry.hero.description')}
                    </p>
                    <div className="flex gap-4 items-center mt-14 w-full justify-center lg:justify-start" >
                        <div className="flex w-16 md:w-32 lg:w-60 h-1 bg-secondary">
                        </div>
                        <div className="flex items-center px-4 py-2 border-2  rounded-[16px] justify-center bg-lightBlack">
                            <h1 className="text-white text-nowrap ">{t('metadata.home.appName')}</h1>
                        </div>
                        <div className="flex w-16 md:w-32 lg:w-60 h-1 bg-secondary">
                        </div>
                    </div>
                </div>
                <div className="flex w-full lg:w-fit mx-auto flex-col-reverse lg:flex-col items-center  lg:order-0 gap-4">                {/* Follow US */}


                    <Image
                        src="/images/about-hero-image.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
            </div>


        </section >
    )
}

