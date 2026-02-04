import "@/app/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { LazyMotion, domAnimation } from "motion/react";
import localFont from "next/font/local";
import { Link, routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getFormatterOptions } from "@/i18n/formatter-options";
import { TimeZoneCookieSetter } from "./_components/time-zone-cookie-setter";
import DirectionProvider from "@/components/ui/direction-provider";
import Footer from "@/app/[locale]/_components/footer";
import { Metadata } from "next";
import { Montserrat, Changa, Cairo } from "next/font/google";
import { Navbar } from "./_components/nav-bar";
import { AuroraText } from "@/components/magicui/aurora-text";
const montserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: false,
});
const changaFont = Changa({
  variable: "--font-changa",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  preload: false,
});
const cairoFont = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  preload: false,
});

export default async function RootLayout(props) {
  const params = await props.params;
  const { locale } = params;
  const { children } = props;

  // Ensure that the incoming `locale` is valid.
  if (!routing.locales.includes(locale as any)) notFound();
  const direction = locale === "ar" ? "rtl" : "ltr";
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "footer" });

  return (
    <NextIntlClientProvider
      messages={messages}
      formats={await getFormatterOptions()}
    >
      <html
        lang={locale}
        suppressHydrationWarning
        className="scroll-smooth antialiased selection:bg-primary/80 selection:text-primary-foreground"
        dir={direction}
      >
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, interactive-widget=resizes-content"
          />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </head>
        <body
          className={`${montserratFont.variable} ${changaFont.variable} ${cairoFont.variable} antialiased`}
        >
          <LazyMotion strict features={domAnimation}>
            <DirectionProvider dir={direction}>
              <div className="flex flex-col min-h-screen">
                <a
                  href="https://dibfsy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="انضموا إلينا في معرض الكتاب، حيث تلتقي العقول وتزدهر الثقافة. ننتظركم في الفترة من 2026-02-06 إلى 2026-02-12"
                  className="group relative block w-full  no-underline"
                >
                  <div className="w-full bg-gradient-to-r from-[#0f3b2e] via-[#14524a] to-[#0f3b2e] text-white">
                    <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-3 text-center text-sm font-semibold leading-relaxed transition-colors duration-200 group-hover:text-white/90 group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-white/70 md:text-base">
                      انضموا إلينا في معرض الكتاب، حيث تلتقي العقول وتزدهر
                      الثقافة. ننتظركم في الفترة من 2026-02-06 إلى 2026-02-12
                    </div>
                  </div>
                </a>
                <Navbar />
                <main className={"flex-1"}>{children}</main>
                <Footer locale={locale} />
                <Link href={"https://qmindtech.net"}>
                  <div className="relative flex h-10 w-full flex-col items-center justify-center overflow-hidden bg-white">
                    <div className="flex items-center gap-2">
                      <span className="text-center ltr:text-xs text-sm font-medium">
                        {t("developedBy")} {t("qmindTech")}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </DirectionProvider>
            <TimeZoneCookieSetter />
          </LazyMotion>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const appName = t("appName");

  return {
    applicationName: appName,
    authors: [{ name: appName }],
    creator: "Ministry of Culture",
    publisher: appName,
    keywords: t.raw("keywords") as string[],
    description: t("description"),

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: websiteUrl,
      siteName: appName,
      type: "website",
      images: [
        {
          url: `${websiteUrl}/images/social-media-image.jpg`,
          alt: "Ministry of Culture Social Media Image",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [`${websiteUrl}/images/social-media-image.png`],
    },

    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  } as Metadata;
}
