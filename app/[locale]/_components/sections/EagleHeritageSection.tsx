import React from 'react'
import Image from 'next/image'
import { ServerMotion } from '@/components/motion';
import { getTranslations } from 'next-intl/server';

const EagleHeritageSection = async () => {
    const t = await getTranslations('eagleHeritage');

    const timelineIds = ['neolithic', 'ancient', 'islamic', 'modern'];

    const icons = {
        neolithic: '🏛️',
        ancient: '⚜️',
        islamic: '📜',
        modern: '🦅'
    };

    return (
        <section className="relative w-full isolate min-h-[800px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/aleppo.jpg"
                    alt="Heritage Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-b from-[#2B3130]/90 via-[#2B3130]/80 to-[#428177]/80" />
            </div>

            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
                <div className="absolute inset-0 bg-[url(/svg/unisco_pattern.svg)] bg-repeat" />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">

                {/* Section Header */}
                <ServerMotion animation="fadeUp" className="text-center mb-16">
                    <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 tracking-wide">
                        {t('title')}
                    </h2>
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <span className="h-0.5 w-20 bg-linear-to-r from-transparent to-[#A48E68]" />
                        <div className="w-3 h-3 rotate-45 bg-[#A48E68]" />
                        <span className="h-0.5 w-20 bg-linear-to-l from-transparent to-[#A48E68]" />
                    </div>
                </ServerMotion>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-16">

                    {/* Left: Hero Image with Overlay Card */}
                    <ServerMotion animation="slideLeft" className="relative h-full">
                        <div className="relative h-[500px] lg:h-[700px] rounded-2xl overflow-hidden group">
                            <Image
                                src="/images/syrian-golden-eagle.png"
                                alt={t('altTexts.mainImage')}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Bottom Caption */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-0.5 bg-[#A48E68]" />
                                    <span className="text-[#A48E68] text-sm font-semibold tracking-widest">{t('subtitle')}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{t('altTexts.mainImage')}</h3>
                                <p className="text-white/80 text-sm leading-relaxed">
                                    {t('caption')}
                                </p>
                            </div>
                        </div>

                        {/* Floating Ancient Artifact Card */}
                        <ServerMotion animation="fadeUp" staggerIndex={1} className="absolute -bottom-8 -right-4 hidden lg:block">
                            <div className="relative w-56 h-56 rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 rotate-6 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src="/images/ancient-eagle-artifact.png"
                                    alt={t('altTexts.artifactImage')}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 to-transparent p-3">
                                    <p className="text-white text-xs font-semibold">{t('timeline.neolithic.year')}</p>
                                    <p className="text-white/70 text-[10px]">{t('altTexts.artifactCaption')}</p>
                                </div>
                            </div>
                        </ServerMotion>
                    </ServerMotion>

                    {/* Right: Content with Timeline */}
                    <div className="space-y-8">

                        {/* Introduction Text */}
                        <ServerMotion animation="fadeUp" staggerIndex={0}>
                            <div className="bg-linear-to-br from-[rgba(164,142,104,0.15)] to-[rgba(164,142,104,0.05)] backdrop-blur-md border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                                {/* Decorative corner */}
                                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#A48E68]/30 rounded-tr-2xl" />

                                <p className="text-white/90 text-lg leading-loose text-right mb-6">
                                    {t('introduction')}
                                </p>

                                <div className="flex items-center justify-end gap-2 mt-4">
                                    <span className="text-[#A48E68] text-sm">{t('footnote')}</span>
                                    <div className="w-2 h-2 rounded-full bg-[#A48E68]" />
                                </div>
                            </div>
                        </ServerMotion>

                        {/* Timeline Cards */}
                        <div className="space-y-4">
                            <ServerMotion animation="fadeUp" staggerIndex={1}>
                                <h3 className="text-white text-2xl font-bold mb-6 text-right flex items-center justify-end gap-3">
                                    <span>{t('timelineTitle')}</span>
                                    <div className="w-8 h-8 rounded-full bg-[#A48E68]/20 flex items-center justify-center">
                                        <span className="text-[#A48E68]">⏳</span>
                                    </div>
                                </h3>
                            </ServerMotion>

                            {timelineIds.map((id, index) => (
                                <ServerMotion key={id} animation="fadeUp" staggerIndex={index + 2} hover="lift">
                                    <div className="group relative bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-[#A48E68]/50 hover:shadow-lg hover:shadow-[#A48E68]/10">
                                        {/* Timeline connector */}
                                        {index < timelineIds.length - 1 && (
                                            <div className="absolute -bottom-4 right-12 w-0.5 h-4 bg-linear-to-b from-[#A48E68]/50 to-transparent" />
                                        )}

                                        <div className="flex items-start gap-4 text-right">
                                            {/* Content */}
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-[#A48E68] text-xs font-semibold px-3 py-1 bg-[#A48E68]/10 rounded-full">
                                                        {t(`timeline.${id}.year`) || t('yearFallback')}
                                                    </span>
                                                    <h4 className="text-white font-bold text-lg">{t(`timeline.${id}.title`)}</h4>
                                                </div>
                                                <p className="text-sm text-[#B9A779] font-semibold mb-2">{t(`timeline.${id}.period`)}</p>
                                                <p className="text-white/70 text-sm leading-relaxed">{t(`timeline.${id}.description`)}</p>
                                            </div>

                                            {/* Icon */}
                                            <div className="shrink-0 w-12 h-12 rounded-full bg-linear-to-br from-[#A48E68] to-[#8B7355] flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                {icons[id as keyof typeof icons]}
                                            </div>
                                        </div>
                                    </div>
                                </ServerMotion>
                            ))}
                        </div>

                        {/* Closing Statement */}
                        <ServerMotion animation="fadeUp" staggerIndex={6}>
                            <div className="relative bg-[#A48E68]/20 border-r-4 border-[#A48E68] rounded-lg p-6 mt-8">
                                <p className="text-white text-right text-lg font-semibold leading-relaxed">
                                    {t('closingStatement')}
                                </p>
                                <div className="mt-4 text-right">
                                    <span className="text-[#d7bc8f] text-2xl font-bold">{t('motto')}</span>
                                </div>
                            </div>
                        </ServerMotion>
                    </div>
                </div>
            </div>

            {/* Bottom decorative wave */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#A48E68] to-transparent opacity-30" />
        </section>
    )
}

export default EagleHeritageSection;
