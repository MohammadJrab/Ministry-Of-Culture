"use client";
import React from "react";
import { IconArrowBearLeft, IconArrowUpLeft, IconCalendar, IconMenuDeep } from "@tabler/icons-react";
import LanguageSelector from "@/components/language-selector";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Logo from "./icons/logo";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";


interface RouteProps {
    href: string;
    label: string;
}

const routeList: RouteProps[] = [
    {
        href: "/",
        label: "home",
    },
    {
        href: "/news",
        label: "news",
    },
    {
        href: "/about-ministry",
        label: "aboutMinistry",
    },
    {
        href: "/international-participation",
        label: "internationalParticipation",
    },
    {
        href: "/contact-us",
        label: "contactUs",
    },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const locale = useLocale();
    const t = useTranslations('header');

    return (
        <>

            <header className="fixed inset-x-0 top-0 z-20 flex flex-col w-full">
                <div className="bg-primary w-full">
                    <img src="/svg/nav-shape.svg" alt="nav-shape" className="w-full h-auto object-cover" />
                </div>

                <div className="w-full bg-white shadow-md">
                    <div className="container h-16 flex justify-between items-center">
                        <Link href="/" aria-label="Go to homepage" className='group w-24 relative'>
                            <Logo className="transition-opacity  duration-300 max-sm:scale-86" />

                        </Link>

                        {/* <!-- Mobile --> */}
                        <div className="flex items-center lg:hidden">


                            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                <SheetTrigger asChild className={'lg:hidden'} onClick={() => setIsOpen(!isOpen)}>
                                    <Button variant={'ghost'} size={'icon'} className={'[&_svg]:size-6'}
                                        aria-label={'Open sidebar menu.'}>
                                        <IconMenuDeep className="rtl:-scale-x-100" />
                                    </Button>
                                </SheetTrigger>

                                <SheetContent
                                    side={locale === 'ar' ? 'left' : 'right'}
                                    className="flex flex-col justify-between border-0"
                                >
                                    <div>
                                        <SheetHeader className="mb-4 ml-4">
                                            <SheetTitle className="flex items-center">
                                                <Link href="/" aria-label="Go to homepage" onClick={() => setIsOpen(false)}>
                                                    <Logo className="max-sm:scale-86" />
                                                </Link>
                                            </SheetTitle>
                                        </SheetHeader>

                                        <div className="flex flex-col gap-2">
                                            {routeList.map(({ href, label }) => (
                                                <Button
                                                    key={href}
                                                    onClick={() => setIsOpen(false)}
                                                    asChild
                                                    variant="ghost"
                                                    className="justify-start text-base"
                                                >
                                                    <Link href={href}>{t(label)}</Link>
                                                </Button>
                                            ))}

                                            <div className="h-[1px]  w-full bg-foreground/40 my-2" />
                                            <Button className={'bg-lightBlack  w-fit  py-5 rounded-full'} >
                                                <Link href={'http://events.moc.gov.sy'} target="_blank">{t('events')}</Link>
                                                <div className="rounded-full size-7  flex items-center justify-center bg-white">
                                                    <IconArrowUpLeft className="text-lightBlack ltr:-scale-x-100" stroke={2} />

                                                </div>
                                            </Button>
                                            <LanguageSelector />
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>

                        {/* <!-- Desktop --> */}
                        <NavigationMenu className="hidden lg:block">
                            <NavigationMenuList className='gap-4'>
                                {routeList.map(({ href, label }) => (
                                    <NavigationMenuItem key={href}>
                                        <NavigationMenuLink asChild>
                                            <Link href={href}>
                                                {t(label)}
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                                <NavigationMenuItem>
                                    <LanguageSelector />
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        <Button className={'max-lg:hidden bg-lightBlack rounded-full'} >
                            <Link href={'http://events.moc.gov.sy'} target="_blank">{t('events')}</Link>
                            <div className="rounded-full size-7 flex items-center justify-center bg-white">
                                <IconArrowUpLeft className="text-lightBlack ltr:-scale-x-100" stroke={2} />

                            </div>
                        </Button>
                    </div>
                </div>
            </header>

        </>
    );
}