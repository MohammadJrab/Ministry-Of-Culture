import React from 'react'
import WhoWeAreSection from './_components/sections/WhoWeAreSection';
import VisionMissionSection from './_components/sections/VisionMissionSection';
import MinisterWordSection from './_components/sections/MinisterWordSection';
import OrganizationalStructureSection from './_components/sections/OrganizationalStructureSection';

export default async function AboutMinistry() {
    return (
        <main>
            {/* <AboutMinistryHero /> */}
            <WhoWeAreSection />
            <VisionMissionSection />
            <MinisterWordSection />
            <OrganizationalStructureSection />
        </main>
    )
}
