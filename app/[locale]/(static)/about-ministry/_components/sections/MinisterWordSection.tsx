import React from 'react'
import { getTranslations } from 'next-intl/server'
import Image from "next/image"
import { ServerMotion } from "@/components/motion"

export default async function MinisterWordSection() {
    const t = await getTranslations('aboutMinistryPage.ministerWord');

    return (
        <section className="relative py-20 lg:py-32 overflow-hidden" id="minister-word">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa] via-white to-[#f0f4f3]" />

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#428177]/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#B9A779]/10 to-transparent rounded-full blur-3xl" />

            {/* Quote Mark Background */}
            <div className="absolute top-20 right-10 lg:right-32 opacity-5">
                <svg className="w-40 h-40 lg:w-64 lg:h-64 text-[#428177]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
            </div>

            <div className="container relative z-10 mx-auto px-4">
                {/* Section Header */}
                <ServerMotion animation="fadeUp" className="text-center mb-16">
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="h-px w-16 md:w-24 bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-[#B9A779]" />
                        <span className="text-[#428177] font-medium text-sm tracking-wider uppercase">
                            {t('subtitle')}
                        </span>
                        <div className="h-px w-16 md:w-24 bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-[#B9A779]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2B3130]">
                        {t('title')}
                    </h2>
                </ServerMotion>

                {/* Content Card */}
                <ServerMotion animation="fadeUp">
                    <div className="max-w-5xl mx-auto">
                        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#E8EBE9]">
                            {/* Top Gradient Border */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#428177] via-[#B9A779] to-[#428177]" />

                            <div className="grid grid-cols-1 lg:grid-cols-3">
                                {/* Minister Image Side */}
                                <div className="relative lg:col-span-1 bg-gradient-to-br from-[#2B3130] to-[#1a1f1e] p-8 flex flex-col items-center justify-center">
                                    {/* Decorative Pattern */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute inset-0" style={{
                                            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(185, 167, 121, 0.3) 1px, transparent 0)`,
                                            backgroundSize: '20px 20px'
                                        }} />
                                    </div>

                                    {/* Minister Photo Placeholder */}
                                    <div className="relative">
                                        <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-[#428177] to-[#B9A779] p-1">
                                            <div className="w-full h-full rounded-full bg-[#2B3130] flex items-center justify-center overflow-hidden">
                                                {/* Ministry Logo as Placeholder */}
                                                <Image src="/images/ministry.jpg" objectFit='cover' alt="Syrian Minister of Culture" width={200} height={200} />
                                            </div>
                                        </div>
                                        {/* Decorative Ring */}
                                        <div className="absolute -inset-4 rounded-full border-2 border-dashed border-[#B9A779]/30" />
                                    </div>

                                    {/* Minister Name */}
                                    <div className="mt-8 text-center relative z-10">
                                        <h4 className="text-xl font-bold text-white">{t('ministerName')}</h4>
                                        <p className="text-[#B9A779] mt-2">{t('ministerTitle')}</p>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="lg:col-span-2 p-8 lg:p-12">
                                    <div className="space-y-6">
                                        {/* Paragraph 1 */}
                                        <ServerMotion animation="fadeUp">
                                            <p className="text-lg md:text-xl leading-relaxed text-[#3D3D3D]">
                                                {t('paragraph1')}
                                            </p>
                                        </ServerMotion>

                                        {/* Paragraph 2 */}
                                        <ServerMotion animation="fadeUp" staggerIndex={1}>
                                            <p className="text-lg md:text-xl leading-relaxed text-[#3D3D3D]">
                                                {t('paragraph2')}
                                            </p>
                                        </ServerMotion>

                                        {/* Paragraph 3 */}
                                        <ServerMotion animation="fadeUp" staggerIndex={2}>
                                            <p className="text-lg md:text-xl leading-relaxed text-[#3D3D3D]">
                                                {t('paragraph3')}
                                            </p>
                                        </ServerMotion>

                                        {/* Closing Quote */}
                                        <ServerMotion animation="fadeUp" staggerIndex={3}>
                                            <div className="mt-8 pt-8 border-t border-[#E8EBE9]">
                                                <blockquote className="relative">
                                                    <div className="absolute -top-4 -start-5 text-6xl text-[#B9A779]/20 font-serif">"</div>
                                                    <p className="text-xl md:text-2xl font-medium text-[#428177] leading-relaxed italic">
                                                        {t('closingQuote')}
                                                    </p>
                                                    <div className="absolute -bottom-5 -end-5 rtl:start-44 text-6xl text-[#B9A779]/20 font-serif">"</div>
                                                </blockquote>
                                            </div>
                                        </ServerMotion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ServerMotion>
            </div>
        </section>
    )
}
