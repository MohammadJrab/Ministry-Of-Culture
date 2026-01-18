import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import SyriaSection from '../_components/sections/syria-section';
import { CulturalPrinciplesSection } from '../_components/sections/cultural-principles-section';
import EagleHeritageSection from '../_components/sections/EagleHeritageSection';
import HeroSection from "../_components/sections/hero";
import ScrollToTopButton from "../_components/scroll-to-top-button";
import VisionSection from "../_components/sections/VisionSection";
import NewsSection from "../_components/sections/news-section";

export default async function HomePage() {
    return (
        <main>
            <HeroSection />
            <div className={'flex flex-col gap-16 md:gap-32'}>
                <SyriaSection />
                <NewsSection />
                <CulturalPrinciplesSection />
                <EagleHeritageSection />
                <VisionSection />
            </div>
            <ScrollToTopButton />
        </main>
    );
}

export async function generateMetadata({ params }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata.home' });

    return {
        title: t('title'),
        description: t('description')
    };
}