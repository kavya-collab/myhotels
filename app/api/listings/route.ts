import { listings } from "@/data/listings";
import { locations } from "@/data/locations";
import { isListingAvailable } from "@/data/listings";



export async function POST(request : Request ){


    // For any POST request method, implement first two steps (mandatory)
    // 1. Since, this api is a POST request, accept the payoad with below code
    const filters =  await request.json();



    // // 2. to check what is in the payload
    console.log(filters, "from api route")

    
    // // Your custom logic for the api starts here

    // // unpacking filters 
    const {dates, guests, search} = filters
    
   

    // mimicking a server delay with promise , to be commented in production
   await new Promise((resolve) => setTimeout(resolve, 1000));

    
    // listings should come the raw database
    let filteredListings = listings

    // filtering the listings based on the payload dates
    if(dates){
        filteredListings = filteredListings.filter((listing) => isListingAvailable(listing,dates)) ;
    }

    // now the lists are filtered by dates
    // again filter it by guests
    if(guests){
        filteredListings = filteredListings.filter((listing) =>  (guests <= listing.maxGuests) );
    }

    // now the lists are filtered by dates  and guests
    // again filter it by search location
    if(search){
        filteredListings = filteredListings.filter((listing) => listing.name.toLowerCase().includes(search.toLowerCase()),);
    }


    // after applying all filters if you see the array is empty, return empty array
    if(!filteredListings){
        console.log("No listing avialable")
        return  [] ;
    }


    // the filtered listings has no location information
    // use locations array and location to add location information to the filtered listings
    const newListings = [];
    for (let i = 0; i < filteredListings.length; i++) {
        for (let j = 0; j < locations.length; j++) {
        if (filteredListings[i].locationId == locations[j].id)
            newListings.push({ ...filteredListings[i], location: locations[j] });
        }
    }

    // finally, return the array in the Response json as below
  return Response.json(newListings)

}