import { getTranslations } from "next-intl/server";
import ContactUsSection from "@/app/[locale]/(static)/contact-us/_components/contact-us-section";
import { Metadata } from "next";
import ScrollToHashOnLoad from "@/app/[locale]/_components/scroll-to-hash-on-load";
import { getCities } from "@/services/cities-service";
import SyriaSection from '../_components/sections/syria-section';
import { CulturalPrinciplesSection } from '../_components/sections/cultural-principles-section';
import TheUnescoSection from '../_components/sections/TheUnescoSection';
import HeroSection from "../_components/sections/hero";
import Footer from "../_components/footer";
import ScrollToTopButton from "../_components/scroll-to-top-button";
import VisionSection from "../_components/sections/VisionSection";
export default async function HomePage() {
    return (
        <main>
            <HeroSection />
            <div className={'flex flex-col gap-16 md:gap-32'}>
                <SyriaSection />
                <CulturalPrinciplesSection />
                <TheUnescoSection />
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