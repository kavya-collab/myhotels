"use client";
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/ui/DatePickerWithRange";
import { Input } from "@/components/ui/input";
import { Stepper } from '@/components/ui/stepper';
import { useSelector } from 'react-redux';
import { useRouter } from "next/navigation"

interface ListingFiltersProps {
  onChange: (data: { dates: Date | null, guests: number, search: string }) => void;
}
import { RootState } from "@/lib/store";

const ListingFilters: React.FC<ListingFiltersProps> = ({ onChange }) => {
  const router = useRouter()

  const { filters } = useSelector((state: RootState) => state.listings);

  const [dates, setDates] = useState<Date | null>(filters.dates);
  const [guests, setGuests] = useState(filters.guests);
  const [search, setSearch] = useState(filters.search);

  const handleSubmit = () => {
    console.log("changed")
    onChange({ dates, guests, search });
    router.push("/listings")
  };
  
  return (
    <div className='flex flex-col md:flex-row justify-start md:justify-center gap-6 md:gap-4 my-6'>
      <Input className='w-full sm:w-[370px] mt-0' placeholder='Search destinations' value={search} onChange={(e) => setSearch(e.target.value)} />
      <DatePickerWithRange value={dates} onChange={setDates} className="w-full sm:w-auto" minDate={new Date()} placeholder='Add dates' />
      <Stepper label='guest' value={guests} onChange={setGuests} className="w-full sm:w-auto bg-white" />
      <Button className='w-full sm:w-auto' onClick={handleSubmit}>
        <Search className='h-4 w-4' />
      </Button>
    </div>



  );
};

export default ListingFilters;
