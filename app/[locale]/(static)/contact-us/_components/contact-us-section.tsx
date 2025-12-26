import Image from "next/image";
import { IconPhone, IconPrinter, IconMail, IconMapPinShare } from "@tabler/icons-react";
import ContactUsForm from "@/app/[locale]/(static)/contact-us/_components/contact-us-form";
import { getLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import * as m from 'motion/react-m';

export default async function ContactUsSection() {
    const locale = await getLocale();
    const t = await getTranslations('contactUs');

    return (
        <section className="container xl:max-w-[1200px] mt-20 mb-20 md:my-32 scroll-m-24" id={'contact-us'}>
            <div
                className="flex flex-col lg:flex-row items-stretch w-full shadow-xl rounded-3xl overflow-hidden relative">

                {/* Left: Form */}
                <m.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="flex-1 px-5 py-8 md:px-12 md:py-16 flex flex-col gap-6 justify-between"
                >
                    <div className="flex flex-col gap-2" >
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl   font-medium">{t('title')}</h3>
                            <img src="/svg/egle-contact-us.svg" alt="egle-contact-us" />
                        </div>
                        <div className="h-0.5 m-0 p-0 bg-[#428177]" ></div>
                    </div>

                    <ContactUsForm />


                </m.div>

                {/* Right: Map */}
                <m.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="hidden lg:flex flex-col flex-1 min-h-[400px] lg:min-h-0 my-8 me-4 z-10"
                >
                    <div className="relative h-[60%] w-full">
                        <Image
                            src="/images/contact-us-background.jpg"
                            alt="contact-us-background"
                            fill
                            className="object-cover  blur-[0.2px]  rounded-se-3xl shadow-lg"
                        />
                        <div className="absolute inset-0 z-10 rounded-se-3xl bg-[#428177CC]/80" />

                        <div className="absolute inset-0 z-20 flex flex-col justify-center items-start gap-6 ps-10 text-white">
                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#1A4D45] text-white shadow-md">
                                    <IconPhone size={28} />
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className="font-semibold text-lg">{t('byPhone')}</span>
                                    <span dir="ltr" className="text-sm md:text-md font-medium">+963 9452 243 11</span>
                                    <span dir="ltr" className="text-sm md:text-md font-medium">+963 9452 243 12</span>
                                </div>

                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-[#1A4D45] shadow-md">
                                    <IconMail size={28} />
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className="font-semibold text-lg">{t('byEmail')}</span>
                                    <span className="text-sm md:text-md font-medium">moc@sy.com</span>
                                    <span className="text-sm md:text-md font-medium">moc-backup@sy.com</span>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#1A4D45] text-white shadow-md">
                                    <IconMapPinShare size={28} />
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className="font-semibold text-lg">{t('address')}</span>
                                    <span className="text-sm md:text-md font-medium">{t('addressLine1')}</span>
                                    <span className="text-sm md:text-md font-medium">{t('addressLine2')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[40%] w-full">
                        <Image
                            src={`/images/contact-map-${locale}.jpg`}
                            alt={t('mapAlt')}
                            fill
                            className="object-cover rounded-bse-3xl shadow-lg"
                        />
                    </div>
                </m.div>

            </div>
        </section>
    );
}
