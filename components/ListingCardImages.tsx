"use client";
import { useState } from 'react';
import  type {ListingType}  from "./ListingCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const ListingCardImages = ({ listing }: { listing: ListingType })=> {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Carousel
      className='w-full'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CarouselContent className='ml-0'>
        {listing.images.map((image, index) => (
          <CarouselItem key={image} className='pl-0'>
            <Image width={320} height={200}
              className='h-[200px] w-full rounded-md object-cover'
              src={`/assets/${listing.images[index]}`} 
              alt={`${listing.name} Image ${index + 1}`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {isHovering && (
        <>
          <CarouselPrevious className='absolute left-4' />
          <CarouselNext className='absolute right-4' />
        </>
      )}
    </Carousel>
  );
};

export default ListingCardImages;