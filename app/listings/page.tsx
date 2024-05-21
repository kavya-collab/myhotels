"use client"
import ListingListFilters from "@/components/ListingListFilters";
import ListingList from "@/components/ListingList";
import { Separator } from "@/components/ui/separator";
import { RootState } from "@/lib/store";
import { useSelector } from 'react-redux';
import { ListingListType } from "@/components/ListingList";

const HomePage: React.FC = () => {

    const {listings , favoriteListingIds}   = useSelector((state: RootState) => state.listings);

    
    
    return (
        // <div className=" flex flex-col gap-4 justify-between max-w-5xl">

        <div>
            <ListingListFilters />
            <Separator className='my-4' />
            <ListingList listings={listings}  />
        </div>
        // </div>
    )
}

export default HomePage;