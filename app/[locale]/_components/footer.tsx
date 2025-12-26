import {
    IconBrandInstagram,
    IconBrandFacebook,
    IconBrandFacebookFilled
} from "@tabler/icons-react";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import LogoDark from "./icons/logoDark";
import { Button } from "@/components/ui/button";

export default async function Footer({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: "footer" });

    const servicesLinks = t.raw("sections.sections.links");
    const importantLinks = t.raw("sections.importantLinks.links");

    const socialLinks = [
        {
            icon: IconBrandFacebook,
            href: "https://www.facebook.com/profile.php?id=61574722665055",
            label: t("social.facebook"),
            color: "hover:text-blue-400"
        },
        {
            icon: IconBrandInstagram,
            href: "https://www.instagram.com/mocsyr/",
            label: t("social.instagram"),
            color: "hover:text-pink-400"
        }
    ];

    return (
        <footer className="relative bg-primary border-t overflow-hidden">
            <div className="bg-primary w-full">
                <img src="/svg/nav-shape.svg" alt="nav-shape" className="w-full h-auto object-cover" />
            </div>
            {/* Background Effects */}
            <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
            <div className="absolute top-0 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

            <div className="container relative z-10">
                {/* Main Footer Content */}
                <div className="py-12 md:pt-16 md:pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-8 mb-6 text-center md:text-start">

                        {/* Logo & Copy Right */}
                        <div className="lg:col-span-2 space-y-6 flex flex-col items-center md:items-start">
                            <div className="space-y-4">
                                <Link href={'/'} aria-label={'Go to homepage'}><LogoDark /></Link>
                            </div>
                            <div className="text-gray-400 text-sm">
                                {t.rich('copyright', {
                                    year: new Date().getFullYear(),

                                    br: () => <br />
                                })}
                            </div>



                        </div>

                        {/* Sections */}
                        <div className="lg:col-span-1">
                            <h4 className="text-gold font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
                                {t("sections.sections.title")}
                            </h4>
                            <ul className="space-y-2">
                                {servicesLinks.map((link: any, index: number) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-white text-sm transition-colors hover:translate-x-1 inline-block duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Important Links */}
                        <div className="lg:col-span-1">
                            <h4 className="text-gold  font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
                                {t("sections.importantLinks.title")}
                            </h4>
                            <ul className="space-y-2">
                                {importantLinks.map((link: any, index: number) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-white text-sm transition-colors hover:translate-x-1 inline-block duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Contact */}
                        <div className="lg:col-span-1 flex flex-col items-center md:items-start">
                            <h4 className="text-gold font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
                                {t("social.title")}
                            </h4>
                            <div className="flex gap-4">
                                <Button asChild size={"icon"} variant="outline" className="bg-transparent border-[0.8px] text-white hover:text-primary border-white shadow-none rounded-md [&_svg]:size-6  ">
                                    <Link href={"https://www.instagram.com/mocsyr/"} target="_blank">
                                        <IconBrandInstagram />
                                    </Link>
                                </Button>
                                <Button asChild size={"icon"} variant="outline" className="bg-transparent border-[0.8px] text-white hover:text-primary border-white shadow-none rounded-md [&_svg]:size-6">
                                    <Link href={"https://www.facebook.com/profile.php?id=61574722665055"} target="_blank">
                                        <IconBrandFacebookFilled />
                                    </Link>
                                </Button>

                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <div className="bg-primary w-full">
                <img src="/svg/nav-shape.svg" alt="nav-shape" className="w-full h-auto object-cover" />
            </div>
        </footer>
    );
}