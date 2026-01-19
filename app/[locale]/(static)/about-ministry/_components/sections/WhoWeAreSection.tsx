import React from 'react'
import { getTranslations } from 'next-intl/server'
import Image from "next/image"
import { ServerMotion } from "@/components/motion"

export default async function WhoWeAreSection() {
    const t = await getTranslations('aboutMinistryPage.whoWeAre');

    return (
        <section className="relative py-20 lg:py-32 overflow-hidden" id="who-we-are">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa] via-white to-[#f0f4f3]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#428177]/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#B9A779]/10 to-transparent rounded-full blur-3xl" />

            <div className="container relative z-10 mx-auto px-4">
                {/* Section Header */}
                <ServerMotion animation="fadeUp" className="text-center mb-16">
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-[#B9A779]" />
                        <span className="text-[#428177] font-medium text-sm tracking-wider uppercase">
                            {t('subtitle')}
                        </span>
                        <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-[#B9A779]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2B3130]">
                        {t('title')}
                    </h2>
                </ServerMotion>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Image Side */}
                    <ServerMotion animation="slideLeft" className="lg:col-span-5">
                        <div className="relative">
                            {/* Main Image */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/about-hero-image.png"
                                    width={600}
                                    height={500}
                                    alt={t('imageAlt')}
                                    className="w-full h-auto object-cover"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2B3130]/30 to-transparent" />
                            </div>

                            {/* Decorative Badge */}
                            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-gradient-to-br from-[#428177] to-[#2B3130] text-white p-6 rounded-2xl shadow-xl">
                                <div className="text-center">
                                    <span className="block text-3xl md:text-4xl font-bold mb-1">1958</span>
                                    <span className="text-sm opacity-80">{t('since')}</span>
                                </div>
                            </div>

                            {/* Background Decorative Element */}
                            <div className="absolute -z-10 -top-4 -left-4 w-full h-full rounded-2xl bg-gradient-to-br from-[#B9A779]/20 to-[#428177]/20" />
                        </div>
                    </ServerMotion>

                    {/* Content Side */}
                    <ServerMotion animation="slideRight" className="lg:col-span-7">
                        <div className="space-y-8">
                            {/* Establishment Text */}
                            <div className="relative">
                                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#428177] to-[#B9A779] rounded-full" />
                                <p className="text-lg md:text-xl leading-relaxed text-[#3D3D3D] pr-6">
                                    {t('establishment')}
                                </p>
                            </div>

                            {/* Post-Liberation Text */}
                            <div className="bg-gradient-to-l from-[#428177]/5 to-transparent rounded-xl p-6">
                                <p className="text-lg md:text-xl leading-relaxed text-[#3D3D3D]">
                                    {t('postLiberation')}
                                </p>
                            </div>

                            {/* Future Direction Text */}
                            <div className="relative">
                                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#B9A779] to-[#428177] rounded-full" />
                                <p className="text-lg md:text-xl leading-relaxed text-[#3D3D3D] pr-6">
                                    {t('futureDirection')}
                                </p>
                            </div>

                            {/* Key Values */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                                {['knowledge', 'justice', 'participation', 'empowerment'].map((key, index) => (
                                    <ServerMotion
                                        key={key}
                                        animation="fadeUp"
                                        staggerIndex={index}
                                        hover="lift"
                                    >
                                        <div className="bg-white rounded-xl p-4 shadow-md border border-[#E8EBE9] text-center group hover:shadow-lg transition-all duration-300">
                                            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#428177] to-[#2B3130] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-medium text-[#3D3D3D]">
                                                {t(`values.${key}`)}
                                            </span>
                                        </div>
                                    </ServerMotion>
                                ))}
                            </div>
                        </div>
                    </ServerMotion>
                </div>
            </div>
        </section>
    )
}
