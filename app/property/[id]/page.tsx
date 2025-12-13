'use client';

import Navbar from '@/components/navabar/navbar';
import Footer from '@/components/footer/footer';
import Brand from '@/components/brand/brand';
import properties from '@/data/properties.json';
import { useParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { 
  MapPoint,
  Weather,
} from '@/components/icons';
import amenities from '@/app/constants/amentities';
import PropertyGallery from '@/components/gallery/PropertyGallery';
import InfoCard from '@/components/info-card/InfoCard';
import AboutSection from '@/components/about-section/AboutSection';

// Dynamic imports with loading fallbacks
const GoogleMap = dynamic(() => import('@/components/map/GoogleMap'), {
  loading: () => <div className="w-full h-map-height bg-gray-200 rounded-lg animate-pulse flex items-center justify-center"><span className="text-gray-500">Loading map...</span></div>,
  ssr: false
});

const SimilarStays = dynamic(() => import('@/components/similar-stays/SimilarStays'), {
  loading: () => <div className="w-full h-32 bg-gray-200 rounded-lg animate-pulse flex items-center justify-center"><span className="text-gray-500">Loading similar stays...</span></div>,
  ssr: true
});

export default function PropertyDetailsPage() {
  const [showFullAbout, setShowFullAbout] = useState(false);
  const params = useParams();
  const propertyId = parseInt(params.id as string);
  const property = properties.properties.find(p => p.id === propertyId);
  
  if (!property) {
    return <div className="flex items-center justify-center min-h-screen">Property not found</div>;
  }

  // Gallery - get deterministic gallery images based on property ID
  const getGalleryImages = () => {
    const allProperties = properties.properties.slice(0, 16);
    // Use property ID as seed for deterministic selection
    const startIndex = (propertyId * 7) % allProperties.length;
    const selected = [];
    for (let i = 0; i < 6; i++) {
      const idx = (startIndex + i) % allProperties.length;
      if (allProperties[idx].id !== propertyId) {
        selected.push(allProperties[idx].image);
      }
    }
    return selected;
  };
  
  const gallery = [property.image, ...getGalleryImages().slice(0, 5)];

  

  // Similar stays - get properties from the same area/location (deterministic)
  const getSimilarStays = () => {
    const currentArea = property.location.split(',')[1]?.trim() || property.location;
    const sameAreaProperties = properties.properties.filter(p => 
      p.id !== propertyId && p.location.includes(currentArea)
    );
    // Use property ID as seed for deterministic selection
    const startIndex = (propertyId * 3) % Math.max(1, sameAreaProperties.length);
    const selected = sameAreaProperties.slice(startIndex).concat(sameAreaProperties.slice(0, startIndex));
    
    return selected.slice(0, 6).map(p => ({
      id: p.id,
      image: p.image,
      name: p.name,
      place: p.location,
      rating: p.rating,
      price: p.price,
      superhost: p.isSuperhost,
    }));
  };

  const similarStays = getSimilarStays();

  return (
    <div className="min-h-screen w-full bg-fafafa flex flex-col items-center font-archivo">
      <Navbar />

      {/* Main Content */}
      <main className="w-full flex flex-col items-center px-5 lg:px-0 py-0">
        {/* Hero Section */}
        <section className="w-full header-content flex flex-col lg:flex-row gap-hero mt-8 mb-11">
          {/* Gallery */}
          <PropertyGallery images={gallery} />

          {/* Info Card */}
          <InfoCard property={property} />
        </section>

        {/* About this home & amenities */}
        <AboutSection 
          propertyName={property.name}
          propertyLocation={property.location}
          showFullAbout={showFullAbout}
          onToggleShowMore={() => setShowFullAbout(!showFullAbout)}
        />

        {/* Amenities List & Map/Weather */}
        <section className="w-full header-content flex flex-col gap-section mb-11">
          <div className="flex flex-col lg:flex-row gap-5 w-full">
            {/* Amenities List */}
            <div className="flex flex-col gap-5 w-full lg:amenities-section-width">
              <h3 className="text-2xl font-semibold leading-7 tracking-wider text-gray-900 font-archivo mb-1">Amenities</h3>
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
                      <span className="text-base font-normal leading-5 text-gray-900 font-archivo">{a.label}</span>
                    </div>
                  );
                })}
              </div>
              <button className="mt-4 border border-gray-900 rounded-md px-5 py-3 text-base font-semibold leading-7 text-gray-900 font-archivo w-48 h-12 hover:bg-gray-50 transition">Show all amenities</button>
            </div>

            {/* Map/Weather */}
            <div className="flex flex-col gap-2.5 w-full lg:map-section-width">
              <div className="flex flex-row justify-between items-start gap-5 w-full h-auto">
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-2xl font-semibold leading-7 tracking-wider text-gray-900 font-archivo">Where you'll be</h3>
                  <div className="flex flex-row items-center gap-1.5">
                    <MapPoint />
                    <span className="text-base font-normal leading-5 text-gray-900 font-archivo">{property.location.split(',')[0]}</span>
                  </div>
                </div>
                <div className="flex flex-row items-start gap-2.5">
                  <div className="weather-icon-size bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Weather />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-base font-semibold leading-6 tracking-wider text-gray-900 font-archivo">20°C</span>
                    <span className="text-sm font-normal leading-4 tracking-wider text-gray-500 font-archivo">Broken clouds</span>
                  </div>
                </div>
              </div>
              <div className="w-full map-height rounded-lg overflow-hidden relative mt-1">
                <GoogleMap location={property.location} className="w-full h-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Similar stays */}
        <SimilarStays stays={similarStays} />
      </main>

      {/* Footer and Brand */}
      <Footer />
      <Brand />
    </div>
  );
}
