'use client';

import { Search as SearchIcon } from 'lucide-react';
import Button from '@/components/button/Button';
import { useSearchStore } from '@/store/searchStore';
import { AccommodationIcon, CalendarIcon, Person } from '@/components/icons';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();
  const { accommodation, checkIn, checkOut, guests, setAccommodation, setCheckIn, setCheckOut, setGuests } = useSearchStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to stays page with search applied
    router.push('/stays');
  };

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-0">
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row items-stretch sm:items-center p-3 sm:p-3 gap-3 sm:gap-3 bg-white border border-light-e8 rounded-sm rounded-lg-custom shadow-sm sm:shadow-form w-full sm:form-width h-auto sm:h-form"
        style={{ boxSizing: 'border-box' }}
      >
        {/* Accommodation Input */}
        <div
          className="flex flex-row items-center bg-white border border-gray-d9 rounded-sm w-full sm:min-w-accommodation sm:max-w-accommodation h-12 sm:h-input flex-grow sm:flex-grow gap-3 sm:gap-3"
        >
          <input
            type="text"
            placeholder="Accommodation"
            value={accommodation}
            onChange={(e) => setAccommodation(e.target.value)}
            className="flex-1 h-full px-3 text-xs sm:text-sm text-gray-900 placeholder-gray-500 bg-transparent border-none focus:ring-0 focus:outline-none font-normal"
          />
          <AccommodationIcon className="w-5 sm:w-6 h-5 sm:h-6 text-gray-400 mr-2" />
        </div>

        {/* Check-in Input */}
        <div
          className="flex flex-row items-center bg-white border border-gray-d9 rounded-sm w-full sm:w-auto sm:min-w-date sm:max-w-date h-12 sm:h-input flex-grow sm:flex-grow gap-3 sm:gap-3"
        >
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="flex-1 sm:flex-1 h-full px-3 text-xs sm:text-sm text-gray-900 bg-transparent border-none focus:ring-0 focus:outline-none font-normal"
            style={{ colorScheme: 'light' }}
          />
        </div>

        {/* Check-out Input */}
        <div
          className="flex flex-row items-center bg-white border border-gray-d9 rounded-sm w-full sm:w-auto sm:min-w-date sm:max-w-date h-12 sm:h-input flex-grow sm:flex-grow gap-3 sm:gap-3"
        >
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="flex-1 sm:flex-1 h-full px-3 text-xs sm:text-sm text-gray-900 bg-transparent border-none focus:ring-0 focus:outline-none font-normal"
            style={{ colorScheme: 'light' }}
          />
        </div>

        {/* Guests Input */}
        <div className="flex flex-row items-center bg-white border border-gray-d9 rounded-sm w-full sm:w-auto sm:min-w-date sm:max-w-date h-12 sm:h-input flex-grow sm:flex-grow gap-3 sm:gap-3 px-3">
          <input
            type="number"
            placeholder="Guest"
            min="1"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="flex-1 h-full px-2 text-xs sm:text-sm text-gray-900 placeholder-gray-500 bg-transparent border-none focus:ring-0 focus:outline-none font-normal"
          />
          <Person className="w-5 sm:w-6 h-5 sm:h-6 text-gray-400 ml-2" />
        </div>

        {/* Search Button */}
        <Button
          type="submit"
          variant="primary"
          size="md"
          className="flex items-center justify-center gap-2 h-12 sm:h-input px-4 sm:px-8 w-full sm:w-auto rounded-sm text-xs sm:text-sm font-semibold"
        >
          <SearchIcon className="w-4 sm:w-5 h-4 sm:h-5" />
          <span>Search</span>
        </Button>
      </form>
    </div>
  );
}
