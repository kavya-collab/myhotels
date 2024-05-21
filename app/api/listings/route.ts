import { listings } from "@/data/listings";
import { locations } from "@/data/locations";
import { isListingAvailable } from "@/data/listings";

export async function POST(request: Request) {
    try {
        // Accept the payload
        const filters = await request.json();

        // Log payload for debugging
        console.log(filters, "from api route");

        // Unpack filters
        const { dates, guests, search } = filters;

        // Filter listings based on dates
        let filteredListings = listings;
        if (dates) {
            filteredListings = filteredListings.filter((listing) => isListingAvailable(listing, dates));
        }

        // Filter listings based on guests
        if (guests) {
            filteredListings = filteredListings.filter((listing) => guests <= listing.maxGuests);
        }

        // Filter listings based on search location
        if (search) {
            filteredListings = filteredListings.filter((listing) => listing.name.toLowerCase().includes(search.toLowerCase()));
        }

        // If filteredListings is empty, return an empty array
        if (!filteredListings.length) {
            console.log("No listings available");
            return new Response(JSON.stringify([]), {
                headers: {
                    "Content-Type": "application/json"
                }
            });
        }

        // Add location information to filtered listings
        const newListings = filteredListings.map((listing) => {
            const location = locations.find((loc) => listing.locationId === loc.id);
            return { ...listing, location };
        });

        // Return the filtered listings in a Response
        return new Response(JSON.stringify(newListings), {
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        console.error("Error processing request:", error);
        // Return an error response
        return new Response("Internal Server Error", { status: 500 });
    }
}
