import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { IconBrandFacebook, IconBrandInstagram, IconCalendar } from "@tabler/icons-react";
import Carousel from "@/app/[locale]/news/[id]/_components/carousel";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { getNewsById } from "@/services/news-service";

export default async function NewsDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const { news, error } = await getNewsById(id);
    if (error) {
        if (error === 'News not found.') notFound()
        throw error
    }

    const t = await getTranslations('news');

    return (
        <section
            className={'container pt-20 pb-8 md:pt-48 md:pb-16  grid md:grid-cols-2 gap-4 md:gap-8 animate-appear'}>

            {/* Gallery Section */}
            <Carousel imgUrls={news.imgUrls} />

            <div className={'contents md:flex flex-col gap-2 md:gap-4'}>
                {/* Header section matching the design */}
                <div className="max-md:order-1 flex justify-between items-start">
                    <div className="flex-1 flex flex-wrap gap-4 items-center justify-between">
                        <h1 className={'text-xl font-semibold text-primary'}>{news.title}</h1>

                        <div className="flex items-center gap-3 flex-wrap">
                            {/* News status */}
                            <div
                                className="flex items-center gap-1 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                                <IconCalendar size={16} />
                                <span>{news.dateTime}</span>
                            </div>

                            {news.facebookLink &&
                                <Button asChild variant={'secondary'} size={'smIconOnMobile'} className={'!size-8'}>
                                    <a href={news.facebookLink} target="_blank" rel="noopener noreferrer">
                                        <IconBrandFacebook />
                                    </a>
                                </Button>}

                            {news.instagramLink &&
                                <Button asChild variant={'secondary'} size={'smIconOnMobile'} className={'!size-8'}>
                                    <a href={news.instagramLink} target="_blank" rel="noopener noreferrer">
                                        <IconBrandInstagram />
                                    </a>
                                </Button>}
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className={'max-md:order-2'}>
                    <h2 className={'font-bold'}>{t('descriptionTitle')}</h2>
                    <p className="leading-relaxed">{news.description}</p></div>
            </div>
        </section>
    );
}

export async function generateMetadata({ params }): Promise<Metadata> {
    const { locale, id } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata.news' });
    const { news, error } = await getNewsById(id);

    return {
        title: !error ? t('title', { news: news.title }) : t('fallbackTitle'),
        description: t('description')
    };
}