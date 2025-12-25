import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/news-card";
import { IconNewsOff } from "@tabler/icons-react";
import { getTranslations } from 'next-intl/server';
import * as m from "motion/react-m"
import { Variants } from "motion";
import { News } from "@/types/news";

const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
            type: "spring",
            bounce: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
        },
    },
};

export default async function LatestNewsSection({ news }: { news: News[] }) {
    const t = await getTranslations('news');

    return (
        <section className="container flex flex-col gap-8 items-center scroll-m-24" id="latest-news">
            <m.h2
                className="font-semibold text-xl"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4 }}
            >
                {t('latestNews')}
            </m.h2>

            {news.length > 0 ? (
                <>
                    <m.div
                        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                    >
                        {news.map((newsItem) => (
                            <m.div key={newsItem.id} variants={itemVariants}>
                                <NewsCard news={newsItem} readMoreTitle={t('readMore')} />
                            </m.div>
                        ))}
                    </m.div>

                    <m.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <Button asChild variant="secondary">
                            <Link href="/news">{t('seeMore')}</Link>
                        </Button>
                    </m.div>
                </>
            ) : (
                <m.div
                    className="border rounded-xl px-6 py-10 text-center text-muted-foreground bg-muted/40 shadow-sm max-w-lg w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5 }}
                >
                    <IconNewsOff size={40} className="mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-medium mb-2">{t('noNewsAvailableTitle')}</h3>
                    <p className="text-sm text-pretty">
                        {t('noNewsAvailableDescription')}
                    </p>
                </m.div>
            )}
        </section>
    );
}