'use client';

import { useMemo, useState } from 'react';
import Navbar from '@/components/navabar/navbar';
import Brand from '@/components/brand/brand';
import SearchBar from '@/components/searchBar/SearchBar';
import PropertyCard from '@/components/property-card/PropertyCard';
import { useSearchStore } from '@/store/searchStore';
import { BentoMenu, MapMenu } from '@/components/icons';
import propertiesData from '@/data/properties.json';
import Footer from '@/components/footer/footer';
import Button from '@/components/button/Button';

const PROPERTIES_PER_PAGE = 4;

export default function StaysPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [displayedCount, setDisplayedCount] = useState(PROPERTIES_PER_PAGE);
  const { accommodation, checkIn, checkOut, guests } = useSearchStore();

  const filteredProperties = useMemo(() => {
    let results = propertiesData.properties;

    // Filter by accommodation (location)
    if (accommodation.trim()) {
      const searchTerm = accommodation.toLowerCase();
      results = results.filter(
        (property) =>
          property.location.toLowerCase().includes(searchTerm) ||
          property.name.toLowerCase().includes(searchTerm)
      );
    }

    // Filter by guests
    if (guests && parseInt(guests) > 0) {
    }

    // Filter by check-in/check-out 
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      if (checkInDate >= checkOutDate) {
        
        console.warn('Check-out date must be after check-in date');
      }
    }

    return results;
  }, [accommodation, checkIn, checkOut, guests]);

  const displayedProperties = useMemo(() => {
    return filteredProperties.slice(0, displayedCount);
  }, [filteredProperties, displayedCount]);

  const handleToggle = () => {
    if (displayedCount >= filteredProperties.length) {
      // Show less
      setDisplayedCount(PROPERTIES_PER_PAGE);
    } else {
      // Show more
      setDisplayedCount(prev => prev + PROPERTIES_PER_PAGE);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section with Search */}
      <section 
        className="relative w-full py-24 px-5 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/images/hero-bg.png)',
          minHeight: '600px',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />
        
        {/* Content */}
        <div className="relative z-10 w-full flex justify-center">
          <div className="flex flex-col gap-12" style={{ width: '1340px', maxWidth: '1340px' }}>
            <div>
              <h1 className="text-5xl font-bold mb-3 text-black dark:text-white">
                Find a <span className="text-orange-500">host</span> for every journey
              </h1>
              <p className="text-lg text-gray-800 dark:text-gray-200">
                Discover the best local rental properties that fits your every travel needs
              </p>
            </div>
            
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Stays Nearby Section */}
      <section className="m-8 px-5">
        <div className="max-w-7xl mx-auto">
          {filteredProperties.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                No properties found matching your search.
              </p>
              <p className="text-gray-500 dark:text-gray-500 mb-6">
                Try adjusting your search criteria
              </p>
              <button 
                onClick={() => window.location.href = '/property'}
                className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-row justify-between items-center mb-8 gap-8">
                <div className="flex flex-row items-center gap-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Showing {displayedProperties.length} of {filteredProperties.length} results
                  </h3>
                </div>
                
                {/* Layout Toggle Icons */}
                <div className="flex flex-row items-center gap-2 bg-white border border-gray-200 rounded-lg p-1.5">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`flex items-center justify-center w-9 h-9 rounded-md transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-transparent text-gray-600 hover:bg-gray-100'
                    }`}
                    title="Grid view"
                  >
                    <BentoMenu className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setViewMode('map')}
                    className={`flex items-center justify-center w-9 h-9 rounded-md transition-colors ${
                      viewMode === 'map' 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-transparent text-gray-600 hover:bg-gray-100'
                    }`}
                    title="Map view"
                  >
                    <MapMenu className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Properties Grid - 4 Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {displayedProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    id={property.id}
                    name={property.name}
                    location={property.location}
                    rating={property.rating}
                    isSuperhost={property.isSuperhost}
                    price={property.price}
                    image={property.image}
                  />
                ))}
              </div>

              {/* Show More/Less Button - Show if there are properties and either more to display or all displayed */}
              {filteredProperties.length > PROPERTIES_PER_PAGE && (
                <div className="flex justify-center mt-12">
                  <Button 
                    variant='outline'
                    onClick={handleToggle}
                  >
                    {displayedCount >= filteredProperties.length ? 'Show less' : 'Show more'}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
      <Brand />
    </div>
  );
}
