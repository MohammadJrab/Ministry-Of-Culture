
import { getTranslations } from "next-intl/server";
import { ServerMotion, MotionItem } from "@/components/motion";

export default async function TheNewSyriaSection() {
    const t = await getTranslations('theNewSyriaSection');
    return (
        <section className={'container pt-32 md:pt-64  w-full'}>
            <div className={'flex flex-col-reverse md:flex-row gap-12 items-center'}>
                <ServerMotion animation="slideLeft">
                    <img src="/svg/map-with-new-syria.svg" alt="map-frame" width={800} height={350} />
                </ServerMotion>
                <ServerMotion animation="slideRight" className="flex flex-col gap-4">
                    <h3 className="text-2xl md:text-3xl font-semibold leading-normal text-foreground max-w-2xl">
                        {t.rich('part1', {
                            primary: (chunks) => <span className="text-white px-1 bg-[#428177]">{chunks}</span>,
                            secondary: (chunks) => <span className="text-white px-1 bg-secondary">{chunks}</span>,
                            br: () => <br />
                        })}
                    </h3>
                    <h3 className="ms-24 md:ms-24 text-2xl md:text-3xl font-medium leading-normal text-foreground max-w-2xl">
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
