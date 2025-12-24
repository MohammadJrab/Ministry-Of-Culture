import React from 'react'
import { getTranslations } from 'next-intl/server'
import CulturalCard from '../cultural-card';
export const CulturalPrinciplesSection = async () => {

    const t = await getTranslations('culturalPrinciplesSection');
    const indices = Array.from({ length: 7 }, (_, i) => (i + 1).toString());
    return (
        <section className={'pt-16 md:pt-32 w-full '}>
            <h2 className="text-2xl font-bold text-center mb-12 text-[#3D3D3D]">
                {t('title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-7xl mx-auto">
                {indices.map((index: string) => (
                    <CulturalCard
                        key={index}
                        number={index}
                        title={t(`principles.${index}.title`)}
                        description={t(`principles.${index}.description`)}
                    />
                ))}
            </div>
        </section>)
}
