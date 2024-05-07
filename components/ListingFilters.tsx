"use client";
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/ui/DatePickerWithRange";
import { Input } from  "@/components/ui/input";
import { Stepper }  from '@/components/ui/stepper';

interface ListingFiltersProps {
  onChange: (data: { dates: Date | null, guests: number, search: string }) => void;
}

const ListingFilters: React.FC<ListingFiltersProps> = ({ onChange }) => {
  const [dates, setDates] = useState<Date | null>(null);
  const [guests, setGuests] = useState(0);
  const [search, setSearch] = useState('');

  const handleSubmit = () => {

    console.log("changed")
    onChange({ dates, guests, search });
  };

  return (
    <div className='flex flex-row items-center justify-center gap-6 mb-6'>
      <Input className='w-[370px]' placeholder='Search destinations' value={search}
        onChange={(e) => setSearch(e.target.value)} />
      <DatePickerWithRange  value={dates}
        onChange={setDates}
        minDate={new Date()} placeholder='Add dates' />
      <Stepper label='guest' value={guests} onChange={setGuests} />
      <Button onClick={handleSubmit}>
        <Search className='h-4 w-4' />
      </Button>
    </div>
  );
};

export default ListingFilters;
