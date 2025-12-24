import { getTranslations } from "next-intl/server";
import Image from "next/image";
export default async function TheNewSyriaSection() {
    const t = await getTranslations('theNewSyriaSection');
    return (
        <section className={'pt-16 md:pt-64   bg-[#F9F9F9] h-120  w-full  '}>
            <div className={'container   grid grid-cols-1 md:grid-cols-2 gap-12 items-center'}
            >
                <img src="/svg/map-with-new-syria.svg" alt="map-frame" width={800} height={350} />
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl md:text-3xl font-semibold leading-normal text-foreground max-w-2xl">
                        {t.rich('part1', {
                            primary: (chunks) => <span className="text-white  px-1 bg-[#428177]">{chunks}</span>,
                            secondary: (chunks) => <span className="text-white px-1 bg-secondary">{chunks}</span>,
                            br: () => <br />
                        })}
                    </h3>
                    <h3 className="ms-24 text-xl md:text-3xl font-medium leading-normal  text-foreground max-w-2xl">
                        {t.rich('part2', {
                            primary: (chunks) => <span className="text-white ms-2 px-2 bg-[#428177]">{chunks}</span>,
                            br: () => <br />
                        })}
                    </h3>
                </div>
            </div>
        </section>
    );
}
