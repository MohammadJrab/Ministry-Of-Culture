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

interface UnescoItem {
    title: string
    year: string
    image: string
}

interface UnescoCarouselProps {
    items: UnescoItem[]
}

export function UnescoCarousel({ items }: UnescoCarouselProps) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

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
            className="flex flex-col items-start gap-6 w-full"
        >
            <Carousel
                setApi={setApi}
                opts={{
                    align: "start",
                    loop: true,
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
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-[#A48E68] font-semibold text-lg">{item.year}</p>
                                </div>

                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-4 w-full md:w-64" dir="ltr">
                <button
                    onClick={() => api?.scrollPrev()}
                    className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                    <span className="sr-only">Previous</span>
                    <IconArrowLeft className="w-5 h-5" />
                </button>

                <div className="w-10 h-10 rounded-full bg-[#00695C] flex items-center justify-center text-white font-bold">
                    {current + 1}
                </div>

                <button
                    onClick={() => api?.scrollNext()}
                    className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                    <span className="sr-only">Next</span>
                    <IconArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}
