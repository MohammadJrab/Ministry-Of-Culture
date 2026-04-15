"use client"

import React from 'react'
import { useTranslations } from 'next-intl'
import { MagicCard } from "@/components/ui/magic-card"
import { ShineBorder } from "@/components/ui/shine-border"
import { m } from 'motion/react'

// Icon components
const BuildingIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
)

const InstitutionIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
)

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15
        }
    }
}

export default function OrganizationalStructureSection() {
    const t = useTranslations('aboutMinistryPage.organizationalStructure');

    const directorates = [
        'administrativeDevelopment',
        'copyrightProtection',
        'legalAffairs',
        'technologyDigitalTransformation',
        'planningStatistics',
        'executiveSupport',
        'fineArts',
        'childCulture',
        'theaterMusic',
        'adultEducation',
        'provincialCulture',
        'intangibleHeritage',
        'investment'
    ];

    const affiliatedEntities = [
        'nationalLibrary',
        'antiquitiesMuseums',
        'damascusOpera',
        'cinemaFoundation',
        'syrianBookAuthority',
        'arabEncyclopedia',
        'musicInstitute',
        'theaterInstitute',
        'cinemaInstitute'
    ];

    return (
        <section className="relative py-24 lg:py-36 overflow-hidden" id="organizational-structure">
            {/* Premium Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50/50 via-transparent to-transparent" />

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, #428177 1px, transparent 1px), linear-gradient(to bottom, #428177 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                {/* Section Header */}
                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center justify-center gap-3 mb-6">
                        <span className="h-px w-12 bg-gradient-to-r  rtl:bg-gradient-to-l from-transparent to-[#428177]" />
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#428177]/10 border border-[#428177]/20">
                            <div className="w-2 h-2 rounded-full bg-[#428177] animate-pulse" />
                            <span className="text-[#428177] font-medium text-sm">{t('subtitle')}</span>
                        </div>
                        <span className="h-px w-12 bg-gradient-to-l  rtl:bg-gradient-to-r from-transparent to-[#428177]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl pb-6 font-bold bg-gradient-to-r from-[#2B3130] via-[#428177] to-[#2B3130] bg-clip-text text-transparent">
                        {t('title')}
                    </h2>
                </m.div>

                {/* Directorates Section */}
                <div className="mb-24">
                    <m.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <div className="relative">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#428177] to-[#2B3130] flex items-center justify-center shadow-lg shadow-[#428177]/25 text-white">
                                <BuildingIcon />
                            </div>
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br  from-[#428177] to-[#B9A779] opacity-20 blur-sm -z-10" />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#2B3130]">
                                {t('directorates.title')}
                            </h3>
                            <p className="text-[#676767] text-sm mt-1">{t('directorates.count', { count: directorates.length })}</p>
                        </div>
                    </m.div>

                    <m.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                    >
                        {directorates.map((key, index) => (
                            <m.div key={key} variants={itemVariants}>
                                <MagicCard
                                    className="h-full rounded-2xl cursor-pointer"
                                    gradientColor="#428177"
                                    gradientOpacity={0.15}
                                    gradientFrom="#428177"
                                    gradientTo="#B9A779"
                                >
                                    <div className="p-5 h-full flex items-center gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#428177]/10 to-[#B9A779]/10 flex items-center justify-center border border-[#428177]/20">
                                            <span className="text-[#428177] font-bold text-sm">{(index + 1).toString().padStart(2, '0')}</span>
                                        </div>
                                        <span className="text-[#2B3130] font-medium text-[15px] leading-tight">
                                            {t(`directorates.items.${key}`)}
                                        </span>
                                    </div>
                                </MagicCard>
                            </m.div>
                        ))}
                    </m.div>
                </div>

                {/* Decorative Divider */}
                <m.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center justify-center gap-4 mb-24"
                >
                    <div className="h-px flex-1 max-w-48 bg-gradient-to-r rtl:bg-gradient-to-l from-transparent via-[#B9A779]/50 to-[#B9A779]" />
                    <div className="flex gap-2">
                        {[1, 2, 3].map((i) => (
                            <m.div
                                key={i}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-[#428177]' : 'bg-[#B9A779]'}`}
                            />
                        ))}
                    </div>
                    <div className="h-px flex-1 max-w-48 bg-gradient-to-l rtl:bg-gradient-to-r from-transparent via-[#B9A779]/50 to-[#B9A779]" />
                </m.div>

                {/* Affiliated Entities Section */}
                <div>
                    <m.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <div className="relative">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B9A779] to-[#8B7355] flex items-center justify-center shadow-lg shadow-[#B9A779]/25 text-white">
                                <InstitutionIcon />
                            </div>
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#B9A779] to-[#428177] opacity-20 blur-sm -z-10" />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#2B3130]">
                                {t('affiliatedEntities.title')}
                            </h3>
                            <p className="text-[#676767] text-sm mt-1">{t('affiliatedEntities.count', { count: affiliatedEntities.length })}</p>
                        </div>
                    </m.div>

                    <m.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {affiliatedEntities.map((key, index) => (
                            <m.div key={key} variants={itemVariants}>
                                <div className="group relative h-full">
                                    <div className="relative h-full bg-gradient-to-br from-[#1a1f1e] to-[#2B3130] rounded-2xl p-6 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                                        {/* Shine Border Effect */}
                                        <ShineBorder
                                            shineColor={["#428177", "#B9A779", "#428177"]}
                                            borderWidth={2}
                                            duration={10}
                                            className="rounded-2xl"
                                        />

                                        {/* Background Pattern */}
                                        <div className="absolute inset-0 opacity-5">
                                            <div className="absolute inset-0" style={{
                                                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(185, 167, 121, 0.5) 1px, transparent 0)`,
                                                backgroundSize: '20px 20px'
                                            }} />
                                        </div>

                                        {/* Glow Effect */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#B9A779]/10 rounded-full blur-3xl group-hover:bg-[#B9A779]/20 transition-colors duration-500" />

                                        <div className="relative z-10 flex items-start gap-5">
                                            {/* Number Badge */}
                                            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#B9A779] to-[#8B7355] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                <span className="text-white font-bold text-lg">{(index + 1).toString().padStart(2, '0')}</span>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 pt-2">
                                                <h4 className="text-white font-semibold text-lg leading-tight group-hover:text-[#B9A779] transition-colors duration-300">
                                                    {t(`affiliatedEntities.items.${key}`)}
                                                </h4>
                                            </div>
                                        </div>

                                        {/* Bottom Accent Line */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#428177] via-[#B9A779] to-[#428177] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>
                            </m.div>
                        ))}
                    </m.div>
                </div>
            </div>
        </section>
    )
}
