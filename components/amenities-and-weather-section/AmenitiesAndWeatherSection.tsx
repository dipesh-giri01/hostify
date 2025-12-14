'use client';

import { MapPoint, Weather } from '@/components/icons';
import { Amenity } from '@/app/constants/amentities';
import dynamic from 'next/dynamic';

const GoogleMap = dynamic(() => import('@/components/map/GoogleMap'), {
  loading: () => <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse flex items-center justify-center"><span className="text-gray-500">Loading map...</span></div>,
  ssr: false
});

interface AmenitiesAndWeatherSectionProps {
  amenities: Amenity[];
  location: string;
  temperature?: number;
  condition?: string;
}

export default function AmenitiesAndWeatherSection({
  amenities,
  location,
  temperature = 20,
  condition = 'Broken clouds',
}: AmenitiesAndWeatherSectionProps) {
  const locationCity = location.split(',')[0];

  return (
    <section className="w-full header-content flex flex-col gap-section mb-11">
      <div className="flex flex-col lg:flex-row gap-5 w-full">
        {/* Amenities List */}
        <div className="flex flex-col gap-5 w-full lg:amenities-section-width">
          <h3 className="text-2xl font-semibold leading-7 tracking-wider text-gray-900 font-archivo mb-1">
            Amenities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-5 w-full">
            {amenities.map((a, i) => {
              const IconComponent = a.icon;
              return (
                <div key={i} className="flex flex-row items-center gap-2">
                  {IconComponent ? (
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                      <IconComponent />
                    </div>
                  ) : (
                    <div className="w-5 h-5 bg-gray-200 rounded flex items-center justify-center flex-shrink-0"></div>
                  )}
                  <span className="text-base font-normal leading-5 text-gray-900 font-archivo">
                    {a.label}
                  </span>
                </div>
              );
            })}
          </div>
          <button className="show-all-amenities-button">Show all amenities</button>
        </div>

        {/* Weather & Map Section */}
        <div className="flex flex-col gap-5 w-full lg:map-section-width">
          {/* Weather */}
          <div className="flex flex-col gap-2.5 w-full">
            <div className="flex flex-row justify-between items-start gap-5 w-full h-auto">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-2xl font-semibold leading-7 tracking-wider text-gray-900 font-archivo">
                  Where you'll be
                </h3>
                <div className="flex flex-row items-center gap-1.5">
                  <MapPoint />
                  <span className="text-base font-normal leading-5 text-gray-900 font-archivo">
                    {locationCity}
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-start gap-2.5">
                <div className="weather-icon-size bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Weather />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-base font-semibold leading-6 tracking-wider text-gray-900 font-archivo">
                    {temperature}°C
                  </span>
                  <span className="text-sm font-normal leading-4 tracking-wider text-gray-500 font-archivo">
                    {condition}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full map-height rounded-lg overflow-hidden relative">
            <GoogleMap location={location} className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
