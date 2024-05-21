"use client";
import ListingCard, { ListingType } from "./ListingCard"
import { Spinner } from "./ui/spinner";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { list } from "postcss";
export type ListingListType = {
  listings: ListingType[];
}
const ListingList:React.FC<ListingListType> = ({listings}) => {
  const {status}   = useSelector((state: RootState) => state.listings);

  
  if (status  == "loading")
    return <Spinner/>

  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {listings.length > 0 ? (
        listings.map((listing: ListingType) => (
          <ListingCard key={listing.id} listing={listing} />
        ))
      ) : (
        <p>No listings found.</p>
      )}
    </div>
  )
}

export default ListingList