import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { IconArrowUpLeft } from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";
import { ServerMotion, MotionItem } from "@/components/motion";

export default async function HighlightsOfInternationalParticipations() {
    const t = await getTranslations();
    const indices = Array.from({ length: 4 }, (_, i) => (i + 1).toString());

    return (
        <section className="container min-h-screen md:mt-32 mt-8 relative flex flex-col  justify-center lg:justify-start" id={"highlightsSection"}>
            {/* Header divider */}
            <ServerMotion animation="fadeUp">
                <div className="flex gap-4 items-center mt-0 w-full justify-center lg:justify-center">
                    <div className="flex w-full md:w-32 lg:w-full h-0.5 bg-[#B9A779]"></div>
                    <div className="flex items-center px-4 py-2 justify-center">
                        <h1 className="text-[#484848] lg:text-2xl text-lg font-medium text-center lg:text-nowrap">{t('highlightsOfInternationalParticipations.title')}</h1>
                    </div>
                    <div className="flex w-full md:w-32 lg:w-full h-0.5 bg-[#B9A779]"></div>
                </div>
            </ServerMotion>

            {/* Cards Grid */}
            <div className="grid grid-cols-1  md:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 mb-16 md:mb-10 gap-8 mt-6 md:mt-14 justify-items-center mx-auto">
                {indices.map((index: string, i: number) => (
                    <ServerMotion key={index} animation="fadeUp" staggerIndex={i} hover="lift">
                        <div className="flex flex-col   md:h-80  md:flex-row md:pb-0 pb-4 bg-white rounded-lg border border-[#E3E7E5] overflow-hidden">
                            {/* Right Image */}
                            <img
                                src={`/images/international-participation${index}.jpg`}
                                alt={`international-participation${index}`}
                                className="object-contain rounded-lg md:h-64 md:w-64 md:object-cover m-3"
                            />
                            {/* Left Content */}
                            <div className="flex flex-col justify-between px-4 py-2  md:p-8 ">
                                {/* Title */}
                                <h3 className="text-[#484848] text-lg font-semibold leading-relaxed">
                                    {t(`highlightsOfInternationalParticipations.highlights.${index}.title`)}
                                </h3>
                                <div className="flex mt-2">
                                    <div className="hidden md:block  me-4 w-1 bg-[#428177]"></div>
                                    {/* Description */}
                                    <p className="text-[#4B5563] ">
                                        {t(`highlightsOfInternationalParticipations.highlights.${index}.description`)}
                                    </p>
                                </div>
                                {/* Read More Button */}
                                <Button className={'md:w-32 mt-4 bg-transparent hover:text-white border-[1px] border-primary rounded-full text-lightBlack'}>
                                    <Link href={t(`highlightsOfInternationalParticipations.highlights.${index}.link`)} target="_blank">{t('readMore')}</Link>
                                    <IconArrowUpLeft className="ltr:-scale-x-100" stroke={2} />
                                </Button>
                            </div>
                        </div>
                    </ServerMotion>
                ))}
            </div>

        </section>
    )
}