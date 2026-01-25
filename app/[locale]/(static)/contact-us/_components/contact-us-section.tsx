import Image from "next/image";
import { IconPhone, IconPrinter, IconMail, IconMapPinShare, IconLoader2 } from "@tabler/icons-react";
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
                                    <span dir="ltr" className="text-md md:text-md font-medium">+963 3331556</span>
                                    <span dir="ltr" className="text-md md:text-md font-medium">+963 3331557</span>
                                </div>

                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-[#1A4D45] shadow-md">
                                    <IconMail size={28} />
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className="font-semibold text-lg">{t('byEmail')}</span>
                                    <span className="text-md md:text-md font-medium">info@moc.gov.sy</span>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#1A4D45] text-white shadow-md">
                                    <IconMapPinShare size={28} />
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className="font-semibold text-lg">{t('address')}</span>
                                    <span className="text-sm md:text-md font-medium">{t('addressLine')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[40%] w-full">
                        <div className="absolute -z-10 inset-0 bg-primary flex items-center justify-center rounded-ee-3xl ">
                            <IconLoader2 className="animate-spin text-white " size={32} />
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d927.9997058296512!2d36.27940427625233!3d33.522906356509054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e737bcd3711d%3A0xbf1630723c5e1394!2sMinistry%20of%20Culture!5e0!3m2!1sen!2sus!4v1768815784399!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            className="rounded-bse-3xl shadow-lg border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </m.div>

            </div>
        </section>
    );
}
