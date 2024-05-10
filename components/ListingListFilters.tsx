"use client";
import ListingList from "@/components/ListingList"
import { listings as staticListings } from "@/data/listings"
import { ListingType } from "@/components/ListingCard"
import React, { useEffect } from "react"
import ListingFilters from "@/components/ListingFilters"
import { useState } from 'react';
import axiosConfig from "@/lib/axoisConfig";
import { Separator } from "./ui/separator";
import { Spinner } from "./ui/spinner";
interface Filters {
    dates?: any;
    guests: number;
    search: string;
}
// import type { Dispatch } from 'redux'
// import { AppDispatch } from "@/lib/store";
import {ThunkDispatch} from "@reduxjs/toolkit";
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {fetchListings} from "@/lib/features/listingsSlice";
import { RootState } from "@/lib/store";

const ListingListFilters: React.FC = () => {


    const { listings, error, status } = useSelector((state :  RootState ) => state.listings);
    const dispatch  = useDispatch<ThunkDispatch<any, any, any>>();;
    let filteredListings = staticListings

    // const [listings, setListings] = useState<ListingType[]>(filteredListings)
    const [isPending, setIsPending] = useState<boolean>(false)

    const [filters, setFilters] = useState<Filters>({
        dates: null,
        guests: 0,
        search: '',
    });


    useEffect(() => {
       
        const CallAPI = async () => {
            setIsPending(true)
            // const { data } = await axiosConfig({
            //     url: "/api/listings",
            //     method: "POST",
            //     data: {
            //         filters: filters
            //     },
            // })
            // console.log(data)
            // setListings(data)

            dispatch(fetchListings(filters))
        
            setIsPending(false)
        }
        CallAPI()

    }, [filters])

    const handleFilters = (filters: Filters) => {

        console.log("setting filters")
        setFilters(filters)
        console.log(filters)
    }



    return (
        <div>
            <div>
                <ListingFilters onChange={handleFilters} />
                <Separator className='my-4' />
                {isPending ? <Spinner/> :  <ListingList listings={listings} />}
            </div>
        </div>
    )
}

export default ListingListFilters