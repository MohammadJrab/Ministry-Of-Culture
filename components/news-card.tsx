import Image from "next/image";
import { Link } from "@/i18n/routing";
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { News } from "@/types/news";

export function NewsCard({ news, className = '', style, readMoreTitle }: {
    news: News,
    className?: string,
    readMoreTitle: string,
    style?: React.CSSProperties;
}) {
    return (
        <Link
            href={`/news/${news.id}`}
            style={style}
            className={cn("group overflow-hidden rounded-xl border-[0.8px] border-card  bg-card shadow-md flex flex-col transition-transform hover:scale-[1.03]", className)}
        >
            <div className="relative h-56 min-w-[40%]">
                <Image
                    src={news.imgUrls[0]}
                    alt={news.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span
                    className="absolute top-2 start-2 bg-white text-xs dark:text-background font-semibold px-2 py-1 rounded-full shadow">
                    <div className="flex gap-2 text-muted-foreground">
                        {news.facebookLink && <IconBrandFacebook size={16} />}
                        {news.instagramLink && <IconBrandInstagram size={16} />}
                    </div>
                </span>
            </div>

            <div className="p-4 flex flex-col flex-grow">
                {/* Content section */}
                <div>
                    <h3 className="text-lg font-semibold text-primary">
                        {news.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-3">
                        {news.description}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4">
                    <span className="text-muted-foreground text-xs font-semibold">{news.dateTime}</span>

                    <Button asChild variant="secondary" size="sm"
                        className="text-xs group-hover:bg-primary group-hover:text-primary-foreground duration-300">
                        <span>{readMoreTitle}</span>
                    </Button>
                </div>
            </div>
        </Link>
    );
}