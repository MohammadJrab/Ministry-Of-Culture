'use client'
import Autoplay from "embla-carousel-autoplay";
import {
    CarouselContent,
    CarouselDots,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    Carousel as ShadCNCarousel
} from "@/components/ui/carousel";
import Image from "next/image";
import {useLocale} from "next-intl";

export default function Carousel({imgUrls}: { imgUrls: string[] })
{
    const dir = useLocale() === 'ar' ? 'rtl' : 'ltr';

    return (
        <ShadCNCarousel className="w-full mx-auto max-md:order-2"
                        opts={{align: "start", loop: true, direction: dir}}
                        plugins={[Autoplay({delay: 5000})]}>
            <CarouselContent>
                {imgUrls.map((url, index) => (
                    <CarouselItem key={index}>
                        <div className={'relative h-96'}>
                            <Image src={url} alt={'Image ' + index} className={'object-cover rounded-lg'} fill/>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className={'start-1 md:-start-4'}/>
            <CarouselNext className={'end-1 md:-end-4'}/>
            <CarouselDots/>
        </ShadCNCarousel>
    );
}