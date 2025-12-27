import React from 'react'
import { getTranslations } from 'next-intl/server'
import CulturalCard from '../cultural-card';
import { Motion } from '@/components/motion';

export const CulturalPrinciplesSection = async () => {
    const t = await getTranslations('culturalPrinciplesSection');
    const indices = Array.from({ length: 7 }, (_, i) => (i + 1).toString());

    return (
        <section className={'md:pt-6 container'}>
            <h2 className="text-xl md:text-2xl font-bold text-center mb-12 text-[#3D3D3D]">
                {t('title')}
            </h2>

            <div className="flex md:flex-row flex-wrap flex-4 gap-8 justify-center">
                {indices.map((index: string, i: number) => (
                    <Motion key={index} animation="fadeUp" staggerIndex={i} hover="lift" viewport="early">
                        <CulturalCard
                            number={index}
                            title={t(`principles.${index}.title`)}
                            description={t(`principles.${index}.description`)}
                        />
                    </Motion>
                ))}
            </div>
        </section>
    )
}
