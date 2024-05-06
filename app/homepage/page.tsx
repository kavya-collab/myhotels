import ListingList from "@/components/ListingList"
import { listings } from "@/data/listings"
import { ListingType } from "@/components/ListingCard"
import React from "react"


const HomePage : React.FC = () => {
    return (
        <div> 
            <ListingList listings={listings}/>
        </div>
    )
}

export default HomePage;