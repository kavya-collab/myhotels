import ListingCard, { ListingType } from "./ListingCard"


 export type ListingListType  = {
    listings: ListingType[];
 }
const ListingList:React.FC<ListingListType> = ({listings}) => {
    return (
        <div className='flex flex-wrap justify-center gap-4'>
        {listings.length > 0 ? (
          listings.map((listing :  ListingType) => (
            <ListingCard key={listing.id} listing={listing} />
          ))
        ) : (
          <p>No listings found.</p>
        )}
      </div>
    )
}

export default ListingList