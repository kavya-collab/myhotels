
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import Page from "@/app/listings/[slug]/page";
import React from "react"
import { DollarSign, Pin, Users } from 'lucide-react';
import ListingCardImages from "./ListingCardImages";
import Link from "next/link";
import ListingFavoriteButton from './ListingFavoriteButton';
import { listings } from "@/data/listings";



export type ListingType = {
    id: number,
    name: string,
    description: string,
    locationId: number,
    images: string[],
    availability: {
        from: Date,
        to: Date,
    },
    maxGuests: number,
    price: number,
    rating: number,
    guestFavorite: any,
    createdAt: Date,
    modifiedAt: Date,
    location: {
        id: number,
        country: string,
        name: string,
        createdAt: Date,
        modifiedAt: Date,
    } 
}


export type ListingCardProps = {
    key: number;
    listing: ListingType;

}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {

   
    return (
        
        <Card className="w-[320px]">
        <div className='relative'>
          <ListingCardImages listing={listing} />
          <ListingFavoriteButton
            listing={listing}
            className='absolute right-4 top-4'
          />
        </div>
            {/* <ListingCardImages listing={listing} /> */}
            <Link href={`/listings/${listing.id}`}  >
            <CardContent className="p-4" >
                <h2 className=" mb-0 font-semibold text-xl ">{listing.name}</h2>
                <div className='flex items-center gap-2'>
                    <DollarSign className='h-4 w-4 text-primary' />
                    <span className='text-muted-foreground'>
                        <span className='font-bold text-foreground'>{listing.price}</span> /
                        night
                    </span>
                </div>
                <div className='flex items-center gap-2'>
                    <Pin className='h-4 w-4 text-primary' />
                    <span className='text-muted-foreground'>{listing.location.name}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <Users className='h-4 w-4 text-primary' />
                    <span className='text-muted-foreground'>
                        {listing.maxGuests} Guests
                    </span>
                </div>
            </CardContent>
            </Link>
        </Card>
        
    )
}

export default ListingCard