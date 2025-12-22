import React from 'react'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server';
import { IconArrowForwardUpDouble, IconArrowRight } from '@tabler/icons-react';

const TheUnescoSection = async ({ locale }: { locale: string }) => {
    const t = await getTranslations({ locale, namespace: 'theUnesco' });

    const indices = Array.from({ length: 5 }, (_, i) => i.toString());

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
                        <span className="block h-0.5 w-1/3 bg-[#A48E68] mx-auto mt-6"></span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left: Description Card */}
                    <div
                        dir={locale === 'ar' ? 'rtl' : 'ltr'}
                        className="relative bg-gradient-to-br from-[rgba(185,167,121,0.39)] to-[rgba(185,167,121,0.1)] backdrop-blur-md border border-white/20 p-8 rounded-2xl "
                    >
                        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/50 rounded-tl-lg" />

                        <p className="text-white text-lg px-8 py-6 md:text-xl whitespace-pre-line leading-relaxed">
                            {t('description')}
                        </p>
                        <div className={`absolute bottom-4 end-4 bg-[#333] p-3 rounded-lg text-white hover:bg-black transition-colors`}>

                            <IconArrowForwardUpDouble className="rtl:-scale-x-100" />

                        </div>
                    </div>

                    {/* Right: Slider */}
                    <div className="flex flex-col items-center md:items-end gap-6">
                        <div className="flex flex-col md:flex-row items-center gap-6 text-white group cursor-pointer">
                            <div className={locale === 'ar' ? 'text-right' : 'text-left'}>
                                <h3 className="text-2xl font-bold">{t(`items.0.title`)}</h3>
                                <p className="text-[#A48E68] font-semibold text-lg">{t(`items.0.year`)}</p>
                            </div>

                            <div className="relative w-64 h-40 rounded-2xl overflow-hidden border-2 border-white/30 group-hover:border-white transition-all">
                                <Image
                                    src="/images/glass-blowing.jpg"
                                    alt="Heritage"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center gap-4 mt-4">
                            <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10">
                                <span className="sr-only">Previous</span>
                                <span>{"<"}</span>
                            </button>

                            <div className="w-10 h-10 rounded-full bg-[#00695C] flex items-center justify-center text-white font-bold ring-4 ring-white/10">
                                1
                            </div>

                            <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10">
                                <span className="sr-only">Next</span>
                                <span>{">"}</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default TheUnescoSection;