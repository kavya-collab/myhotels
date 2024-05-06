import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { listings } from '@/data/listings'
import React from "react"
import { DollarSign, Pin, Users } from 'lucide-react';
import ListingCardImages from "./ListingCardImages";


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


interface ListingCardProps {
    key: number;
    listing: ListingType;

}
const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
    return (
        <Card className="w-[320px]">
            <ListingCardImages listing={listing} />
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
        </Card>
    )
}

export default ListingCard