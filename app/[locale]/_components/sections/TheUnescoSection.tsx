import React from 'react'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server';
import { IconArrowForwardUpDouble, IconArrowRight } from '@tabler/icons-react';
import { UnescoCarousel } from './UnescoCarousel';

const TheUnescoSection = async () => {
    const t = await getTranslations('theUnesco');

    const indices = Array.from({ length: 5 }, (_, i) => i.toString());

    const images = [
        "/images/hand-glass.png",
        "/images/soap-making.png",
        "/images/hawk.png",
        "/images/damascus-rose.png",
        "/images/shadow-play.png"
    ];

    const items = indices.map((index) => ({
        title: t(`items.${index}.title`),
        year: t(`items.${index}.year`),
        image: images[parseInt(index)] || "/images/glass-blowing.jpg"
    }));

    return (
        <section className="relative w-full isolate min-h-[600px] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/aleppo.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[rgba(43,49,48,0.72)] to-[rgba(66,129,119,0.72)]" />

            <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 h-full flex flex-col justify-center">

                <div className="text-center mb-16">
                    <h2 className="text-white text-3xl md:text-3xl font-bold inline-block relative">
                        {t('title')}
                        <span className="block h-0.5 w-1/3 bg-[#A48E68]  mx-auto mt-6"></span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left: Description Card */}
                    <div

                        className="relative bg-gradient-to-br from-[rgba(185,167,121,0.39)] to-[rgba(185,167,121,0.1)] backdrop-blur-md border border-white/20 p-8 rounded-2xl "
                    >
                        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/50 rounded-tl-lg" />
                        <img src="/svg/unisco_pattern.svg" alt="unisco_pattern" className="object-cover absolute top-0 right-0 size-56" />

                        <p className="text-white text-lg px-8 py-6 md:text-lg whitespace-pre-line leading-relaxed">
                            {t('description')}
                        </p>
                        <div className={`absolute bottom-4 end-4 bg-[#333] p-3 rounded-lg text-white hover:bg-black transition-colors`}>

                            <IconArrowForwardUpDouble className="rtl:-scale-x-100" />

                        </div>
                    </div>

                    {/* Right: Slider */}
                    <UnescoCarousel
                        items={items}
                      
                    />

                </div>
            </div>
        </section>
    )
}

export default TheUnescoSection;