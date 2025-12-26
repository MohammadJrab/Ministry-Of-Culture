import { getTranslations } from "next-intl/server";
import Image from "next/image";
export default async function SyrianStorySection() {
    const t = await getTranslations('syrianStorySection');

    return (
        <section className="container mb-20 md:mb-0 mt-16 md:mt-32 min-h-screen relative flex flex-col justify-center lg:justify-start" id={"ourMessageSection"}>
            {/* << */}
            <div className="flex gap-4 items-center mt-14 w-full justify-center lg:justify-center" >
                <div className="flex w-32 md:w-32 lg:w-full h-0.5 bg-[#B9A779]">
                </div>
                <div className="flex items-center px-4 py-2  justify-center">
                    <h1 className="text-[#484848] lg:text-2xl font-medium text-nowrap ">{t('header')}</h1>
                </div>
                <div className="flex w-32 md:w-32 lg:w-full h-0.5 bg-[#B9A779]">
                </div>
            </div>

            {/* >>? */}
            <div className="grid  grid-cols-1 lg:grid-cols-2 justify-center gap-10 mx-auto mt-12 lg:mt-32 items-center">
                <div className="flex flex-col justify-center items-center lg:items-start lg:ms-11 text-start lg:text-start">

                    <h3 className="text-xl md:text-2xl   font-medium text-foreground ">
                        {t.rich('title', {
                            primary: (chunks) => <span className="text-white  px-1 bg-[#428177]">{chunks}</span>,
                            secondary: (chunks) => <span className="text-white px-1 bg-secondary">{chunks}</span>,
                            br: () => <br />
                        })}

                    </h3>
                    <p className="mt-10 font-medium text-md text-[#676767] md:text-lg">
                        {t('description')}
                    </p>
                    <p className="font-normal mt-10 text-lg md:text-xl">
                        {t('quote')}
                    </p>
                </div>
                <div className="flex w-full lg:w-fit mx-auto flex-col-reverse lg:flex-col items-center  lg:order-0 gap-4">


                    <Image
                        src="/images/syrian-story.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>


            </div>


        </section >
    )
}