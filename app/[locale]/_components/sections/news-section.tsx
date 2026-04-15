import { getLocale, getTranslations } from "next-intl/server";
import { getNews } from "@/services/news-service";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ServerMotion } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { IconArrowLeft, IconArrowRight, IconCalendar } from "@tabler/icons-react";
import { NewsCard } from "@/components/news-card";

export default async function NewsSection() {
    const t = await getTranslations('news');
    const { news } = await getNews({ PageSize: 6 });
    const locale = await getLocale();
    const isRtl = locale === 'ar';
    if (!news || news.length === 0) return null;

    return (
        <section className="container py-12 md:py-20" id="news">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                    <div className="space-y-2">
                        <h2 className="text-2xl md:text-3xl text-start font-medium text-foreground">
                            {t('latestNews')}
                        </h2>
                        <div className="w-20 h-1 bg-primary rounded-full" />
                    </div>
                    <Button asChild variant="ghost" className="group text-primary hover:text-primary/80 hover:bg-transparent p-0">
                        <Link href="/news" className="flex items-center gap-2 text-lg font-medium">
                            {t('seeMore')}
                            {isRtl ? <IconArrowLeft className="w-5 h-5 transition-transform group-hover:translate-x-1" /> : <IconArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
                        </Link>
                    </Button>
                </div>

                <div className="flex md:flex-row flex-wrap gap-8 justify-center ">
                    {news.map((item, index) => (
                        <ServerMotion key={item.id} animation="fadeUp" staggerIndex={index} hover="lift" viewport="early">
                            <NewsCard
                                news={item}
                                readMoreTitle={t('readMore')}
                                className="max-w-96 max-h-96"
                            />
                        </ServerMotion>
                    ))}
                </div>
            </div>
        </section>
    );
}
