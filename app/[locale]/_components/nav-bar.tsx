"use client";
import React from "react";
import {
  IconArrowBearLeft,
  IconArrowUpLeft,
  IconCalendar,
  IconMenuDeep,
} from "@tabler/icons-react";
import LanguageSelector from "@/components/language-selector";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Logo from "./icons/logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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
  // {
  //     href: "/international-participation",
  //     label: "internationalParticipation",
  // },
  {
    href: "/contact-us",
    label: "contactUs",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const locale = useLocale();
  const t = useTranslations("header");

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-20 flex flex-col w-full">
        <a
          href="https://dibfsy.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="انضموا إلينا في معرض الكتاب، حيث تلتقي العقول وتزدهر الثقافة. ننتظركم في الفترة من 2026-02-06 إلى 2026-02-16"
          className="group relative block w-full  no-underline"
        >
          <div className="w-full bg-gradient-to-r from-[#0f3b2e] via-[#14524a] to-[#0f3b2e] text-white">
            <div className="mx-auto flex text-xs max-w-6xl text-balance items-center justify-center gap-2 px-4 py-3 text-center font-semibold leading-relaxed transition-colors duration-200 group-hover:text-white/90 group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-white/70 md:text-base">
              <div>
                انضموا إلينا في معرض الكتاب، ننتظركم من <span className="text-nowrap">2026-02-06</span> إلى <span className="text-nowrap">2026-02-16</span>{" "}
              </div>
              <IconArrowUpLeft
                className="text-white size-4 ltr:-scale-x-100 shrink-0"
                stroke={2}
              />
            </div>
          </div>
        </a>
        {/* <div className="bg-primary w-full relative">
          <img
            src="/svg/nav-shape.svg"
            alt="nav-shape"
            className="w-full h-12 object-cover lg:scale-150 scale-250 object-[20%_10%_20%_10%]"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary" />
        </div> */}

        <div className="w-full bg-white shadow-md">
          <div className="container h-16 flex justify-between items-center">
            <Link
              href="/"
              aria-label="Go to homepage"
              className="group w-24 relative"
            >
              <Logo className="transition-opacity  duration-300 max-sm:scale-86 lg:max-xl:scale-62" />
            </Link>

            {/* <!-- Mobile --> */}
            <div className="flex items-center lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger
                  asChild
                  className={"lg:hidden"}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    className={"[&_svg]:size-6"}
                    aria-label={"Open sidebar menu."}
                  >
                    <IconMenuDeep className="rtl:-scale-x-100" />
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side={locale === "ar" ? "left" : "right"}
                  className="flex flex-col justify-between border-0"
                >
                  <div>
                    <SheetHeader className="mb-4 ml-4">
                      <SheetTitle className="flex items-center">
                        <Link
                          href="/"
                          aria-label="Go to homepage"
                          onClick={() => setIsOpen(false)}
                        >
                          <Logo className="max-sm:scale-86 lg:max-xl:hidden" />
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
                      <Button
                        className={"bg-lightBlack  w-fit  py-5 rounded-full"}
                      >
                        <Link href={"http://events.moc.gov.sy"} target="_blank">
                          {t("events")}
                        </Link>
                        <div className="rounded-full size-7  flex items-center justify-center bg-white">
                          <IconArrowUpLeft
                            className="text-lightBlack ltr:-scale-x-100"
                            stroke={2}
                          />
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
              <NavigationMenuList className="gap-4">
                {routeList.map(({ href, label }) => (
                  <NavigationMenuItem key={href}>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link href={href}>{t(label)}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <LanguageSelector />
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              className={"max-lg:hidden bg-lightBlack rounded-full"}
              asChild
            >
              <Link href={"http://events.moc.gov.sy/ar/"} target="_blank">
                {t("events")}
                <div className="rounded-full size-7 flex items-center justify-center bg-white">
                  <IconArrowUpLeft
                    className="text-lightBlack ltr:-scale-x-100"
                    stroke={2}
                  />
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
