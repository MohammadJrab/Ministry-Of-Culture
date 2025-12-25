import SearchBarInput from "@/components/search-bar-input";
import { IconFilterCancel, IconNewsOff } from "@tabler/icons-react";
import { NewsCard } from "@/components/news-card";
import { Pagination } from "@/components/pagination";
import { getLocale, getTranslations } from 'next-intl/server';
import { DatePickerLocaleProvider } from "@/context/date-picker-locale-provider";
import FromToDateFilter from "@/components/filters/from-to-date-filter";
import ClearFiltersButton from "@/components/filters/clear-filters-button";
import { Filters, parseSearchParams } from "@/lib/filters";
import { Metadata } from "next";
import { getNews } from "@/services/news-service";

export default async function NewsPage({ searchParams }: { searchParams: Promise<Filters> }) {
    const locale = await getLocale();
    const t = await getTranslations('news');
    const filters = parseSearchParams(await searchParams);

    const { news, error, totalPages, totalCount, page } = await getNews(filters);
    if (error) throw error;

    return (
        <section className={'container mt-16  py-24 flex flex-col gap-4 animate-appear'}>
            {/* Header Section */}
            <div className="flex max-sm:flex-col sm:justify-between max-sm:gap-2">
                <div className="flex items-center justify-between gap-2 w-full">
                    <h1 className="text-xl font-semibold">{t('title', { count: totalCount })}</h1>

                    <div className="flex items-center">
                        <DatePickerLocaleProvider localeName={locale}>
                            <div className="relative">
                                <FromToDateFilter />
                                {(filters?.FromDate || filters?.ToDate) && (
                                    <span
                                        className="absolute right-2 top-2 size-2 bg-primary rounded-full pointer-events-none" />
                                )}
                            </div>
                        </DatePickerLocaleProvider>
                        <ClearFiltersButton variant="ghost" size="smIconOnMobile">
                            <IconFilterCancel />
                        </ClearFiltersButton>
                    </div>
                </div>
                <SearchBarInput />
            </div>

            {news.length > 0 ? <>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {news.map((news, index) => (
                        <div
                            key={news.id}
                            className="animate-fade-in-up opacity-0"
                            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                        >
                            <NewsCard
                                news={news}
                                readMoreTitle={t('readMore')}
                            />
                        </div>
                    ))}
                </div>
                <Pagination totalPages={totalPages} currentPage={page} />
            </>
                :
                <div
                    className="px-6 py-10 text-center text-muted-foreground max-w-lg w-full mx-auto">
                    <IconNewsOff size={40} className="mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-medium mb-2">{t('noNewsAvailableTitle')}</h3>
                    <p className="text-sm text-pretty">
                        {t('noNewsAvailableDescription')}
                    </p>
                </div>
            }
        </section>
    );
}

export async function generateMetadata({ params }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata.newsPage' });

    return {
        title: t('title'),
        description: t('description')
    };
}