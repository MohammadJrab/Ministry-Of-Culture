import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { IconArrowBearLeft, IconArrowUpLeft } from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";
export default async function HighlightsOfInternationalParticipations() {
    const t = await getTranslations();
    const indices = Array.from({ length: 4 }, (_, i) => (i + 1).toString());


    return (
        <section className="container min-h-screen mt-40 relative flex flex-col justify-center lg:justify-start" id={"ourMessageSection"}>
            {/* << */}
            <div className="flex gap-4 items-center mt-14 w-full justify-center lg:justify-center" >
                <div className="flex w-32 md:w-32 lg:w-full h-0.5 bg-[#B9A779]">
                </div>
                <div className="flex items-center px-4 py-2  justify-center">
                    <h1 className="text-[#484848] lg:text-2xl font-medium text-nowrap ">{t('highlightsOfInternationalParticipations.title')}</h1>
                </div>
                <div className="flex w-32 md:w-32 lg:w-full h-0.5 bg-[#B9A779]">
                </div>
            </div>

            {/* >>? */}
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-28 justify-items-center  mx-auto">
                {indices.map((index: string) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row bg-white rounded-lg border border-[#E3E7E5] overflow-hidden"
                    >
                        {/* Right Image */}
                        <img
                            src={`/images/internationalParticipation${index}.png`}
                            alt={`internationalParticipation${index}`}
                            className=" object-contain h-80 md:object-cover m-3 md:h-64 md:w-64"
                        />
                        {/* Left Content */}
                        <div className="flex flex-col justify-between px-8 py-6 md:py-auto md:p-8 md:w-1/2">

                            {/* Title */}
                            <h3 className="text-[#484848] text-lg font-semibold leading-relaxed">
                                {t(`highlightsOfInternationalParticipations.highlights.${index}.title`)}
                            </h3>

                            {/* Description */}
                            <p className="text-[#4B5563] text-base leading-relaxed ">
                                {t(`highlightsOfInternationalParticipations.highlights.${index}.description`)}
                            </p>

                            {/* Read More Button */}
                            <Button className={'md:w-32 mt-4 bg-transparent hover:text-white border-[1px] border-primary rounded-full text-lightBlack'} >
                                <Link href={'https://moc.gov.sy/'} target="_blank">{t('readMore')}

                                </Link>
                                <IconArrowUpLeft stroke={2} />
                            </Button>
                        </div>


                    </div>
                ))}
            </div>

        </section >
    )
}