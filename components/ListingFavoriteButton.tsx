import { Heart } from 'lucide-react';
import { useMemo, MouseEvent  } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { addFavoriteListing, removeFavoriteListing } from '@/lib/features/listingsSlice';

import { RootState } from '@/lib/store';


interface ListingFavoriteButtonProps {
    className?: string;
    listing: {
      id: number;
      // Add other properties of listing if needed
    };
  }
  

  const ListingFavoriteButton: React.FC<ListingFavoriteButtonProps> = ({ className, listing }) => {
  const favoriteListingIds = useSelector(
    (state : RootState) => state.listings.favoriteListingIds,
  );
  const dispatch = useDispatch();

  const isFavorite = useMemo(
    () => favoriteListingIds.includes(listing.id),
    [listing, favoriteListingIds],
  );


  const toggleFav = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite) {
      dispatch(removeFavoriteListing({ listingId: listing.id }));
    } else {
      dispatch(addFavoriteListing({ listingId: listing.id }));
    }
  };

  return (
    <Button
      className={className}
      variant='outline'
      onClick={toggleFav}
    >
      <Heart
        className={cn('h-4 w-4 ', { 'fill-slate-700  text-slate-100': isFavorite })}
      />
    </Button>
  );
};

export default ListingFavoriteButton;