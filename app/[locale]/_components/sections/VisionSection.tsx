import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { ServerMotion, MotionItem } from "@/components/motion";

export default async function VisionSection() {
    const t = await getTranslations('visionSection');
    return (
        <section className={' mb-24  md:mb-30  w-full'}>
            <ServerMotion animation="scaleIn" className="flex relative justify-center items-center text-center">
                <img src="/svg/half-shape-left.svg" alt="Vision" className="absolute left-0 " />
                <h3 className="pt-8 px-6 md:pt-0  text-xl md:text-2xl leading-12 font-medium text-foreground max-w-6xl text-pretty ">
                    {t.rich('quote', {
                        primary: (chunks) => <span className="text-white  pe-5 ps-1 bg-[#428177]">{chunks}</span>,
                        secondary: (chunks) => <span className="text-white px-1 bg-secondary">{chunks}</span>,
                        br: () => <br />
                    })}

                </h3>
            </ServerMotion>
        </section>
    );
}

