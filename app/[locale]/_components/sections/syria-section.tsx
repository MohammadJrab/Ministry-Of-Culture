import { getTranslations } from "next-intl/server";
import Image from "next/image";
export default async function SyriaSection() {
    const t = await getTranslations('syria');
    return (
        <section className={'pt-16 md:pt-32 min-h-[400px]  bg-[#F9F9F9] h-120  w-full  bg-size-[120%] bg-top bg-no-repeat bg-[url(/images/map-frame.svg)]'}>
            <div className={'container   grid grid-cols-1 md:grid-cols-2 gap-12 items-center'}
            >
                <Image src="/images/map.svg" alt="map-frame" width={800} height={350} />
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl md:text-3xl font-semibold leading-normal text-foreground max-w-2xl">
                        {t.rich('title', {
                            primary: (chunks) => <span className="text-primary">{chunks}</span>,
                            secondary: (chunks) => <span className="text-secondary">{chunks}</span>,
                            br: () => <br />
                        })}

                    </h3>
                    <p className="text-lg font-normal mt-12">{t('description')}</p>
                </div>
            </div>
        </section>
    );
}
