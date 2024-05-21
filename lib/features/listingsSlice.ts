import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import listings from "@/data/listings"
// Define the type for your state


interface ListingsState {
  listings: any[]; // Assuming listings is an array of any type
  error: string | null;
  favoriteListingIds: number[];
  status:   'loading' | 'succeeded' | 'failed';
  filters : {
    guests : number,
    search : string,
    dates ?: any,
  }
}

interface AddFavoriteListingPayload {
    listingId : number
}
interface Filters {
    dates?: any;
    guests: number;
    search: string;
}

// Define the initial state
const initialState: ListingsState = {
  listings: [],
  error: null,
  favoriteListingIds: [],
  status: 'loading',
  filters : {
    guests : 0,
    search : "",
    dates:  null
  }

};

// Define an async thunk for fetching data
export const fetchListings = createAsyncThunk(
  'listings/fetchListings',
  async ( filters : Filters) => {
    // Fetch data from API
    console.log(filters, "from slice")
    const response = await fetch('/api/listings/' , {method : "post",body : JSON.stringify(filters)});
    const data = await response.json();
   
    // const data = listings;
    return data;
  }
);

const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {
    addFavoriteListing: (state, action: PayloadAction<AddFavoriteListingPayload>) => {
      const { listingId } = action.payload;
      state.favoriteListingIds.push(listingId);
      console.log(state.favoriteListingIds)
    },
    removeFavoriteListing: (state, action: PayloadAction<AddFavoriteListingPayload>  ) => {
        const { listingId } = action.payload;    
        state.favoriteListingIds = state.favoriteListingIds.filter(
        (id) => id !== listingId
      );
    },
    changeSearch : (state, action :  PayloadAction<Filters>  ) => {
      const {guests, dates, search} = action.payload;
      state.filters.guests = guests
      state.filters.search = search
      state.filters.dates = dates
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchListings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Update state with fetched data
        console.log(action.payload, "action")
        state.listings = action.payload;
      })
      .addCase(fetchListings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const { addFavoriteListing, removeFavoriteListing,changeSearch  } = listingsSlice.actions;

export default listingsSlice.reducer;
