import React from 'react'
import { getTranslations } from 'next-intl/server'
import { ServerMotion } from '@/components/motion';

export const OurTasksSection = async () => {
    const t = await getTranslations('ourTasksSection');
    const indices = Array.from({ length: 4 }, (_, i) => (i + 1).toString());

    return (
        <section className={'mt-16 md:mt-32 w-full'}>
            <ServerMotion animation="fadeUp" className="text-center mb-12">
                <h2 className="text-2xl font-medium text-[#3D3D3D]">
                    {t('title')}
                </h2>
            </ServerMotion>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center max-w-7xl mx-auto">
                {indices.map((index: string, i: number) => (
                    <ServerMotion key={index} animation="fadeUp" staggerIndex={i} hover="lift">
                        <div className='relative flex shadow-sm items-center max-h-20 min-w-[18rem] max-w-[20rem] min-h-[110px] justify-center bg-[#F4F6F5] py-8 px-10 rounded-[6px]'>
                            <label className='text-[#2B2B2B] pe-20 font-medium text-md md:text-lg'>{t(`tasks.${index}.title`)}</label>
                            <img className='absolute top-0 end-4' src={"/svg/card-circle" + index + ".svg"} alt="" />
                        </div>
                    </ServerMotion>
                ))}
            </div>
        </section>
    )
}
