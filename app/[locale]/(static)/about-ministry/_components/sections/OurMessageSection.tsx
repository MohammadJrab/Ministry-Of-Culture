import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { ServerMotion, MotionItem } from "@/components/motion";

export default async function OurMessageSection() {
    const t = await getTranslations('ourMessageSection');

    return (
        <section className="container relative flex flex-col justify-center lg:justify-start" id={"ourMessageSection"}>

            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-10 mx-auto mt-24 lg:mt-46 items-center">
                <ServerMotion animation="slideLeft" className="flex w-full lg:w-fit mx-auto flex-col-reverse lg:flex-col items-center lg:order-0 gap-4">
                    <Image
                        src="/images/ourMessage.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </ServerMotion>
                <ServerMotion animation="slideRight" className="flex flex-col justify-center items-center lg:items-start lg:ms-11 text-center lg:text-start">
                    <div className="w-48 mb-6">
                        <h2 className="text-[#428177] text-3xl md:text-3xl font-bold">
                            {t('title')}
                            <span className="block h-0.5 w-24 bg-[#B9A779] mx-auto mt-2"></span>
                        </h2>
                    </div>
                    <p className="font-normal text-lg md:text-2xl">
                        {t('description')}
                    </p>
                </ServerMotion>
            </div>

        </section>
    )
}