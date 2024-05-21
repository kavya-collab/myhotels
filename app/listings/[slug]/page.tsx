"use client"
import ListingDetailsCard from "@/components/ListingDetailsCard"
import { Spinner } from "@/components/ui/spinner"
import React, { useRef, useState, useEffect } from "react"
// import { ListingType } from "@/components/ListingCard"
import { listings as staticListings } from "@/data/listings"
import { ListingType } from "@/components/ListingCard"
import { notFound } from 'next/navigation'


export const dynamicParams = false



export default function Page({ params }: { params: { slug: string } })  {

    const [listing, setListing] = useState<any>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string| null>(null)

    
    // this is slug , easch listng 
    // you are in wrong file
    
    
    
    
    const options = {
        method :'GET'
    }

    useEffect(() => {
        const fetchListing = async () => {
            setIsLoading(true)
            setError(null)
            try {

                const response = await fetch(`http://localhost:3000/api/listings/${params.slug}`, options)
                const data = await response.json()
                console.log(data)
                setListing( data);
                
            }
            catch {
                setError('Something went wrong. Please try again later.');
              } 
            finally {
                setIsLoading(false);
              }
            
        }
        fetchListing()
    },[params.slug])


  const renderListing = () => {
    if (isLoading) {
      return (
        <div className='flex justify-center'>
          <Spinner size='small' />
        </div>
      );
    }

    if (error) {
      return <div className='text-center'>{error}</div>;
    }

    if(listing.id == undefined){
      return notFound();
    }
    return <ListingDetailsCard listing={listing} key={0} />;
  };

  return <div className='container py-4'>{renderListing()}</div>;
}
