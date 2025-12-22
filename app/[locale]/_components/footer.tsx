import {
    IconMail,
    IconPhone,
    IconMapPin,
    IconBrandLinkedin,
    IconBrandInstagram,
    IconCode,
    IconRocket,
    IconBrandFacebook
} from "@tabler/icons-react";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Logo from "./icons/logo";

export default async function Footer({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: "footer" });

    // Fetching localized links directly from translations
    const servicesLinks = t.raw("sections.services.links");
    const companyLinks = t.raw("sections.company.links");

    const socialLinks = [
        {
            icon: IconBrandFacebook,
            href: "https://www.facebook.com/QmindTech",
            label: t("social.facebook"),
            color: "hover:text-blue-400"
        },
        {
            icon: IconBrandInstagram,
            href: "https://instagram.com/qmindtech_",
            label: t("social.instagram"),
            color: "hover:text-pink-400"
        },
        {
            icon: IconBrandLinkedin,
            href: "https://www.linkedin.com/company/qmindtech",
            label: t("social.linkedin"),
            color: "hover:text-blue-500"
        },
    ];

    return (
        <footer className="relative bg-primary border-t overflow-hidden">
            {/* Background Effects */}
            <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
            <div className="absolute top-0 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

            <div className="container relative z-10">
                {/* Main Footer Content */}
                <div className="pt-16 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-8 gap-8 mb-6">

                        {/* Company Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="space-y-4">
                                <Link href={'/'} aria-label={'Go to homepage'}><Logo className={'w-48'} /></Link>
                            </div>

                            {/* Contact Quick Info */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-400 transition-colors">
                                    <IconMapPin
                                        className="w-4 h-4 text-primary transition-transform" />
                                    <span className="text-sm">{t("contact.address")}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400 transition-colors">
                                    <IconPhone
                                        className="w-4 h-4 text-primary transition-transform" />
                                    <span className="text-sm" dir={'ltr'}>+49 176 3662 3030</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400 transition-colors">
                                    <IconMail
                                        className="w-4 h-4 text-primary transition-transform" />
                                    <span className="text-sm">info@qmindtech.net</span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-gray-700/50 border border-gray-700/30`}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Services */}
                        <div className="lg:col-span-1">
                            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                <IconCode className="w-4 h-4 text-primary" />
                                {t("sections.services.title")}
                            </h4>
                            <ul className="space-y-2">
                                {servicesLinks.map((link: any, index: number) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="lg:col-span-1">
                            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                <IconRocket className="w-4 h-4 text-primary" />
                                {t("sections.company.title")}
                            </h4>
                            <ul className="space-y-2">
                                {companyLinks.map((link: any, index: number) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700/50 pt-4 md:py-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <span>{t("copyright", { year: new Date().getFullYear() })}</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex items-center gap-2 text-gray-400 text-xs">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                {t("status.operational")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}