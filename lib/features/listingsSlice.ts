import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import listings from "@/data/listings"
// Define the type for your state
interface ListingsState {
  listings: any[]; // Assuming listings is an array of any type
  error: string | null;
  favoriteListingIds: number[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
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
  status: 'idle',
};

// Define an async thunk for fetching data
export const fetchListings = createAsyncThunk(
  'listings/fetchListings',
  async ( filters : Filters) => {
    // Fetch data from API
    console.log(filters, "from slice")
    const response = await fetch('http://localhost:3000/api/listings/' , {method : "post",body : JSON.stringify(filters)});
    const data = await response.json();
    console.log(data)
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
    },
    removeFavoriteListing: (state, action: PayloadAction<AddFavoriteListingPayload>  ) => {
        const { listingId } = action.payload;    
        state.favoriteListingIds = state.favoriteListingIds.filter(
        (id) => id !== listingId
      );

    },
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

export const { addFavoriteListing, removeFavoriteListing,  } = listingsSlice.actions;

export default listingsSlice.reducer;
