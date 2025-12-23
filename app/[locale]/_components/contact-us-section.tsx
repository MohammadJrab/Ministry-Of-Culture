import Image from "next/image";
import { IconPhone, IconPrinter } from "@tabler/icons-react";
import ContactUsForm from "@/app/[locale]/_components/contact-us-form";
import { getLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import * as m from 'motion/react-m';

export default async function ContactUsSection() {
    const locale = await getLocale();
    const t = await getTranslations('contactUs');

    return (
        <section className="container xl:max-w-[1200px] scroll-m-24" id={'contact-us'}>
            <div
                className="flex flex-col lg:flex-row items-stretch w-full bg-muted rounded-3xl overflow-hidden border-y border relative">

                {/* Left: Form */}
                <m.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="flex-1 px-5 py-8 md:px-12 md:py-16 flex flex-col gap-6 justify-between"
                >
                    <div>
                        <h2 className="text-4xl font-bold">{t('title')}</h2>
                    </div>

                    <ContactUsForm />

                    <div className="pt-6 flex flex-wrap gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <IconPhone className="w-5 h-5 text-primary" />
                            <div>
                                <div className="font-bold uppercase mb-1">{t('phoneLabel')}</div>
                                <div dir="ltr">+963 953 950 500 | +963 947 625 314</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <IconPrinter className="w-5 h-5 text-primary" />
                            <div>
                                <div className="font-bold uppercase mb-1">{t('faxLabel')}</div>
                                <div dir="ltr">+963 11 334 26 06</div>
                            </div>
                        </div>
                    </div>
                </m.div>

                {/* Right: Map */}
                <m.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="hidden lg:block flex-1 relative min-h-[400px] lg:min-h-0 my-8 me-4 z-10"
                >
                    <Image
                        src={`/images/contact-map-${locale}.jpg`}
                        alt={t('mapAlt')}
                        fill
                        className="object-cover rounded-3xl shadow-lg max-w-[450px]"
                    />
                </m.div>

                <div className="hidden lg:block absolute end-0 inset-y-0 w-full max-w-72 bg-tertiary" />
            </div>
        </section>
    );
}
