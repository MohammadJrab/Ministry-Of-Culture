
import { getTranslations, getLocale } from "next-intl/server";
import { ServerMotion, MotionItem } from "@/components/motion";
import Image from "next/image";

export default async function TheNewSyriaSection() {
    const t = await getTranslations('theNewSyriaSection');
    const locale = await getLocale();
    const isRtl = locale === 'ar';
    return (
        <section className={'container pt-32 md:pt-64  w-full'}>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-12 items-center'}>
                <ServerMotion animation={isRtl ? "slideRight" : "slideLeft"} className="order-2 md:order-1">
                    <Image
                        src="/svg/map-with-new-syria.svg"
                        alt="map-frame"
                        width={765}
                        height={369}
                        className="w-full scale-140 lg:scale-100 object-center"
                        priority
                    />
                </ServerMotion>
                <ServerMotion animation={isRtl ? "slideLeft" : "slideRight"} className="flex flex-col gap-4 order-1 md:order-2">
                    <h3 className="text-lg md:text-3xl font-semibold leading-normal text-foreground max-w-2xl">
                        {t.rich('part1', {
                            primary: (chunks) => <span className="text-white px-1 bg-[#428177]">{chunks}</span>,
                            secondary: (chunks) => <span className="text-white px-1 bg-secondary">{chunks}</span>,
                            br: () => <br />
                        })}
                    </h3>
                    <h3 className="ms-24 md:ms-24 text-lg md:text-3xl  font-medium leading-normal text-foreground max-w-2xl">
                        {t.rich('part2', {
                            primary: (chunks) => <span className="text-white ms-2 px-2 bg-[#428177]">{chunks}</span>,
                            br: () => <br />
                        })}
                    </h3>
                </ServerMotion>
            </div>
        </section>
    );
}
