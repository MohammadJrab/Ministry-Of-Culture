import React from 'react'
import { getTranslations } from 'next-intl/server'
import AboutMinistryHero from './_components/sections/aboutMinistryHero';
import { NationalCulturalIdentitySection } from './_components/sections/nationalCulturalIdentitySection';
import { OurTasksSection } from './_components/sections/ourTasks';
import OurMessageSection from './_components/sections/OurMessageSection';
import SyrianStorySection from './_components/sections/syrianStory';

export default async function AboutMinistry() {
    return (
        <main>
            <AboutMinistryHero />
            <NationalCulturalIdentitySection />
            <OurTasksSection />
            <OurMessageSection />
            <SyrianStorySection />
        </main>
    )
}

