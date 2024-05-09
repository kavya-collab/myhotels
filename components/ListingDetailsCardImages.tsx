import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import type { ListingType } from "./ListingCard";
import { useState } from 'react';

const ListingDetailsCardImages = ({ listing }: { listing: ListingType }) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    return (
        <>

            <Image src={`/assets/${listing.images[currentImageIndex]}`} alt={listing.name} width={1920} height={1080}
                className='mb-4 h-[500px] w-full rounded-md object-cover' />
            <Carousel className='mx-auto mb-4 w-[90%]'>
                <CarouselContent>
                    {listing.images.map((image, index) => (
                        <CarouselItem
                            key={image}
                            className='basis-1/3 cursor-pointer'
                            onClick={() => setCurrentImageIndex(index)}
                            // isSelected={index === currentImageIndex}
                        >
                            <Image width={100} height={52}
                                className='h-52 w-full object-cover shadow-sm'
                                src={`/assets/${listing.images[index]}`}
                                alt={listing.name}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}

export default ListingDetailsCardImages