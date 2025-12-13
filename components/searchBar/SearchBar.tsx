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
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-0">
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-stretch md:items-center lg:items-center p-3 sm:p-3 gap-3 sm:gap-3 bg-white border border-light-e8 rounded-sm rounded-lg-custom shadow-sm sm:shadow-form w-full lg:form-width h-auto"
        style={{ boxSizing: 'border-box' }}
      >
        {/* Accommodation Input - Full width on mobile/tablet, constrained on desktop */}
        <div className="w-full md:w-full lg:min-w-accommodation lg:max-w-accommodation lg:flex-grow-0">
          <Input
            type="text"
            placeholder="Accommodation"
            value={accommodation}
            onChange={(e) => setAccommodation(e.target.value)}
            icon={<AccommodationIcon className="w-5 sm:w-6 h-5 sm:h-6" />}
            size="md"
            fullWidth
          />
        </div>

        {/* Check-in Input */}
        <div className="w-full sm:w-auto md:flex-1 lg:min-w-date lg:max-w-date">
          <Input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            min={today}
            size="lg"
            fullWidth
            style={{ colorScheme: 'light' }}
          />
        </div>

        {/* Check-out Input */}
        <div className="w-full sm:w-auto md:flex-1 lg:min-w-date lg:max-w-date">
          <Input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            min={today}
            size="lg"
            fullWidth
            style={{ colorScheme: 'light' }}
          />
        </div>

        {/* Guests Input */}
        <div className="w-full sm:w-auto md:flex-1 lg:min-w-date lg:max-w-date">
          <Input
            type="number"
            placeholder="Guest"
            min="1"
            value={guests || 1}
            onChange={(e) => setGuests(e.target.value)}
            icon={<Person className="w-5 sm:w-6 h-5 sm:h-6" />}
            size="lg"
            fullWidth
          />
        </div>

        {/* Search Button */}
        <Button
          type="submit"
          variant="primary"
          size="md"
          className="flex items-center justify-center gap-2 h-12 sm:h-input md:h-input lg:h-input px-4 sm:px-8 w-full sm:w-auto md:flex-1 lg:w-auto rounded-sm text-xs sm:text-sm font-semibold"
        >
          <SearchIcon className="w-4 sm:w-5 h-4 sm:h-5" />
          <span>Search</span>
        </Button>
      </form>
    </div>
  );
}
