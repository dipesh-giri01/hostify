'use client';

import Navbar from '@/components/navabar/navbar';
import Footer from '@/components/footer/footer';
import Brand from '@/components/brand/brand';
import properties from '@/data/properties.json';
import { useParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import amenities from '@/app/constants/amentities';
import PropertyGallery from '@/components/gallery/PropertyGallery';
import InfoCard from '@/components/info-card/InfoCard';
import AboutSection from '@/components/about-section/AboutSection';
import AmenitiesAndWeatherSection from '@/components/amenities-and-weather-section/AmenitiesAndWeatherSection';

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
    notFound();
  }

  const getGalleryImages = () => {
    const allProperties = properties.properties.slice(0, 16);
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
        <section className="w-full header-content flex flex-row flex-wrap gap-hero mt-8 mb-11">
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

        {/* Amenities & Weather Section */}
        <AmenitiesAndWeatherSection 
          amenities={amenities} 
          location={property.location}
          temperature={20}
          condition="Broken clouds"
        />

        {/* Similar stays */}
        <SimilarStays stays={similarStays} />
      </main>

      {/* Footer and Brand */}
      <Footer />
      <Brand />
    </div>
  );
}
