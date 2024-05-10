"use client";
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ListingList from '@/components/ListingList';
import { RootState } from '@/lib/store'; // Assuming you have a store with RootState defined
import { ListingType } from '@/components/ListingCard';

const ListingFavoritesPage: React.FC = () => {

  const {listings, favoriteListingIds}   = useSelector((state: RootState) => state.listings);
//   // Assuming favoriteListingIds is a property of listings slice
  
  const favoriteListings = useMemo(
    () => listings.filter((listing: ListingType) => favoriteListingIds.includes(listing.id)),
    [listings, favoriteListingIds],
  );
  

  return (
    <div className='container py-4'>
      <ListingList listings={favoriteListings} />
    </div>
  );
};

export default ListingFavoritesPage;

