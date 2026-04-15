import React from 'react'
import { getTranslations } from 'next-intl/server'
import { ServerMotion } from "@/components/motion"

export default async function VisionMissionSection() {
    const t = await getTranslations('aboutMinistryPage.visionMission');

    return (
        <section className="relative py-20 lg:py-32 overflow-hidden" id="vision-mission">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#2B3130] via-[#1a1f1e] to-[#2B3130]" />
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#428177]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#B9A779]/10 rounded-full blur-3xl" />

            <div className="container relative z-10 mx-auto px-4">
                {/* Section Header */}
                <ServerMotion animation="fadeUp" className="text-center mb-16">
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="h-px w-20 bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-[#B9A779]" />
                        <div className="flex gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#428177]" />
                            <span className="w-2 h-2 rounded-full bg-[#B9A779]" />
                            <span className="w-2 h-2 rounded-full bg-[#428177]" />
                        </div>
                        <div className="h-px w-20 bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-[#B9A779]" />
                    </div>
                </ServerMotion>

                {/* Cards Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Vision Card */}
                    <ServerMotion animation="slideLeft" hover="lift">
                        <div className="group relative h-full">
                            {/* Card Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r  from-[#428177] to-[#B9A779] rounded-3xl opacity-30 group-hover:opacity-50 blur transition-opacity duration-500" />

                            <div className="relative h-full bg-gradient-to-br from-[#2B3130] to-[#1a1f1e] rounded-3xl p-8 lg:p-10 border border-white/10">
                                {/* Icon */}
                                <div className="relative mb-8">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#428177] to-[#2B3130] flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300">
                                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    {/* Decorative Line */}
                                    <div className="absolute top-1/2 start-24 w-20 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-[#B9A779] to-transparent" />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                    {t('vision.title')}
                                    <span className="block mt-2 h-1 w-16 bg-gradient-to-r from-[#B9A779] to-[#428177] rounded-full" />
                                </h3>

                                {/* Description */}
                                <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                                    {t('vision.description')}
                                </p>

                                {/* Decorative Corner */}
                                <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#428177]/30 rounded-bl-xl" />
                            </div>
                        </div>
                    </ServerMotion>

                    {/* Mission Card */}
                    <ServerMotion animation="slideRight" hover="lift">
                        <div className="group relative h-full">
                            {/* Card Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B9A779] to-[#428177] rounded-3xl opacity-30 group-hover:opacity-50 blur transition-opacity duration-500" />

                            <div className="relative h-full bg-gradient-to-br from-[#2B3130] to-[#1a1f1e] rounded-3xl p-8 lg:p-10 border border-white/10">
                                {/* Icon */}
                                <div className="relative mb-8">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#B9A779] to-[#8B7355] flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300">
                                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    {/* Decorative Line */}
                                    <div className="absolute top-1/2 start-24 w-20 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-[#428177] to-transparent" />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                    {t('mission.title')}
                                    <span className="block mt-2 h-1 w-16 bg-gradient-to-r from-[#428177] to-[#B9A779] rounded-full" />
                                </h3>

                                {/* Description */}
                                <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                                    {t('mission.description')}
                                </p>

                                {/* Decorative Corner */}
                                <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#B9A779]/30 rounded-br-xl" />
                            </div>
                        </div>
                    </ServerMotion>
                </div>
            </div>
        </section>
    )
}
