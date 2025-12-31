import React from 'react'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server';
import { ServerMotion } from '@/components/motion';

export async function NationalCulturalIdentitySection() {
    const t = await getTranslations('nationalCulturalIdentity');

    return (
        <section className="relative mt-20 md:mt-50  w-full isolate lg:h-76 h-40 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src="/images/national-cultural-identity.jpg"
                    alt="National Cultural Identity"
                    fill
                    className="object-cover object-center"
                />
            </div>
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[rgba(43,49,48,0.72)] to-[rgba(66,129,119,0.72)]" />

            <div className="relative z-20 container mx-auto end-0 md:py-32 h-full flex flex-col justify-center">
                <ServerMotion animation="scaleIn" className="text-center">
                    <h2 className="text-white text-xl lg:text-3xl md:text-3xl font-bold inline-block relative">
                        {t('title')}
                        <div className="h-0.5 w-1/3 bg-[#A48E68] ms-auto mt-6"></div>
                    </h2>
                </ServerMotion>
            </div>
        </section>
    )
}

