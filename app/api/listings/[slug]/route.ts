import { listings } from "@/data/listings";
import { locations } from "@/data/locations";
import { isListingAvailable } from "@/data/listings";



export async function GET( request: Request,  { params }: { params: { slug: string } } ){

    const slug = params.slug

    
    // mimicking a server delay with promise , to be commented in production
   await new Promise((resolve) => setTimeout(resolve, 1000));

    
    // listings should come the raw database
    let filteredListings = listings

   

    // the filtered listings has no location information
    // use locations array and location to add location information to the filtered listings
    const newListings = [];
    for (let i = 0; i < filteredListings.length; i++) {
        if (filteredListings[i].id == slug){
            for (let j = 0; j < locations.length; j++) {
                if (filteredListings[i].locationId == locations[j].id)
                    return Response.json({
                        ...filteredListings[i],
                        location :  locations[j]
                    })
                }
        }
    }
    // finally, return the array in the Response json as below
    return Response.json({})

}