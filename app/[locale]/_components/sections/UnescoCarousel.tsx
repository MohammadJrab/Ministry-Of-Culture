"use client"

import * as React from "react"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"
import { m } from "motion/react"

interface UnescoItem {
    title: string
    year: string
    image: string
}

interface UnescoCarouselProps {
    items: UnescoItem[]
    locale: string
}



export function UnescoCarousel({ items, locale }: UnescoCarouselProps) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    const dir = locale === 'ar' ? 'rtl' : 'ltr'

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <div
            className="flex flex-col items-start gap-6 w-full "
        >
            <Carousel
                setApi={setApi}
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                    Fade(),
                ]}
                opts={{
                    align: "start",
                    loop: true,
                    direction: dir,
                }}
                className="w-full"
            >
                <CarouselContent>
                    {items.map((item, index) => (
                        <CarouselItem key={index} className="basis-full">
                            <div className="flex flex-col md:flex-row items-center gap-6 text-white group cursor-pointer justify-start">

                                <div className="relative w-full md:w-64 h-60 lg:h-40 rounded-2xl overflow-hidden transition-all shrink-0">
                                    <Image

                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className={cn("flex flex-col gap-2")}>
                                    <m.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={index === current ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="text-lg font-semibold"
                                    >
                                        {item.title}
                                    </m.h3>
                                    <m.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={index === current ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        className="text-[#d6bf94] text-center lg:text-start font-semibold text-lg"
                                    >
                                        {item.year}
                                    </m.p>
                                </div>

                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-4 w-full md:w-64">
                <button
                    onClick={() => api?.scrollPrev()}
                    className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                    <span className="sr-only">Previous</span>
                    <IconArrowLeft className={cn("w-5 h-5", dir === 'rtl' && "rotate-180")} />
                </button>

                <div className="w-10 h-10 rounded-full bg-[#00695C] flex items-center justify-center text-white font-bold">
                    {current + 1}
                </div>

                <button
                    onClick={() => api?.scrollNext()}
                    className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                    <span className="sr-only">Next</span>
                    <IconArrowRight className={cn("w-5 h-5", dir === 'rtl' && "rotate-180")} />
                </button>
            </div>
        </div>
    )
}
