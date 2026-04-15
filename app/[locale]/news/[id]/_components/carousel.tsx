'use client'

import * as React from "react";
import Image from "next/image";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

const AUTOPLAY_DELAY = 5000;

export default function Carousel({ imgUrls }: { imgUrls: string[] }) {
    const locale = useLocale();
    const isRtl = locale === "ar";
    const totalSlides = imgUrls.length;
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        if (totalSlides === 0) {
            setCurrentIndex(0);
            return;
        }

        setCurrentIndex((prev) => Math.min(prev, totalSlides - 1));
    }, [totalSlides]);

    const goTo = React.useCallback(
        (index: number) => {
            if (totalSlides === 0) return;
            setCurrentIndex((index + totalSlides) % totalSlides);
        },
        [totalSlides]
    );

    const goToNext = React.useCallback(() => {
        if (totalSlides <= 1) return;
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const goToPrevious = React.useCallback(() => {
        if (totalSlides <= 1) return;
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    React.useEffect(() => {
        if (totalSlides <= 1) return;

        const intervalId = window.setInterval(goToNext, AUTOPLAY_DELAY);
        return () => window.clearInterval(intervalId);
    }, [goToNext, totalSlides]);

    if (totalSlides === 0) {
        return null;
    }

    return (
        <div className="w-full mx-auto max-md:order-2">
            <div className="relative">
                <Image
                    src={imgUrls[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    width={1200}
                    height={800}
                    priority={currentIndex === 0}
                    className="w-full h-auto rounded-lg"
                />

                {totalSlides > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={goToPrevious}
                            aria-label="Previous image"
                            className="absolute start-1 md:-start-4 top-1/2 -translate-y-1/2 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border bg-background/80 text-foreground backdrop-blur-sm transition hover:bg-background"
                        >
                            <IconArrowLeft className={cn("h-4 w-4", isRtl && "rotate-180")} />
                        </button>
                        <button
                            type="button"
                            onClick={goToNext}
                            aria-label="Next image"
                            className="absolute end-1 md:-end-4 top-1/2 -translate-y-1/2 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border bg-background/80 text-foreground backdrop-blur-sm transition hover:bg-background"
                        >
                            <IconArrowRight className={cn("h-4 w-4", isRtl && "rotate-180")} />
                        </button>
                    </>
                )}
            </div>

            {totalSlides > 1 && (
                <div className="mt-4 flex items-center justify-center gap-2">
                    {imgUrls.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            aria-label={`Go to image ${index + 1}`}
                            aria-current={index === currentIndex}
                            onClick={() => goTo(index)}
                            className={cn(
                                "h-2.5 w-2.5 rounded-full border border-background cursor-pointer",
                                index === currentIndex ? "bg-background" : "bg-transparent"
                            )}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
