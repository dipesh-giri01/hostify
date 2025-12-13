'use client';

import { Search as SearchIcon } from 'lucide-react';
import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import { useSearchStore } from '@/store/searchStore';
import { AccommodationIcon, CalendarIcon, Person } from '@/components/icons';

export default function SearchBar() {
  const { accommodation, checkIn, checkOut, guests, setAccommodation, setCheckIn, setCheckOut, setGuests } = useSearchStore();

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!checkIn) {
      window.alert('Please select a check-in date');
      return;
    }
    if (!checkOut) {
      window.alert('Please select a check-out date');
      return;
    }
    if (new Date(checkIn) >= new Date(checkOut)) {
      window.alert('Check-out date must be after check-in date');
      return;
    }
    if (!guests || parseInt(guests) < 1) {
      window.alert('Please select at least 1 guest');
      return;
    }
  };

  return (
    <div className="flex  w-full">
      <form
        onSubmit={handleSearch}
        className="search-form-container"
      >
        {/* Accommodation Input */}
        <div className="search-accommodation-input">
          <input
            type="text"
            placeholder="Accommodation"
            value={accommodation}
            onChange={(e) => setAccommodation(e.target.value)}
            className="flex-1 bg-transparent border-0 outline-none font-roboto text-sm font-normal placeholder-gray-700"
            style={{ color: '#000000' }}
          />
          <AccommodationIcon className="w-6 h-6 flex-shrink-0" />
        </div>

        {/* Check-in Input */}
        <div className="search-checkin-input">
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            min={today}
            className="flex-1 bg-transparent border-0 outline-none font-roboto text-sm font-normal text-gray-850"
            style={{ colorScheme: 'light' }}
          />
        </div>

        {/* Check-out Input */}
        <div className="search-checkout-input">
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            min={today}
            className="flex-1 bg-transparent border-0 outline-none font-roboto text-sm font-normal text-gray-850"
            style={{ colorScheme: 'light' }}
          />
        </div>

        {/* Guests Input */}
        <div className="search-guest-input">
          <input
            type="number"
            placeholder="Guest"
            min="1"
            value={guests || 1}
            onChange={(e) => setGuests(e.target.value)}
            className="flex-1 bg-transparent border-0 outline-none font-roboto text-sm font-normal text-gray-850"
          />
          <Person className="w-6 h-6 flex-shrink-0" />
        </div>

        {/* Search Button */}
        <button type="submit" className="search-button">
          <SearchIcon className="w-5 h-5" />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}
